import React from 'react';
import Form from "./form"

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts" id="contacts">
                <div className="title_block">
                    <h2 className="title">Написать нам</h2>
                </div>
                <div className="contacts-block">
                    <div className="contacts-text">
                        + 7 (904) 332 89 40
                    </div>
                    <div className="contacts-text">
                        3dfarmspb@gmail.com
                    </div>
                    <div className="contacts-text">
                         telegram: @ruby_roid
                    </div>
                    <div className="contacts-text">
                        <a href="instagram.com/3dfarmspb">instagram.com/3dfarmspb</a>
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

