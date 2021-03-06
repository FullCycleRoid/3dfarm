import React from "react";
import img1 from "../images/modeling1.png"
import img2 from "../images/modeling2.jpg"
import img3 from "../images/modeling3.jpg"
import img4 from "../images/modeling4.png"

export default function Modeling() {

    return (
        <div className="modeling" id="modeling">
            <div className="title_block">
                <h2 className="title">Моделирование</h2>
                <h3 className="subtitle">Все типы моделирования. Расскажите про свой проект и мы поможем вам</h3>
            </div>
            <div className="first-modeling-block">
                <div className="first-modeling-text-title">Поверхностное Blender 3DsMAX</div>
                <div className="first-modeling-text">
                    <div className="first-modeling-text-subtitle">Подходит для решения художественных и архитектурных
                        задач, моделирования бюстов, юверирных изделий, макетов и фигурок.
                    </div>
                    <div className="first-modeling-text-subtitle">
                        В данном типа моделирования строятся поверхности, чаще пространственные, которые описывают
                        контур модели. Поверхности имеют нулевую толщину, поэтому модели
                        не обладают массой и объемом, по ним можно рассчитать лишь площадь поверхности.
                    </div>
                </div>
                <img src={img1} alt=""/>
            </div>
            <div className="second-modeling-block">
                <img src={img2} alt=""/>
                <div className="second-block-text-title">Твердотельное. Solidworks</div>
                <div className="second-block-text">
                    <div className="second-block-text-subtitle">Подходит для решения инженерных задач, проектирования механизмов и деталей машин.</div>
                    <div className="second-block-text-subtitle">В твердотельном моделировании мы сразу начинаем работать с некоторой оболочкой, т.е. с твердым телом, постепенно, удаляя из него или добавляя к нему материал мы получаем более сложное  тело со всеми его конструктивными элементами, т.е. получаем твердотельную 3d-модель детали.</div>
                </div>
            </div>
            <div className="third-modeling-block">
                <div className="third-block-text-title">Расчет прочности</div>
                <div className="third-block-text">
                    <div className="third-block-text-subtitle">Статический прочностной анализ помогает принимать решения при проектировании, улучшать качество и характеристики изделий. Проведние аназила позволяет грамотно выбрать технологию печати и материал.</div>
                </div>
                <img src={img3} alt=""/>
            </div>
            <div className="four-modeling-block">
                <img src={img4} alt=""/>
                <div className="four-block-text">
                    <div className="four-block-text-title">Сканирование</div>
                    <div className="four-block-text-subtitle">Анализ формы предмета позволяет быстро создать 3D-модель на основе полученных данных. При отсутствии чертежей предмета сложной формы необходим этап сканирования. Если предмет простой достаточно штанген циркуля=)</div>
                </div>
            </div>
        </div>
    )
}