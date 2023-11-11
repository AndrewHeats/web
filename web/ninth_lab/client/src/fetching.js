import axios from "axios";

export const getZooList = (filterCondition) => {
  return axios.get("https://localhost:5500/api/zoo", { params: filterCondition });
};

export const getZooTypeData = () => {
  return axios.get("https://localhost:5500/api/zootypes");
};

export const getDetailedZooInfo = (zooId) => {
  return axios.get(`https://localhost:5500/api/zoo/${zooId}`);
};