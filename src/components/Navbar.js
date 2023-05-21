import { Link, useMatch, useResolvedPath } from "react-router-dom";

import classes from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.siteTitle}>
        Site Name
      </Link>
      <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/signup">Sign up</CustomLink>
        <CustomLink to="/signin">SignIn</CustomLink>
        <CustomLink to="/signout">Sign out</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
