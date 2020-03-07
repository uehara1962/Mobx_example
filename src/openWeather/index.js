import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'


export default function OpenWeather () {
  const [ location, setLocation ] = useState(false)

  return (
    <Fragment>
      <h3>Clima nas Coordenadas</h3>
      <ul>
        <li>Temperatura atual: x</li>
        <li>Temperatura máxima: x</li>
        <li>Temperatura mínima: x</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x</li>
      </ul>

    </Fragment>
  )
}