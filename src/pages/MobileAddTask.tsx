import { FormEvent } from "react";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";

// files
import Input from "../features/forms/Input";
import Button from "../features/UI/Button";
import useAddTask from "../hooks/useAddTask";
import form from "../data/task.json";

export default function MobileAddTask() {
  const { user } = useAuthContext();
  // local state
  const [task, setTask] = useState("");
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();

  // properties
  const { addTask } = useAddTask();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    addTask(`users/${user.uid}/category/${id}/tasks`, task);
    setTask("");
    navigate(-1);
  };
  return (
    <div className="md:grid absolute top-1/2 transform -translate-y-1/2  w-full p-2">
      <h1 className="text-2xl font-bold mb-6">
        Add a new task to your collection !
      </h1>
      <form onSubmit={handleSubmit} className="relative">
        <Input setup={form.task} state={[task, setTask]} />
        <div className="flex flex-col w-full">
          <Button text="add task" theme="light" />
          <div className="grid mt-4">
            <Button
              text="close"
              theme="dark"
              clickHandler={() => navigate(-1)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
