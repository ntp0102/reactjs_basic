// import { useEffect, useState } from "react";
// import axios from "axios";
import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {
  // const today = new Date(new Date().setHours(0, 0, 0, 0));
  const today = moment().startOf("day");
  // const priorDate_m = moment().subtract(20, "day");
  // const priorDate = priorDate_m.toDate();
  const priorDate = moment().startOf("day").subtract(50, "days");
  // console.log(today);
  // console.log(priorDate);
  // console.log(today.toISOString());
  // console.log(priorDate.toISOString());
  console.log("truoc khi goi api");
  let url = `https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString(
    true
  )}&to=${today.toISOString(true)}`;

  const { data: dataCovid, isLoading, isError } = useFetch(url, true);
  console.log(isLoading);
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
          {isError === false &&
            isLoading === false &&
            dataCovid &&
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

          {isError === false && isLoading === true && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Loading
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
