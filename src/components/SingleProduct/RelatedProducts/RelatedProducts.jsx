import React, { useEffect, useState } from "react";
import Products from "../../Products/Products";
import PorductCard from "../../PorductCard";
const RelatedProducts = ({ productId, categoryId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        `http://localhost:1337/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className="related-products">
      Related Products
      {data.map((item) => (
        <PorductCard headingText="Related Products" item={item} />
      ))}
    </div>
  );
};

export default RelatedProducts;
