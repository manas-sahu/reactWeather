import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import { Header } from './components/dashboard/Header';
import { Dashboard } from './components/dashboard/Dashboard';

class App extends Component {
  state = {
    weatherData: null,
    loading: false,
    dailyForecastData: null
  }
  async componentDidMount() {
    let result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf5b518d43427be14221c96fecf1e3c2`);
    this.setState({ weatherData: result.data })
  }
  searchCity = async text => {
   let result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=bf5b518d43427be14221c96fecf1e3c2`);
    this.setState({ weatherData: result.data })
  }
  getDailyForecast = async text => {
   let result = await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&units=metric&APPID=bf5b518d43427be14221c96fecf1e3c2`);
    this.setState({ dailyForecastData: result.data })
  }
  render() {
    const { weatherData, dailyForecastData } = this.state
    return (
      <div className="App">
        <div className="container-fluid">
          <Header searchCity={this.searchCity} getDailyForecast={this.getDailyForecast} />
          {weatherData && dailyForecastData && <Dashboard weatherData={weatherData} dailyForecastData={dailyForecastData} />}
        </div>
      </div>

    );
  }
}
export default App;
