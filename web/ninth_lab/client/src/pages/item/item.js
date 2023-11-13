
import React, { useState, useEffect } from "react";
import { getDetailedZooInfo } from "../../fetching";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { NavLink } from "react-router-dom";

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
      <div className="wrapper">
        <div className="inner">
          {/* <img src={} alt="zoo" /> */}
          <div className="box">
            <h2>{zooData.name}</h2>
            <p2>{zooData.area} $</p2>
            <p1>{zooData.location}</p1>
            <h3>Additional info:</h3>
            <p>&nbsp;&nbsp;&nbsp; Price of zoo: {zooData.price} $</p>
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