import React from 'react';


export const DailyForecastCard = ({ forecast }) => (
    <div className="col-sm-12 col-md-6 col-lg-4 " style={{paddingBottom:'10px'}}>
        <div className="card" style={{width:"100%", textAlign: 'center'}}>
            {/* <img src="..." className="card-img-top" alt="..."></img> */}
            <div className="card-body">
                <h5 className="card-title">{forecast.dt_txt}</h5>
                <p className="card-text">
                    {parseInt(forecast.main.temp_max)}&deg; |
            &nbsp;{parseInt(forecast.main.temp_min)}&deg;
        </p>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="" />
                <p>{forecast.weather[0].main}</p>
            </div>
            </div>
            </div>
);


export default DailyForecastCard