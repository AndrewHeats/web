export const action = { type: "", payLoad: {} };

export const incrementCount = (zooName) => {
  return {
    type: "INCREMENT_COUNT",
    payload: { name: zooName },
  };
};

export const decrementCount = (zooName) => {
  return {
    type: "DECREMENT_COUNT",
    payload: { name: zooName },
  };
};