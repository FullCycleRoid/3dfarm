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
                        <div className="material-block-description">Безусловный лидер рынка материалов для FDM печати – экологичный, биосовместимый, термопластичный состав. Его применяют для изготовления игрушек, посуды, сувенирной продукции, элементов корпусов для бытовой техники, дизайнерских моделей, мастер моделей.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">PETG</div>
                        <div className="material-block-description">PETG может стать идеальным решением для 3Д печати, так как этот материал сумел соединить в себе все положительные характеристики ABS и PLA</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">HIPS</div>
                        <div className="material-block-description">Получающиеся детали и объекты, которые созданы с использованием только этого филамента, прочны и в меру пластичны и, кроме всего прочего, довольно легкие. HIPS более мягкий и гладкий материал, его легче обрабатывать механическим способом, в отличии от PLA или ABS. </div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABS</div>
                        <div className="material-block-description">ABS пластик используется для моделей, для которых характерны высокая прочность, устойчивость к температурным перепадам, солям, щелочам и кислотам. С помощью филамента производят печать приборов, деталей роботов, медицинских приборов, образовательных моделей, рекламных объектов и т.д. Также пластик применяется для построения архитектурных моделей.</div>
                        <div className="material-block-item">10 руб/см3</div>
                    </div>
                </div>
            </div>

            <div className="material-block">
                <div className="material-block-title">Прочные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">FormaX</div>
                        <div className="material-block-description">инженерный пластик для 3D-печати. Материал зарекомендовал себя как обладатель низкой усадки, высокой прочности и жесткости напечатанных изделий, не требующей трудоемкой постобработки. </div>
                        <div className="material-block-item">20 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Nylon</div>
                        <div className="material-block-description">Материал, обладающий высокой устойчивостью к повышенным температурам, не содержит вредных примесей, не искажается при нагревании, пластичный и легко обрабатывается после отливки. Несмотря на большую усадку, превосходит ABS по своим прочностным характеристикам. Обладает самосмазывающими свойствами, что позволяет использовать его в качестве подшипников. Отличительная особенность - низкая воспламеняемость.</div>
                        <div className="material-block-item">30 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">SBS</div>
                        <div className="material-block-description">Новый вид материала оставил в себе все лучшие достоинства и был дополнен еще несколькими новыми свойствами: стойкость к высоким температурам и морозам, твердый и ударопрочный, Повышенная разрывная прочность, стойкость к абразивным материалам. Этот материал больше подходит для создания конструкций, чем декораций, он во многом превосходит ABS-пластики.</div>
                        <div className="material-block-item">35 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABSPlus-430</div>
                        <div className="material-block-description">Благодаря совокупности физико-технических характеристик и низкой стоимости, ABSplus-P430 широко применяется в концептуальном моделировании и создании функциональных прототипов, а так же для изготовления конечных деталей для использования.</div>
                        <div className="material-block-item">35 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">PС поликарбонат</div>
                        <div className="material-block-description">отличающийся хорошей ударопрочностью, выдерживающий различные температуры и предназначенный для изготовления различных кухонных изделий, медицинского производства, а также конструкций для приборов</div>
                        <div className="material-block-item">25 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">ABS/PС</div>
                        <div className="material-block-description">Совмещает в себе свойства ABS и поликарбоната (за счет их непосредственного смешивания). ABS обеспечивает технологичность, а поликарбонат - ударопрочность, термостойкость и механические свойства.</div>
                        <div className="material-block-item">25 руб/см3</div>
                    </div>
                </div>
            </div>

            <div className="material-block">
                <div className="material-block-title">Гибкие</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Flex</div>
                        <div className="material-block-description">аналог плотной резины. Он довольно гибкий и мягкий для пластика. Отлично подойдет для изготовления всевозможных прокладок, демпферов, проставок и даже колес.</div>
                        <div className="material-block-item">40 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Rubber</div>
                        <div className="material-block-description">Материал отлично подходит для печати уникальных резиново-технических изделий: прокладки, отбойники, амортизаторы, сайлентблоки и т.д. Материал гибкий, эластичный. С его помощью можно распечатать привычные модели с новыми свойствами: обувь, маски, чехлы для телефонов, инженерно-технические изделия, декоративные инструменты.  </div>
                        <div className="material-block-item">40 руб/см3</div>
                    </div>
                </div>
            </div>
            <div className="material-block">
                <div className="material-block-title">Фотополимерные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Модельный</div>
                        <div className="material-block-description"> Полимер предназначен для печати литьевых форм и может использоваться на производстве. Смола имеет высокую скорость затвердевания, что обеспечивает прочность готовых изделий и значительно сокращает время печати.</div>
                        <div className="material-block-item">35 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">Выжигаемый</div>
                        <div className="material-block-description">Работа с литьевым фотополимером Anycubic отличается от работы с воском, это два разных процесса: фотополимер выжигается, а не вытапливается. Поэтому муфельная печь должна быть с принудительной вентиляцией.</div>
                        <div className="material-block-item">50 руб/см3</div>
                    </div>
                </div>
            </div>
            <div className="material-block">
                <div className="material-block-title">Декоративные</div>
                <div className="material-block-body">
                    <div className="material-block-material">
                        <div className="material-block-item">Wood имитатор древесины</div>
                        <div className="material-block-description">Cостоит на 40% из дерева. Термобработке поддается пластик подобно PLA. Готовое изделие напоминает фактуру дерева на ощупь и имеет запах дерева. Возможна постобработка изделий.</div>
                        <div className="material-block-item">30 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">laybrick имитатор керамики</div>
                        <div className="material-block-description">Материал для 3D печати, позволяющий в зависимости от температуры получать различное качество поверхности: от очень гладких до шероховатых, по ощущениям и виду похожим на песчаник.</div>
                        <div className="material-block-item">40 руб/см3</div>
                    </div>
                    <div className="material-block-material">
                        <div className="material-block-item">bronzefill имитатор бронзы</div>
                        <div className="material-block-description">Материал с добавлением мелкого бронзового порошка. Данные нити в 3 раза тяжелее обычного PLA, а его плотность составляет 3,9 г/см.куб. По тактильным свойствам материал напоминает настоящую бронзу.</div>
                        <div className="material-block-item">40 руб/см3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}