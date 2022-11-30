// npm
import { Link } from "react-router-dom";
import { FiSkipBack } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function GoBackBtn() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Link to={`${path}`}>
      <FiSkipBack />
    </Link>
  );
}
