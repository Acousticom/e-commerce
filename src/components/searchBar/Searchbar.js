import React, { useState } from "react";
import { useECommerce } from "../../context/ECommerceContext";
import "../searchBar/Searchbar.css"
export const Searchbar = () => {
  const {dispatch}= useECommerce()
  return (
    <div>
      <input className="searchBar"
        type="search"
        placeholder="Search product"
        onChange={(event) => dispatch({type:"SEARCH_TERM", payload:event.target.value})}
      />

    </div>
  );
};
