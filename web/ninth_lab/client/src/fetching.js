import axios from "axios";

export const getZooList = (filterCondition) => {
  return axios.get("http://127.0.0.1:5500/api/zoo", { params: filterCondition });
};

export const getZooTypeData = () => {
  return axios.get("http://127.0.0.1:5500/api/zootypes");
};

export const getDetailedZooInfo = (zooId) => {
  return axios.get(`http://127.0.0.1:5500/api/zoo/${zooId}`);
};