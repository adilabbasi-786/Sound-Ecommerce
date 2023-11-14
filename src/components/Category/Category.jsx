import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Category = (item) => {
  const { id } = useParams();
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
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
      </div>
      <Products innerPage={true} key={item.id} data={item.attributes} />
    </div>
  );
};

export default Category;
