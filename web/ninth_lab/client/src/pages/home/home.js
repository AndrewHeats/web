import Info from '../../components/info/info';
import '../../components/info/info.css';
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Zoos from '../../components/zoos/zoos';
import '../../components/zoos/zoos.css';
import ViewMoreButton from '../../components/viewmoreButton/viewmoreButton';
import '../../components/viewmoreButton/viewmoreButton.css';
import {getZooTypeData} from '../../fetching.js';



function Home() {
  const [zooTypeData, setBackendData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true); 
    getZooTypeData()
      .then((response) => {
        console.log(zooTypeData)
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
    <div className='Home'>
      <Info />
      {loading ? (
      <Loading /> 
    ) : (
      <>
        <Zoos data={zooTypeData.slice(0, visibleItems)} />
        <ViewMoreButton />
      </>
    )}
    </div>
  );
}

export default Home;
