import React from "react";

import DefaultZoo from "./defaultZoo";


const ZooItems = ({ data = [] }) => {
  return (
    <div className="wrapper">
      {data.map(({ id, name, price, area, location, imageSrc }, idx) => (
        <DefaultZoo
          id={id}
          name={name}
          price={price}
          area={area}
          location={location}
          imageSrc={imageSrc}
        />
      ))}
    </div>
  );
};

export default ZooItems;