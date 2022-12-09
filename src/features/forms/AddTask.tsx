// npm
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";

// files
import { useAuthContext } from "../../hooks/useAuthContext";
import useAddTask from "../../hooks/useAddTask";

type Prop = {
  id: string;
};

export default function AddTask({ id }: Prop) {
  const { user } = useAuthContext();
  // local state
  const [task, setTask] = useState("");

  // properties
  const { addTask } = useAddTask();

  // methods
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    addTask(`users/${user.uid}/category/${id}/tasks`, task);
    setTask("");
  };
  return (
    <div className="hidden md:grid w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          required
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
          className="w-full p-2 bg-dark_500 rounded-xl border border-gray-700 md:pl-12 relative focus:ring-0 transition ease-linear duration-150 focus:border-gray-400 focus:border-2 "
        />
        <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 bg-primary py-1 px-1 ml-2 rounded-lg text-lg transition-all hover:scale-110">
          <RiAddFill color="black" />
        </button>
      </form>
    </div>
  );
}
