import { Link } from "react-router-dom";
import { useECommerce } from "../../context/ECommerceContext";
import "../home/Home.css";

export const Home = () => {
  const { productsCategories } = useECommerce();
  // const filteredProducts=productsCategories.filter((category)=>)
  // const categories=["musical instrument","nutrition","clothes","gadgets","sports equipments","home appliances"]
  // const [category,setCategory]=useState()
  // console.log(category)
  return (
    <div className="home">
      <div>
        <Link to="/product-listing-page/all">
          <img
            className="heroImage"
            src="https://images-static.nykaa.com/uploads/eab8444c-6773-4c5e-a7e4-3a08cf417250.jpg?tr=w-1200,cm-pad_resize"
            alt=""
          />
        </Link>

        <h1>Upto 60%off</h1>
      </div>
      <h1>Shop By Category</h1>
      <div className="categoryList">
        {" "}
        {productsCategories.map((category) => (
          <li >
            <Link to={`/product-listing-page/${category.categoryName}`}>
              <img src={category.image} className="categoryImage" />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
