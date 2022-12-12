import { Link } from "react-router-dom";

type Prop = {
  src: string;
};

export default function Avatar({ src }: Prop) {
  return (
    <Link to="/user">
      <img
        src={src}
        alt="avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
    </Link>
  );
}
