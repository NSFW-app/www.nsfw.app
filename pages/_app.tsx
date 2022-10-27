import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Stitches } from "@nsfw-app/ui";
import { AnalyticsProvider } from 'lib/analytics/AnalyticsProvider';
import { marketingTheme } from "lib/theme/marketing";

function MyApp({ Component, pageProps }: AppProps) {
  // Stitches `globalCss` modules
  Stitches.globals.base();
  Stitches.globals.fonts();
  Stitches.globals.scrollbar();

  return (
    <AnalyticsProvider>
      <div className={marketingTheme}>
        <Component {...pageProps} />
      </div>
    </AnalyticsProvider>
  )
}

export default MyApp;
