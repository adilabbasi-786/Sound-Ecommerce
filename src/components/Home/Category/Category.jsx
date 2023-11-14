import "./Category.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:1337/api/categories?populate=*");
      let res = await req.json();
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);

  return (
    <div className="shop-by-category">
      <div className="categories">
        {data.map((item) => (
          <div
            className="category"
            key={item.id}
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={`http://localhost:1337${item.attributes.img.data.attributes.url}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
