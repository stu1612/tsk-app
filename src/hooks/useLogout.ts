// npm
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-hot-toast";

// files
import { auth } from "../firebase/config";

export default function useLogout() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  async function logout() {
    setError(null);
    setLoading(true);

    try {
      await signOut(auth).then(() => {
        dispatch({ type: "LOGOUT" });
      });
      toast.success("You have succesfully logged out");
      navigate("/");

      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err: any) {
      if (!isCancelled) {
        setError(err.message);
        toast.error(`Ooops, something went wrong!`);
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
