import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BarChartDemo from './BarChartDemo'
import DonutChart from "./DonutChart";

const Welcome = () => {
  const [breweries, setBreweries] = useState([]);

  const getTotalBreweries = async() => {
    let data;
    const response = await fetch(`https://api.openbrewerydb.org/breweries`);
    data = await response.json();
    setBreweries(data);
  }

  useEffect(() => {
    getTotalBreweries();
  }, []);

  return (
    <div className="display-box display-container">
      <div>
        <table>
        <thead>
        <tr>
          <th>Company Name</th>
          <th>City</th>
          <th>Detail</th>
        </tr>
        </thead>
        <tbody>
          {breweries ? breweries.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td><Link to={"/brewery/" + item.id} className="link-style" >detail</Link></td>
              </tr>
            )
          }) : null}
          </tbody>
        </table>
      </div>

      <div>
        <BarChartDemo />
        <DonutChart />
      </div>
    </div>
  );
}

export default Welcome