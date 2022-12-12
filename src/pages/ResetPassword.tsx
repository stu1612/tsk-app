import { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useResetPassword from "../hooks/useResetPassword";
import useLogout from "../hooks/useLogout";
import Loading from "../features/UI/Loading";

// files
import Input from "../features/forms/Input";
import Button from "../features/UI/Button";
import form from "../data/task.json";
// import Toast from "../features/UI/Toast";

export default function ResetPassword() {
  // properties
  const { resetPassword } = useResetPassword();

  // local state
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    resetPassword(email);
    setEmail("");
  };
  return (
    <div className="md:flex justify-center">
      <div className="md:grid absolute top-1/2 transform -translate-y-1/2  w-full p-6 md:w-[500px]">
        <h1 className="text-2xl font-bold mb-6">New password request.</h1>
        <div className="mb-6">
          <p>
            Upon password request an email will be sent to the email account you
            signed up with. In the email, a link will help you create a new
            password where you can then login again with your email and{" "}
            <span className="text-pink-400"> new</span> password.
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
          {/* {error && <small className="text-yellow-600">{error}</small>} */}
        </form>
      </div>
      {/* {loading && <Loading />} */}
    </div>
  );
}
