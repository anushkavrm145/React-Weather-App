import { useState } from "react";
import Search from "../search";
import { useEffect } from "react";

export default function Weather(){
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false)
    const [weatherData,setWeatherData] = useState(null)
    async function fetchWeatherData(param){
        setLoading(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c770cc1bfa1f3c79a4e78a6d7556a3c7`);
            const data = await response.json();
            console.log(data,"data");
            if(data){
                setWeatherData(data)
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }
     function handleSearch(){
        fetchWeatherData(search)
    }
     function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',{
            weekday:'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        })
    }
    useEffect(()=>{
        fetchWeatherData("bangalore")
    },[])
    console.log(loading)
    return <div>
        <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}/>
        {
            loading? <div>loading</div>:
            <div>
                <div className="city-name">
                    <h2>{weatherData?.name}
                        <span>{weatherData?.sys?.country}</span>
                    </h2>
                </div>
                <div className="date">
                    <span>{getCurrentDate}</span>
                </div>
                <div>
                    {weatherData?.name?.temp}
                    <p className="description">{weatherData&& weatherData.weather &&  weatherData.weather[0]?weatherData.weather[0].description: ''}</p>
                    <div className="weather-info"><div>
                        <div>
                            <p>
                                {weatherData?.wind?.speed}</p><p>wind speed</p></div></div></div>
                </div>
            </div>
        }
        Weather
    </div>
}