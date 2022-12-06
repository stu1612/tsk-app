import getPercentage from "../../utils/getPercentage";
import countArr from "../../utils/countArray";
import countIsChecked from "../../utils/countIsChecked";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import useCollection from "../../hooks/useCollection";
import ProgressBar from "./ProgressBar";

type Props = {
  id: string;
  image: string;
  title: string;
  color: string;
};

export default function CollectionItem({ id, image, title, color }: Props) {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuthContext();
  const path = `users/${user.uid}/categories/${id}/tasks`;
  const { docs } = useCollection(path);

  useEffect(() => {
    const clonedArr = Object.assign([], docs);
    setTasks(clonedArr);
  }, [docs]);

  const totalTasks = countArr(tasks);
  const currentTasks = countIsChecked(tasks, true);

  const percentage = getPercentage(totalTasks, currentTasks);

  // methods
  function taskStatusMessage() {
    if (totalTasks > currentTasks) return `${currentTasks}/${totalTasks} done`;
    if (totalTasks === currentTasks) return `all ${currentTasks} done`;
  }

  return (
    <div className="min-w-[170px] mr-2 bg-gray-800 rounded-2xl p-5">
      <img
        src={image}
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
