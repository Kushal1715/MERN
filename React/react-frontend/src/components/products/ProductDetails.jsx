import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const { productId } = useParams();

  // useEffect(() => {
  //   const fetchSingleProduct = async () => {
  //     try {
  //       const data = await axios.get(
  //         `https://dummyjson.com/products/${productId}`
  //       );
  //       setProduct(data.data);
  //     } catch (e) {
  //       setError(e.message);
  //       console.log("error");
  //     }
  //   };
  //   fetchSingleProduct();
  // }, [productId]);

  // useEffect(() => {
  //   const fetchMoreProducts = async () => {
  //     const moreProducts = await axios.get(
  //       `https://dummyjson.com/products/category/${product.category}`
  //     );
  //     console.log(moreProducts.data.products);
  //     setSimilarProducts(moreProducts.data.products);
  //   };
  //   fetchMoreProducts();
  // }, [product.category]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        fetch(`https://dummyjson.com/products/category/${product.category}`)
          .then((res) => res.json())
          .then((data) => {
            setSimilarProducts(data.products);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  }, [productId, product.category]);

  // useEffect(() => {
  //   const fetchProductsAndCategory = async () => {
  //     try {
  //       const data = await axios.get(
  //         `https://dummyjson.com/products/${productId}`
  //       );
  //       setProduct(data.data);

  //       if (data.data.category) {
  //         const data2 = await axios.get(
  //           `https://dummyjson.com/products/category/${product.category}`
  //         );
  //         setSimilarProducts(data2.data.products);
  //       }
  //       fetchProductsAndCategory();
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/${productId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((e) => console.log(e));

  //   fetch(`https://dummyjson.com/products/category/${product.category}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSimilarProducts(data.products);
  //     })
  //     .catch((e) => console.log(e));
  // }, [productId, product.category]);

  const handleAddtoCart = () => {
    const data = JSON.parse(localStorage.getItem("cartData")) ?? [];
    const found = data.find((prod) => prod.id === product.id);
    if (found) {
      found.quantity += 1;
    } else {
      data.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cartData", JSON.stringify(data));
    setCartItems(data);
    alert("Item is added to cart");
  };

  if (error) {
    return (
      <>
        <div className="text-center mt-[100px]">
          <h1 className="text-6xl  text-red-500 mb-2">Product not found</h1>
          <Link
            to="/"
            className="text-4xl text-center text-red-500 border-2 border-black px-2 py-1 mt-2"
          >
            Go Back
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-[150px] pt-11">
        <Link to="/cart">
          <div className="flex justify-end cursor-pointer">
            <FaCartShopping size={25} />
            <span className="relative top-[-10px] right-0">
              {cartItems.length}
            </span>
          </div>
        </Link>
        <div className=" flex justify-start items-start">
          <div className="w-[40%]">
            <img
              src={product.thumbnail}
              className="border-2 border-gray-500h-[400px] w-[100%]"
              alt=""
            />
          </div>
          <div className="w-[60%] p-9">
            <h1 className="text-5xl mb-4 font-bold">{product.title}</h1>
            <p className="text-2xl mb-4">
              Rs. {Math.ceil(product.price * 133.5)}
            </p>
            <div className="mb-4">
              <input
                type="number"
                placeholder="1"
                min="1"
                max="100"
                className="border-2 p-2 w-[60px] border-red-500 mr-4"
              />
              <button
                className="border-2 px-3 py-[10px] bg-orange-500"
                onClick={handleAddtoCart}
              >
                Add to Cart
              </button>
            </div>
            <div>
              <h2 className="font-bold text-2xl mb-2">Product Details</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
            </div>
            <h1 className="px-3 py-1 mt-5 font-bold text-3xl">
              More {product.category} products:
            </h1>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center flex-wrap">
          {similarProducts
            .filter((prod) => {
              return prod.id !== product.id;
            })
            .map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.thumbnail}
                  name={product.title}
                  price={product.price}
                  id={product.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
