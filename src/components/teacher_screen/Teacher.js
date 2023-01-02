import React from "react";
import './Teacher.scss';
import './TeacherExperience.scss';
import './TeacherMobile.scss';
import './TeacherExperienceMobile.scss';

class Teacher extends React.Component {

    onPlayVideo = function(){
        let video = document.querySelector('video');
        let btnPlay = document.querySelector('.button-play'); 
        let btnStop = document.querySelector('.button-stop');
        video.play();
        btnPlay.classList.remove('visible');
        btnPlay.classList.add('hover');
        btnStop.classList.remove('hover');
        btnStop.classList.add('visible');
    }
    onPauseVideo = function(){
        let video = document.querySelector('video');
        let btnPlay = document.querySelector('.button-play'); 
        let btnStop = document.querySelector('.button-stop');
        video.pause();
        btnStop.classList.remove('visible');
        btnStop.classList.add('hover');
        btnPlay.classList.add('visible');
        btnPlay.classList.remove('hover');
    }

    render(){
        return(
            <>
                <div className="nav-color__rect"></div>
                <div className="main__teacher">
                    <div className="center__container">
                        <h2 className="title-teacher">Почему мне можно доверять</h2>
                        <div className="video-teacher__container">
                            <div className="video-teacher__box">
                                <video  poster="/img/poster.png">
                                    <source src="/media/video-test.mp4" type="video/mp4" />
                                    <source src="/media/video-test.webm" type="video/webm" />
                                </video>
                                <img onClick={this.onPlayVideo} src="/img/video-button.png" className="button-play visible video-button " />
                                <img onClick={this.onPauseVideo} src="/img/video-button-stop.png" className="button-stop hover video-button " />
                            </div>
                            <div className="card-teacher__box">
                                <div>
                                    <h2 className="title-card">Алексей Иванов</h2>
                                    <div className="text-card">Ex-Lead Product Manager</div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="teacher-experience__container">
                            <div className="card-experience__box">
                                <img src="/img/group_1.png" alt="picture" />
                                <h2 className="title-card">Опыт в продукте</h2>
                                <di className="text-card">
                                    Отвечал за продукт поиска по изображениям, с помощью Customer Development и юзабилити-исследований добились кратного роста метрик
                                </di>
                            </div>
                            <div className="card-experience__box">
                                <img src="/img/group_2.png" alt="picture" />
                                <h2 className="title-card">Обучил CustDev<br/> 400+ человек</h2>
                                <di className="text-card">
                                    400+ человек уже прошли курс по CustDev и проверке гипотез в  рамках отдельного курса, так и в составе программы "Руководитель digital-продукта"
                                </di>
                            </div>
                            <div className="card-experience__box">
                                <img src="/img/group_3.png" alt="picture" />
                                <h2 className="title-card">Опыт разработки<br/> бота</h2>
                                <di className="text-card">
                                    Создавали с нуля конструктор ботов для Messenger и выводили в лидеры рынка конструкторов ботов
                                </di>
                            </div>
                            <div className="card-experience__box">
                                <img src="/img/group_4.png" alt="picture" />
                                <h2 className="title-card">Топ-2 — оценка<br/> лектора</h2>
                                <di className="text-card">
                                    Урезанный курс также читал в крупных digital -школах, студенты оценили как Топ-2 преподавателя
                                </di>
                            </div>
                        </div>

                    </div>


                </div>
            </>
        )
    }
}

export default Teacher;