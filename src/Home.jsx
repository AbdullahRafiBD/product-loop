import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then((result) => console.log(result));
      .then((result) => setStore(result));
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {store.map((pd) => (
          // eslint-disable-next-line react/jsx-key
          <Card key={pd.id} info={pd} />
        ))}
      </div>
    </>
  );
};

export default Home;
