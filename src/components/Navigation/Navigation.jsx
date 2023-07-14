import { NavLink, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../../Context/Cart/CartProvider";
import { useAuth } from "../../Context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navigation = () => {
  const [active, setActive] = useState(true);
  const { cart } = useCart();
  const userData = useAuth();
  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0">
      <nav className="bg-violet-200 flex flex-col sm:flex-row  p-2 sm:p-0 justify-between items-center">
        <div className="flex items-center justify-between w-full sm:w-3/12 ">
          <div className="flex items-center">
            <FaShoppingBag className="text-violet-900 text-2xl sm:text-2xl" />
            <p className="text-violet-900 text-xl sm:text-md">
              Danial Shopping
            </p>
          </div>
          <button onClick={() => setActive(!active)}>
            <FaBars className="text-violet-900 text-lg sm:hidden" />
          </button>
        </div>
        <div
          className={`sm:w-9/12 ${
            active ? "hidden" : "block"
          } sm:block items-center`}
        >
          <ul className="flex justify-center  flex-col sm:flex-row  sm:p-3 w-full mt-4 sm:mt-0">
            <li className="mb-2  block  sm:inline-block sm:mr-2">
              <NavLink
                onClick={() => setActive(true)}
                to="/"
                className={(active) => (active.isActive ? " bg-white" : "")}
              >
                <BsFillHouseFill />
                صفحه اصلی
              </NavLink>
            </li>
            <li className="block  sm:inline-block mb-2 sm:mr-2">
              <NavLink
                onClick={() => setActive(true)}
                to={`${userData ? "/profile" : "/login"}`}
                className={(active) => (active.isActive ? " bg-white" : "")}
              >
                {userData ? (
                  <>
                    <FaUser />
                    <span>پروفایل</span>
                  </>
                ) : (
                  <>
                    <BsBoxArrowInRight className="text-lg mr-1" />
                    <span>ورود/ثبت نام</span>
                  </>
                )}
              </NavLink>
            </li>
            <li className=" block  sm:inline-block mb-2 sm:mr-2 relative">
              <NavLink
                onClick={() => setActive(true)}
                to="/cart"
                className={(active) => (active.isActive ? " bg-white" : "")}
              >
                <BsFillCartFill />
                سبد خرید
                <span
                  className="inline-block px-1  text-xs rounded-full bg-violet-300 "
                  style={{ position: "absolute", top: "-5px", right: "-5px" }}
                >
                  {cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="  mr-8 flex items-center p-2 text-violet-900 text-lg font-bold cursor-pointer">
          <button
            className={`flex items-center ${userData?'block':'hidden'}`}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <span className={`mr-1`}>خروج</span>
            <FaSignOutAlt />
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navigation;
