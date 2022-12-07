// npm
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
// files
import useCollection from "./useCollection";
import { useAuthContext } from "./useAuthContext";
import { db } from "../firebase/config";

export default function useAddTest() {
  async function addTest(path: string) {
    try {
      const ref = collection(db, path, "title");
      await addDoc(ref, {
        // categories,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return { addTest };
}

// export default function useAddTest() {
//   const { user } = useAuthContext();

//   async function addTest(path: string) {
//     try {
//       const ref = doc(db, path, "names");
//       await setDoc(
//         ref,
//         {
//           docs,
//         },
//         { merge: true }
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   return { addTest };
// }

// export default function useAddTest() {
//   const { user } = useAuthContext();
//   const { categories } = useCategoryContext();
//   const data = {
//     holiday: {
//       title: "holiday",
//     },
//     finance: {
//       title: "finances",
//     },
//   };
//   async function addTest(path: string) {
//     try {
//       // const ref = doc(db, path, user.uid);
//       const ref = doc(db, path, "cat");
//       await setDoc(ref, { data });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   return { addTest };
// }
