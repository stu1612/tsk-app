// npm
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
  color?: string;
};

export default function Tasks() {
  // properties
  const { user } = useAuthContext();
  const params = useParams();
  const location = useLocation();
  const { title } = params;

  const id = location.state;
  const path = `users/${user.uid}/category/${id}/tasks`;
  const { docs } = useCollection(path);

  // methods
  function countIsChecked(status: boolean) {
    const count =
      docs &&
      (docs as unknown as any[]).filter(
        (item: TaskItemTypes) => item.isChecked === status
      ).length;
    return count;
  }

  // components
  const CurrentTasks =
    docs &&
    (docs as unknown as any[]).map((item: TaskItemTypes) => {
      return (
        !item.isChecked && <CurrentTask key={item.id} {...item} path={path} />
      );
    });

  const CompletedTasks =
    docs &&
    (docs as unknown as any[]).map((item: TaskItemTypes) => {
      return (
        item.isChecked && <CompletedTask key={item.id} {...item} path={path} />
      );
    });

  return (
    <main className="relative h-screen">
      <MainNavbar burger={true} />
      <section className=" md:flex items-center justify-center ">
        <div className="absolute top-0 md:top-24 h-fit w-full pb-24 px-4  md:w-[600px] md:px-0 md:ml-36 ">
          <div className="w-full pb-8 pt-8 md:block">
            <div className=" bg-dark_500 w-full  flex flex-row items-center md:relative md:p-0">
              <Link
                to={".."}
                className=" text-center p-1 rounded-lg mr-2 bg-gray-600 cursor-pointer transition-all ease-in duration-150  hover:bg-gray-700 "
              >
                <MdArrowBackIos size={24} style={{ paddingLeft: "5px" }} />
              </Link>
              <h2 className="text-slate-200 text-2xl font-lg capitalize">
                {title}
              </h2>
            </div>
            <div className="hidden md:grid md:mt-6">
              <AddTask id={id} />
            </div>
            <div className="grid mt-12 w-full overflow-hidden">
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
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 w-full flex items-center flex-row justify-center bg-dark_500 p-6 md:hidden">
        <Link to={`/tasks/add_task`} state={id}>
          <button className="bg-primary py-4 px-4 rounded-full text-lg transition ease-in duration-150 hover:scale-125">
            <RiAddFill color="white" size={30} />
          </button>
        </Link>
      </div>
    </main>
  );
}
