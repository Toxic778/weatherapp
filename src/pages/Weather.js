import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather() {
  const [data, setData] = useState('Москва')
  const [location, setLocation] = useState('Москва')

const searchLocation = (event) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ru&appid=547ffa8dd2b7069c89531df182451a4a`).then((response) => {
      setData(response.data)
      console.log(response.data)
  })
  
}

  return (
    <>
      <div className='App-container-weather'>
        <div className='App-container-weather-dark'>
          <div className='App-container-weather-wrapper'>
            {data.main ? <h1>{`${data.name},`+`${data.sys['country']}`}</h1> : <h1>Введите название города</h1>}
            <div className='Weather-input'>
              <input type='text' placeholder='Название города...' value={location} onChange={event => setLocation(event.target.value)}></input>
              <button onClick={searchLocation}>Найти</button>
            </div>
              <div className='Weather-info'>
                {data.main ? <div className='Weather-main'>
                  <p>{`${data.name}`}</p>
                  <p>{`${parseInt(data.main.temp.toFixed(2)) - 273}`}<span style={{paddingLeft: 4,}}>°C</span></p>
                  <h3>{`${data.weather['0'].description}`}</h3>
                </div> : null}
                {data.main ? <div className='Weather-main-2'>
                    <h2>Максимальная температура {`${parseInt(data.main.temp_max.toFixed(2)) - 273}`}<span style={{paddingLeft: 4,}}>°C</span></h2>
                    <h2>Минимальная температура {`${parseInt(data.main.temp_min.toFixed(2)) - 273}`}<span style={{paddingLeft: 4,}}>°C</span></h2>
                    <h3>Ощущается как {`${parseInt(data.main.feels_like.toFixed(2)) - 273}`}<span style={{paddingLeft: 4,}}>°C</span></h3>
                </div> : null}
                {data.main ? <div className='Weather-main-3'>
                  <div className='Windy-icon'></div>
                  <h2>Скорость ветра {`${data.wind.speed}`} м/с</h2>
                </div> : null}
                {data.main ? <div className='Weather-main-4'>
                  <div className='Compass-icon'></div>
                  <h2>Направление ветра {`${data.wind.deg}`}°</h2>
                  
                </div> : null}
              </div>
          </div>
        </div>
      </div>
      <footer className='App-footer'>
        <div className='footer-info-1'>
            <div className='footer-col-1'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
            <div className='footer-col-2'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
        </div>
        <div className='footer-info-2'>
            <div className='footer-col-1'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
            <div className='footer-col-2'>
                <h2>Weather<span style={{paddingLeft: 4,}}>App</span></h2>
                <a href='/about'>Обратная связь</a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Weather