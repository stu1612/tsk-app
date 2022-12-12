// npm
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-hot-toast";

// files
import { db } from "../firebase/config";

export default function useAddTask() {
  async function addTask(path: string, task: string) {
    try {
      const ref = collection(db, path);
      await addDoc(ref, {
        title: task,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      toast.success(`Task created !`);
    } catch (err) {
      console.log(err);
      toast.error(`Ooops, something went wrong!`);
    }
  }
  return { addTask };
}
