// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
// import useLogin from "../hooks/useLogin";
import Input from "../features/forms/Input";
import form from "../data/signup.json";
import Button from "../features/UI/Button";
import image from "../assets/images/Boarding_BG.png";
import BoardingLayout from "../features/UI/BoardingLayout";
import LoggedOutNav from "../features/UI/LoggedOutNav";
import Header from "../features/UI/Header";

export default function Login() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  // const { error, login } = useLogin();

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
    <>
      <BoardingLayout>
        <div className=" absolute h-screen z-40 w-full bg-slate-800 bg-opacity-40 backdrop-filter backdrop-blur-md"></div>
        <LoggedOutNav />
        <Header />
        <section className="w-full z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] flex justify-center items-center min-h-fit rounded-3xl bg-slate-500 bg-opacity-60 backdrop-filter backdrop-blur-sm ">
          <form onSubmit={handleSubmit} className="flex flex-col w-full p-8">
            <Input setup={form.email} state={[email, setEmail]} />
            <Input setup={form.password} state={[password, setPassword]} />
            <Button text="login" theme="light" />
            <Link to="/" className="inline-grid">
              <Button text="close" theme="dark" />
            </Link>
          </form>
        </section>
      </BoardingLayout>
    </>
  );
}
