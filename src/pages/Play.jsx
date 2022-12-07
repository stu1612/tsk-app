// npm
import { useState, useEffect } from "react";
import { db } from "../firebase/config";

import { query, getDocs } from "firebase/firestore";
import { doc, setDoc, Timestamp, addDoc, collection } from "firebase/firestore";
import { updateDoc, arrayUnion } from "firebase/firestore";

import useAddCategory from "../hooks/useAddCategory";
import useAddTest from "../hooks/useAddTest";
import { useAuthContext } from "../hooks/useAuthContext";
import useCollection from "../hooks/useCollection";

export default function Play() {
  const { addTest } = useAddTest();
  const { user } = useAuthContext();
  const { docs } = useCollection("categories");
  const { docs: cats } = useCollection(
    `users/HPsunGRkk4Rlnr0skxZRqtMofoH3/category`
  );
  const { addCategory } = useAddCategory();

  const arr1 = docs && docs;
  const arr2 = cats && cats;

  // let arr =
  //   arr1 && arr1.concat(arr2.filter((item) => arr1.indexOf(item.title) < 0));
  // console.log(arr);

  const items =
    docs &&
    docs.map((item) => (
      <button
        key={item.id}
        className="p-3 border inline-block m-2"
        onClick={() =>
          addCategory(
            `users/HPsunGRkk4Rlnr0skxZRqtMofoH3/category`,
            item.title,
            item.icon,
            item.color,
            item.isChecked
          )
        }
      >
        <p>{item.title}</p>
      </button>
    ));

  // SET DOC
  async function setData() {
    const docData = {
      stringExample: "Hello world!",
      booleanExample: true,
      numberExample: 3.14159265,
      dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
        a: 5,
        b: {
          nested: "foo",
        },
      },
    };
    await setDoc(doc(db, "data", "one"), docData);
    // setDoc(doc(database, path, id)) - setDoc allows to add specific id name
  }

  // ADD DOC
  async function addData() {
    await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan",
    });
    // addDoc allows firebase to insert generic id name
  }

  // UPDATE DOC #1
  async function updateDocument() {
    const ref = doc(db, "cities", "PFLO4rbSQQ8WFvZ1W9eX");

    await updateDoc(
      ref,
      {
        hasVisited: true,
      },
      { merge: true }
    );
  }

  // UPDATE DOC #2
  async function updateObject() {
    const ref = doc(db, "data", "one");

    await updateDoc(
      ref,
      {
        booleanExample: false,
        "objectExample.a": 10,
      },
      { merge: true }
    );
  }

  async function updateArray() {
    const ref = doc(db, "data", "one");

    // Atomically add a new region to the "regions" array field.
    await updateDoc(ref, {
      arrayExample: arrayUnion("isChecked"),
    });

    // Atomically remove a region from the "regions" array field.
    // await updateDoc(washingtonRef, {
    //   regions: arrayRemove("east_coast"),
    // });
  }

  async function updateArray2() {
    const ref = doc(db, "category", "cat");

    // Atomically add a new region to the "regions" array field.
    await updateDoc(ref, {
      categories: arrayUnion("isSelected:true"),
    });

    // Atomically remove a region from the "regions" array field.
    // await updateDoc(washingtonRef, {
    //   regions: arrayRemove("east_coast"),
    // });
  }

  return (
    <div>
      {items}
      <h2>PLAYGROUND</h2>
      <div>-----------------</div>
      <h4>SET DOC</h4>
      <button onClick={setData}>Button</button>
      <div>-----------------</div>
      <h4>ADD DOC</h4>
      <button onClick={addData}>Button</button>
      <div>-----------------</div>
      <h4>UPDATE OBJ</h4>
      <button onClick={updateObject}>Button</button>
      <div>-----------------</div>
      <h4>UPDATE ARR</h4>
      <button onClick={updateArray2}>Button</button>
    </div>
  );
}
