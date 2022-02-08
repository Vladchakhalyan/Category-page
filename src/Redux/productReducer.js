import kolco from "./kolco.png";
import kole from "./kole.png";

let ADDPRODUCT = "ADDPRODUCT";

let initialState = {
  category: [
    {
      id: 1,
      img: kolco,
      name: "кольцo",
      data: [
        { text: "кольцo" },
        { text: "обручальные" },
        { text: "кольца кастеты " },
      ],
    },
    {
      id: 2,
      img: kole,
      name: "колье ",
      data: [{ text: "коктейльные" }, { text: "помолвочные" }],
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return { ...state, category: [...state.category, action.newcategory] };
    default:
      return state;
  }
};

export let addCategory = (newcategory) => {
  return {
    type: ADDPRODUCT,
    newcategory: newcategory,
  };
};
