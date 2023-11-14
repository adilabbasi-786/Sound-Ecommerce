import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "./Products/Products";
import PorductCard from "./PorductCard";

export default function CategoryProducts() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        `http://localhost:1337/api/products?populate=*&[filters][categories][id]=${id}`
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, [id]);
  return (
    <div className="products-container">
      <div className="products">
        {data.map((item) => (
          <PorductCard item={item} />
        ))}
      </div>
    </div>
  );
}
