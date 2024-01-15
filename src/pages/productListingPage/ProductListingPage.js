import React from "react";
import { useState } from "react";
import "../productListingPage/ProductListingPage.css";
import { useECommerce } from "../../context/ECommerceContext";
import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/filters/Sidebar";
import {
  getFilteredProducts,
  getFilteredByRating,
  getSortedByPrice,
  getSortedProductsBySlider,
} from "../../utils";
import { ProductCard } from "../productCard/ProductCard";
import ShimmerProductCard from "../../components/shimmerCard/ShimmerProductCard";

export const ProductListingPage = () => {
  const { productsData, state, dispatch } = useECommerce();
  const { productCategory } = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const { categoryFilters, rating, sortBy, priceInput, searchTerm, isLoading } =
    state;

  const filteredCategory =
    productCategory === "all"
      ? productsData
      : productsData.filter(({ section }) => section === productCategory);

  const clearFilterHandler = () => {
    dispatch({ type: "CLEAR_FILTER" });
    setShowFilter(false);
  };

  const filteredProducts = getFilteredProducts(
    filteredCategory,
    categoryFilters
  );
  const filteredByRatingProducts = getFilteredByRating(
    filteredProducts,
    rating
  );
  const sortedByPriceProducts = getSortedByPrice(
    filteredByRatingProducts,
    sortBy
  );
  const sortedProducts = getSortedProductsBySlider(
    sortedByPriceProducts,
    priceInput
  );
  return (
    <div className="container">
      <div className="sidebarContent">
        <Sidebar
          filteredCategory={filteredCategory}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />{" "}
        <button onClick={clearFilterHandler}>clear</button>
      </div>
      <div className="productListing">
      {isLoading&&<ShimmerProductCard/>}
        {sortedProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      {/* responsive sidebar */}
      {showFilter && (
        <div className="responsiveSidebarWrapper">
          <div className="responsiveSidebar">
            <Sidebar
              filteredCategory={filteredCategory}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
            <button className="applyButton">Apply</button>
          </div>
        </div>
      )}
       <div className="sidebarButtonContainer">
        <div>
          <button onClick={() => setShowFilter(!showFilter)}>Filters</button>
        </div>
        <div>
          <button onClick={clearFilterHandler}>Clear</button>
        </div>
      </div>
</div>
  );
};
