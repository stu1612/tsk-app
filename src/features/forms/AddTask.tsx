import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { RiAddFill } from "react-icons/ri";

// files
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
    addTask(`users/${user.uid}/categories/${id}/tasks`, task);
    setTask("");
  };
  return (
    <div className="hidden md:grid">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={handleChange}
          className="w-full p-2 bg-dark_500 rounded-xl border border-slate-800 md:pl-12 relative focus:ring-0 focus:border-slate-500 "
        />
        <button className="hidden md:block absolute top-1/2 transform -translate-y-1/2 bg-primary py-1 px-1 ml-2 rounded-lg text-lg">
          <RiAddFill color="black" />
        </button>
      </form>
    </div>
  );
}
