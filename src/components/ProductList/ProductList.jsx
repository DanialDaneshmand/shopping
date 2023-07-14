import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/product");
        setProducts(data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getProducts();
  }, []);
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 w-10/12 gap-10 lg:gap-6 sm:gap-9 p-6 sm:p-0">
      {products &&
        products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
    </section>
  );
};

export default ProductList;
