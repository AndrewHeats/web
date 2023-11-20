const defaultState = {
    zooList: [],
  };
  
  const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
  };
  
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_ZOO":
        const foundIndex = findIndexByName(state.zooList, action.payLoad.name);
        if (foundIndex === -1) {
          return { ...state, zooList: [...state.bikeList, action.payLoad] };
        } else {
          const updatedZooList = [...state.zooList];
          updatedZooList[foundIndex] = {
            ...updatedZooList[foundIndex],
            count: updatedZooList[foundIndex].count + 1,
          };
          console.log(updatedZooList);
          return { ...state, zooList: updatedZooList };
        }
      case "INCREMENT_COUNT":
        return {
          ...state,
          zooList: state.zooList.map((zoo) => {
            if (zoo.name === action.payload.name) {
              return { ...zoo, count: zoo.count + 1 };
            }
            return zoo;
          }),
        };
      case "DECREMENT_COUNT":
        return {
          ...state,
          zooList: state.zooList.map((zoo) => {
            if (zoo.name === action.payload.name && zoo.count > 0) {
              return { ...zoo, count: zoo.count - 1 };
            }
            return zoo;
          }),
        };
      default:
        return state;
    }
  };