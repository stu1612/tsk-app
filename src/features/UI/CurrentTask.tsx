// files
import capitalizeString from "../../utils/capitalizeString";
import CheckBox from "./CheckBox";
import useUpdateTaskStatus from "../../hooks/useUpdateTaskStatus";
import Moment from "./Moment";

type TaskProp = {
  title: string;
  isChecked: boolean;
  timestamp: any;
  path: string;
  id: string;
};

export default function CurrentTask({
  title,
  timestamp,
  id,
  isChecked,
  path,
}: TaskProp) {
  const { update } = useUpdateTaskStatus();
  return (
    <div className="w-full">
      <div
        className="flex flex-col p-2 rounded-xl my-2"
        style={{ background: "#20212C" }}
      >
        <div className="flex flex-row">
          <CheckBox
            isChecked={isChecked}
            handleChange={() => update(path, id, true)}
          />
          <h2>{capitalizeString(title)}</h2>
        </div>
        <Moment timestamp={timestamp} />
      </div>
    </div>
  );
}
