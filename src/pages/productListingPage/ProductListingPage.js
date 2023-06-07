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
  // getSearchProducts,
} from "../../utils";
import { ProductCard } from "../productCard/ProductCard";

export const ProductListingPage = () => {
  const { productsData, productsCategories, state, dispatch } = useECommerce();
  const { productCategory } = useParams();
  const [showFilter, setShowFilter] = useState();
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
  // const searchedProducts = getSearchProducts(sortedProducts, searchTerm);
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar
          filteredCategory={filteredCategory}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />{" "}
        <button onClick={() => setShowFilter(true)}>Filters</button>
        <button onClick={clearFilterHandler}>clear</button>
      </div>
      <div className="productListing">
        {sortedProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
