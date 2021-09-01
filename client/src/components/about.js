import React from 'react';
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="title_block">
                    <h2 className="title">О ферме</h2>
                    <h3 className="subtitle">Сеть принтеров, связанных единым интерфейсом и
                                             выполняющих смежные либо дублирующие задачи по печати</h3>
                </div>
                <div className="first-block">
                    <img src={about1} alt=""/>
                    <div className="about-text">Технология предназначена для ускорения процесса печати крупноформатных
                                                объектов либо для печати большого количества идентичных изделий.
                                                Мы стараемся внедрять последние разработки в области 3D печати: технологии,
                                                материалы и подходы.
                    </div>
                      <div className="about-text">Ферма позволяет быстро печатать крупногараритные модели, разделенные на несколько
                                                  частей, реализовывать серийные партии изделий или печатать в день заказа
                      </div>
                </div>
                <div className="second-block">
                    <img src={about2} alt=""/>
                    <ul className="about-list">
                        <li>Сегодня на ферме:</li>
                        <li>сеть профессиональных FDM принтеров</li>
                        <li>фотополимерные принтеры для точной печати</li>
                        <li>оборудование для постобработки и сканирования</li>
                        <li>опытные 3D моделлеры способные выполнить любой заказ</li>
                    </ul>
                </div>
            </div>
        )
    }

}

