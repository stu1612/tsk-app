// npm
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

// files
import { db } from "../firebase/config";

export default function useDeleteTask() {
  // local state
  const [error, setError] = useState(null);

  async function deleteTask(path: string, id: string) {
    const ref = doc(db, path, id);
    try {
      await deleteDoc(ref);
      toast.success(`Task removed !`);
    } catch (err) {
      setError(err as typeof error);
      toast.error(`Ooops, something went wrong!`);
    }
  }
  return { deleteTask, error };
}
