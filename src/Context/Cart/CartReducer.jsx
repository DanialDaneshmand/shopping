const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const id = action.payload._id;
      const index = state.cart.findIndex((p) => p._id === id);
      const updatedItems = [...state.cart];
      if (index < 0) {
        const product = action.payload;

        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
          total: state.total + action.payload.offPrice,
        };
      } else {
        const updateItem = { ...updatedItems[index] };
        updateItem.quantity++;
        updatedItems[index] = updateItem;
        return {
          ...state,
          cart: updatedItems,
          total: state.total + action.payload.offPrice,
        };
      }
    }
    case "DECREMENT": {
      const id = action.payload._id;
      const index = state.cart.findIndex((p) => p._id === id);
      const updatedProducts = [...state.cart];
      if (action.payload.quantity > 1) {
        updatedProducts[index].quantity--;
        return {
          ...state,
          cart: updatedProducts,
          total: state.total - action.payload.offPrice,
        };
      } else {
        const updatedItems = updatedProducts.filter((p) => p._id !== id);
        return {
          ...state,
          cart: updatedItems,
          total: state.total - action.payload.offPrice,
        };
      }
    }
    case "INCREMENT": {
      const id = action.payload._id;
      const index = state.cart.findIndex((p) => p._id === id);
      const updatedProducts = [...state.cart];
      updatedProducts[index].quantity++;
      return {
        ...state,
        cart: updatedProducts,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE": {
      const id = action.payload._id;
      const updatedProducts = [...state.cart];
      const updatedItems = updatedProducts.filter((p) => p._id !== id);
      return {
        ...state,
        cart: updatedItems,
        total: state.total - action.payload.offPrice * action.payload.quantity,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
