
import React, { useState, useEffect } from "react";
import { getDetailedZooInfo } from "../../fetching";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { NavLink } from "react-router-dom";
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
          <div className="item_box">
            <h2 className="name">{zooData.name}</h2>
            <h3 className="info">Additional info:</h3>
            <p className="area">Area of zoo: {zooData.area} $</p>
            <p className="location">Location of zoo: {zooData.location}</p>
            <p className="price">Price of zoo: {zooData.price} $</p>
            <div className="button_list">
              <NavLink to="/Catalog">Go back</NavLink>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ZooViewMore;