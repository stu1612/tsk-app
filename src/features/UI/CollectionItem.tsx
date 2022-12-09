// npm
import { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

// files
import { CategoryType } from "../../global";
import { useAuthContext } from "../../hooks/useAuthContext";
import countArr from "../../utils/countArray";
import countIsChecked from "../../utils/countIsChecked";
import getPercentage from "../../utils/getPercentage";
import useCollection from "../../hooks/useCollection";
import Button from "./Button";
import useDeleteTask from "../../hooks/useDeleteTask";

// UI
import ProgressBar from "./ProgressBar";

export default function CollectionItem({
  id,
  icon,
  title,
  color,
}: CategoryType) {
  // local state
  const [tasks, setTasks] = useState([]);
  const [bg, setBg] = useState(false);

  // properties
  const { user } = useAuthContext();
  const path = `users/${user.uid}/category/${id}/tasks`;
  const { docs } = useCollection(path);
  const { deleteTask } = useDeleteTask();

  // useEffect that saves the returned docs collection in array state
  useEffect(() => {
    const clonedArr = Object.assign([], docs);
    setTasks(clonedArr);
  }, [docs]);

  // function properties that counts total tasks - active tasks and calculates completed percentage - used for circle progress bar
  const totalTasks = countArr(tasks);
  const currentTasks = countIsChecked(tasks, true);
  const percentage = getPercentage(totalTasks, currentTasks);

  // returned message based on task completion status
  function taskStatusMessage() {
    if (totalTasks > currentTasks) return `${currentTasks}/${totalTasks} done`;
    if (totalTasks === currentTasks) return `all ${currentTasks} done`;
  }

  return (
    <div className="relative min-w-[200px] md:min-w-[170px] m-2  mb-2 bg-gray-800 rounded-2xl p-5">
      {currentTasks === 0 && (
        <button
          className="absolute top-2 right-2 z-50"
          onClick={() => setBg(!bg)}
        >
          <FiMoreHorizontal />
        </button>
      )}
      <img
        src={icon}
        alt={title}
        className="h-8 w-8 rounded-t-xl rounded-b-2xl p-1"
        style={{ background: color }}
      />
      <div className="flex flex-row justify-between items-end mt-6">
        <div>
          <h2 className="capitalize">{title}</h2>
          <small className="text-slate-500">{taskStatusMessage()}</small>
        </div>
        <ProgressBar percentage={percentage} color={color} />
      </div>
      <div
        className={`${
          bg
            ? "absolute inset-0 rounded-2xl bg-gray-800 flex justify-center items-center"
            : "hidden"
        }`}
      >
        <Button
          text="Deselect"
          theme="light"
          clickHandler={() => deleteTask(`users/${user.uid}/category`, id)}
        />
      </div>
    </div>
  );
}
