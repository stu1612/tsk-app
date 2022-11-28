// npm
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <br />
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/reset_password">Reset</Link>
      </div>
    </>
  );
}
