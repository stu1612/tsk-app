// npm
import { useEffect, useState } from "react";

// files
import { useAuthContext } from "../../hooks/useAuthContext";
import countArr from "../../utils/countArray";
import countIsChecked from "../../utils/countIsChecked";
import getPercentage from "../../utils/getPercentage";
import useCollection from "../../hooks/useCollection";

// UI
import ProgressBar from "./ProgressBar";

type Props = {
  id: string;
  icon: string;
  title: string;
  color: string;
};

export default function CollectionItem({ id, icon, title, color }: Props) {
  // local state
  const [tasks, setTasks] = useState([]);

  // properties
  const { user } = useAuthContext();
  const path = `users/${user.uid}/categories/${id}/tasks`;
  const { docs } = useCollection(path);

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
    <div className="min-w-[170px] mr-2 bg-gray-800 rounded-2xl p-5">
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
    </div>
  );
}
