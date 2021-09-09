import React from 'react';
import Form from "./form"

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <div className="title_block">
                    <h2 className="title">Написать нам</h2>
                </div>
                <div className="contacts-block">
                    <div className="contacts-text">
                        + 7 (904) 332 89 40
                    </div>
                    <div className="contacts-text">
                        feedmetal89@gmail.com
                    </div>
                    <div className="contacts-text">
                         Россия, Санкт-Петербург
                    </div>
                </div>
                <Form />
            </div>
        )
    }

}

