import React from 'react'

export const CurrentWeather = ({ weatherData }) => {
    return (
        <div className="current-weather-display" style={{ position: 'relative' }}>
            <div className="weather-location">{weatherData.name}</div>
            <div className="weather-min-max-temp">{weatherData.main.temp_max}&deg; | {weatherData.main.temp_min}&deg;</div>
            <div className="weather-current">
                <span className="weather-temp">{parseInt(weatherData.main.temp)} &deg;&nbsp;<sup>c</sup></span>
            </div>
            <div className="weather-condition">
                <img className="weather-icon" alt="" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
                <span className="weather-description">{weatherData.weather[0].main}</span>
            </div>

        </div>
    )
}
