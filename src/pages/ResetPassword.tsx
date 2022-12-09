import { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useResetPassword from "../hooks/useResetPassword";

// files
import Input from "../features/forms/Input";
import Button from "../features/UI/Button";
import form from "../data/task.json";

export default function ResetPassword() {
  // local state
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // properties
  const { resetPassword } = useResetPassword();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    resetPassword(email);
    setEmail("");
    navigate(-1);
  };
  return (
    <div className="md:flex justify-center">
      <div className="md:grid absolute top-1/2 transform -translate-y-1/2  w-full p-6 md:w-[500px]">
        <h1 className="text-2xl font-bold mb-6">
          Enter your email to reset password.
        </h1>
        <div className="mb-6">
          <p>
            Once you request a new password, you will be logged out from Tsk. An
            email will be sent your email with a link for you to update your new
            password. You wil then need to login with your email and{" "}
            <span className="text-pink-400">new </span> password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="relative">
          <Input setup={form.email} state={[email, setEmail]} />
          <div className="flex flex-col w-full">
            <Button text="reset" theme="light" />
            <div className="grid mt-4">
              <Button
                text="close"
                theme="dark"
                clickHandler={() => navigate(-1)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
