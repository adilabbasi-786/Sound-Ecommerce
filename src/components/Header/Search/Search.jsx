import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const [data, setData] = useState(null); // Corrected initialization to null
  useEffect(() => {
    const getData = async () => {
      if (query.length) {
        let response = await fetch(
          `http://localhost:1337/api/products?populate=*&filters[title][$contains]=${query}`
        );
        let { data } = await response.json();
        setData(data); // Set the fetched data into the state variable
      } else {
        setData(null); // If the query is empty, reset the data to null
      }
    };

    getData();
  }, [query]);
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="image-container">
                <img
                  src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
