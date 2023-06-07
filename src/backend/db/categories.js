import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:"https://th.bing.com/th/id/OIP.DJ0lmtt7MeSFVWOOd6Xm2wAAAA?pid=ImgDet&w=155&h=193&c=7"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:'https://th.bing.com/th/id/OIP.mIUfcPrcdjvihsOWfb0BEQHaLb?pid=ImgDet&w=155&h=239&c=7'
  },
  {
    _id: uuid(),
    categoryName: "kids",
    image:"https://th.bing.com/th/id/OIP.wU132qgtgwZxHdPqjzDVzAHaE8?pid=ImgDet&w=155&h=103&c=7"
  },
];
