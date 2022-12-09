// npm
import { useState } from "react";
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

type BurgerType = {
  show: boolean;
};

export default function MainNavbar({ burger }: NavbarProp) {
  // local state
  const [show, setShow] = useState(true);
  // global state
  const { user } = useAuthContext();

  // methods
  function toggleShow() {
    setShow(!show);
  }

  // components
  const NavItems = data.map((item, i) => {
    const Icon = icons[i];
    return (
      <NavLink
        to={item.path}
        key={item.id}
        className={({ isActive }) =>
          isActive ? "text-slate-300" : "text-slate-500"
        }
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 1rem",
        }}
      >
        <Icon />
        <h2 className="ml-1">{item.title}</h2>
      </NavLink>
    );
  });

  return (
    <>
      <nav className="fixed bg-gray-800 w-full h-20 z-50 items-center justify-between px-2 hidden md:flex">
        <div className="flex flex-row items-center">
          {burger && (
            <div onClick={toggleShow}>
              <Hamburger show={show} />
            </div>
          )}
          {NavItems}
        </div>
        <div>
          <Avatar src={user.photoURL} />
        </div>
      </nav>
      {burger && <SideBar show={show} />}
    </>
  );
}

function Hamburger({ show }: BurgerType) {
  const burgerLine = `h-1 w-10 my-1 rounded-full bg-gray-200 transition ease transform duration-300`;
  return (
    <button className="flex flex-col h-12 w-12  rounded justify-center items-center group">
      <div
        className={`${burgerLine} ${
          !show
            ? "opacity-50 w-4 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${burgerLine} ${
          !show ? "w-6" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${burgerLine} ${
          !show
            ? " opacity-50 w-4 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}
