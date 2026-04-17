import { Box, Paper, Typography } from "@mui/material";
import { AppleIcon } from "./AppleIcon";
import IpadWallpaper from "../assets/Ipad.png"; // Fix 1: Corrected path

export default function IPadLayout() {
  const mainApps = [
    "App 1",
    "App 2",
    "App 3",
    "App 4",
    "App 5",
    "App 6",
    "App 7",
    "App 8",
  ];
  const dockApps = ["FaceTime", "Safari", "Mail", "Messages"];
  const recentApps = ["Music", "App Store"];

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        // Fix 2: Wrap the imported variable in url()
        backgroundImage: `url(${IpadWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1. Main Grid Area */}
      <Box
        sx={{
          flex: 1,
          display: "grid",
          // 8 columns for landscape tablet
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 4,
          mt: 6,
          width: "95%",
        }}
      >
        {mainApps.map((app) => (
          <AppleIcon key={app} name={app} color="#ddd" />
        ))}
      </Box>

      {/* 2. Landscape Dock */}
      <Box
        sx={{
          mt: "auto",
          mb: 2,
          height: 96,
          bgcolor: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 1.5,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {dockApps.map((app) => (
          <AppleIcon key={app} name={app} color="#ddd" isDock />
        ))}

        {/* Divider line between static and recent apps */}
        <Box
          sx={{
            width: "1px",
            height: "50%",
            bgcolor: "rgba(255,255,255,0.3)",
            mx: 1,
          }}
        />

        {recentApps.map((app) => (
          <AppleIcon key={app} name={app} color="#aaa" isDock />
        ))}
      </Box>
    </Box>
  );
}
