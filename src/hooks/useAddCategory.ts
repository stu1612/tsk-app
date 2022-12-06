// npm
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
// files
import { db } from "../firebase/config";

export default function useAddCategory() {
  const [selected, setSelected] = useState(false);

  async function addCategoryToCollection(
    path: string,
    title: string,
    icon: string,
    color: string,
    isChecked: boolean
  ) {
    try {
      const ref = collection(db, path);
      await addDoc(ref, {
        title: title,
        image: icon,
        color: color,
        isChecked: true,
      });
      setSelected(true);
    } catch (err) {
      console.log(err);
    }
  }
  return { addCategoryToCollection };
}
