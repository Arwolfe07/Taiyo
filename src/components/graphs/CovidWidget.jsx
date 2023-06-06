import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CovidWidget = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">COVID-19 Statistics</h2>
      {data ? (
        <ul className='flex justify-between'>
          <li className="mb-2">
            <span className="font-bold">Total Cases:</span> {data.cases}
          </li>
          <li className="mb-2">
            <span className="font-bold">Total Recovered:</span> {data.recovered}
          </li>
          <li>
            <span className="font-bold">Total Deaths:</span> {data.deaths}
          </li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CovidWidget;
