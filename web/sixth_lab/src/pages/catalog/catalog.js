import CatalogSearch from "../../components/catalogSearch/catalogSearch";
import "../../components/catalogSearch/catalogSearch.css";
import ZooItems from "../../components/zooItems/zooItems";

import "../../components/zooItems/defaultZoo.css"
import "../../components/zooItems/zooItems.css";


import zoo1 from "./zoosPhoto/Zoo1.png";
import zoo2 from "./zoosPhoto/Zoo2.png";
import zoo3 from "./zoosPhoto/Zoo3.png";
import zoo4 from "./zoosPhoto/Zoo4.png";
import zoo5 from "./zoosPhoto/Zoo5.png";
import zoo6 from "./zoosPhoto/Zoo6.png";
import zoo7 from "./zoosPhoto/Zoo7.png";

const zoodata = [
  {
    id: 1,
    name: "Zoo1",
    price: 5000,
    area: 1000,
    location: "Lviv",
    imageSrc: zoo2,
  },
  {
    id: 2,
    name: "Zoo2",
    price: 1000,
    area: 200,
    location: "Tokyo",
    imageSrc: zoo3,
  },
  {
    id: 3,
    name: "Zoo3",
    price: 500,
    area: 200,
    location: "Obroshyno",
    imageSrc: zoo1,
  },
  {
    id: 4,
    name: "Zoo4",
    price: 700,
    area: 165,
    location: "Kyiv",
    imageSrc: zoo4,
  },
  {
    id: 5,
    name: "Zoo5",
    price: 1000,
    area: 1000,
    location: "Poltava",
    imageSrc: zoo5,
  },
  {
    id: 6,
    name: "Zoo6",
    price: 1500,
    area: 1500,
    location: "Summertime sadness",
    imageSrc: zoo6,
  },
  {
    id: 7,
    name: "Zoo7",
    price: 700,
    area: 400,
    location: "Born to die",
    imageSrc: zoo7,
  },
  {
    id: 8,
    name: "Zoo8",
    price: 1000,
    area: 1000,
    location: "Wales",

  },
];



function Catalog() {
  return (
    <div className="Home">
      <CatalogSearch/>
      <ZooItems data={zoodata}/>
    </div>
  );
}

export default Catalog;
