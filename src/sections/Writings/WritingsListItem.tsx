import { Chip } from "@/components/Chip";
import { Typography } from "@/components/Typography";

const WritingsListItem = () => {
  return (
    <div className="border-b border-gray-100 py-3 flex items-center justify-between">
      <Typography variant="body2" color="muted">
        2025
      </Typography>

      <div className="flex items-center">
        <Typography variant="body1">On Bullshit</Typography>
        <Typography variant="subtitle1">- Harry G. Frankfurt</Typography>
      </div>

      <div className="flex items-center gap-x-3">
        <Typography variant="body2" color="muted">
          23/04
        </Typography>

        <Chip color="info">React</Chip>
      </div>
    </div>
  );
};

export default WritingsListItem;
