import React from 'react'
import { Search } from '../search/Search'
import { CurrentWeather } from './CurrentWeather'

export const Dashboard = ({weatherData}) => {
    return (
        <div>
             <Search />
             <CurrentWeather weatherData={weatherData}/>
        </div>
    )
}
