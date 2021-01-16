import Link from "next/link";

interface Props {
  isOnHomePage?: boolean;
}

const Logo: React.FC<Props> = ({ isOnHomePage = false }) => {
  const getHeading = (content: React.ReactNode) =>
    isOnHomePage ? <h1>{content}</h1> : <h2>{content}</h2>;

  return (
    <div className="space-y-2 flex flex-col self-center md:self-start">
      {getHeading(
        <Link href="/">
          <a className="p-4 md:p-6 inline-block bg-black hover:bg-red-800 focus:bg-red-800 text-white focus:text-white font-sans text-4xl md:text-6xl font-black italic no-underline tracking-tight subpixel-antialiased leading-none outline-none">
            Iskender.fi
          </a>
        </Link>
      )}
      <p className="self-center text-black text-sm md:text-base font-sans font-black uppercase tracking-wider leading-none subpixel-antialiased">
        On se vaan hyvää.
      </p>
    </div>
  );
};

export default Logo;
