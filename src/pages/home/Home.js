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
    <div>
      <div>
        <Link to="/product-listing-page/all">
          <img
            className="heroImage"
            src="https://th.bing.com/th/id/OIP.nZ5q6Q4kci8ZTJxeoFVZ-gHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
