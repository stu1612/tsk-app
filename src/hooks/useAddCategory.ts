// npm
import { collection, addDoc } from "firebase/firestore";
// files
import { db } from "../firebase/config";

export default function useAddCategory() {
  async function addCategoryToCollection(
    path: string,
    title: string,
    icon: string,
    color: string
  ) {
    try {
      const ref = collection(db, path);
      await addDoc(ref, {
        title: title,
        image: icon,
        color: color,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return { addCategoryToCollection };
}
