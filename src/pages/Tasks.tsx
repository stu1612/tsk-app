import { useParams, useLocation } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import MainNavbar from "../features/UI/MainNavbar";
import AddTask from "../features/forms/AddTask";

export default function Tasks() {
  const params = useParams();
  const location = useLocation();

  const { title } = params;
  const id = location.state;
  console.log("id", id);

  return (
    <main className="relative">
      <MainNavbar burger={true} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-24 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0 bg-red-500">
          <div className="flex flex-row items-center">
            <div className="bg-slate-700 text-center p-1 rounded-lg mr-2">
              <MdArrowBackIos style={{ paddingLeft: "5px" }} />
            </div>
            <h2 className="text-slate-200 text-2xl font-lg">{title}</h2>
          </div>
          <AddTask id={id} />
        </section>
      </div>
    </main>
  );
}
