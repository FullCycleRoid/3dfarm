import React from 'react';
import logo from "../images/logo.png";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight / 2,
            currentPosition: null
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
      this.setState({
        currentPosition: window.pageYOffset,
      })
    }

    render() {
        const {height, currentPosition} = this.state;

        return (
            <header className="header">
                <div className="header-inner">
                    <div>
                        <a href="" className={currentPosition > height? "header__logo" : "header__logo hide_element"}>
                            <img src={logo} alt=""/>
                        </a>
                    </div>

                    <div className={currentPosition < height+600? "navbar bg-white" : "navbar bg-dark"}>
                        <a href="#calculator" >калькулятор</a>
                        <a href="#about" >о нас</a>
                        <a href="#gallery" >галерея</a>
                        <a href="#materials" >материалы</a>
                        <a href="#modeling" >моделирование</a>
                        <a href="#price" >цены</a>
                        <a href="#delivery" >доставка</a>
                        <a href="#contacts" >контакты</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;