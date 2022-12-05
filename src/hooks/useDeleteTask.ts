// npm
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";

// files
import { db } from "../firebase/config";

export default function useDeleteTask() {
  // local state
  const [error, setError] = useState(null);

  async function deleteTask(path: string, id: string) {
    const ref = doc(db, path, id);
    try {
      await deleteDoc(ref);
    } catch (err) {
      setError(err as typeof error);
    }
  }
  return { deleteTask, error };
}
