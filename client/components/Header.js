import Link from "next/link";

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sing Up", href: "/auth/signup" },
    !currentUser && { label: "Sing In", href: "/auth/signin" },
    currentUser && { label: "Sing Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href} className="nav-link">
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        BlackBazar
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center m-2">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
