
import axios from "axios";
import '../../components/info/info.css';
import React, { useEffect, useState } from "react";
import '../../components/viewmoreButton/viewmoreButton.css';




function ViewMoreButton(){
    const [zooTypeData, setBackendData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(3);
    const [loading, setLoading] = useState(true); 

  
    useEffect(() => {
      setLoading(true); 
      axios.get("https://127.0.0.1:5500/api/zootypes")
        .then((response) => {
          setBackendData(response.data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error('Помилка під час отримання даних:', error);
          setLoading(false); 
        });
    }, []);
    
    const showMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); 
      };
    
    
    return (
        <div className="box">
          {visibleItems < zooTypeData.length && (
            <button onClick={showMore} className="viewMore">View more</button>
          )}
        </div>
    );
}

export default ViewMoreButton