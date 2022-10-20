import React, { useEffect, useState } from 'react'
import AppNavbar from './AppNavbar'
import weatherImg from './image/weather.png'
import timeImg from './image/timeLogo.png'
import humidity from './image/humidity.png'
import wind from './image/wind1.png'
import weatherIcon from './image/weather-icon.png'
import '../App.css'
export default function WeatherApp() {
    const [inputVal, setInputVal] = useState('India');
    const [data, setdata] = useState([]);
    const InputData = (data) => {
        setInputVal(data)
    }
    const fetchWeatherData = () => {
        fetch(`http://api.weatherstack.com/current?access_key=77feb8dc38534cfaf9d186056d02dea9&query=${inputVal}`)
            .then((res) => res.json())
            .then((values) => {
                setdata([values]);
                console.log([values]);
            })
    }
    useEffect(() => {
        fetchWeatherData();
    }, [inputVal])
    return (
        <div >
            <AppNavbar setInputVal={InputData} />
            <div className='wetherBg'>
                {
                    data.map((items) => {
                        return <div className='Container'>
                            <div className="col-md-12 text-center mt-5">
                                <div className="shadow rounded wetherResultBox">
                                    <img className="weathorIcon"
                                        src={weatherImg} />
                                    <p className="weathorCity">{items?.location?.name}
                                    <span className="weathorCountry"> ({items?.location?.country})</span></p>
                                    
                                    <h6 className="weathorTemp">{(items?.current?.temperature)}°C</h6>
                                    <div >
                                        <div className='card-container' >
                                            <div className='card-1'>
                                                <img className="weathorIcon" src={timeImg} alt='time' />
                                                <div className='innerContainer'>
                                                    <h1>Date</h1>
                                                    <p className='inner1'>{items?.location?.localtime.slice(0, 10)}</p>
                                                    <span className='inner2'>{items?.location?.localtime.slice(10)}</span>
                                                </div>
                                            </div>

                                            <div className='card-1'>
                                                <div className='innerContainer'>
                                                <img className="weathorIcon" src={humidity} alt='humidity' />
                                                    <h1>Humidity</h1>
                                                    <p className='inner2'>{items?.current?.humidity}</p>  
                                                </div>
                                            </div>
                                            
                                            <div className='card-1'>
                                                <div className='innerContainer'>
                                                <img className="weathorIcon" src={wind} alt='wind' />
                                                    <h1>Wind Speed</h1>
                                                    <p className='inner2'>{items?.current?.wind_speed }</p> 
                                                    <p className='inner1'>Direction-{items?.current?.wind_dir}</p> 
                                                </div>
                                            </div>

                                            <div className='card-1'>
                                            <img className="weathorIcon" src={weatherIcon} alt='weather' />
                                                <div className='innerContainer'>
                                                    <h1>{(items?.current?.weather_descriptions)}</h1>
                                                    <p>

                                                    </p>
                                                </div>
                                            </div>

                                            <div className='card-1'>
                                                <div className='innerContainer'>
                                                    <p className='inner-details'>Pressure-{items?.current?.pressure}</p>  
                                                    <p className='inner-details'>Cloudcover-{items?.current?.cloudcover}</p>
                                                    <p className='inner-details'>Visibility-{items?.current?.visibility}</p>
                                                    <p className='inner-details'>UV Index-{items?.current?.uv_index}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
