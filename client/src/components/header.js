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
                        <a href="" >калькулятор</a>
                        <a href="" >галерея</a>
                        <a href="" >о нас</a>
                        <a href="" >материалы</a>
                        <a href="" >моделирование</a>
                        <a href="" >цены</a>
                        <a href="" >доставка</a>
                        <a href="" >контакты</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;