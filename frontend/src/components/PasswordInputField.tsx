import { useState } from "react";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function PasswordInputField({ value, onChange }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
            }}
            edge="end"
          >
            {showPassword ? (
              <VisibilityOff sx={{ color: "#ffffff" }} />
            ) : (
              <Visibility sx={{ color: "#ffffff" }} />
            )}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
