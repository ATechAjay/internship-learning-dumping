import Link from "next/link";

const MDXLink = ({ href, className, children }) => {
  console.log(className);
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default MDXLink;
