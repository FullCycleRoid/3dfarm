import React from 'react';


export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <div className="title_block">
                    <h2 className="title">Написать нам</h2>
                </div>
                <div className="contacts-block">
                    <div className="contacts-text">
                        + 7 (999) 888 87 87
                    </div>
                    <div className="contacts-text">
                        hello@3dfarm.ru
                    </div>
                    <div className="contacts-text">
                         Россия, Санкт-Петербург
                    </div>
                </div>
                <div className="contacts-form">
                    <form action="">
                        <input type="text" placeholder={"email"}/>
                        <div className="contacts-phone">
                               <input type="text" placeholder={"телефон"}/>
                               <input type="checkbox" className="phone-checkbox" />
                               <label htmlFor="Checkbox">перезвонить мне</label>
                        </div>
                        <input type="text" placeholder={"имя"}/>
                        <input type="file" placeholder={"Выбирите файл"}/>
                        <textarea rows="10" cols="45" name="text" placeholder={"комментарий"}></textarea>
                        <input type="submit" className="contact-btn"/>
                    </form>
                </div>
            </div>
        )
    }

}

