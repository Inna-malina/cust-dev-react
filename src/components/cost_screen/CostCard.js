import React from "react";
import './CostCard.scss';


class CostCard extends React.Component {
    showForm = function(){
        let modal = document.querySelector('.modal');
        modal.classList.remove('disactive');
    }
    render() {
        let {title, text} = this.props
        return (
            <div className="cost-card__box">
                <div>
                    <h2 className="title-cost-card">{title}</h2>
                    <div className="text-cost-card">{text}</div>
                    <button onClick={this.showForm} className="cost-card__button">Оформить</button>                    
                </div>

            </div>
        )
    }
}

export default CostCard;