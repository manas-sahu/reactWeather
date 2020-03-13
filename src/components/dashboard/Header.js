import React from 'react'

export const Header = () => {
    return (
        <nav className="header navbar navbar-dark bg-dark" style={{color:"#fff"}}>
        <div className="container">
            <div className="brand">
                <i className="brand-icon fa fa-sun-o fa-2x"></i>
                <span className="brand-text">Weather</span>
            </div>
        </div>
    </nav>
    )
}
