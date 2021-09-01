import React from "react";
import img1 from "../images/delivery1.png"
import img2 from "../images/delivery2.png"
import img3 from "../images/delivery3.png"
import img4 from "../images/delivery4.png"


export default function Delivery() {

    return (
        <div className="delivery">
            <div className="title_block">
                <h2 className="title"> Доставка</h2>
                <h3 className="subtitle"></h3>
            </div>
            <div className="delivery-block">
                <div className="delivery-item">
                    <img src={img1} alt=""/>
                    <div>тех задание</div>
                </div>
                    <div className="delivery-item">
                        <img src={img2} alt=""/>
                    <div>моделирование</div>
                </div>
                    <div className="delivery-item">
                        <img src={img3} alt=""/>
                    <div>печать</div>
                </div>
                    <div className="delivery-item">
                        <img src={img4} alt=""/>
                    <div>доставка</div>
                </div>
            </div>
        </div>
    )
}