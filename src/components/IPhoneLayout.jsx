import { Box, Paper, Typography } from "@mui/material";
import { AppleIcon } from "./AppleIcon";
// Import your local image
import IphoneWallpaper from "../assets/Iphone.png";

export default function IPhoneLayout() {
  const widgets = [
    { type: "weather", content: "78° Cloudy", color: "#82b1ff" },
    { type: "calendar", content: "MON 15 No events", color: "#ff8a80" },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // Use the imported variable here
        backgroundImage: `url(${IphoneWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1. Dynamic Island */}
      <Box
        sx={{
          width: 110,
          height: 32,
          bgcolor: "black",
          borderRadius: "16px",
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{ width: 6, height: 6, bgcolor: "#333", borderRadius: "50%" }}
        />
      </Box>

      {/* 2. Top Widget Row */}
      <Box sx={{ display: "flex", gap: 2, width: "90%", mt: 4 }}>
        {widgets.map((widget, i) => (
          <Paper
            key={i}
            elevation={0}
            sx={{
              flex: 1,
              height: 160,
              borderRadius: "24px",
              p: 2,
              bgcolor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {widget.content}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* 3. Main App Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 3,
          mt: 4,
          width: "90%",
        }}
      >
        <AppleIcon name="FaceTime" color="#66bb6a" />
        <AppleIcon name="Calendar" color="white" />
        <AppleIcon name="Photos" color="#ba68c8" />
        <AppleIcon name="Camera" color="#757575" />
        <AppleIcon name="Mail" color="#42a5f5" />
        <AppleIcon name="Notes" color="#ffca28" />
      </Box>

      {/* 4. Bottom Dock */}
      <Box
        sx={{
          mt: "auto",
          mb: 4,
          width: "92%",
          height: 90,
          bgcolor: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(25px)",
          borderRadius: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          px: 2,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <AppleIcon name="Phone" color="#66bb6a" isDock />
        <AppleIcon name="Safari" color="#42a5f5" isDock />
        <AppleIcon name="Messages" color="#66bb6a" isDock />
        <AppleIcon name="Music" color="#ef5350" isDock />
      </Box>

      {/* Home Bar (The little line at the bottom of iPhones) */}
      <Box
        sx={{
          width: 120,
          height: 5,
          bgcolor: "white",
          borderRadius: 10,
          mb: 1,
          opacity: 0.5,
        }}
      />
    </Box>
  );
}
