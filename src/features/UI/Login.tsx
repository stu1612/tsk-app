// npm
import { useState } from "react";
import useModal from "../../hooks/useModal";

// files
// import useLogin from "../hooks/useLogin";
import Input from "../../features/forms/Input";
import form from "../../data/signup.json";
import Button from "../../features/UI/Button";

export default function Login() {
  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // properties
  // const { error, login } = useLogin();
  const { toggleModal } = useModal();

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
    <section className="w-full md:w-[400px] flex justify-center items-center min-h-fit rounded-t-xl rounded-b-2xl bg-slate-500 bg-opacity-60 backdrop-filter backdrop-blur-sm ">
      <form onSubmit={handleSubmit} className="flex flex-col w-full p-8">
        <Input setup={form.email} state={[email, setEmail]} />
        <Input setup={form.password} state={[password, setPassword]} />
        <Button text="login" theme="light" />
        <Button text="close" theme="dark" clickHandler={toggleModal} />
      </form>
    </section>
  );
}
