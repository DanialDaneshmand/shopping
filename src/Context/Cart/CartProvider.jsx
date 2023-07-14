import { useContext, useReducer } from "react";
import { createContext } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer,initialState );
  return (
    <CartContextDispatcher.Provider value={dispatch}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </CartContextDispatcher.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
