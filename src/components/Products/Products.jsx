import "./Products.scss";
import Product from "./Product/Product";
import { useEffect, useState } from "react";
const Products = ({ innerPage, headingText }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/products?populate=*");
      let res = await req.json();
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}

      <div className="products">
        {data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            data={item.attributes}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;
