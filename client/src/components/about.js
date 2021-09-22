import React from 'react';
import img1 from "../images/first-screen.jpg"

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="first-screen__title-block">
                    <div className="first-screen__title-block__title">
                        Принтеры связаные единым интерфейсом - лучшие показателеи с точки зрения цены, качества и сроков.
                    </div>
                    <div className="first-screen__title-block__subtitle">
                    </div>

                    <ul className="about-list">
                        <li>Печать крупных обьектов без склеек</li>
                        <li>Выжигаемые модели для литья металлов</li>
                        <li>Литье бронзы, латуни и алюминия</li>
                        <li>Точная печать фотополимерами</li>
                        <li>Печать серийных изделий</li>
                        <li>Все виды моделирования</li>
                        <li>Бесплатное сканирование точность до 0.1 мм</li>
                    </ul>
                </div>
                <img src={img1} alt="" />
            </div>
        )
    }

}

