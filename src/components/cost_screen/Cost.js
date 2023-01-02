import React from "react";
import './Cost.scss';
import CostCard from "./CostCard";
import Modal from "./Modal";
import './CostMobile.scss';
import './CostCardMobile.scss';

class Cost extends React.Component {
    render(){
        return(
            <>
                <div className="nav-color__rect"></div>
                <div className="cost__container" name="cost">
                    <div className="center__container">
                        <h2 className="title-prise-cost">Стоимость для компаний</h2>
                        <div className="prise__container">
                            <CostCard
                            title='32 900 ₽'
                            text='1 сотрудник'/>
                            <CostCard
                            title='29 900 ₽ / чел'
                            text='2 сотрудника'/>
                            <CostCard
                            title='26 900 ₽ / чел'
                            text='5+ сотрудников'/>
                            <CostCard
                            title='25 900 ₽'
                            text='Тариф «Для себя»'/>
                        </div>
                    </div>
                </div>

                <div className="photo-cost__container">
                    <h2 className="title-photo-cost">Как проходили прошлые потоки</h2>
                    <div className="photo__box">
                        <img src="/img/photo_1.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_2.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_3.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_4.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_5.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_6.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_7.jpg" alt="picture" className="photo"/>
                        <img src="/img/photo_8.jpg" alt="picture" className="photo"/>
                    </div>
                </div>

                <Modal />
            </>
        )
    }
}

export default Cost;