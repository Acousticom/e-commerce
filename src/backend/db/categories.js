import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:"https://images-static.nykaa.com/uploads/38c57571-2b67-46e5-b75d-fb24dccdca36.jpg?tr=w-200,cm-pad_resize"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:'https://images-static.nykaa.com/uploads/7f62ee61-a1dd-459a-841b-de9152bcd75a.jpg?tr=w-200,cm-pad_resize'
  },
  {
    _id: uuid(),
    categoryName: "kids",
    image:"https://images-static.nykaa.com/uploads/a9f1ec5f-05b8-43ca-be0d-3014eea9ef78.jpg?tr=w-200,cm-pad_resize"
  },
];
