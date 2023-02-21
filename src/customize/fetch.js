import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(url, { CancelToken: source });
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        //   console.log(res);
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log("Request Cancel:", e.Message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 500);
    // fetchData();
    source.cancel("Operation canceled by the user.");
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
