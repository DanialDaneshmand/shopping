import { useCart, useCartActions } from "../../Context/Cart/CartProvider";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";

const CartPage = () => {
  
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  return (
    <section className="h-screen p-10 lg:p-0 mt-24 w-full flex flex-col lg:flex-row justify-center ">
      <section className="w-full lg:w-8/12 mr-8 border p-16 flex  flex-col items-center">
        {cart.length ? (
          cart.map((product) => {
            return (
              <div
                key={product._id}
                className="flex flex-col md:flex-row md:justify-between border-b border-violet-200  items-center mb-4 py-2 w-full"
              >
                <div className="flex justify-between items-center w-full md:w-8/12 ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20"
                  />
                  <p className="w-3/12 text-violet-900">{product.name}</p>
                  <p className="text-violet-900">{product.price}$</p>
                </div>
                <div className="gap-3 lg:gap-3 w-full lg:w-4/12 flex  items-center justify-center mt-3 lg:mt-0">
                  <div>
                    <button
                      className="bg-white font-bold text-violet-900 rounded-l-md px-4 py-1 border  border-violet-200"
                      onClick={() =>
                        dispatch({ type: "INCREMENT", payload: product })
                      }
                    >
                      +
                    </button>
                    <button className="bg-white font-bold text-violet-900  px-4 py-1 border border-l-0 border-r-0 border-violet-200">
                      {product.quantity}
                    </button>
                    <button
                      className="bg-white font-bold text-violet-900 rounded-e-md px-4 py-1 border border-violet-200"
                      onClick={() =>
                        dispatch({ type: "DECREMENT", payload: product })
                      }
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      className="border border-violet-200 text-red-600 px-3 py-2 rounded"
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: product })
                      }
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-lg">سبد خرید خالی است!</p>
        )}
      </section>
      <CartSummary total={total} cart={cart} />
    </section>
  );
};

export default CartPage;

const CartSummary = ({ total, cart }) => {
  const userData = useAuth();
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    : 0;
  return (
    <section className="mt-5 lg:mt-0 w-full lg:w-2/12 border flex items-center flex-col p-2 h-fit">
      <h2 className="text-xl text-violet-900 mt-2">اطلاعات سبد خرید</h2>
      <div className="mt-8 flex w-full justify-between p-2 text-violet-900">
        <p>قیمت کالا ها </p>
        <p>{originalTotalPrice}$</p>
      </div>
      <div className="mt-1 border-b flex w-full justify-between p-2 text-violet-900">
        <p>میزان تخفیف</p>
        <p>{originalTotalPrice - total}$</p>
      </div>
      <div className="mt-1 flex w-full justify-between p-2 text-violet-900">
        <p>قیمت کل</p>
        <p>{total}$</p>
      </div>
      <button className="bg-violet-900 text-white w-full rounded-md mt-8 py-1 flex justify-center" >
        <Link
          to={`${userData ? "/checkOut" : "/signup?redirect=checkOut"}`}
          className="bg-violet-900 text-white hover:bg-violet-900 "
        >
          ادامه سفارش
        </Link>
      </button>
    </section>
  );
};
