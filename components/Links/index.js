import Link from "next/link";

export function DefaultLink({ children, href, className }) {
  return (
    <Link href={href} passHref>
      <a className={className}>{children}</a>
    </Link>
  );
}
