import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:"https://images.unsplash.com/photo-1623200693945-ec1e9991039a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:'https://plus.unsplash.com/premium_photo-1691367279046-33764bb09824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'
  },
  {
    _id: uuid(),
    categoryName: "kids",
    image:"https://images.unsplash.com/photo-1633382931031-4475750b6837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fHww"
  },
];
