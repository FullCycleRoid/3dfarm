import React from "react";
import first_img from "../images/image_01.jpg"


function Home() {
    return (
        <React.Fragment>
            <div className="first-screen">
            <div className="first-screen__left">
                            <h2 className="first-screen__left__title">3D ферма</h2>
                            <div className="send-file-block">
                            <h5 className="send-file__title">Загрузите файл в формате STL,SLDPT или архив для рассчета стоимости</h5>
                            <input type="file"/>
                            <input type="text" value="Введите телефон для обратной связи" />
                            <input  className="send-file__comment" type="text" value="Оставьте дополнительную информацию если требуется" />
                            <input type="submit" value="Отправить запрос" />
                        </div>
                </div>
                <div className="first-screen__right">
                    <input id="calc-btn" type="button" value="Консультация инженера" />
                    <img src={first_img} alt="" />
                    <div className="first-screen__right__text-block">
                    <h4 className="first-screen__right__title">Самая доступная печать металлом в России</h4>
                    <p>Профессиональное оборудование</p>
                    <p>Печать металлом от 100 руб/см3</p>
                    <p>Материал: Нержавеющая сталь 316l</p>
                    <p>CAD моделирование 700 руб/час</p>
                    <p>График работы: Пн-Пт с 08.00 до 20.00</p>
                    <p>E-mail: feedmetal@gmail.com</p>
                    <p>Тел.: +7 904 332-89-40</p>
                    </div>
                    <input id="right_btn" type="submit" value="Консультация инженера" />

                </div>
            </div>       
            <div className="equipment">
                <div className="container flex-container align-center direction-column">
                    <h2 className="section__title">ТЕХНОЛОГИИ И УСЛУГИ</h2>
                    <p className="section__subtitle">Парк оборудования позволяет в кротчайшие сроки выпорлнять серийные заказы</p>

                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">технология</th>
                        <th scope="col">Зона печати</th>
                        <th scope="col">Точность</th>
                        <th scope="col">Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">FDM</th>
                        <td>до 400х400х450 мм</td>
                        <td>0.4 мм</td>
                        <td>от 8 руб./см3</td>
                        </tr>
                        <tr>
                        <th scope="row">Фотополимерная печать</th>
                        <td>92х120х200 мм</td>
                        <td>0.043 мм</td>
                        <td>от 30 руб./см3</td>
                        </tr>
                        <tr>
                        <th scope="row">Печать металлом</th>
                        <td>270х210х200 мм</td>
                        <td>0.4 мм</td>
                        <td>от 100 руб./см3</td>
                        </tr>
                        <tr>
                        <th scope="row">CAD моделирование</th>
                        <th></th>
                        <th></th>
                        <td>700 руб./час</td>
                        </tr>
                        <tr>
                        <th scope="row">Поверхностное моделирование</th>
                        <th></th>
                        <th></th>
                        <td>1000 руб./час</td>
                        </tr>
                        <tr>
                        <th scope="row">3D сканирование</th>
                        <th></th>
                        <th></th>
                        <td>от 3000 руб.</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div> 
            <div className="contacts">
                <h1>Контакты</h1>
                <img className="contacts-map" src="" alt="" />
                <div className="contacts__body">
                <div className="divTable">
                </div>         
                    <div className="div-table-col">
                        <div className="divRow">
                            <div className="divCell">Телефон:</div>
                            <div  className="divCell">Email:</div>
                            <div  className="divCell">Адресс</div>
                            <div  className="divCell">График работы:</div>
                        </div>
                    </div>
                    <div className="div-table-col">
                            <div className="divRow">
                            <div className="divCell">561 MPa</div>
                            <div className="divCell">251 MPa</div>
                            <div className="divCell">53%</div>
                            <div className="divCell">128HV10</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    )
}

export default Home;
