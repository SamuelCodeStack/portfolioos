import { Box, Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WindowsIcon from "@mui/icons-material/Window";
// Import your local wallpaper
import WindowsWallpaper from "../assets/Windows11.png";

export default function WindowsDesktop() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${WindowsWallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 1. Desktop Icons Area */}
      <Box
        sx={{ flex: 1, p: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
          sx={{
            width: 85,
            textAlign: "center",
            cursor: "default",
            p: 1,
            borderRadius: 1,
            transition: "background 0.2s",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.15)",
              outline: "1px solid rgba(255,255,255,0.2)",
            },
          }}
        >
          {/* Simulated App Icon */}
          <Box
            sx={{
              width: 45,
              height: 45,
              bgcolor: "#1976d2",
              mx: "auto",
              borderRadius: "4px",
              mb: 0.5,
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
            }}
          />
          <Box
            sx={{
              color: "white",
              fontSize: 11,
              textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            Portfolio.exe
          </Box>
        </Box>
      </Box>

      {/* 2. Windows 11 Taskbar */}
      <Box
        sx={{
          height: 48,
          bgcolor: "rgba(243, 243, 243, 0.8)",
          backdropFilter: "blur(25px) saturate(150%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {/* Left Side: Weather (Hidden on smaller desktop widths) */}
        <Box
          sx={{
            position: "absolute",
            left: 15,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
            fontSize: 12,
          }}
        >
          <span>☀️</span>
          <Box sx={{ lineHeight: 1 }}>
            <div style={{ fontWeight: 500 }}>78°F</div>
            <div style={{ fontSize: 10, opacity: 0.7 }}>Sunny</div>
          </Box>
        </Box>

        {/* Center: The "Pill" Control Center */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
          <IconButton
            size="small"
            sx={{
              color: "#0078d4",
              borderRadius: 1,
              "&:hover": { bgcolor: "white" },
            }}
          >
            <WindowsIcon sx={{ fontSize: 22 }} />
          </IconButton>

          {/* Windows Search Bar */}
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1.5,
              height: 34,
              width: 180,
              borderRadius: 10,
              bgcolor: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(0,0,0,0.05)",
              transition: "width 0.3s ease",
              "&:focus-within": { width: 220, bgcolor: "white" },
            }}
          >
            <SearchIcon sx={{ fontSize: 18, color: "#555", mr: 1 }} />
            <InputBase
              placeholder="Search"
              sx={{ fontSize: 13, width: "100%" }}
            />
          </Paper>

          {/* Quick Launch Icons */}
          {[
            { color: "#ffb900", label: "Store" },
            { color: "#00a4ef", label: "Edge" },
            { color: "#7fbb00", label: "Explorer" },
          ].map((app, i) => (
            <Box
              key={i}
              sx={{
                width: 34,
                height: 34,
                bgcolor: app.color,
                borderRadius: 1,
                cursor: "pointer",
                transition: "transform 0.1s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          ))}
        </Box>

        {/* Right Side: System Tray */}
        <Box
          sx={{
            position: "absolute",
            right: 15,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            fontSize: 11,
            color: "#333",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, opacity: 0.8 }}>
            <span>🌐</span>
            <span>🔊</span>
            <span>🔋</span>
          </Box>
          <Box sx={{ textAlign: "right", lineHeight: 1.2, fontWeight: 400 }}>
            <div>2:54 PM</div>
            <div>4/17/2026</div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
