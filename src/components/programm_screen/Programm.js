import React from "react";
import './Programm.scss';
import './ProgrammResult.scss';
import './ProgrammMobile.scss';
import './ProgrammResaltMobile.scss';

class Programm extends React.Component {
    render(){
        return(
            <>
                <div className="nav-color__rect"></div>
                <div className="main__programm">
                    <div className="center__container">
                        <h2 className="title-programm">Что будет на курсе</h2>
                        <div className="description-programm__container">
                            <div className="card-programm__box">
                                <h2 className="title-card">7 лекций</h2>
                                <p className="text-card">
                                    насыщенных практикой
                                </p>
                            </div>
                            <div className="card-programm__box">
                                <h2 className="title-card">2 гипотезы</h2>
                                <p className="text-card">
                                    минимум, которые проверишь на курсе
                                </p>
                            </div>
                            <div className="card-programm__box">
                                <h2 className="title-card">3 методички</h2>
                                <p className="text-card">
                                    с пошаговым описанием действий как провести классный CustDev и как проверить любую гипотезу
                                </p>
                            </div>
                            <div className="card-programm__box">
                                <h2 className="title-card">20 интервью</h2>
                                <p className="text-card">
                                    с пользователями твоего продукта
                                </p>
                            </div>
                        </div>
                        <a href="#" className="link-programm">
                            Смотреть программу полностью
                        </a>                        
                    </div>

                </div>

                <div className="main__result">
                    <img src="/img/result_rect_2.svg" alt="rectangle" className="result__img" />
                   <img src="/img/result_rect_1.svg" alt="rectangle" className="result__img " /> 
                    <img src="/img/result_rect_3.svg" alt="rectangle" className="result__img " />
                    <div className="center__container">
                        <h2 className="title-result">
                            Результат
                        </h2>
                        <div className="description-result__container">
                            <div className="card-resalt__box">
                                <img src="/img/icon_1.png" alt="icon" className="img-result__card" />
                                <div className="description-result__card">
                                    <h2 className="title-result__card">
                                        Ты начнёшь делать Customer Development и проверять гипотезы в своём проекте
                                    </h2>
                                    <p className="text-result__card">
                                        Структура курса построена построена вокруг практики в проектах участников курса. 100% слушателей этого курса будут применять оба навыка в своих проектах
                                    </p>
                                </div>
                            </div>

                            <div className="card-resalt__box">
                                <img src="/img/icon_2.png" alt="icon" className="img-result__card" />
                                <div className="description-result__card">
                                    <h2 className="title-result__card">
                                        Заведенный процесс
                                    </h2>
                                    <p className="text-result__card">
                                        Обязательной частью обучения будет встройка процессов постоянного Customer Development и проверки гипотез в ежедневную рутину
                                    </p>
                                </div>
                            </div>

                            <div className="card-resalt__box">
                                <img src="/img/icon_3.png" alt="icon" className="img-result__card" />
                                <div className="description-result__card">
                                    <h2 className="title-result__card">
                                        Инструменты, которые останутся с вами надолго
                                    </h2>
                                    <p className="text-result__card">
                                        Все участники курса получат два набора карт — конструкторы, из которых можно будет собрать идеальный процесс Customer Development и проверить любую гипотезу
                                    </p>
                                </div>
                            </div>

                            <div className="card-resalt__box">
                                <img src="/img/icon_4.png" alt="icon" className="img-result__card" />
                                <div className="description-result__card">
                                    <h2 className="title-result__card">
                                        Кейсы и приёмы топовых компаний рунета
                                    </h2>
                                    <p className="text-result__card">
                                        Расскажу и разберём кейсы, хаки и нюансы топовых команд России: SkyEng, Яндекс, Chatfuel
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Programm;