import React from "react";
import Card from "./card";


export default function Materials() {


    return (
        <React.Fragment>
            <div className="container flex-container align-center">
                <div className="text-center materials-section__title material-title">
                    <h1>Материалы</h1>
                    <p>
                        Напишите нам, чтобы узнать возможности и характеристики конкретного матриала.
                        Если материал отсутствует среди перечисленных, мы закупим его под заказ.
                    </p>
                </div>
            </div>
            <div className="container flex-container align-center material-block-main">
                    <div className="material-block">
                        <h3>ПОПУЛЯРНЫЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ПРОЧНЫЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ГИБКИЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ТОЧНЫЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ДЕКОРАТИВНЫЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>МЕТАЛЛ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
            </div>
        </React.Fragment>
    )
}