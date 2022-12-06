import { createContext, useState, useEffect } from "react";
import useCollection from "../hooks/useCollection";

export const CategoryContext = createContext();

export default function CategoryContextProvider({ children }) {
  const { docs } = useCollection(`categories`);
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
