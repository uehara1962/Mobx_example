import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'


export default function OpenWeather () {
  const [ location, setLocation ] = useState(false)
  const [ weather, setWeather ] = useState(false)

  const getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    })
    // console.log('getWeather: ', res.data )
    setWeather(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude, position.coords.longitude)
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  if(!location){
    return (
      <Fragment>
        Você precisa habilitar a localização no browser
      </Fragment>
    )
  } else {
    return (
          <Fragment>
            {
              !weather ? <Fragment>Carregando o clima...</Fragment> : 
              <div className="weather">
                <h3>Clima nas Coordenadas ({weather['weather'][0]['description']}) </h3>
                <ul>
                  <li>Temperatura atual: {weather['main']['temp']}°</li>
                  <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
                  <li>Temperatura mínima: {weather['main']['temp_min']}°</li>
                  <li>Pressão: {weather['main']['pressure']} hpa</li>
                  <li>Umidade: {weather['main']['humidity']} %</li>
                </ul>
              </div>
            }
          </Fragment>

    )
  }
}