// @ts-nocheck

import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { collection, onSnapshot } from "firebase/firestore";

export default function useCollection(c: string) {
  const [docs, setDocs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let ref = collection(db, c);

    const unSubscribe = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocs(results);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, [c]);

  return { docs, isLoading };
}
