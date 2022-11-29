// npm
import { useState } from "react";

// files
import Input from "../features/forms/Input";
import useSignUp from "../hooks/useSignUp";
import form from "../data/signup.json";
import Loading from "../features/UI/Loading";

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
    <div className="flex flex-col justify-start w-11/12 mx-auto h-screen items-center p-4">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input setup={form.email} state={[email, setEmail]} />
        <Input setup={form.password} state={[password, setPassword]} />
        <Input setup={form.displayName} state={[displayName, setDisplayName]} />
        <input required type="file" onChange={handleFileChange} />
        {imageError && <p className="bg-yello-500">{imageError}</p>}
        <div>
          <div>
            <small>Stay signed in</small>
            <input type="checkbox" name="" id="" />
          </div>

          <button className="bg-red-500 text-black p-2 cursor-pointer">
            Sign up
          </button>
        </div>
      </form>
      {loading && <Loading />}
      {/* {loading && <button disabled>Loading ..</button>}
        {!loading && <button>Sign up</button>} */}
      {/* {error && <p>{error}</p>} */}
    </div>
  );
}
