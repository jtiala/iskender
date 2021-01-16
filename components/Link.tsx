import NextLink, { LinkProps } from "next/link";
import classNames from "classnames";

interface Props {
  variant?: "primary" | "secondary" | "tertiary";
}

const Link: React.FC<Props & LinkProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const className = classNames(
    "hover:underline outline-none focus:ring focus:ring-offset-2 focus:ring-red-800",
    {
      "text-red-800 hover:text-gray-800": variant === "primary",
      "text-gray-800 hover:text-red-800": variant === "secondary",
      "text-gray-600 hover:text-gray-800": variant === "tertiary",
    }
  );

  return (
    <NextLink {...props}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export default Link;
