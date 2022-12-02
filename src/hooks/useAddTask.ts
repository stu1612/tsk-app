// npm
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
    } catch (err) {
      console.log(err);
    }
  }
  return { addTask };
}
