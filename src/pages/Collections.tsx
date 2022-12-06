// files
import { useState } from "react";
import BottomNavbar from "../features/UI/BottomNavbar";
import MainNavbar from "../features/UI/MainNavbar";
import { CategoryType } from "../global";
import useCategoryContext from "../hooks/useCategoryContext";
import useCollection from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import CollectionItem from "../features/UI/CollectionItem";

type TaskItemTypes = {
  isChecked: boolean;
  timestamp: any;
  title: string;
  id: string;
  color?: string;
};

export default function Collections() {
  const { categories } = useCategoryContext();
  const [tasks, setTasks] = useState([]);
  const { user } = useAuthContext();
  // const path = `users/${user.uid}/categories/${id}/tasks`;
  // const { docs } = useCollection(path);

  // useEffect(() => {
  //   const clonedArr = Object.assign([], docs);
  //   setTasks(clonedArr);
  // }, [docs]);

  // methods
  function countIsChecked(status: boolean) {
    const count =
      tasks &&
      tasks.filter((item: TaskItemTypes) => item.isChecked === status).length;
    return count;
  }

  const activeItems =
    categories &&
    categories.map((item: CategoryType) => (
      <CollectionItem key={item.id} {...item} />
    ));

  return (
    <main className="relative">
      <MainNavbar burger={false} />
      <div className=" md:flex items-center justify-center">
        <section className="absolute top-0 h-fit w-full pb-24 px-2 overflow-scroll md:w-[500px] md:px-0 md:top-24">
          <div className="w-8/12 pb-8 pt-8 ">
            <h2 className="text-slate-200 text-2xl font-lg">Collections</h2>
          </div>
          <div className="text-md rounded-lg py-2 px-5 mb-6 bg-slate-600 inline-grid">
            <small>All collections</small>
          </div>
          <div className="flex flex-wrap">{activeItems}</div>
        </section>
      </div>
      <BottomNavbar />
    </main>
  );
}
