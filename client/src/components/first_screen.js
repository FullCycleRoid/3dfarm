import React, { useState } from 'react';
import img2 from "../images/logo.png"
import arrow from "../images/arrow.png"
import video from "../video/promo-video.mp4"

function FirstScreen() {

    const [width, setWidth] = useState()

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const imageTopOffset = window.innerHeight * 0.7 + "px"
    const paraTopOffset = window.innerHeight  * 0.8 + "px"
    const btnTopOffset = window.innerHeight  * 0.88 + "px"

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
                    <img src={img2} alt=""
                         style={{top: imageTopOffset}}
                    />
                    <p style={{top: paraTopOffset}}>
                        СКАНИРОВАНИЕ БЕСПЛАТНО
                    </p>
                </div>
                <a className="first-screen-btn"
                   href="#calculator"
                   style={{top: btnTopOffset}}
                >
                    <img src={arrow} alt=""/>
                </a>
            </div>
    )
}

export default FirstScreen;