import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import img1 from "../images/gallery/img1.jpg"
import img2 from "../images/gallery/img2.jpg"
import img3 from "../images/gallery/img3.jpg"
import img4 from "../images/gallery/img4.jpg"
import img5 from "../images/gallery/img5.jpg"
import img6 from "../images/gallery/img6.jpg"
import img7 from "../images/gallery/img7.jpg"
import img8 from "../images/gallery/img8.jpg"
import img9 from "../images/gallery/img9.jpg"
import img10 from "../images/gallery/img10.jpg"
import img11 from "../images/gallery/img11.jpg"
import img12 from "../images/gallery/img12.jpg"
import img13 from "../images/gallery/img13.jpg"
import img14 from "../images/gallery/img14.jpg"
import img15 from "../images/gallery/img15.jpg"
import img16 from "../images/gallery/img16.jpg"
import img17 from "../images/gallery/img17.jpg"
import img18 from "../images/gallery/img18.jpg"
import img19 from "../images/gallery/img19.jpg"
import img20 from "../images/gallery/img20.jpg"
import img21 from "../images/gallery/img21.jpg"
import img22 from "../images/gallery/img22.jpg"
import img23 from "../images/gallery/img23.jpg"
import img24 from "../images/gallery/img24.jpg"

import img30 from "../images/gallery/img30.png"
import img31 from "../images/gallery/img31.png"
import img32 from "../images/gallery/img32.jpg"
import img33 from "../images/gallery/img33.png"
import img34 from "../images/gallery/img34.jpg"
import img35 from "../images/gallery/img35.jpg"
import img36 from "../images/gallery/img36.jpg"
import img37 from "../images/gallery/img37.jpg"
import img38 from "../images/gallery/img38.png"
import img39 from "../images/gallery/img39.png"
import img40 from "../images/gallery/img40.jpg"



import {Divider} from "@material-ui/core";
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;



export default class MyCarousel extends React.Component {



    render() {
        return (
           <React.Fragment>
               <div className="gallery-controls">
                   <div className="gallery-control-btn">все</div>
                   <div className="gallery-control-btn">печать</div>
                   <div className="gallery-control-btn">моделирование</div>
                   <div className="gallery-control-btn">сканирование</div>
               </div>
               <div>
                    <div className="gallery-img">
                        <img className="" src={img1} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img2} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img3} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img4} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img5} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img6} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img7} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img8} alt=""/>
                    </div>
                   <div className="gallery-img">
                        <img className="" src={img9} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img10} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img11} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img12} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img13} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img14} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img15} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img16} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img17} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img18} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img19} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img20} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img21} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img22} alt=""/>
                    </div>
                   <div className="gallery-img">
                        <img className="" src={img23} alt=""/>
                    </div>
                   <div className="gallery-img">
                        <img className="" src={img24} alt=""/>
                    </div>

                   <div className="gallery-img">
                        <img className="" src={img30} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img31} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img32} alt=""/>
                    </div>
                   <div className="gallery-img">
                        <img className="" src={img33} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img34} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img35} alt=""/>
                    </div>
                     <div className="gallery-img">
                        <img className="" src={img36} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img37} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img38} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img39} alt=""/>
                    </div>
                    <div className="gallery-img">
                        <img className="" src={img40} alt=""/>
                    </div>
                </div>
           </React.Fragment>
        )
    }
}



//
// export default class MyCarousel extends React.Component{
//
//     render() {
//         return (
//             <Carousel autoPlay={true}
//                       width="800px"
//                       interval="3000"
//                       thumbWidth="200px"
//                       dynamicHeight={true}
//                       width={600}
//             >
//                 <div>
//                     <img src={img1} />
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img2} />
//                     <p className="legend">Legend 2</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img3} />
//                     <p className="legend">Legend 3</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img4} />
//                     <p className="legend">Legend 4</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img5} />
//                     <p className="legend">Legend 5</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img6} />
//                     <p className="legend">Legend 5</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div>
//                     <img src={img7} />
//                     <p className="legend">Legend 5</p>
//                     <div className="mySlides-div">
//                       <ul className="mySlides-ul">
//                         <h3>Детали печати</h3>
//                         <li><strong>Время печати: </strong>3 часа 19 минут</li>
//                         <li><strong>Вес: </strong>48 грамм</li>
//                         <li><strong>Материал: </strong>ABS</li>
//                         <li><strong>Качество: </strong> 0.2мм</li>
//                         <li><strong>Размеры:</strong> 33x57x105 мм</li>
//                         <li><strong>Стоимость: </strong> 310 рублей</li>
//                       </ul>
//                     </div>
//                 </div>
//             </Carousel>
//         );
//     }
// };