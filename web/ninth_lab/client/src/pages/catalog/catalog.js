import CatalogSearch from "../../components/catalogSearch/catalogSearch";
import "../../components/catalogSearch/catalogSearch.css";
import ZooItems from "../../components/zooItems/zooItems";
import { useState, useEffect } from "react";
import "../../components/zooItems/defaultZoo.css";
import "../../components/zooItems/zooItems.css";
import Loading from "../../components/loading/Loading";
import "../../components/loading/Loading.css";
import { getZooList } from "../../fetching";
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
  
 
  
    const [zooListData, setBackendData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterCondition, setFilterCondition] = useState({
      minArea: "",
      maxArea: "",
      sortBy: "",
      searchInput: "",
    });
  
    useEffect(() => {
      setLoading(true);
      getZooList(filterCondition)
        .then((response) => {
          console.log(response.data)
          setBackendData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching zoo data:", error);
    
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Server responded with non-success status:', error.response.status);
            console.log('Response data:', error.response.data);
    
            // You can display a user-friendly message based on the error status
            if (error.response.status === 404) {
              // Handle not found error
              console.log('Zoo data not found.');
            } else {
              // Handle other error statuses
              console.log('An error occurred while fetching zoo data.');
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.log('No response received from server');
            // Handle this case as needed
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error setting up the request:', error.message);
            // Handle this case as needed
          }
    
          setLoading(false);
        });
    }, [filterCondition]);
    
  
    const applyFilter = (minArea, maxArea, sortBy, searchInput) => {
      setFilterCondition({
        minArea,
        maxArea,
        sortBy,
        searchInput,
      });
    };
  
    return (
      <div className="Home">
        <CatalogSearch applyFilter={applyFilter} />
        {loading ? (
          <Loading />
        ) : (
          <ZooItems data={zooListData} filterCondition={filterCondition} />
        )}
      </div>
    );
  };
  

  
  // return (
  //   <div className="Home">
      
  //     <h1>{message}</h1>
  //     <CatalogSearch />
  //     <ZooItems data={zoodata} />
  //   </div>
  // );

export default Catalog;
