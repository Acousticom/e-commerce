import React from "react";
import { useECommerce } from "../../context/ECommerceContext";
import { ratingsBy, sortingBy } from "../../data/filterData";

export const Sidebar = () => {
  const {productsCategories, dispatch, state } = useECommerce();
  const { priceInput, categoryFilters, rating, sortBy } = state;

  const categoryCheckboxHandler = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      dispatch({
        type: "CATEGORY_FILTERS",
        payload: [...categoryFilters, category],
      });
    } else {
      const updatedCategoryFilters = categoryFilters.filter(
        (filter) => filter !== category
      );
      dispatch({ type: "CATEGORY_FILTERS", payload: updatedCategoryFilters });
    }
  };

  return (
    <div className="sidebarContainer">
      <h3 className="lineHeight">Category</h3>
      {productsCategories.map((category) => (
        <div className="category">
          <input
            type="checkbox"
            value={category.categoryName}
            onChange={categoryCheckboxHandler}
            checked={categoryFilters.includes(category.categoryName)}
          />
          <label>{category.categoryName}</label>
        </div>
      ))}

      <h3 className="lineHeight">Rating</h3>
      {ratingsBy.map((rate, index) => (
        <div>
          <label key={index}>
            <input
              type="radio"
              name="rate"
              value={rate}
              checked={rate === rating}
              onChange={(event) =>
                dispatch({ type: "RATING", payload: event.target.value })
              }
            />
            {rate} ⭐ & above
          </label>
        </div>
      ))}


      <h3 className="lineHeight">Sort by</h3>
      {sortingBy.map((sort) => (
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value={sort}
              checked={sort === sortBy}
              onChange={(event) =>
                dispatch({ type: "SORT_BY", payload: event.target.value })
              }
            />
            {sort}
          </label>
        </div>
      ))}


      <h3 className="lineHeight">Price</h3>
      <p>{priceInput}</p>
      <input
        type="range"
        min={0}
        max={5000}
        step={500}
        value={priceInput}
        onChange={(event) =>
          dispatch({ type: "PRICE_RANGE_INPUT", payload: event.target.value })
        }
      />
    </div>
  );
};

export default Sidebar;
