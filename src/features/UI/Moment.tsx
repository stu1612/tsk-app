// npm
import moment from "moment";

type Props = {
  timestamp: string | any;
};

export default function Moment({ timestamp }: Props) {
  const date = new Date(timestamp && timestamp.toDate()).toUTCString();

  return (
    <small className="text-xs text-orange-400 leading-none ml-7 pt-1">
      {moment(date, "ddd, DD MMM YYYY HH:mm:ss").fromNow()}
    </small>
  );
}
