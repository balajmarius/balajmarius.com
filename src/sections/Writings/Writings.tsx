import { useTranslations } from "next-intl";
import type { Dictionary } from "lodash";

import type { Post } from "@/lib/posts";

import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { WritingsListItem } from "@/sections/Writings";

type WritingsProps = {
  posts: Dictionary<Post[]>;
};

const Writings = ({ posts }: WritingsProps) => {
  const t = useTranslations();
  const years = Object.keys(posts).sort().reverse();

  return (
    <Section>
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("writings.title")}</Typography>

        <div className="space-y-6">
          <div className="border-b border-gray-100">
            {years.map((year) => (
              <WritingsListItem key={year} year={year} posts={posts[year]} />
            ))}
          </div>

          <div className="flex justify-end">
            <Link href="/" target="_self">
              {t("writings.moreWritings")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Writings;
