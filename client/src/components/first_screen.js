import React from 'react';
import img2 from "../images/logo.png"
import arrow from "../images/arrow.png"
import video from "../promo-video.mp4"

function FirstScreen() {

    function windowHeight() {
        const {} = window
    }

    return (
            <div className="first-screen">
                <video src={video} autoPlay="true" muted="true" loop="true" id="myVideo" />

                <div className="first_logo">
                    <img src={img2} alt="" />
                    <p> СКАНИРОВАНИЕ БЕСПЛАТНО</p>
                </div>
                <div className="first-screen-btn">
                    <img src={arrow} alt=""/>
                </div>
            </div>
    )
}

export default FirstScreen;