import MainNavbar from "../features/UI/MainNavbar";
import { Link } from "react-router-dom";
import MobileNavbar from "../features/UI/MobileNavbar";
import BottomNavbar from "../features/UI/BottomNavbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import Button from "../features/UI/Button";
import useLogout from "../hooks/useLogout";

export default function User() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <main className="relative">
      <MobileNavbar title="User information" />
      <MainNavbar burger={false} />
      <section className=" md:flex items-center justify-center">
        <div className="absolute top-24 h-fit w-full px-4 md:w-[400px] md:px-0 ">
          <div className="hidden w-8/12 pb-8 pt-8 md:block">
            <h2 className="text-slate-200 text-2xl font-lg">
              User information
            </h2>
          </div>
          <div>
            <div className="flex flex-row items-center my-2">
              <MdOutlineDateRange size={32} />
              <h3 className="ml-4">{user.metadata.creationTime}</h3>
            </div>
            <div className="flex flex-row items-center my-2">
              <FaUserCircle size={32} />
              <h3 className="ml-4">{user.displayName}</h3>
            </div>
            <div className="flex flex-row items-center my-2">
              <MdOutlineEmail size={32} />
              <h3 className="ml-4">{user.email}</h3>
            </div>
          </div>
          <div className="h-1 w-full bg-primary my-4 rounded-lg" />
          <div className="flex flex-col">
            <Button text="logout" theme="dark" clickHandler={logout} />

            <Link to="/reset_password" className="grid">
              <Button text="reset password" theme="light" />
            </Link>
          </div>
        </div>
      </section>
      <BottomNavbar />
    </main>
  );
}
