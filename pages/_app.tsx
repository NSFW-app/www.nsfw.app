import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Stitches } from "@nsfw-app/ui";
import { AnalyticsProvider } from 'lib/analytics/AnalyticsProvider';

function MyApp({ Component, pageProps }: AppProps) {
  // Stitches `globalCss` modules
  Stitches.globals.base();
  Stitches.globals.fonts();
  Stitches.globals.scrollbar();

  return (
    <AnalyticsProvider>
      <Component {...pageProps} />;
    </AnalyticsProvider>
  )
}

export default MyApp;
