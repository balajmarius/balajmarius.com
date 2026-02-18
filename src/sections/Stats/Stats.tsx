import { useTranslations } from "next-intl";
import { Fragment, type ReactNode } from "react";
import { Card, CardContent, CardFooter, CardListItem } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { Divider } from "@/components/Divider";
import { IconButton } from "@/components/IconButton";
import { Section } from "@/components/Section";
import {
	SvgIconDumbell,
	SvgIconGlove,
	SvgIconHevy,
} from "@/components/SvgIcon";
import { Typography } from "@/components/Typography";
import type { Workouts } from "@/lib/hevy";
import { links } from "@/utils/links";

type StatsProps = {
	workouts: Workouts;
};

const Stats = ({ workouts }: StatsProps) => {
	const t = useTranslations();

	const sections = [
		{
			icon: <SvgIconDumbell size="small" />,
			title: t("stats.weights"),
			fields: [
				{ label: t("stats.date"), value: workouts.weights?.createdAt },
				{ label: t("stats.duration"), value: workouts.weights?.duration },
				{ label: t("stats.volume"), value: workouts.weights?.volume },
			],
		},
		{
			icon: <SvgIconGlove size="small" />,
			title: t("stats.boxing"),
			fields: [
				{ label: t("stats.date"), value: workouts.boxing?.createdAt },
				{ label: t("stats.duration"), value: workouts.boxing?.duration },
			],
		},
	] as const;

	return (
		<Section id="stats">
			<Card color="primary">
				<CardContent>
					<Typography variant="h2">
						{t("stats.latestTrainingSessions")}
					</Typography>

					<div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
						{sections.map((section) => (
							<div key={section.title} className="space-y-3">
								<div className="flex items-center gap-1">
									{section.icon}
									<Typography variant="subtitle1">{section.title}</Typography>
								</div>
								<div className="flex gap-3">
									{section.fields.map((field, i) => (
										<Fragment key={field.label}>
											{i > 0 && <Divider />}
											<CardListItem label={field.label} value={field.value} />
										</Fragment>
									))}
								</div>
							</div>
						))}
					</div>
				</CardContent>
				<CardFooter>
					<a href={links.hevy} target="_blank" rel="noopener noreferrer">
						<IconButton>
							<SvgIconHevy size="small" />
						</IconButton>
					</a>
					<Chip color="default">
						<Typography variant="body2">
							{t.rich("stats.workouts", {
								count: workouts.count,
								serif: (chunks: ReactNode) => (
									<span className="font-serif italic">{chunks}</span>
								),
							})}
						</Typography>
					</Chip>
				</CardFooter>
			</Card>
		</Section>
	);
};

export default Stats;
