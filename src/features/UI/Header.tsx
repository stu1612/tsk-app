import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  // properties
  return (
    <>
      <header className="absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center flex flex-col justify-center z-10">
        <h2 className="text-5xl text-slate-100 pb-4 font-extrabold md:text-6xl">
          Tsks, just tasks
          <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 via-pink-400 to-pink-200">
            .
          </span>
        </h2>
        <p className="leading-5 font-thin md:leading-7 w-[80%] md:w-[400px] mx-auto">
          Keep track of the daily tasks in life and get that satisfaction upon
          completion.
        </p>
        <div className="mt-10 mx-auto flex flex-row flex-wrap px-3">
          <Link to="/signup">
            <Button text="get started" theme="light" />
          </Link>

          <Link to={"/learn_more"} className="ml-4">
            <Button text="learn more" theme="dark" />
          </Link>
        </div>
      </header>
    </>
  );
}
