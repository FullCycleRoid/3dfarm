import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../images/slider/img1.jpg"
import img2 from "../images/slider/img2.jpg"
import img3 from "../images/slider/img3.jpg"
import img4 from "../images/slider/img4.jpg"
import img5 from "../images/slider/img5.jpg"
import img6 from "../images/slider/img6.jpg"
import img7 from "../images/slider/img7.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#eee" }}
      onClick={onClick}
    />
  );
}

export default class MyCarousel extends Component {

  render() {
    const settings = {
      className: "center carouselInner",
      variableWidth: true,
      infinite: true,
      centerPadding: "60px",
      adaptiveHeight: true,
      autoplay:true,
      slidesToShow: 5,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={img1} width="400px" alt=""/>
          </div>
          <div>
            <img src={img2} width="400px"alt=""/>
          </div>
          <div>
             <img src={img3} width="400px"alt=""/>
          </div>
          <div>
             <img src={img4} width="400px"alt=""/>
          </div>
          <div>
            <img src={img5} width="400px"alt=""/>
          </div>
          <div>
             <img src={img6} width="400px"alt=""/>
          </div>
          <div>
             <img src={img7} width="400px"alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}


//
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
//
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
//             >
//                 <div>
//                     <img src={img1} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={img2} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={img3} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={img4} />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src={img5} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src={img6} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src={img7} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src={img8} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//             </Carousel>
//         );
//     }
// };