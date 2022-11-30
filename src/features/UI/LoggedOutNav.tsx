import { Link } from "react-router-dom";
import Tab from "./Tab";
import { TiTick } from "react-icons/ti";

export default function LoggedOutNav() {
  return (
    <nav className="flex justify-center">
      <div className="px-6 mx-auto h-20 w-full lg:w-[968px] flex justify-between items-center bg-dark_500 z-30 fixed">
        <div className="flex items-center">
          <TiTick className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200 text-2xl rounded-md" />
          <Link to="/">
            <h1 className="pl-2 bold text-2xl">tsks.</h1>
          </Link>
        </div>
        <div className="flex">
          <Link to="/login" className="mr-4">
            <Tab text="log in" />
          </Link>
          <div className="border border-slate-700 rounded-md hover:border-transparent ease-in duration-300">
            <Link to="/signup">
              <Tab text="sign in" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
