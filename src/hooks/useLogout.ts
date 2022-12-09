// npm
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";

// files
import { auth } from "../firebase/config";
// import { useAuthContext } from "./useAuthContext";

export default function useLogout() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function logout() {
    setError(null);
    setLoading(true);

    try {
      await signOut(auth);
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err: any) {
      if (!isCancelled) {
        setError(err.message);
        setLoading(false);
        console.error(err);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, loading, logout };
}
