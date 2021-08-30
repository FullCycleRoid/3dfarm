import React from "react";

let materialsArray = {
    "hard": {
        "formax": {
            "image": "",
            "title": "FormaX",
            "description": "Инженерный пластик наполненный углеволокном. Материал зарекомендовал себя как обладатель" +
                            "низкой усадки, высокой прочности и жесткости напечатанных изделий"
        },
        "pc": {
            "image": "../images/materials/fdm_pc.jpg",
            "title": "PC (поликарбонат)",
            "description": "Применяется в офтальмологии (для изготовления линз). Благодаря высокому коэффициенту" +
                           "светопропускания используется в качестве аналога стекла. Плавится при температуре" +
                           "250-300⁰С, что нужно учитывать при выборе принтера. В среднем в три раза дороже ABS-пластика"
        },

    },
    "flex": {},
    "hightempreture": {
        "polyamid12": {
            "image": "",
            "title": "Nylon12",
            "description": "Инженерный пластик наполненный углеволокном. Материал зарекомендовал себя как обладатель" +
                            "низкой усадки, высокой прочности и жесткости напечатанных изделий"
        },
    },
    "decorate": {
        "wood": {
            "image": "",
            "title": "Wood (Имитаторы древесины)",
            "description": "Изделия визуально, и функционально ничем не уступают аналогам из натурального дерева" +
                           " – изделиям даже присущ характерный древесный аромат"
        },
        "laybrick": {
            "image": "",
            "title": "laybrick (Имитаторы песчаника)",
            "description": "Материал с высокими эстетическими и эксплуатационными характеристиками. Связующий материал, " +
                           "взятый за основу для создания этого типа материала, смешан с минеральным наполнителем – " +
                           "этим и объясняется оригинальная текстура получаемых изделий."
        },
        "bronzefill": {
            "image": "",
            "title": "BronzeFill (Имитаторы бронзы)",
            "description": "Это практически прозрачный пластик на основе PLA, в состав которого входит также бронзовый" +
                           " наполнитель. Готовые 3D объекты прекрасно реагируют на постобработку – шлифовку, полировку" +
                           " – и визуально выглядят, как цельнометаллические, однако забывать о том, что в основе – " +
                           "термопластик, все же не стоит."
        },
    },
    "metal": {},
    "photopolymer": {},
    "basic": {
        "pla": {
            "image": "",
            "title": "PLA",
            "description": "Безусловный лидер рынка материалов для FDM печати – экологичный, биосовместимый," +
                            "термопластичный состав. В основе его производства – кукуруза и сахарный тростник," +
                            " благодаря чему изделия из этого типа пластика с успехом используются в быту. Его " +
                            "применяют для изготовления игрушек, посуды, сувенирной продукции, элементов корпусов для" +
                            " бытовой техники, дизайнерских моделей, упаковки для пищевых продуктов, лекарств," +
                            " хирургической нити."
        },
    },
}

export default function Materials() {

    return (
        <div className="materials">
            <div className="title_block">
                <h2 className="title">Материалы</h2>
                <h3 className="subtitle">Напишите нам, чтобы узнать возможности и характеристики конкретного матриала.
                                         Если материал отсутствует среди перечисленных, мы закупим его под заказ.</h3>
            </div>

            <div className="material-block">
                <div className="material-block-title">Базовые материалы</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">PLA</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">PETG</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">HIPS</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABS</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit..</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                </div>
            </div>

            <div className="material-block">
                <div className="material-block-title">Прочные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">FormaX</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Nylon</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">30 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">SBS</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABSPlus-430</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">30 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">PС поликарбонат</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABS/PС</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                </div>
            </div>

            <div className="material-block">
                <div className="material-block-title">Гибкие</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Flex</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Rubber</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                </div>
            </div>
            <div className="material-block">
                <div className="material-block-title">Фотополимерные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Модельный</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">25 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Выжигаемый</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">25 руб/см3</div>
                    </div>
                </div>
            </div>
            <div className="material-block">
                <div className="material-block-title">Декоративные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Wood имитатор древесины</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">laybrick имитатор керамики</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem ipsum dolor sit amet, consectetur adipisicing elit..</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">bronzefill имитатор бронзы</div>
                        <div className="material-block-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}