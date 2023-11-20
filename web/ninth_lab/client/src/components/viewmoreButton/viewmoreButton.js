
import axios from "axios";
import '../../components/info/info.css';
import React, { useEffect, useState } from "react";
import '../../components/viewmoreButton/viewmoreButton.css';




function ViewMoreButton( zooTypeData){   
    const [visibleItems, setVisibleItems] = useState(3);
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