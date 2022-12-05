import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// files
import CurrentTask from "./CurrentTask";
import useCollection from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";

type Props = {
  title: string;
  id: string;
  image: string;
  color: string;
};

type TaskItemTypes = {
  isChecked: boolean;
  timestamp: any;
  title: string;
  id: string;
  color: string;
};

export default function DashboardItem({ title, id, image, color }: Props) {
  const [tasks, setTasks] = useState([]);

  const { user } = useAuthContext();
  const path = `users/${user.uid}/categories/${id}/tasks`;
  const { docs } = useCollection(path);

  useEffect(() => {
    const clonedArr = Object.assign([], docs);
    setTasks(clonedArr);
  }, [docs]);

  // components
  const CurrentTasks =
    tasks &&
    tasks.map((item: TaskItemTypes) => {
      return (
        !item.isChecked && (
          <CurrentTask key={item.id} {...item} path={path} color={color} />
        )
      );
    });

  return (
    <div className="bg-gray-800 overflow-hidden mb-6 rounded-xl ">
      <div className="flex flex-row items-center justify-start p-4 bg-gray-700">
        <img
          src={image}
          alt={title}
          className="h-8 rounded-t-xl rounded-b-2xl p-1 mr-2"
          style={{ backgroundColor: color }}
        />
        <p className="capitalize">{title}</p>
      </div>
      <div className="p-2">{CurrentTasks}</div>
      <Link
        to={`tasks/${title}`}
        state={id}
        className="p-4 w-full flex flex-row justify-center items-center border-t-2 border-slate-700"
      >
        Go to collection
        <span className="ml-2">
          <FiArrowRight />
        </span>
      </Link>
    </div>
  );
}
