import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/Home" className={window.location.pathname === "/Home" ? "nav-link active" : "nav-link"}  >Home</Link>
                        <Link to="/Form" className={window.location.pathname === "/Form" ? "nav-link active" : "nav-link"} > Form</Link>
                        <Link to="/Counter" className={window.location.pathname === "/Counter" ? "nav-link active" : "nav-link"}   >Counter</Link>
                        <Link to="/friend" className={window.location.pathname === "/friend" ? "nav-link active" : "nav-link"}  > Friend</Link>
                        <Link to="/Giphy" className={window.location.pathname === "/Giphy" ? "nav-link active" : "nav-link"}  > Giphy</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;