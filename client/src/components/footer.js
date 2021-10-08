import React from 'react';


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer-logo">3DFARM</div>
                    <ul className="footer-list">
                        <li>калькулятор</li>
                        <li>галерея</li>
                        <li>о ферме</li>
                        <li>материалы</li>
                        <li>моделирование</li>
                        <li>цены</li>
                        <li>доставка</li>
                        <li>контакты</li>
                    </ul>
                    <div>Россия</div>
                    <div className="credits">
                        <p>©Ruby Roid - 2021</p>
                        <p>Дизайн : iulialukina.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;