import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/military", label: "Military" },
  { to: "/resume", label: "Resume" },
  { to: "/travel", label: "Travel" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="site-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
