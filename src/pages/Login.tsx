// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import useLogin from "../hooks/useLogin";

// UI
import Button from "../features/UI/Button";
import form from "../data/signup.json";
import Header from "../features/UI/Header";
import Input from "../features/forms/Input";
import Loading from "../features/UI/Loading";
import OnBoardingLayout from "../features/UI/OnBoardingLayout";
import OnBoardingNavbar from "../features/UI/OnBoardingNavbar";

export default function Login() {
  // local state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // properties
  const { login, error, loading } = useLogin();

  // methods
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    login(email, password);
    if (email && password) {
      setEmail("");
      setPassword("");
    }
    setTimeout(() => {}, 1000);
  }

  return (
    <OnBoardingLayout>
      <div className="absolute h-screen z-40 w-full bg-dark_500 md:bg-opacity-40 backdrop-filter backdrop-blur-md"></div>
      <OnBoardingNavbar />
      <Header />
      <section className=" z-50 w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] grid min-h-fit  ">
        <form
          onSubmit={handleSubmit}
          className="grid py-6 px-8 rounded-3xl md:bg-opacity-70 md:bg-slate-700 backdrop-filter backdrop-blur-md"
        >
          <Input setup={form.email} state={[email, setEmail]} />
          <Input setup={form.password} state={[password, setPassword]} />
          <Button text="login" theme="light" />
          <Link to="/" className="inline-grid">
            <Button text="close" theme="dark" />
          </Link>
          {error && <small className="text-yellow-600">{error}</small>}
        </form>
      </section>
      {loading && <Loading />}
    </OnBoardingLayout>
  );
}
