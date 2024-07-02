import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#C0C0C0", // màu viền mặc định
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#295F2D", // màu viền khi hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#295F2D", // màu viền khi focus
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#295F2D",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Bo góc cho button
          padding: "10px 20px", // Padding cho button
        },
        containedPrimary: {
          backgroundColor: "#295F2D",
          "&:hover": {
            backgroundColor: "#FFE67C",
            color: "#295F2D",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "black", // Màu cho đường link
          textDecoration: "underline", // Gạch chân cho đường link
          "&:hover": {
            textDecoration: "none", // Loại bỏ gạch chân khi hover
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#295F2D", // Màu sắc cho icon
        },
      },
    },
  },
});
