import React , {Component} from 'react';
import './App.css';
import Axios from 'axios';
import { Temperature } from './components/dashboard/Temperature';
import { Header } from './components/dashboard/Header';
import { Dashboard } from './components/dashboard/Dashboard';

class App extends Component {
  state = {
    weatherData: null,
    loading: false
  }
  async componentDidMount(){
    let result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=bf5b518d43427be14221c96fecf1e3c2`);
    console.log(result.data);
    this.setState({weatherData: result.data})
  }
  render(){
    const { weatherData } = this.state
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        {this.state.weatherData && <Dashboard weatherData={weatherData}/>}
        <Temperature />
        
    </div>
      </div>
        
  );
}
}
export default App;
