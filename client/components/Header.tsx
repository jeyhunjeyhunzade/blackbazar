import Link from "next/link";
import { CurrentUser } from "/types/types";

interface HeaderProps {
  currentUser: CurrentUser | null;
}

const Header = ({ currentUser }: HeaderProps) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sell Ticket", href: "/tickets/new" },
    currentUser && { label: "My Orders", href: "/orders" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ].filter((linkConfig) => linkConfig) as { label: string; href: string }[];

  const renderedLinks = links.map(({ label, href }) => (
    <li key={href} className="nav-item">
      <Link href={href} className="nav-link">
        {label}
      </Link>
    </li>
  ));

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand ms-2" href="/">
        BlackBazar
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center m-2">{renderedLinks}</ul>
      </div>
    </nav>
  );
};

export default Header;
