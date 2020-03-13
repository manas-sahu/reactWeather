import React from 'react'
import { CurrentWeather } from './CurrentWeather'
import { DailyForecastList } from './forecast/DailyForecastList'

export const Dashboard = ({ weatherData, dailyForecastData }) => {
    return (
        <div>
            <CurrentWeather weatherData={weatherData} />
            <DailyForecastList dailyForecastData={dailyForecastData} />
        </div>
    )
}
