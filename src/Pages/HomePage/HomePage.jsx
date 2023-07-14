import { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <main className="my-24 flex justify-center">
      <ProductList />
    </main>
  );
};

export default HomePage;
