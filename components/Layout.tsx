import Head from "next/head";
import { useRouter } from "next/router";

import Logo from "./Logo";
import Link from "./Link";

interface Props {
  children: React.ReactNode;
  isHomePage?: boolean;
  title: string;
  description?: string;
  ogImage?: string;
}

const Layout: React.FC<Props> = ({
  children,
  isHomePage,
  title,
  description,
  ogImage,
}) => {
  const router = useRouter();

  const siteTitle = "Iskender.fi";
  const siteDescription = "On se vaan hyvää.";
  const siteOgImage = "/iskender/iskender-ogimage.png";

  const pageTitle = isHomePage ? siteTitle : `${title} | ${siteTitle}`;
  const pageDescription = description || siteDescription;
  const pageOgImage = new URL(
    ogImage || siteOgImage,
    process.env.NEXT_PUBLIC_ORIGIN
  );
  const pageUrl = new URL(router.asPath, process.env.NEXT_PUBLIC_ORIGIN);

  return (
    <div className="p-4 pb-16">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#991b1b" />
        <link rel="canonical" href={pageUrl.href} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl.href} />
        <meta property="og:image" content={pageOgImage.href} />
        <meta property="og:locale" content="fi-FI" />
        <meta property="og:site_name" content="Iskender.fi" />
      </Head>
      <div className="container mx-auto mb-2">
        <a
          href="#sisalto"
          className="sr-only font-sans focus:not-sr-only outline-none focus:ring focus:ring-offset-2 focus:ring-red-800"
        >
          Siirry sisältöön
        </a>
      </div>
      <div className="container mx-auto space-y-8 md:space-y-16 flex flex-col">
        <header className="flex">
          <Logo isOnHomePage={isHomePage} />
        </header>
        <div className="flex flex-col space-y-16 lg:w-3/4">
          <main id="sisalto">{children}</main>
        </div>
        <footer className="pt-2 self-start border-t border-gray-600 text-gray-600 font-sans">
          <p>
            <small>
              © {new Date().getFullYear()}{" "}
              <Link variant="secondary" href="/">
                Iskender.fi
              </Link>
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
