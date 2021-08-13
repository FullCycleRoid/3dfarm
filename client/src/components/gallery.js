import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img1 from "../images/slider/img1.jpg"
import img2 from "../images/slider/img2.jpg"
import img3 from "../images/slider/img3.jpg"
import img4 from "../images/slider/img4.jpg"
import img5 from "../images/slider/img5.jpg"
import img6 from "../images/slider/img6.jpg"
import img7 from "../images/slider/img7.jpg"


var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;


export default class MyCarousel extends React.Component{

    render() {
        return (
            <Carousel autoPlay={true}
                      width="800px"
                      interval="3000"
                      thumbWidth="200px"
                      dynamicHeight={true}
                      width={600}
            >
                <div>
                    <img src={img1} />
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 4</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 5</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 5</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
                <div>
                    <img src={img7} />
                    <p className="legend">Legend 5</p>
                    <div className="mySlides-div">
                      <ul className="mySlides-ul">
                        <h3>Детали печати</h3>
                        <li><strong>Время печати: </strong>3 часа 19 минут</li>
                        <li><strong>Вес: </strong>48 грамм</li>
                        <li><strong>Материал: </strong>ABS</li>
                        <li><strong>Качество: </strong> 0.2мм</li>
                        <li><strong>Размеры:</strong> 33x57x105 мм</li>
                        <li><strong>Стоимость: </strong> 310 рублей</li>
                      </ul>
                    </div>
                </div>
            </Carousel>
        );
    }
};