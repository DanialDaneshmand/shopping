import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../../Context/Cart/CartProvider";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const dispatch = useCartActions();
  const { cart } = useCart();
  const checkCart = (product, cart) => {
    return cart.find((p) => p._id === product._id);
  };
  return (
    <div>
      <div>
        <img src={product.image} alt={product.name} className="w-full h-64" />
      </div>
      <div className="bg-violet-200 rounded-b-sm px-2 py-4 flex justify-between flex-col md:flex-row">
        <p className="text-violet-900  w-full md:w-auto ">{product.name}</p>
        <p className="text-violet-900 w-full md:w-auto ">{product.price} $</p>

        {checkCart(product, cart) ? (
          <button className="w-full md:w-auto px-2 py-1    rounded-md bg-violet-900 ">
            <Link to="/cart" className="text-white p-0 hover:bg-violet-900">
              رفتن به سبد خرید
            </Link>
          </button>
        ) : (
          <button
            className="w-full md:w-auto px-2 py-1   text-white rounded-md bg-violet-900 "
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: product });
              toast.success(` به سبد خرید اضافه شد ${product.name}`)
            }}
          >
            افزودن به سبد خرید
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
