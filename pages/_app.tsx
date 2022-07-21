import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Stitches } from "@nsfw-app/ui";

function MyApp({ Component, pageProps }: AppProps) {
  // Stitches `globalCss` modules
  Stitches.globals.base();
  Stitches.globals.fonts();
  Stitches.globals.scrollbar();

  return <Component {...pageProps} />;
}

export default MyApp;
