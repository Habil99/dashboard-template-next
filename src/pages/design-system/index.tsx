"use client";

import Button from "@/components/ui/Button";
import { Box } from "@mui/material";

export default function DesignSystemPage() {
  return (
    <Box sx={{ padding: 2, display: "flex", gap: 3, alignItems: "baseline", flexWrap: "wrap" }}>
      <Button variant="contained" color="primary" size="small">
        Primary Small
      </Button>
      <Button variant="contained" color="primary" size="medium">
        Primary Medium
      </Button>
      <Button variant="contained" color="primary" size="large">
        Primary Large
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Secondary Small
      </Button>
      <Button variant="contained" color="secondary" size="medium">
        Secondary Medium
      </Button>
      <Button variant="contained" color="secondary" size="large">
        Secondary Large
      </Button>
    </Box>
  );
}
