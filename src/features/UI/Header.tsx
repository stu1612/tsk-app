import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  // properties
  return (
    <>
      <header className="absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col justify-center z-10">
        <h2 className="text-3xl text-slate-100 pb-4 font-extrabold md:text-6xl">
          Tsks, just tasks
          <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200">
            .
          </span>
        </h2>
        <p className="leading-5 font-thin md:leading-7 w-11/12 md:w-[400px] mx-auto">
          Keep track of the daily tasks in life and get that satisfaction upon
          completion.
        </p>
        <div className="mt-10 mx-auto flex flex-col md:flex-row">
          <Button text="get started" theme="light" />
          <Link to={"/"} className="md:ml-4">
            <Button text="learn more" theme="dark" />
          </Link>
        </div>
      </header>
    </>
  );
}
