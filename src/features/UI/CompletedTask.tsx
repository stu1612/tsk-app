// files
import useUpdateTaskStatus from "../../hooks/useUpdateTaskStatus";
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
  const { update } = useUpdateTaskStatus();
  return (
    <div
      className="w-full flex flex-col p-2 rounded-xl my-2"
      style={{ background: "#20212C" }}
    >
      <div className="flex flex-row">
        <CheckBox
          isChecked={isChecked}
          handleChange={() => update(path, id, false)}
        />
        <p className={`${isChecked && "line-through text-slate-400"}`}>
          {title}
        </p>
      </div>
      <Moment timestamp={timestamp} />
    </div>
  );
}
