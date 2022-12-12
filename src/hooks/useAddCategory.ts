// npm
import { doc, setDoc } from "firebase/firestore";
// files
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function useAddCategory() {
  const navigate = useNavigate();
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
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  }
  return { addCategory };
}
