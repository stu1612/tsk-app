// npm
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// files
import { useAuthContext } from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import { CategoryType } from "../../global";

// UI
import CurrentTask from "./CurrentTask";

type TaskItemTypes = {
  isChecked: boolean;
  timestamp: any;
  title: string;
  id: string;
  color: string;
};

export default function DashboardItem({
  title,
  id,
  icon,
  color,
}: CategoryType) {
  // properties
  const { user } = useAuthContext();
  const path = `users/${user.uid}/category/${id}/tasks`;
  const { docs } = useCollection(path);

  console.log(docs);
  // components
  const CurrentTasks =
    docs &&
    (docs as unknown as any[]).map((item: TaskItemTypes) => {
      return (
        !item.isChecked && (
          <CurrentTask key={item.id} {...item} path={path} color={color} />
        )
      );
    });

  const EmptyList =
    docs &&
    (docs as unknown as any[]).length === 0 &&
    "Collection list is empty";

  return (
    <div className="bg-gray-800 overflow-hidden mb-6 rounded-xl ">
      <div className="flex flex-row items-center justify-start p-4 bg-gray-700">
        <img
          src={icon}
          alt={title}
          className="h-8 rounded-t-xl rounded-b-2xl p-1 mr-2"
          style={{ backgroundColor: color }}
        />
        <p className="capitalize">{title}</p>
      </div>
      <div className="p-2">{CurrentTasks}</div>
      <div className="p-2 ml-2 text-slate-500">{EmptyList}</div>
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
