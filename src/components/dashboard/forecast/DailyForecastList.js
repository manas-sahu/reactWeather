import React from 'react'
import DailyForecastCard from './DailyForecastCard'

export const DailyForecastList = ({ dailyForecastData }) => {
    return (
        <div className="row">

            {
                !!dailyForecastData && dailyForecastData.list.map((fc, i) => (

                    <DailyForecastCard forecast={fc} key={i} />
                ))
            }
        </div>
    )
}
