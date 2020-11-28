import React, {useState} from 'react'
import axios from 'axios'
import sad from '../images/sad.png'

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
        <div className='center s_inq case .d-flex'>
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
                        <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Search</button>
                    </div>
                </form>
            </div>

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Weather</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">    
                                {
                                    // 
                                    typeof weather !== undefined && weather !== null?
                                    <>
                                        <div className="row .d-flex">
                                            <div className="col-md-12">
                                                <img className="" src={weather.current.weather_icons} alt="weather"/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12"><b>{weather.location.name}, {weather.location.country}</b></div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12">{weather.current.weather_descriptions}</div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="row .d-flex">
                                            <div className="col-md-12">
                                                <img className="modal_wea" src={sad} alt="not found"/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12"><b>Sorry!</b></div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-12">Weather not found</div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>                   
        </div>
    )
}

export default Search
