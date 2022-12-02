import { createContext, useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import useCollection from "../hooks/useCollection";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const { user } = useAuthContext();
  const { docs } = useCollection(`users/${user.uid}/categories`);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const clonedArr = Object.assign([], docs);
    setCategories(clonedArr);
  }, [docs]);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
}
