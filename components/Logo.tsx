import Link from "next/link";

interface Props {
  title?: string;
  className: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <Link href="/">
      <h2 className={`text-3xl uppercase font-extrabold ${className}`}>{title || "Blogger"}</h2>
    </Link>
  )
};

export default Logo;
