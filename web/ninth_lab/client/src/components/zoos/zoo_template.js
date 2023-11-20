import React from "react";

import DefaultZoo from "../zooItems/zoo.jpeg";


const ItemTemplate = ({
  title = "No title.",
  desc = "No description",
  imgSrc = DefaultZoo,
}) => {
  return (
    <li className="zooitem">
                <img src={DefaultZoo} alt="zoo" className="zooimage"/>
                <h4 className="zooheading">{title}</h4>
                <p className="zooinfo">{desc}</p>
    </li>
  );
};

export default ItemTemplate;