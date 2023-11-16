
import React, { useState, useEffect } from "react";
import { getDetailedZooInfo } from "../../fetching";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { NavLink } from "react-router-dom";
import defaultZooImage from "./zoo.jpeg";
import "./item.css"

const ZooViewMore = () => {
  const { id } = useParams();
  const [zooData, setZooData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDetailedZooInfo(id)
      .then((response) => {
        setZooData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Помилка під час отримання даних про велосипед:", error);
      });
  }, [id]);



  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
      <div className="item_wrapper">
        <div className="item_inner">
          <div className="left">
            <img src={defaultZooImage}/>
          </div>
          <div className="right">
            <div className="properties">
              <p className="area">Area:{zooData.area}</p>
              <p className="location">Location: {zooData.location}</p>
            </div>
            <div className="information_item">
              <h2 className="name">{zooData.name}</h2>
              <h5 className="info">Additional info:</h5>
              <p>A zoo is a facility where live animals are exhibited to the public. The primary purpose of a zoo is often education, conservation, and research, though many also serve as recreational attractions. Zoos typically house a diverse collection of animals, representing various species from around the world.</p>
            </div>
            <div className="object-ditail__fields">
                <div className="input">
                    <form>
                        <label>
                            <input type="number" id="fname" placeholder="Days of visiting" min={1}/>
                        </label>
                    </form>
                </div>
                <div className="options">
                    <select>
                        <option value="someOption">Tour in zoo</option>
                        <option value="otherOption">Small</option>
                        <option value="otherOption">Big</option>
                        <option value="otherOption">Large</option>
                    </select>
                </div>
            </div>
            
          <div className="price_field">
            <p className="price">Price of zoo: {zooData.price} $</p>
            <div className="button_list">
              <NavLink to="/Catalog">Go back</NavLink>
              <button>Add to cart</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ZooViewMore;