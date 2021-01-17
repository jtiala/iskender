import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";

import "typeface-montserrat";
import "typeface-merriweather";
import "../styles/index.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PUBLIC_GA_TRACKING_ID.length === 0
    ) {
      return;
    }

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
