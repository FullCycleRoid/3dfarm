import React from 'react';
import Card from "./card";
import arrow from "../images/arrow.png"

function Calculator() {
    return (
        <div className="calculator" id="calculator">
            <div className="title_block">
                <h2 className="title">КАЛЬКУЛЯТОР ЦЕНЫ</h2>
                <h3 className="subtitle">Загрузите STL файл для быстрого рассчета стоимости</h3>
            </div>
            <Card />
            <div className="calculator-footer-block">
                <div className="calculator-footer-block__title">
                    Нужна помощь с заказом? Напишите нам
                </div>
                <a className="calculator-footer-block__btn" href="#contacts">
                    <img src={arrow} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Calculator;