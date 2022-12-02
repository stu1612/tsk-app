// npm
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdCollectionsBookmark } from "react-icons/md";

// files
import { useAuthContext } from "../../hooks/useAuthContext";
import data from "../../data/mainNav.json";

// UI
import Avatar from "./Avatar";
import SideBar from "./SideBar";

const icons = [MdSpaceDashboard, MdCollectionsBookmark];

type NavbarProp = {
  burger: boolean;
};

export default function MainNavbar({ burger }: NavbarProp) {
  // global state
  const { user } = useAuthContext();

  // components
  const NavItems = data.map((item, i) => {
    const Icon = icons[i];
    return (
      <NavLink
        to={item.path}
        key={item.id}
        className={({ isActive }) =>
          isActive ? "text-slate-300" : "text-slate-600"
        }
        style={{ display: "flex", alignItems: "center", margin: "0 1rem" }}
      >
        <Icon />
        <h2>{item.title}</h2>
      </NavLink>
    );
  });

  return (
    <nav className="fixed bg-black w-full h-20 z-50 items-center justify-between px-2 hidden md:flex">
      <div className="flex flex-row items-center">
        {burger && <h1>Hamburger</h1>}
        {NavItems}
      </div>
      <div>
        <Avatar src={user.photoURL} />
      </div>
      <SideBar />
    </nav>
  );
}
