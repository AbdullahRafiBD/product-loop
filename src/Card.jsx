import { Link } from "react-router-dom";

const Card = ({ info }) => {
  const {
    image,
    title,
    description,
    category,
    rating: { rate },
    price,
    id,
  } = info;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 className="badge bg-black text-white">{rate}</h2>
          {/* <p>{description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{category}</button>
            <button className="btn btn-primary">{price}</button>
            <Link to={`/product/${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
