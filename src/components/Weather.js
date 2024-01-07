import React, { useEffect, useState } from 'react'
import { useGeolocated } from "react-geolocated";
import axios from 'axios';
import dayjs from 'dayjs';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const { coords } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false
        },
        userDecisionTimeout: 5000
    });

    useEffect(() => {
        (coords?.latitude && coords?.longitude) && axios.get(`http://api.weatherapi.com/v1/current.json?key=ac1fd613138c426383d144049240701&q=${coords?.latitude},${coords?.longitude}`)
            .then((res) => {
                setWeather(res.data);
            })
    }, [coords?.latitude, coords?.longitude]);

    return (
        <div className='container p-3 mb-5' style={{ backgroundColor: '#eff5f5' }}>
            <h1 className='text-center my-5'>Weather</h1>
            <div className='row gx-5'>
                <div className='col'>
                    <h5>{dayjs(weather?.location?.localtime)?.format('MMMM DD, YYYY')}</h5>
                    <h4 className='my-3'>{weather?.location?.name}, {weather?.location?.tz_id}</h4>
                    <h2>{weather?.location?.country}</h2>
                </div>
                <div className='col d-flex align-items-center justify-content-center'>
                    <WbSunnyOutlinedIcon sx={{ fontSize: '120px', color: 'goldenrod' }} />
                </div>
                <div className='col'>
                    <h5 className='my-3'>{weather?.current?.temp_c} <sup>o</sup> C {weather?.current?.is_day ? "Day" : "Night"}</h5>
                    <h4>Humidity: {weather?.current?.humidity}, {weather?.current?.condition?.text}</h4>
                    <h2>Wind: {weather?.current?.wind_kph}</h2>
                </div>

            </div>
        </div>
    )
}

export default Weather