import React from 'react';
import Card from "./card";
import arrow from "../images/right-arrow.png"

function Calculator() {
    return (
        <div className="calculator">
            <div className="title_block">
                <h2 className="title">КАЛЬКУЛЯТОР ЦЕНЫ</h2>
                <h3 className="subtitle">Загрузите STL файл для быстрого рассчета стоимости</h3>
            </div>
            <Card />
            <div className="calculator-footer-block">
                <div className="calculator-footer-block__title">
                    Есть вопросы? Нужна помощь с заказом? Напишите нам
                </div>
                <div className="calculator-footer-block__btn">
                    <img src={arrow} width="50px" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;