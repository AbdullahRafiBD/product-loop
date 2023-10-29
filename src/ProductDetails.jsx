import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  /* const { rafi } = useParams();
    console.log(rafi); */
  const { id } = useParams();
  //   console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      // .then((result) => console.log(result));
      .then((result) => setProduct(result));
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={product.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6">{product.description}</p>
            <h2 className="font-bold text-[20px] badge bg-black text-white">
              {product.rating?.rate}
            </h2>
            <Rating
              style={{ maxWidth: 180 }}
              value={product.rating?.rate}
              readOnly
            />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
