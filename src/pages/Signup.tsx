// npm
import React, { useState } from "react";

// files
import useSignUp from "../hooks/useSignUp";

export default function Signup() {
  // local state
  const [email, setEmail] = useState<string>("test@test.se");
  const [password, setPassword] = useState<string>("test123");
  const [displayName, setDisplayName] = useState<string>("Tester");
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
    console.log(selected);

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
        <label className="flex flex-col">
          Email:
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="text-black mb-8"
          />
        </label>
        <label className="flex flex-col">
          Password:
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="text-black mb-8"
          />
        </label>
        <label className="flex flex-col">
          Display Name:
          <input
            required
            type="text"
            placeholder="Display name"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="text-black mb-8"
          />
        </label>
        <label className="flex flex-col">
          File:
          <input required type="file" onChange={handleFileChange} />
          {imageError && <p className="bg-yello-500">{imageError}</p>}
        </label>

        {/* {loading && <button disabled>Loading ..</button>}
        {!loading && <button>Sign up</button>} */}
        <button>Sign up</button>
      </form>

      {/* {error && <p>{error}</p>} */}
    </div>
  );
}
