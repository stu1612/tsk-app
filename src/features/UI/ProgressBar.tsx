import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  percentage: number;
  color: string;
};

export default function ProgressBar({ percentage, color }: Props) {
  return (
    <div className="h-7 w-7">
      <CircularProgressbar
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "rounded",
          pathTransitionDuration: 0.5,
          // pathColor: "#20212C",
          pathColor: "#262628",
          trailColor: color,
        })}
      />
    </div>
  );
}
