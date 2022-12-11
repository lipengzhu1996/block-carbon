import IconButton from "@mui/material/IconButton";
import RoomIcon from "@mui/icons-material/Room";

type Props = {
  onClick: () => void;
};
export default function DropletMarker({ onClick }: Props) {
  return (
    <IconButton onClick={onClick}>
      <RoomIcon fontSize="large" sx={{ color: "#7EC8E3" }} />
    </IconButton>
  );
}
