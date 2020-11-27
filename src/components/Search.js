import React, {useState} from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'



function Search() {
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)

    const getWeather = (e) => {
        if (country && city) {
            e.preventDefault()
            axios.get(`http://api.weatherstack.com/current?access_key=7b7e0aea38f1d4cbdd3fb0e4b8580dc4&query=${country}, ${city}`)        
            .then(
                (res) => {
                setWeather(res.data)
                console.log(weather)
            })
            .catch((error) => console.log(error))
        }
    }
    
    return (
        <div className='center s_inq case max_1 .d-flex'>
            <div className='search_format'>
                <h5>Find the weather for any city here</h5>
                <form className="search" onSubmit={getWeather}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control length"
                            placeholder="Country" 
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control length"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>

            <div className="search_format">
            {
                weather&&
                    <>
                        <br/>
                        <div>
                            <img src={weather.current.weather_icons} alt="weather"/>
                        </div>
                        <b>{weather.location.name}, {weather.location.country}</b>
                        <div>{weather.current.weather_descriptions}</div>
                   </>
                // :
                //     <>
                //         <b>Sorry</b>
                //         <p>City not found</p>
                //     </>
            }
            </div>
        </div>
    )
}

export default Search
