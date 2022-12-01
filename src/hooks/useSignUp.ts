// npm
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

// files
import { auth, storage } from "../firebase/config";
import { db } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export default function useSignUp() {
  // local state
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // properties
  const { dispatch } = useAuthContext();

  const signup = async (
    email: string,
    password: string,
    displayName: string,
    thumbnail: any
  ) => {
    setError(null);
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not complete sign up");
      }
      const storageRef = ref(storage, `thumbnails/${res.user.uid}/blob`);

      // upload file to storage
      const upload = await uploadBytes(storageRef, thumbnail).then(
        (snapshot) => {
          return snapshot;
        }
      );

      // download upload reference - item is appended to the built user photoULR property
      const img = await getDownloadURL(upload.ref);

      await updateProfile(res.user, {
        displayName,
        photoURL: img,
      });

      const docRef = doc(db, "users", res.user.uid);
      await setDoc(docRef, {
        online: true,
        displayName,
        photoURL: img,
      });

      dispatch({ type: "LOGIN", payload: res.user });
      setLoading(false);
      setError(null);

      if (!isCancelled) {
        setLoading(false);
        setError(null);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, loading };
}
