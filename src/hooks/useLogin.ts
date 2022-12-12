// npm
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";

// files
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export default function useLogin() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // properties
  const { dispatch } = useAuthContext();

  // methods
  async function login(email: string, password: string) {
    setError(null);
    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      toast.success(`You are logged in !`);

      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(`Ooops, something went wrong!`);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, loading };
}
