import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& label.Mui-focused": {
    color: "black",
  },
  label: {
    color: "black",
  },
}));

type DialogTitleProps = {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
};

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// TODO: update project type
type Props = {
  open: boolean;
  project: string;
  onClose: () => void;
  onSave: () => void;
};

export default function ProjectEditDialog({
  open,
  onClose,
  onSave,
  project,
}: Props) {
  const isCreate = project === "";
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
        {isCreate ? "Create New Project" : "Edit Project"}
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40vw" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="outlined-required" label="Title" />
            <TextField required id="outlined-required2" label="Description" />
            <TextField required id="outlined-required3" label="Start Time" />
            <TextField required id="outlined-required4" label="Country" />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>
          <Typography variant="body2" sx={{ color: "#000" }}>
            Cancel
          </Typography>
        </Button>
        <Button onClick={onSave}>
          <Typography variant="body2" sx={{ color: "#000" }}>
            Save
          </Typography>
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
