import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Card, CardContent, CardFooter } from "@/components/Card";

const Home = () => {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Card>
            <CardContent>content</CardContent>
            <CardFooter>footer</CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="h1">
            The quick brown <span className="font-serif italic">fox</span> jumps over the lazy dog
          </Typography>
          <Typography variant="h2">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="subtitle1">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="subtitle2">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="overline">The quick brown fox jumps over the lazy dog</Typography>
          <Typography variant="caption">The quick brown fox jumps over the lazy dog</Typography>
        </div>
      </div>
    </Section>
  );
};

export default Home;
