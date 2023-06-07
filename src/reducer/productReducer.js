export const initialState = {
  wishlist: [],
  cart: [],
  isLoading: false,
  priceInput: "",
  categoryFilters: [],
  rating: "",
  sortBy: "",
  searchTerm: "",
  totalMrp: "",
  totalPrice: "",
  currentIndex: 0,
  isFilter: false,
  isSortBy: false,
  selectedAddress: [],
};

export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ISLOADING_TRUE": {
      return { ...state, isLoading: true };
    }
    case "ISLOADING_FALSE": {
      return { ...state, isLoading: false };
    }
    case "CATEGORY_FILTERS": {
      return { ...state, categoryFilters: payload };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        priceInput: initialState.priceInput,
        categoryFilters: initialState.categoryFilters,
        rating: initialState.rating,
        sortBy: initialState.sortBy,
      };
    }
    case "RATING": {
      return {
        ...state,
        rating: payload,
      };
    }
    case "SORT_BY": {
      return {
        ...state,
        sortBy: payload,
      };
    }
    case "PRICE_RANGE_INPUT": {
      return { ...state, priceInput: payload };
    }
    case "ADD_TO_WISHLIST": {
      return { ...state, wishlist: [payload, ...state.wishlist] };
    }
    case "REMOVE_FROM_WISHLIST": {
      return { ...state, wishlist: payload };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: [payload, ...state.cart] };
    }
    case "ADD_TO_CART_FROM_WISHLIST": {
      return {
        ...state,
        cart: payload.updatedCart,
        wishlist: [payload.product, ...state.wishlist],
      };
    }
    case "REMOVE_FROM_CART": {
      return { ...state, cart: payload };
    }

    case "MOVE_TO_WISHLIST_FROM_CART": {
      return {
        ...state,
        cart: payload.updatedCart,
        wishlist: [payload.product, ...state.wishlist],
      };
    }
    case "DECREASE_CART_PRODUCT_QUANTITY": {
      return { ...state, cart: payload };
    }
    case "TOTAL_PRICE": {
      return {
        ...state,
        totalPrice: payload.updatedTotalPrice,
        totalMrp: payload.updatedTotalMrp,
      };
    }
    case "EXISTING_PRODUCT": {
      return { ...state, cart: payload };
    }
    case "PREVIOUS_CURRENT_INDEX": {
      return { ...state, currentIndex: state.currentIndex - 1 };
    }
    case "NEXT_CURRENT_INDEX": {
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    }
    case "IS_SORTBY": {
      return { ...state, isSortBy: !state.isSortBy };
    }
    case "IS_FILTER": {
      return { ...state, isFilter: !state.isFilter };
    }
    case "IS_FILTER": {
      return {
        ...state,
        selectedAddress: [payload],
      };
    }
    default:
      return { ...state };
  }
};
