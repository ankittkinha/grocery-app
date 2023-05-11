import React from 'react'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Grocery App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href='#'>About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href='#'>Contact Us</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary">Log In</button>
                </div>
            </div>
        </nav>

    )
}
