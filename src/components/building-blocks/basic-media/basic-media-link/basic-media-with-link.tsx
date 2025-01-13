import Link from "next/link";

type BasicMediaLinkProps = {
  url?: string;
  isExternal?: boolean;
  children: React.ReactNode;
};

export function BasicMediaLink({
  url,
  isExternal,
  children
}: BasicMediaLinkProps) {
  if (url) {
    if (isExternal) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else {
      return <Link href={url}>{children}</Link>;
    }
  }

  return children;
}
