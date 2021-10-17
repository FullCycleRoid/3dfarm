import React, { useState } from 'react';
import img2 from "../images/logo.png"
import arrow from "../images/arrow.png"
import video from "../video/promo-video.mp4"

function FirstScreen() {

    const [width, setWidth] = useState()

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    console.log(screenWidth, screenHeight)

    return (
            <div className="first-screen">
                <div className="video-wrapper"
                     style={{width: screenWidth, height: screenHeight}}
                >
                    <video src={video} autoPlay={true} muted={true}
                           loop={true} id="myVideo"

                    />
                </div>
                <div className="first_logo">
                    <img src={img2} alt=""/>
                    <p>СКАНИРОВАНИЕ БЕСПЛАТНО</p>
                    <a className="first-screen-btn" href="#calculator">
                        <img src={arrow} alt=""/>
                    </a>
                </div>
            </div>
    )
}

export default FirstScreen;