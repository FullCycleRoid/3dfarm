import React from "react";
import img1 from "../images/gallery/img1.png"
import img2 from "../images/gallery/img2.png"
import img3 from "../images/gallery/img3.png"
import img4 from "../images/gallery/img4.png"
import img5 from "../images/gallery/img5.png"
import img6 from "../images/gallery/img6.png"
import img7 from "../images/gallery/img7.png"
import img8 from "../images/gallery/img8.png"


export default class Gallery extends React.Component {

    render() {
        return (
            <div className="gallery">
                <div className="title_block">
                    <h2 className="title">Галерея</h2>
                </div>
                <div className="gallery-controls">
                   <div className="gallery-control-btn">+  все</div>
                   <div className="gallery-control-btn">+  печать</div>
                   <div className="gallery-control-btn">+  моделирование</div>
                   <div className="gallery-control-btn">+  сканирование</div>
                </div>
                <div className="gallery_block">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img5} alt=""/>
                    <img src={img6} alt=""/>
                    <img src={img7} alt=""/>
                    <img src={img8} alt=""/>
                    <img src={img5} alt=""/>
                    <img src={img6} alt=""/>
                    <img src={img7} alt=""/>
                    <img src={img8} alt=""/>
                </div>
                <div className="show-more-btn">смотреть больше</div>
            </div>
        )
    }
}