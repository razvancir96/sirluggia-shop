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
