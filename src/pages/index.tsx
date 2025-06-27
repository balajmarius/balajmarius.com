import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { IconButton } from "@/components/IconButton";
import { Card, CardContent, CardFooter } from "@/components/Card";

const Home = () => {
  return (
    <Section>
      <div className="flex flex-col gap-16 py-20">
        <div className="flex flex-col items-start gap-4">
          <IconButton>1</IconButton>
          <IconButton>2</IconButton>
          <IconButton>3</IconButton>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Card color="primary">
            <CardContent>
              <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
            </CardContent>
            <CardFooter>
              <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
            </CardFooter>
          </Card>

          <Card color="secondary">
            <CardContent>
              <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
            </CardContent>
            <CardFooter>
              <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
            </CardFooter>
          </Card>

          <Card color="info">
            <CardContent>
              <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
            </CardContent>
            <CardFooter>
              <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
            </CardFooter>
          </Card>

          <Card color="success">
            <CardContent>
              <Typography variant="body1">The quick brown fox jumps over the lazy dog</Typography>
            </CardContent>
            <CardFooter>
              <Typography variant="body2">The quick brown fox jumps over the lazy dog</Typography>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Chip variant="outlined">Chip</Chip>
          <Chip color="primary">Chip</Chip>
          <Chip color="secondary">Chip</Chip>
          <Chip color="info">Chip</Chip>
          <Chip color="success">Chip</Chip>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="h1">The quick brown fox jumps over the lazy dog</Typography>
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
