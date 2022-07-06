import { ThemeProvider } from "styled-components";
import GlobalCSS from "../styles/global.css";
import theme from "@dribble/theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
