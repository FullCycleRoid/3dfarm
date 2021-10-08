import React from 'react';
import img1 from "../images/first-screen.jpg"

export default class About extends React.Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="first-screen__title-block">
                    <div className="first-screen__title-block__title">
                        Ферма 3D печати - принтеры связаные единым интерфейсом, лучшие показателеи с точки зрения цены, качества и сроков.
                    </div>
                    <div className="first-screen__title-block__subtitle">
                        С 2015 года мы собрали компетенции в области 3D печати, моделирования и всего того, что необходимо для выполнения как серии,так и уникального изделия.
                        Начните работать с нами и мы гарантируем скидку для постоянных клиентов.
                    </div>

                    <ul className="about-list">
                        <li>Печать крупных обьектов без склеек</li>
                        <li>Выжигаемые модели для литья металлов</li>
                        <li>Литье бронзы, латуни и алюминия</li>
                        <li>Точная печать фотополимерами</li>
                        <li>Печать серийных изделий</li>
                        <li>Все виды моделирования</li>
                        <li><span className="red">Бесплатное сканирование точность до 0.1 мм</span></li>
                    </ul>
                </div>
                <img src={img1} alt="" />
            </div>
        )
    }

}

