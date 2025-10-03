import { useTranslations } from "next-intl";

import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { IconButton } from "@/components/IconButton";
import { SvgIconStrava, SvgIconBike } from "@/components/SvgIcon";
import { Card, CardContent, CardFooter } from "@/components/Card";

const Passions = () => {
  const t = useTranslations();

  return (
    <Section className="pb-48">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("passions.title")}</Typography>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <Card color="danger">
              <CardContent>
                <Typography variant="h2">{t("passions.outsidePerf.title")}</Typography>
              </CardContent>

              <CardFooter>
                <IconButton>
                  <SvgIconStrava size="small" />
                </IconButton>

                <Chip color="default">
                  <SvgIconBike size="small" />
                </Chip>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Passions;
