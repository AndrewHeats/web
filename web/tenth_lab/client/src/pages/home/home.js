import Info from '../../components/info/info';
import '../../components/info/info.css';
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Zoos from '../../components/zoos/zoos';
import '../../components/zoos/zoos.css';
import '../../components/viewmoreButton/viewmoreButton.css';
import axios from 'axios'




function Home() {
  const [zooTypeData, setBackendData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    // setLoading(true); 
    axios.get("http://127.0.0.1:5500/api/zootypes")
      .then((response) => {
        
        setBackendData(response.data);
        console.log(zooTypeData)
        // setLoading(false); 
      })
      .catch((error) => {
        console.error('Помилка під час отримання даних:', error);
        // setLoading(false); 
      });
  },[]);

  const showMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3); 
  };
  
  
  return (
    <div className='Home'>
      <Info />
      {loading ? (
      <Loading /> 
    ) : (
      <div className='zoosiki'>
        <Zoos data={zooTypeData.slice(0, visibleItems)} />
        <div className='box'>
          {visibleItems < zooTypeData.length && (
            <button onClick={showMore} className='viewMore'>View more</button>
          )}
        </div>
      </div>
    )}
    </div>
  );
}

export default Home;