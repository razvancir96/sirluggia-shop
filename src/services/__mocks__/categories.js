export const getCategoriesService = () =>
  Promise.resolve(["shoes", "sweaters"]);

export const getCategoryService = () =>
  Promise.resolve({
    items: [
      {
        id: 1,
        name: "Sneakerși piele Massimo Dutti",
        price: 135,
        currency: "LEI",
        image: "https://i.imgur.com/Rz8lVQa.jpg",
        size: 45,
        colour: "Negru",
        material: "Piele",
        brand: "Massimo Dutti",
        description:
          "Sneakerși din piele cu talpă inițial albă, din colecția de toamnă-iarnă 2019, Massimo Dutti.",
      },
      {
        id: 2,
        name: "Teniși negri Polo Ralph Lauren",
        price: 100,
        currency: "LEI",
        image: "https://i.imgur.com/Og3Oh24.jpg",
        size: 45,
        colour: "Negru",
        material: "Pânză",
        brand: "Polo Ralph Lauren",
        description:
          "Teniși din pânză cu talpă inițial albă, din colecția de primăvară-vară 2019, Fashion Days.",
      },
      {
        id: 3,
        name: "Ghete din piele maro Massimo",
        price: 185,
        currency: "LEI",
        image: "https://i.imgur.com/zoqSu87.jpg",
        size: 45,
        colour: "Maro",
        material: "Piele",
        brand: "Massimo Dutti",
        description:
          "Ghete maro din piele, din colecția de toamnă-iarnă 2017, Massimo Dutti.",
      },
    ],
    image: "https://i.imgur.com/X0qldXO.jpg",
    name: "Încălțăminte",
    description: "Ghete, pantofi, sneakerși: finețe garantată!",
  });
