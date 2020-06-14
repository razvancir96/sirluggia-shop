import { db } from "../apis/firebase/firebase";

export const getProductService = (productId) =>
  new Promise((resolve, reject) => {
    db.collection("products")
      .doc(productId)
      .get()
      .then((productDoc) => {
        const data = productDoc.data();
        const {
          name,
          price,
          currency,
          image,
          size,
          colour,
          material,
          brand,
          description,
        } = data;

        resolve({
          id: productDoc.id,
          name,
          price,
          currency,
          image,
          size,
          colour,
          material,
          brand,
          description,
        });
      })
      .catch((error) => reject(error));
  });
