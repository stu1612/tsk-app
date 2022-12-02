import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// files
import useAddTask from "../../hooks/useAddTask";

type idProp = {
  id: string;
};

export default function AddTask({ id }: idProp) {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleChange}
        className=" w-full bg-yellow-500"
      />
    </form>
  );
}
