import React from "react";
import './Main.scss';
import './MainAbout.scss';
import './MainMobile.scss';
import './MainAboutMobile.scss';


class Main extends React.Component {

    render(){
             
        return(
            <>
                <div className="main__bunner">
                    
                    <img src="/img/bunner_rectangle_2.svg" alt="rectangle" className="bunner__img bunner__img-2 " />

                    <img src="/img/bunner_rectangle_1.svg" alt="rectangle" className="bunner__img bunner__img-1 " />

                    <img src="/img/bunner_photo.svg" alt="rectangle" className="bunner__img bunner__photo " />

                    <div className="circle-bunner__move">
                        <div className="circle-description__box">
                            <p className="text circle-text">Оценка</p>
                            <h2 className="title circle-text">9 из 10 </h2>
                            <p className="text circle-text">Иван Матвиенко</p>
                            <p className="text circle-text"><span>Wimprof</span></p>
                        </div>

                    </div>

                    <div className="bunner__titles">
                        <h3 className="bunner__title-data">
                            Санкт-петербург 10-21 мая
                        </h3>
                        <h2 className="bunner__title-main">
                            Начни делать<br/> 
                            Customer Development<br/>  
                            и проверять гипотезы
                        </h2>
                        <h3 className="bunner__title-course">
                            На оффлайн-курсе из 5 воркшопов
                        </h3>
                        <button className="bunner__button">
                            <a href="/cost#cost">Записаться</a> 
                        </button>

                    </div>
                </div>
                
                <div className="main__about">
                    <img src="/img/about_rect.svg" alt="rectangle" className="about__img"/>
                    <div className="circle-about__move"></div>

                    <div className="description-about__container">
                        <h2 className="title-about">
                            Кому и зачем знать Customer Development 
                        </h2>
                        <div className="cards-about__container">
                            <div className="card-about__box">
                                <h3 className="title__card-about">ПРОДУКТОВОМУ<br/>ДИЗАЙНЕРУ</h3>
                                <p className="text__card-about">
                                    лучше узнать потребность клиента и научиться быстро проверять прототипы и макеты на пользователях чтобы исправлять ошибки и делать интерфейсы кратно качественнее
                                </p>
                            </div>

                            <div className="card-about__box">
                                <h3 className="title__card-about">ПРОДАКТ-<br/>МЕНЕДЖЕРАМ</h3>
                                <p className="text__card-about">
                                    идеально знать мотивацию своих пользователей и принимать продуктовые решения быстрее и значительно качественнее
                                </p>
                            </div>

                            <div className="card-about__box">
                                <h3 className="title__card-about">ОСНОВАТЕЛЯМ<br/>СТАРТАПОВ</h3>
                                <p className="text__card-about">
                                    запустить процесс проверки гипотез в котором вы быстрее и ЗНАЧИТЕЛЬНО дешевле найдёте product-market fit
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Main;