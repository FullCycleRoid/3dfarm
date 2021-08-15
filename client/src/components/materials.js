import React from "react";
import Card from "./card";
import formax from "../images/materials/fdm_formax.jpg";
import pc from "../images/materials/fdm_pc.jpg";
import abs from "../images/materials/fdm_abs.jpg";
import nylon from "../images/materials/fdm_nylon.jpg";
import pla from "../images/materials/fdm_pla.jpg";
import wood from "../images/materials/fdm_wood.jpg";
import laybrick from "../images/materials/fdm_laybrick.jpg";
import bronzefill from "../images/materials/fdm_bronzefill.jpg";

let materialsArray = {
    "hard": {
        "formax": {
            "image": formax,
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
            "image": formax,
            "title": "Nylon12",
            "description": "Инженерный пластик наполненный углеволокном. Материал зарекомендовал себя как обладатель" +
                            "низкой усадки, высокой прочности и жесткости напечатанных изделий"
        },
    },
    "decorate": {
        "wood": {
            "image": wood,
            "title": "Wood (Имитаторы древесины)",
            "description": "Изделия визуально, и функционально ничем не уступают аналогам из натурального дерева" +
                           " – изделиям даже присущ характерный древесный аромат"
        },
        "laybrick": {
            "image": laybrick,
            "title": "laybrick (Имитаторы песчаника)",
            "description": "Материал с высокими эстетическими и эксплуатационными характеристиками. Связующий материал, " +
                           "взятый за основу для создания этого типа материала, смешан с минеральным наполнителем – " +
                           "этим и объясняется оригинальная текстура получаемых изделий."
        },
        "bronzefill": {
            "image": bronzefill,
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
            "image": pla,
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
        <React.Fragment>
            <div className="container flex-container align-center">
                <div className="text-center materials-section__title material-title">
                    <h1>Материалы</h1>
                    <p>
                        Напишите нам, чтобы узнать возможности и характеристики конкретного матриала.
                        Если материал отсутствует среди перечисленных, мы закупим его под заказ.
                    </p>
                </div>
            </div>
            <div className="flex-container align-center material-block-main">
                    <div className="material-block">
                        <h3>ПОПУЛЯРНЫЕ</h3>
                        <Card
                            image={materialsArray.hard.formax.image}
                            title={materialsArray.hard.formax.title}
                            description={materialsArray.hard.formax.description}
                        />
                        <Card
                            image={materialsArray.hard.pc.image}
                            title={materialsArray.hard.pc.title}
                            description={materialsArray.hard.pc.description}
                        />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ПРОЧНЫЕ</h3>
                        <Card
                            image={materialsArray.hard.formax.image}
                            title={materialsArray.hard.formax.title}
                            description={materialsArray.hard.formax.description}
                        />
                        <Card
                            image={materialsArray.hard.pc.image}
                            title={materialsArray.hard.pc.title}
                            description={materialsArray.hard.pc.description}
                        />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ВЫСОКОТЕМПЕРАТУРНЫЕ</h3>
                        <Card
                            image={materialsArray.hard.formax.image}
                            title={materialsArray.hard.formax.title}
                            description={materialsArray.hard.formax.description}
                        />
                        <Card
                            image={materialsArray.hard.pc.image}
                            title={materialsArray.hard.pc.title}
                            description={materialsArray.hard.pc.description}
                        />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ГИБКИЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ТОЧНЫЕ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>ДЕКОРАТИВНЫЕ</h3>
                        <Card
                            image={materialsArray.decorate.wood.image}
                            title={materialsArray.decorate.wood.title}
                            description={materialsArray.decorate.wood.description}
                        />
                        <Card
                            image={materialsArray.decorate.laybrick.image}
                            title={materialsArray.decorate.laybrick.title}
                            description={materialsArray.decorate.laybrick.description}
                        />
                        <Card
                            image={materialsArray.decorate.bronzefill.image}
                            title={materialsArray.decorate.bronzefill.title}
                            description={materialsArray.decorate.bronzefill.description}
                        />
                        <Card />
                    </div>
                    <div className="material-block">
                        <h3>МЕТАЛЛ</h3>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
            </div>
        </React.Fragment>
    )
}