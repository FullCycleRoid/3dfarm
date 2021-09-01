import React from "react";



export default function Price() {

    return (
        <div className="price">
            <div className="title_block">
                <h2 className="title">Цены</h2>
                <h3 className="subtitle">Серийные заказы выполним в кротчайшие сроки</h3>
            </div>

            <div className="table">
                <div className="table-title">
                    <div className="cell">Технология</div>
                    <div className="cell">Зона печати</div>
                    <div className="cell">Точность</div>
                    <div className="cell">Цена</div>
                </div>
                <div className="table-item">
                    <div className="cell">FDM</div>
                    <div className="cell">400х400х450 мм	</div>
                    <div className="cell">0.4 мм</div>
                    <div className="cell">от 8 руб./см3</div>
                </div>
                <div className="table-item">
                    <div className="cell">Фотополимерная печать	</div>
                    <div className="cell">192х120х200 мм</div>
                    <div className="cell">0.043 мм</div>
                    <div className="cell">от 30 руб./см3</div>
                </div>
                <div className="table-item">
                    <div className="cell">CAD моделирование	</div>
                    <div className="cell"> </div>
                    <div className="cell"> </div>
                    <div className="cell">700 руб./час</div>
                </div>
                <div className="table-item">
                    <div className="cell">Поверхностное моделирование</div>
                    <div className="cell"> </div>
                    <div className="cell"> </div>
                    <div className="cell">1000 руб./час</div>
                </div>
                <div className="table-item">
                    <div className="cell">3D сканирование</div>
                    <div className="cell"> </div>
                    <div className="cell">0.2 мм</div>
                    <div className="cell">1000 руб./час</div>
                </div>
            </div>
        </div>
    )
}