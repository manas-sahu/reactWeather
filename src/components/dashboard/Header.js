import React, { Component } from 'react'

export class Header extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
      this.setState({ text: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text !== "") {
            this.props.searchCity(this.state.text);
            this.props.getDailyForecast(this.state.text);
     }
    }
    render() {
        return (
            <nav className="header navbar navbar-dark bg-dark" style={{ color: "#fff" }}>
                <div className="container">
                    <div className="brand">
                        <i className="brand-icon fa fa-sun-o fa-2x"></i>
                        <span className="brand-text">Weather</span>
                    </div>
                    <form onSubmit={this.onSubmit} className="search-center">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="City" onChange={this.onChange} value={this.state.text} />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Search City</button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        )
    }
}