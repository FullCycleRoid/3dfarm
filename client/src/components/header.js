import React from 'react';
import telegram from "../images/telegram-icon.png"
import instagram from "../images/instagram-icon.png"

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight + 80,
            currentPosition: null,
            background: "white"
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
            <header className={currentPosition < height? "header bg-white" : "header bg-dark  header-bg-white"}>
                <div className="header-inner">

                    <div className="social-network">
                        <a href="https://telegram.me/ruby_roid" className="">
                            <img src={telegram} alt=""/>
                        </a>
                        <a href="https://instagram.com/3dfarmspb" className="">
                            <img src={instagram} alt=""/>
                        </a>
                    </div>
                    <a href="tel:89043328940" className="phone">8 (904) 332 89 40</a>



                    <div className="navbar">
                        <a href="#calculator" >калькулятор</a>
                        {/*<a href="#about" >о нас</a>*/}
                        {/*<a href="#gallery" >галерея</a>*/}
                        {/*<a href="#materials" >материалы</a>*/}
                        {/*<a href="#modeling" >моделирование</a>*/}
                        <a href="#price" >цены</a>
                        {/*<a href="#delivery" >доставка</a>*/}
                        <a href="#contacts" >контакты</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;