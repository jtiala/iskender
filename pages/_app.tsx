import { AppProps } from "next/app";

import "typeface-montserrat";
import "typeface-merriweather";
import "../styles/index.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
