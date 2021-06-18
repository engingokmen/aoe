import { useEffect, useState } from "react";
import store from "../../store/store";

const useSelector = (func) => {
  const storeData = store.getState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(func(storeData));
  }, [func, storeData]);

  func(store.getState());

  return filteredData;
};

export default useSelector;
