// npm
import { FaUserCircle } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbIcons } from "react-icons/tb";

// files
import data from "../../data/bottomNav.json";

const icons = [MdSpaceDashboard, MdCollectionsBookmark, TbIcons, FaUserCircle];

const navItems = data.map((item, i) => {
  const Icon = icons[i];
  return (
    <NavLink
      to={item.path}
      key={item.id}
      className={({ isActive }) =>
        isActive ? "text-zinc-100" : "text-zinc-600"
      }
    >
      <Icon size={24} />
    </NavLink>
  );
});

export default function BottomNavbar() {
  return (
    <nav className="fixed z-50 bottom-0 flex items-center justify-around bg-dark_500 h-12 w-full mt-4 md:hidden">
      {navItems}
    </nav>
  );
}
