import React from "react";
import { Box, Button } from "@mui/material";

function ActivitiesHeader() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
      <Button size="small" variant="contained">
        Day Plan
      </Button>
      &nbsp;
      <Button size="small" variant="outlined">
        14 Activities
      </Button>
    </Box>
  );
}

export default ActivitiesHeader;
