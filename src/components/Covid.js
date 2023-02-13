import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

//fetch data from api

const Covid = () => {
  //componentdidmount
  const [dataCovid, setDataCovid] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2023-01-01T00%3A00%3A00Z&to=2023-01-10T00%3A00%3A00Z"
      );
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
      }
      //   console.log(res);
      setDataCovid(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Tracking data covid19 VietNam</h2>
      <table id="customers">
        <thead>
          {console.log(">>>Data Covid", dataCovid)}
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>ID</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.ID}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
