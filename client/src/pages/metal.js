import React from "react";
import propertie1 from "../images/metal/properties1.jpg";
import propertie2 from "../images/metal/properties2.jpg";
import application1 from "../images/metal/application1.jpg";
import application2 from "../images/metal/application2.jpg";
import Frame2 from "../images/at_home/Frame2.png";
import Frame1 from "../images/at_home/Frame1.png";
import Frame3 from "../images/at_home/Frame3.png";
import Frame4 from "../images/at_home/Frame4.png";
// import scrollScript from "../scroll_slider.js";


export default class MetalPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleLoad = this.handleLoad.bind(this);
    //  }

    // componentWillMount() {
    //     window.addEventListener('load', this.handleLoad);
    // }

    // handleLoad() {
    //     const script = document.createElement("script");
    
    //     script.src = {scrollScript};
    //     script.async = true;
    
    //     document.body.appendChild(script);
    // }

    render() {
        return (
            <React.Fragment>
                <div className="metal-first-screen">
                    <div className="metal-first-screen__title">МЫ ДЕЛАЕМ ПЕЧАТЬ МЕТАЛЛОМ <span>ДОСТУПНОЙ</span></div>
                    <input type="submit" value="Рассчитать STL"/>
                </div>
                <section>
                    <div className="process">
                        <h1 className="section__title ">ПРОЦЕСС ПЕЧАТИ</h1>
                        <div className="process__block">
                            <div className="process__block__img">
                                    <img width="500px" src="" alt="" />
                            </div>
                        </div>
                        <div className="process__block__text">
                            <h3>1/4 ПЕЧАТЬ</h3>
                            <p>
                                Детали печатаются с использованием технологии
                                FDM / FFF из филамента состоящего на 90% из металла и 10% полимера.
                            </p>
                            <h3>2/4 ДЕБИНДИНГ</h3>
                            <p>
                                Детали печатаются с использованием технологии
                                FDM / FFF из филамента состоящего на 90% из металла и 10% полимера.
                            </p>
                            <h3>3/4 СПЕКАНИЕ</h3>
                            <p>
                                Детали печатаются с использованием технологии
                                FDM / FFF из филамента состоящего на 90% из металла и 10% полимера.
                            </p>
                            <h3>4/4 МЕТАЛЛ</h3>
                            <p>
                                Детали печатаются с использованием технологии
                                FDM / FFF из филамента состоящего на 90% из металла и 10% полимера.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="properties">
                        <h1 className="properties__title">НЕРЖАВЕЮЩАЯ СТАЛЬ 316L</h1>
                        <div className="properties__table">
                            <div className="first_col">
                                <div>предел прочности</div>
                                <div>предел текучести</div>
                                <div>относительное удлинение</div>
                                <div>твердость по Викерсу</div>
                            </div>
                            <div className="second_col">
                                <div>561 MPa</div>
                                <div>251 MPa</div>
                                <div>53%</div>
                                <div>128HV10</div>
                            </div>
                        </div>
                        <div className="properties__border"></div>
                        <img className="properties__first_img" src={propertie1} alt="" />
                        <img className="properties__second_img" src={propertie2} alt="" />
                    </div>
                </section>
                <section>
                    <div className="application">
                        <h1 className="application__title">ПРИМЕНЕНИЕ</h1>
                        <div className="application__body">
                            <div className="application__body__block">
                                <img src={application1} alt="" />
                                <p>
                                    Детали из нержавеющей стали 316L идеально подходят для изготовления инструментов, приспособлений,
                                    пресс-форм и других функциональных деталей, где важны долговечность и прочность.
                                    Ultrafuse 316L - отличное решение для медицинской, автомобильной или аэрокосмической промышленности
                                    для создания функциональных прототипов и серийного производства.
                                </p>
                            </div>
                            <div className="application__body__block">
                                <img src={application2} alt="" />
                                <p>
                                    Доступное и простое в использовании решение для 3D-печати механических и функциональных деталей из
                                    металла. Нержавеющая сталь 316L устойчива к коррозии, прочна и надежна. Готовая деталь надежна и
                                    готова выдержать многократные нагрузки.
                                    Ultrafuse 316L является отличным вариантом для создания прототипов, а также для серийного
                                    производства функциональных деталей конечного использования.
                                </p>
                            </div>
                            </div>
                    </div>
                </section>
                <section>
                    <div className="print_at_home">
                        <div className="print_at_home__block-title">
                            <h2 className="print_at_home__block-title__title">
                                ТЕПЕРЬ ВЫ МОЖЕТЕ ПЕЧАТАТЬ МЕТАЛЛОМ У СЕБЯ ДОМА
                            </h2>
                            <div className="print_at_home__block-title__paragraph">
                                <p className="small-text">
                                    <span>Теперь вы можете печать даже у себя дома используя обычный 3D принтер!</span> <br/>
                                    Вместе с покупкой материала Ultrafuse, купите Тикет на дебиндинг и спекание. <br/>
                                    Вы присылаете распечатанный сырец нам, мы проводим обработку и высылаем готовое изделие обратно.
                                </p>
                            </div>
                            <div className="print_at_home__images-block">
                            <div className="print_at_home__images-block__item">
                                <img src={Frame2} alt="" />
                                <p>МАТЕРИАЛ</p>
                            </div>
                            <div className="print_at_home__images-block__track"></div>
                            <div className="print_at_home__images-block__item">
                                <img src={Frame1} alt="" />
                                <p>ПЕЧАТЬ</p>
                            </div>
                            <div className="print_at_home__images-block__track"></div>
                            <div className="print_at_home__images-block__item">
                                <img src={Frame3} alt="" />
                                <p>ТИКЕТ НА ДЕБИНБИНГ И СПЕКАНИЕ</p>
                            </div>
                            <div className="print_at_home__images-block__track"></div>
                            <div className="print_at_home__images-block__item">
                                <img src={Frame4} alt="" />
                                <p>ВЫСЫЛАЕМ ОБРАТНО ГОТОВОЕ ИЗДЕЛИЕ</p>
                            </div>
                        </div>
                        </div> 
                    </div>
                </section>
            </React.Fragment> 
        )
    }
}





