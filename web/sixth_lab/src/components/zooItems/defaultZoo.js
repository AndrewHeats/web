import React from "react";
import defaultZooImage from "./zoo.jpeg";
import { NavLink } from "react-router-dom";

const DefaultZoo = ({
  id,
  name = "No name",
  area = 0,
  price = 0,
  location = "Nowhere",
  imageSrc = defaultZooImage,
}) => {
  return (
    <div className="container">
        <div class="zoo-item">
            <img src={imageSrc} className="zoo-image" alt="zoo"/>
            <h2 className="zoo-name">{name}</h2>
            <h6 className="zoo-text">Area: <text>{area} square kilometers</text></h6>
            <h6 className="zoo-text">location: <text>{location}</text></h6>
            <h6 className="zoo-text">Price:{price} $</h6>
            <NavLink exact to={`/Catalog/${id}`}> View more</NavLink>
        </div>
    </div>
  );
};
export default DefaultZoo;