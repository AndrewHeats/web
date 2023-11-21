import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action";
import { useState, useEffect } from "react";
import "./cart.css" 

const Cart = () => {
  const zooList = useSelector((state) => state.zooList);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    zooList.forEach((zoo) => {
      sum += Math.round(zoo.price) * zoo.count;
    });
    setTotalPrice(sum);
  }, [zooList]);
  const dispatch = useDispatch();

  const handleIncrement = (name) => {
    dispatch(incrementCount(name));
  };

  const handleDecrement = (name) => {
    dispatch(decrementCount(name));
  };
  console.log(zooList);
  const filteredZooList = zooList.filter((zoo) => zoo.count > 0);

  return (
    <div className="cart_inner" >
      <div className="cart_items">
        {filteredZooList.map((zoo, index) => (
          <NavLink
            className={"item"}
            exact="true"
            to={`/Catalog/${zoo.id}`}
            style={{ textDecoration: "none", color: "black" }}
            onClick={(e) => {
              if (e.target.tagName === "BUTTON") {
                e.preventDefault();
              }
            }}
          >
            <div className="cart_wrapper" key={index}>
              <div className="cart_item">
                <img className="cart_image" src={zoo.img} />
                <h3>{zoo.name}</h3>
                <div className="cart_count">
                  <button onClick={() => handleDecrement(zoo.name)}>-</button>
                  <p>{zoo.count}</p>
                  <button onClick={() => handleIncrement(zoo.name)}>+</button>
                </div>
                <h4>{zoo.price}$</h4>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      {totalPrice > 0 && (
        <p className="total_price">
          Total Price: {totalPrice}$
        </p>
      )}
      <div className="cart_buttons">
        <NavLink to="/Catalog" className={"back"}>Back to Catalog</NavLink>
        {totalPrice > 0 && <button className="continue">Continue</button>}
      </div>
    </div>
  );
};

export default Cart;