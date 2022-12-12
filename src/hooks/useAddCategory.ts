// npm
import { doc, setDoc } from "firebase/firestore";
// files
import { db } from "../firebase/config";
import { toast } from "react-hot-toast";

export default function useAddCategory() {
  async function addCategory(
    path: string,
    color: string,
    icon: string,
    isChecked: boolean,
    title: string
  ) {
    try {
      const docData = {
        color: color,
        icon: icon,
        isChecked: isChecked,
        title: title,
      };

      await setDoc(doc(db, path, title), docData);
      toast.success(`Collection added !`);
    } catch (err) {
      console.log(err);
    }
  }
  return { addCategory };
}
