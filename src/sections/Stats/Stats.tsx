import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Card, CardContent, CardFooter } from "@/components/Card";

const Stats = () => {
  const t = useTranslations();

  return (
    <Section id="stats">
      <Card color="primary">
        <CardContent>
          <Typography variant="h2">
            {t("stats.latestTrainingSessions")}
          </Typography>
        </CardContent>
        <CardFooter>
          <Typography variant="body2">Footer</Typography>
        </CardFooter>
      </Card>
    </Section>
  );
};

export default Stats;
