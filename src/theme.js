import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4A90E2",
      light: "#6BA7E8",
      dark: "#357ABD",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6B6B",
      light: "#FF8585",
      dark: "#E65C5C",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F9FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#7F8C8D",
    },
    success: {
      main: "#2ECC71",
      light: "#4ED789",
      dark: "#27AE60",
    },
    error: {
      main: "#E74C3C",
      light: "#EB6658",
      dark: "#C0392B",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#2C3E50",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 20px",
          borderRadius: 8,
          boxShadow: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          },
        },
        contained: {
          "&:hover": {
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
          },
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 8,
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(74, 144, 226, 0.05)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "&:hover fieldset": {
              borderColor: "#4A90E2",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4A90E2",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#4A90E2",
          "&.Mui-checked": {
            color: "#4A90E2",
          },
        },
      },
    },
  },
});
