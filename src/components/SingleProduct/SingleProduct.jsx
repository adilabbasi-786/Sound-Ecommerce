import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import Prod from "../../assets/products/earbuds-prod-2.webp";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Utils/Context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let req = await fetch(
        `http://localhost:1337/api/products?populate=*&[filters][id]=${id}`
      );
      let res = await req.json();
      setData(res.data);
    };
    getData();
  }, [id]);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={`http://localhost:1337${data[0]?.attributes?.img?.data[0]?.attributes?.url}`}
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{data[0]?.attributes?.title}</span>
            <span className="price">RS {data[0]?.attributes?.price}</span>
            <span className="desc">{data[0]?.attributes?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>
                  {""}
                  {data[0]?.attributes?.categories?.data[0]?.attributes?.title}
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProduct
          productId={id}
          categoryId={data[0]?.attributes?.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
