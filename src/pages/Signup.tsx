// npm
import { useState } from "react";
import { Link } from "react-router-dom";

// files
import Input from "../features/forms/Input";
import useSignUp from "../hooks/useSignUp";
import form from "../data/signup.json";
import Loading from "../features/UI/Loading";
import Button from "../features/UI/Button";
import BoardingLayout from "../features/UI/BoardingLayout";
import LoggedOutNav from "../features/UI/LoggedOutNav";
import Header from "../features/UI/Header";

export default function Signup() {
  // local state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<Blob | string>("");
  const [imageError, setImageError] = useState<string | null>("");

  // properties
  const { signup, error, loading } = useSignUp();

  // methods
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    signup(email, password, displayName, thumbnail);
  }

  const handleFileChange = (e: React.FormEvent<HTMLInputElement>) => {
    setThumbnail("");
    const result = (e.target as HTMLInputElement).files;
    let selected = result![0];

    if (!selected) {
      setImageError("Add file");
      return;
    }
    if (!selected.type.includes("image")) {
      setImageError("Selected file must be a image file");
      return;
    }
    if (selected.size > 100000) {
      setImageError("Image file size must be less than 100kb");
      return;
    }

    setImageError(null);
    setThumbnail(selected);
  };

  return (
    <BoardingLayout>
      <div className=" absolute h-screen z-40 w-full bg-slate-800 bg-opacity-40 backdrop-filter backdrop-blur-md"></div>
      <LoggedOutNav />
      <Header />
      <section className="w-full z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[400px] flex justify-center items-center min-h-fit rounded-3xl bg-slate-500 bg-opacity-60 backdrop-filter backdrop-blur-sm ">
        <form onSubmit={handleSubmit} className="flex flex-col w-full p-8">
          <Input setup={form.email} state={[email, setEmail]} />
          <Input setup={form.password} state={[password, setPassword]} />
          <Input
            setup={form.displayName}
            state={[displayName, setDisplayName]}
          />
          <div className="mb-8 flex justify-start">
            <input
              required
              type="file"
              onChange={handleFileChange}
              className="text-sm"
            />
            {imageError && <p className="bg-yello-500">{imageError}</p>}
          </div>
          <Button text="sign up" theme="light" />
          <Link to="/" className="inline-grid">
            <Button text="close" theme="dark" />
          </Link>
        </form>
        {loading && <Loading />}
        {/* {loading && <button disabled>Loading ..</button>}
        {!loading && <button>Sign up</button>} */}
        {/* {error && <p>{error}</p>} */}
      </section>
    </BoardingLayout>
  );
}
