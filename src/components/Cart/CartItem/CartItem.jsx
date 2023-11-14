import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext } from "react";
import { Context } from "../../../Utils/Context";

const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div className="cart-product" key={item.id}>
          <div className="img-container">
            <img
              src={`http://localhost:1337${item?.attributes?.img?.data[0]?.attributes?.url}`}
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span>Rs {item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
