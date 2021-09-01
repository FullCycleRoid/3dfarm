import React from 'react';


function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div>
                    <a href="" className="header__logo"><span className="logo-red">3D</span>FARM</a>
                </div>
                {/*<div className="header-phone">+7 904 332 89 40</div>*/}
                <div>
                    <ul className="navbar">
                        <li><a href="" >Калькулятор</a></li>
                        <li><a href="" >Галерея</a></li>
                        <li><a href="" >О ферме</a></li>
                        <li><a href="" >Материалы</a></li>
                        <li><a href="" >Моделирование</a></li>
                        <li><a href="" >Цены</a></li>
                        <li><a href="" >Доставка</a></li>
                        <li><a href="" >Контакты</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;