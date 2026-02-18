import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { type ReactNode, useState } from "react";
import { BooksList, BooksListStack } from "@/components/BooksList";
import { Button } from "@/components/Button";

import { Section } from "@/components/Section";
import {
	SvgIconBack,
	SvgIconBookshelf,
	SvgIconBookshelfStack,
} from "@/components/SvgIcon";
import { Typography } from "@/components/Typography";
import { type Book, getBooks } from "@/lib/books";

type BookshelfProps = {
	books: Book[];
};

const Bookshelf = ({ books }: BookshelfProps) => {
	const t = useTranslations();
	const [variant, setVariant] = useState<"shelf" | "stack">("shelf");

	const options = [
		{
			variant: "shelf",
			label: t("bookshelf.shelf"),
			icon: <SvgIconBookshelf size="small" />,
		},
		{
			variant: "stack",
			label: t("bookshelf.stack"),
			icon: <SvgIconBookshelfStack size="small" />,
		},
	] as const;

	const renderers = {
		serif: (chunks: ReactNode) => (
			<span className="font-serif italic text-blue-500">{chunks}</span>
		),
		url: (chunks: ReactNode) => (
			<Link href="#contact" className="text-blue-500">
				{chunks}
			</Link>
		),
	};

	return (
		<>
			<Head>
				<title>{t("bookshelf.title")}</title>
			</Head>

			<Section>
				<div className="space-y-8">
					<Link href="/" className="inline-block">
						<Button startIcon={<SvgIconBack size="small" />}>
							<Typography variant="body1" color="inherit">
								{t("common.backToHome")}
							</Typography>
						</Button>
					</Link>

					<Typography variant="h1" display="block">
						{t.rich("bookshelf.onMyBookshelf", renderers)}
					</Typography>
					<Typography variant="body1" display="block">
						{t.rich("bookshelf.personalCollectionOfBooks", renderers)}
					</Typography>
				</div>
			</Section>

			<div className="space-y-16">
				<Section spacing="small">
					<div className="flex items-center justify-between">
						<Typography variant="subtitle1" display="block">
							{t("bookshelf.booksOnMyShelf", { count: books.length })}
						</Typography>

						<div className="flex items-center gap-1 bg-gray-400/40 backdrop-blur rounded-lg px-1 py-1">
							{options.map((option) => (
								<Button
									key={option.variant}
									startIcon={option.icon}
									active={option.variant === variant}
									onClick={() => setVariant(option.variant)}
								>
									<Typography variant="body1" color="inherit">
										{option.label}
									</Typography>
								</Button>
							))}
						</div>
					</div>
				</Section>

				{variant === "stack" ? (
					<BooksListStack books={books} />
				) : (
					<BooksList books={books} />
				)}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	return {
		props: {
			books: await getBooks(),
			messages: (await import("@/copy/en-EN.json")).default,
		},
	};
};

export default Bookshelf;
