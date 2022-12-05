// npm
import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

// files
import capitalizeString from "../../utils/capitalizeString";
import useDeleteTask from "../../hooks/useDeleteTask";
import useUpdateTaskStatus from "../../hooks/useUpdateTaskStatus";

// UI
import CheckBox from "./CheckBox";
import Moment from "./Moment";

type TaskProp = {
  title: string;
  isChecked: boolean;
  timestamp: any;
  path: string;
  id: string;
};

export default function CompletedTask({
  title,
  timestamp,
  isChecked,
  id,
  path,
}: TaskProp) {
  // local state
  const [show, setshow] = useState(false);

  // properties
  const { update } = useUpdateTaskStatus();
  const { deleteTask } = useDeleteTask();

  return (
    <div className="relative w-full flex flex-col p-2 rounded-xl my-2 bg-gray-800">
      <div className="flex flex-row items-center">
        <CheckBox
          isChecked={isChecked}
          handleChange={() => update(path, id, false)}
        />
        <p className={`${isChecked && "line-through text-slate-400"}`}>
          {capitalizeString(title)}
        </p>
      </div>
      <Moment timestamp={timestamp} />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
        <FiMoreHorizontal
          onClick={() => setshow(!show)}
          className={`p-1 rounded-full ${show ? "bg-primary" : "transparent"}`}
          size={24}
        />
        <button
          className={`absolute top-1/2 -translate-y-1/2 bg-dark_500 transition duration-150 ease-in translate hover rounded right-0 cursor-pointer p-1 hover:bg-primary  ${
            show
              ? "opacity-100 -translate-x-full "
              : "opacity-0 translate-x-full"
          }`}
          onClick={() => deleteTask(path, id)}
        >
          <small className=" px-3 py-1 uppercase ">Delete</small>
        </button>
      </div>
    </div>
  );
}
