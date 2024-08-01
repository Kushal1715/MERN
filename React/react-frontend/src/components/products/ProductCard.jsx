import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <div className="h-[380px] w-25 border-2 border-purple-900 mr-8 mb-5">
      <div className=" p-2">
        <img src={image} className="w-full h-[250px] mb-2" alt="" />
        <div className="mb-2">
          <h2>{name}</h2>
          <p>{Math.ceil(price)}</p>
        </div>
        <div className="flex">
          <Link className="btn btn-primary w-[150px] mr-2">Button1</Link>
          <Link
            to={`/product-details/${id}`}
            className="btn btn-primary w-[150px]"
          >
            Product Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
