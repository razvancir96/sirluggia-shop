import { db } from "../apis/firebase/firebase";

export const getCategoriesService = () =>
  new Promise((resolve, reject) => {
    const categoryArray = [];

    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();

          categoryArray.push({
            route: doc.id,
            name: data.name,
            description: data.description,
            image: data.image,
          });
        });

        resolve(categoryArray);
      })
      .catch((error) => reject(error));
  });

export const getCategoryService = (categoryName) =>
  new Promise((resolve, reject) => {
    db.collection("categories")
      .doc(categoryName)
      .get()
      .then((categoryRef) => {
        const category = categoryRef.data();
        const productsArray = [];
        const promiseArray = [];

        category.items.forEach((itemId) => {
          const productPromise = db.collection("products").doc(itemId).get();
          promiseArray.push(productPromise);
        });

        // first get all the products then add their info
        Promise.all(promiseArray).then((products) => {
          products.forEach((productRef) => {
            const data = productRef.data();
            productsArray.push({
              id: productRef.id,
              name: data.name,
              price: data.price,
              currency: data.currency,
              image: data.image,
            });
          });

          resolve({
            name: category.name,
            items: productsArray,
          });
        });
      })
      .catch((error) => reject(error));
  });
