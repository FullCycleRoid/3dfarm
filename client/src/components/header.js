import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MetalPage from "../pages/metal";
import Home from "../pages/home";

function Header() {
    return (
        <Router>          
            <header className="header">
                <Link  className="header__logo" to="/">
                    <span className="logo-red">3D</span>FARM
                </Link>
                <ul className="navbar">
                    <li>
                        <Link className="bg-white" to="/metal">
                                  ПЕЧАТЬ МЕТАЛЛОМ
                        </Link>
                    </li>
                    <li><a className="bg-white" href="">МАТЕРИАЛЫ</a></li>
                    <li><a className="bg-white" href="">3D ФЕРМА</a></li>
                    <li><a className="bg-white" href="">СПЕКАНИЕ</a></li>
                    <li><a className="bg-white">УСЛУГИ</a></li>
                    <li><a className="bg-white" href="">КОНТАКТЫ</a></li>
                </ul>
            </header>
            <Switch>

                <Route path="/metal"><MetalPage /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    )
}


export default Header