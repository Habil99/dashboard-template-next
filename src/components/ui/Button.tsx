"use client";

import Button, { ButtonProps } from "@mui/material/Button";

export default function CustomButton(props: ButtonProps) {
  return <Button {...props}>{props.children}</Button>;
}