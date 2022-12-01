// npm
import { Link } from "react-router-dom";

// files
import Button from "./Button";

export default function GoBackButton() {
  return (
    <Link to={".."} className="inline-grid">
      <Button text="close" theme="dark" />
    </Link>
  );
}
