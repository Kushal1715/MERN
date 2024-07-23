import ProductCard from "../components/products/ProductCard";
import products from "../product.json";
const DisplayProducts = () => {
  return (
    <>
      <div className="py-10 px-20">
        <h1 className="text-5xl font-bold text-purple-500">Products:</h1>
        <div className="mt-10 flex items-center justify-center flex-wrap">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.product_image}
              name={product.product_title}
              price={product.product_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayProducts;
