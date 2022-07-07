export const devices = {
  xs: "0px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1536px",
};

const colors = {
  primary: { main: "#fff", dark: "#ea4c89" },
  text: { primary: "#000", secondary: "#6E6D7A", tertiary: "#fff" },
  background: { main: "#fff" },
  pink: { main: "#EA4C89", light: "#F9F8FD" },
  gray: { main: "#9E9EA7" },
};

const theme = {
  colors,
  font: {
    primary: '"Lato", sans serif',
  },
  typography: {
    fontFamily: '"Lato", sans serif',
    h1: {
      fontSize: {
        lg: "3rem",
        md: "2.5rem",
        sm: "2rem",
      },
      fontWeight: 700,
    },
    h2: {
      fontSize: {
        lg: "2.5rem",
        md: "2rem",
        sm: "1.5rem",
      },
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
  },
};

export default theme;
