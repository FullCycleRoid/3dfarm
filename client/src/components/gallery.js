import React from "react";
import img1 from "../images/gallery/img1.png"
import img2 from "../images/gallery/img2.png"
import img3 from "../images/gallery/img3.png"
import img4 from "../images/gallery/img4.png"
import img5 from "../images/gallery/img5.png"
import img6 from "../images/gallery/img6.png"
import img7 from "../images/gallery/img7.png"
import img8 from "../images/gallery/img8.png"
import img9 from "../images/gallery/img9.jpg"
import img10 from "../images/gallery/img10.jpg"
import img11 from "../images/gallery/img11.jpg"
import img12 from "../images/gallery/img12.jpg"
import img13 from "../images/gallery/img13.jpg"
import img21 from "../images/gallery/img21.jpg"
import img22 from "../images/gallery/img22.png"
import img23 from "../images/gallery/img23.png"
import img24 from "../images/gallery/img24.png"


export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.showFullGallery = this.showFullGallery.bind(this);
    }

    showFullGallery() {
        const currentState = this.state.visible;
        this.setState({
            visible: !currentState
        })
    }

    render() {
        return (
            <div className="gallery" id="gallery">
                <div className="title_block">
                    <h2 className="title">Галерея</h2>
                </div>
                {/*<div className="gallery-controls">*/}
                {/*   <div className="gallery-control-btn">+  все</div>*/}
                {/*   <div className="gallery-control-btn">+  печать</div>*/}
                {/*   <div className="gallery-control-btn">+  моделирование</div>*/}
                {/*   <div className="gallery-control-btn">+  сканирование</div>*/}
                {/*</div>*/}
                <div className={this.state.visible ? 'gallery_block': 'gallery_block hide'} >
                    <div className="gallery-block__item">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img4} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img5} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img6} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img7} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img8} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img9} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img10} alt=""/>
                    </div>
                   <div className="gallery-block__item">
                        <img src={img11} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img13} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img21} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img22} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img23} alt=""/>
                    </div>
                    <div className="gallery-block__item">
                        <img src={img24} alt=""/>
                    </div>
                </div>
                <div className="show-more-btn" onClick={this.showFullGallery}>смотреть больше</div>
            </div>
        )
    }
}