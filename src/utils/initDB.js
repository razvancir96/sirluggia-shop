// TODO: Move this to backend. Also move products.json.

import { db } from "../apis/firebase/firebase";
import json from "./products.json";

function removeId(obj) {
  const result = {};

  const objKeys = Object.keys(obj);

  objKeys.forEach((key) => {
    if (key !== "id") {
      result[key] = obj[key];
    }
  });

  return result;
}

export function deleteDocuments() {
  db.collection("products")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => doc.ref.delete());
    });
  db.collection("categories")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => doc.ref.delete());
    });
}

export function initDB() {
  const categories = Object.keys(json);

  categories.forEach((category) => {
    const categoryContent = json[category];
    const itemsIdList = [];
    const promiseArray = [];

    categoryContent.items.forEach((product) => {
      const addProductPromise = db
        .collection("products")
        .add(removeId(product));
      promiseArray.push(addProductPromise);
    });

    // Products are added to firebase async, so we have to wait for
    // all the promises to resolve in order to get the product ids
    Promise.all(promiseArray).then((docRefs) => {
      docRefs.forEach((docRef) => {
        itemsIdList.push(docRef.id);
      });

      db.collection("categories")
        .doc(category)
        .set({
          ...categoryContent,
          items: itemsIdList,
        });
    });
  });
}
