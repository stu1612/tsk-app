import { Link } from "react-router-dom";

type Props = {
  title: string;
  id: string;
};

export default function DashboardItem({ title, id }: Props) {
  return (
    <div className="bg-blue-600 m-12">
      <h2>Dashboard Item</h2>
      <p>{title}</p>
      <Link to={`tasks/${title}`} state={id}>
        <button>Go to collection</button>
      </Link>
    </div>
  );
}
