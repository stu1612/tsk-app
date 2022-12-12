import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import useLogout from "./useLogout";

export default function useResetPassword() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  // properties
  const { dispatch } = useAuthContext();
  const { logout } = useLogout();

  // properties
  async function resetPassword(email: string) {
    setLoading(true);
    setError(null);
    setSuccess("");
    try {
      const res = await sendPasswordResetEmail(auth, email);
      dispatch({ type: "RESET_PASSWORD", payload: res });
      toast.success(`An email has been sent to ${email} with instructions`);
      setSuccess(
        `An email has been sent to ${email} with instructions to update your password. Please check your spam folder if you cannot find email!`
      );
      logout();

      setLoading(false);
      setError(null);
      if (!isCancelled) {
        setError(null);
        setLoading(false);
        setSuccess("");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error("Something went wrong!");
        setLoading(false);
        setSuccess("");
        if (!isCancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { resetPassword, loading, error, success };
}
