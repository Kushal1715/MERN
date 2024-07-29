import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import axios from "axios";
const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  // async function fetchProducts() {
  //   const url = await fetch("https://dummyjson.com/products");
  //   const data = await url.json();
  //   setProducts(data.products);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   try {
  //     fetchProducts();
  //   } catch (e) {
  //     setErrorMsg(true);
  //     console.log("error");
  //     setLoading(false);
  //   }
  // }, []);

  async function fetchProducts() {
    const data = await axios.get("https://dummyjson.com/products");
    setProducts(data.data.products);
    setLoading(false);
  }

  useEffect(() => {
    try {
      fetchProducts();
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  }, []);

  if (errorMsg) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      {loading && <h1 className="text-6xl">Loading ...</h1>}

      <div className="py-10 px-20">
        <h1 className="text-5xl font-bold text-purple-500">Products:</h1>
        <div className="mt-10 flex items-center justify-center flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price * 133.5}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
