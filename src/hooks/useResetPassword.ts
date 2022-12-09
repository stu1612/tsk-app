import { useState } from "react";
import { auth } from "../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function useResetPassword() {
  // local state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // properties
  async function resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      console.log(err);
    }
  }
  return { resetPassword };
}
