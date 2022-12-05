// npm
import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";

// files
import useCollection from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

// UI
import CurrentTask from "../features/UI/CurrentTask";
import CompletedTask from "../features/UI/CompletedTask";
import MainNavbar from "../features/UI/MainNavbar";
import AddTask from "../features/forms/AddTask";

type TaskItemTypes = {
  isChecked: boolean;
  timestamp: any;
  title: string;
  id: string;
};

export default function Tasks() {
  // local state
  const [tasks, setTasks] = useState([]);

  // properties
  const { user } = useAuthContext();
  const params = useParams();
  const location = useLocation();
  const { title } = params;

  const id = location.state;
  const path = `users/${user.uid}/categories/${id}/tasks`;
  const { docs } = useCollection(path);

  useEffect(() => {
    const clonedArr = Object.assign([], docs);
    setTasks(clonedArr);
  }, [docs]);

  // methods
  function countIsChecked(status: boolean) {
    const count =
      tasks &&
      tasks.filter((item: TaskItemTypes) => item.isChecked === status).length;
    return count;
  }

  // components
  const CurrentTasks =
    tasks &&
    tasks.map((item: TaskItemTypes) => {
      return (
        !item.isChecked && <CurrentTask key={item.id} {...item} path={path} />
      );
    });

  const CompletedTasks =
    tasks &&
    tasks.map((item: TaskItemTypes) => {
      return (
        item.isChecked && <CompletedTask key={item.id} {...item} path={path} />
      );
    });

  return (
    <div className="relative h-screen">
      <MainNavbar burger={true} />
      <main className=" md:flex items-center justify-center ">
        <section className="absolute h-fit w-full pb-32 px-2 md:w-[500px] md:px-0 md:top-24  overflow-scroll">
          <div className="flex flex-row items-center ">
            <div className=" text-center p-1 rounded-lg mr-2 bg-gray-800 cursor-pointer transition-all ease-in duration-150 hover:scale-110 hover:bg-gray-700">
              <MdArrowBackIos style={{ paddingLeft: "5px" }} />
            </div>
            <h2 className="text-slate-200 text-2xl font-lg">{title}</h2>
          </div>
          <div className="hidden md:grid md:mt-2">
            <AddTask id={id} />
          </div>
          <div className="mt-12">
            <div>
              <h2>
                Tasks <span>- {countIsChecked(false)}</span>
              </h2>
              {CurrentTasks}
            </div>
            <div>
              <h2>
                Completed <span>- {countIsChecked(true)}</span>
              </h2>
              {CompletedTasks}
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-0 w-full flex items-center flex-row justify-center bg-dark_500 p-8 md:hidden">
        <Link to={`/tasks/add_task`} state={id}>
          <button className="bg-primary py-3 px-3 rounded-xl text-lg transition ease-in duration-150 hover:scale-125">
            <RiAddFill color="white" size={24} />
          </button>
        </Link>
      </div>
    </div>
  );
}
