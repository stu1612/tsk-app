// files
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export default function useUpdateTaskStatus() {
  async function update(path: string, id: string, checked: boolean) {
    const docRef = doc(db, path, id);
    const data = {
      isChecked: checked,
    };
    try {
      await setDoc(docRef, data, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }
  return { update };
}
