import React, { useState, useContext, Suspense } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import sad from '../images/sad.png'
import {LoginContext} from '../contexts/LoginContext'
import LoginContextProvider from '../contexts/LoginContext'


function Home() {

    const [weather, setWeather] = useState(null)
    const [GeoWeather, setGeoWeather] = useState(true)

    const {isLogged} = useContext(LoginContext)
    
    navigator.geolocation.getCurrentPosition(function(position) {

        if (GeoWeather) {
        const Latitude = position.coords.latitude
        const Longitude = position.coords.longitude

        console.log(Latitude, Longitude)

        axios.get(`http://api.weatherstack.com/current?access_key=9810b9da9ee591e0e3f6388da24a6094&query=${Latitude}, ${Longitude}`)        
            .then(
                (res) => {
                setWeather(res.data)
                console.log(weather)
            })
            .catch((error) => console.log(error))
            
            setGeoWeather(false)
        }
    })

    return (
        <LoginContextProvider>
            <div className="container">
                <div className="row">
                    <div className="home col-md-6">
                        {/* <Suspense fallback={<h1>Loading... </h1>}> */}
                        {
                        typeof weather !== undefined && weather !== null?
                            <>
                                <b style={{fontSize:60}}>{weather.current.observation_time}</b>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 .d-flex">
                                            <img className="placeholder" src={weather.current.weather_icons} alt="placeholder"/>  
                                        </div>
                                        <div className="col-md-6 .d-flex">
                                            <b style={{fontSize:32, textTransform:"uppercase"}}>{weather.location.name}</b><br/>
                                            <b style={{fontSize:26}}>{weather.location.country}</b>
                                            <div style={{fontSize:24}}>{weather.current.weather_descriptions}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className="row .d-flex">
                                    <div className="col-md-12">
                                        <img className="modal_wea placeholder" src={sad} alt="not found"/>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12" style={{fontSize:32, textTransform:"uppercase"}}><b>Sorry!</b></div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12" style={{fontSize:26}}>Weather not found</div>
                                    <div style={{fontSize:20}}>Check your internet and location settings.</div>
                                </div>
                            </>
                        }
                        {/* </Suspense> */}
                    </div>
                    <div className="home col-md-6">
                        {
                            isLogged?
                                <div>
                                    <Link to="" style={{color:"black"}}>
                                        <div className="custom">
                                            Click here to customize to the weather conditions of one 
                                            of your favorite cities.
                                        </div>
                                    </Link> 
                                    <Link to="" style={{color:"black"}}>
                                        <div className="custom">
                                            Click here to customize to the weather conditions of one
                                            of your favorite cities.
                                        </div>
                                    </Link>
                                </div>
                            :
                                <Link to="/login" style={{color:"black"}}>
                                    <div className="custom" style={{height:150}}>
                                        Sign in to view the weather conditions of your favorite 
                                        cities here.
                                    </div> 
                                </Link> 
                        }    
                    </div>
                </div>
            </div>
        </LoginContextProvider>
    )
}

export default Home
