// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files
// import useLogin from "../hooks/useLogin";

export default function Login() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  // const { error, login } = useLogin();
  const navigate = useNavigate();

  // methods
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // login(email, password);
    if (email && password) {
      setEmail("");
      setPassword("");
    }
    setTimeout(() => {}, 1000);
  }

  return (
    <div className="flex flex-col justify-start">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="text-black"
        />
        <button>Continue</button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}
