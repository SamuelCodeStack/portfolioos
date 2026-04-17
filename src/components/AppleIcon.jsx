import { Box, Typography } from "@mui/material";

// Standard 60x60 square icon with rounded corners, used on both devices.
export const AppleIcon = ({ name, color, isDock = false }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 0.5,
      ...(!isDock && { width: 60 }),
    }}
  >
    <Box
      sx={{
        width: 60,
        height: 60,
        bgcolor: color || "#ddd", // Default grey if no color provided
        borderRadius: "16px", // Standard iOS curvature
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    />
    {!isDock && (
      <Typography sx={{ color: "white", fontSize: 11, textAlign: "center" }}>
        {name}
      </Typography>
    )}
  </Box>
);
