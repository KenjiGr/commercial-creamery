import React from "react";
import './navBar-styles.css'


function NavBar() {
    return (
        <div className="nav-cont">
            <div className="navi left">
                <nav>
                    <a href="home">Home</a>
                    <a href="products">Products</a>
                    <a href="services">Sercives</a>
                </nav>
            </div>
            <div className="middle">
                <img src={require('../photos/logo.jpg')} alt='Commercial Creamery Logo' />
            </div>
            <div className="navi right">
                <nav>
                    <a href="news">News</a>
                    <a href="careers">Careers</a>
                    <a href="contacts">Contacts</a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar