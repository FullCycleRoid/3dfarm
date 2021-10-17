import React, {useState} from "react";

export default class Sidebar extends React.Component{

    constructor() {
        super();
        this.state = {
            height: window.innerHeight / 1.8 ,
            currentPosition: null
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
      this.setState({
        currentPosition: window.pageYOffset,
      })
    }

    render () {
        const {currentPosition, height} = this.state
        return (
            <React.Fragment>
                <div className={currentPosition > height? "instagram-block": "instagram-block"}>
                    <a className={currentPosition > height? "instagram-dark": " instagram-white"} href="https://www.instagram.com/3dfarmspb/">Instagram</a>
                </div>
                <div className={currentPosition > height? "tiktok-block": "tiktok-block "}>
                    <a className={currentPosition > height? "tiktok-dark": " tiktok-white"} href="">TikTok</a>
                </div>
            </React.Fragment>
        )
    }
}
