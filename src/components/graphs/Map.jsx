import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from "leaflet"

import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
// L.Icon.extend({
//     Options: {
//         iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//         iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//         shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
//     }
// })

function Map() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://disease.sh/v3/covid-19/countries');
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <MapContainer center={[0, 0]} zoom={2} className='map'>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data.map((entry) => (
                <Marker key={entry.country} position={[entry.countryInfo.lat, entry.countryInfo.long]}>
                    <Popup>
                        <div className='z-40'>
                            <h3>{entry.country}</h3>
                            <p>Total Cases: {entry.cases}</p>
                            <p>Recovered: {entry.recovered}</p>
                            <p>Deaths: {entry.deaths}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </ MapContainer>
    )
}

export default Map