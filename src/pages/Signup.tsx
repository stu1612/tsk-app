// npm
import { useState } from "react";

// files
import form from "../data/signup.json";
import useSignUp from "../hooks/useSignUp";

// UI
import Button from "../features/UI/Button";
import FileInput from "../features/forms/FileInput";
import GoBackButton from "../features/UI/GoBackButton";
import Header from "../features/UI/Header";
import Input from "../features/forms/Input";
import Loading from "../features/UI/Loading";
import OnBoardingLayout from "../features/UI/OnBoardingLayout";
import OnBoardingNavbar from "../features/UI/OnBoardingNavbar";

export default function Signup() {
  // local state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<Blob | string>("");
  const [imgError, setImgError] = useState<string | null>("");

  // properties
  const { signup, error, loading } = useSignUp();

  // methods
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    signup(email, password, name, thumbnail);
  }

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    setThumbnail("");
    const result = (e.target as HTMLInputElement).files;
    let selected = result![0];

    if (!selected) {
      setImgError("Please add a image thumbnail for your profile");
      return;
    }
    if (!selected.type.includes("image")) {
      setImgError("Selected file must be a image file * png/gif/jpg *");
      return;
    }
    if (selected.size > 200000) {
      setImgError("Image file size must be less than 200kb");
      return;
    }
    setImgError(null);
    setThumbnail(selected);
  };

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
          <Input setup={form.displayName} state={[name, setName]} />
          <FileInput imgError={imgError} handleFileChange={handleFileChange} />
          {imgError && <Button text="sign up" theme="light" disabled={true} />}
          {!imgError && <Button text="sign up" theme="light" />}
          <GoBackButton />
          {error && <small className="text-yellow-600">{error}</small>}
        </form>
      </section>
      {loading && <Loading />}
    </OnBoardingLayout>
  );
}
