import React from 'react';
import img1 from "../images/first-screen.png"


function FirstScreen() {
    return (
        <div className="first-screen">
            <div className="first-screen__title-block">
                <div className="first-screen__title-block__title">
                    <h1>3DFARM</h1>
                </div>
                <div className="first-screen__title-block__subtitle">
                    Связаные единым интерфейсом принтеры и группа 3D моделеров воплащают идеи в реальность.
                    Лучшие показателеи с точки зрения цены, качества и сроков.
                </div>
            </div>
            <img src={img1} alt="" />
        </div>
    )
}

export default FirstScreen;