import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import './App.scss';
import './AppMobile.scss';
import Main from "../main_screen/Main";
import Programm from "../programm_screen/Programm";
import Teacher from "../teacher_screen/Teacher";
import Cost from "../cost_screen/Cost";

class App extends React.Component {
       
       showMenu = function(){
            let mobileMenu = document.querySelector('.mobile-menu');
            let nav = document.querySelector('nav');
            mobileMenu.classList.add('disactive');
            nav.classList.add('active');
       }

       closeMenu = function(){
            let mobileMenu = document.querySelector('.mobile-menu');
            let nav = document.querySelector('nav');
            mobileMenu.classList.remove('disactive');
            nav.classList.remove('active');
       }


    render(){

        return(
            <Router>
                <div className="app">
                        <nav>
                            <div className="nav__box center">
                                <div className="mobile-close" onClick={this.closeMenu}></div>
                                <ul className="nav__list">
                                    <li className="nav__list-item">
                                        <Link to="/">Главная</Link> 
                                        
                                    </li>
                                    <li className="nav__list-item">
                                        <Link to="/programm">Программа</Link> 
                                    </li>
                                    <li className="nav__list-item">
                                        <Link to="/about-teacher">О преподавателе</Link> 
                                    </li>
                                    <li className="nav__list-item">
                                        <Link to="/cost">Стоимость</Link> 
                                    </li>
                                </ul>

                                <button className="nav__button">
                                    <Link to="/cost">Запись на курс</Link> 
                                </button>
                            </div>
                        </nav>

                        <div className="main-content">
                            <div className="mobile-menu" onClick={this.showMenu}></div>
                            <Routes>
                                <Route path="/" element={<Main />}></Route>
                                <Route path="/programm" element={<Programm/>}></Route>
                                <Route path="/about-teacher" element={<Teacher/>}></Route>
                                <Route path="/cost" element={<Cost/>}></Route>
                            </Routes>
                        </div>

                        <footer>
                            <div className="footer-top__box">
                                 <div className="center">
                                    <div className="footer-nav__box">
                                        <ul className="nav__list">
                                            <li className="nav__list-item">
                                                <Link to="/">Главная</Link> 
                                                
                                            </li>
                                            <li className="nav__list-item">
                                                <Link to="/programm">Программа</Link> 
                                            </li>
                                            <li className="nav__list-item">
                                                <Link to="/about-teacher">О преподавателе</Link> 
                                            </li>
                                            <li className="nav__list-item">
                                                <Link to="/cost">Стоимость</Link> 
                                            </li>
                                        </ul>
                                        <button className="nav__button">
                                            <Link to="/cost">Запись на курс</Link> 
                                        </button>                                             
                                    </div>
                                </div>                               

                            </div>
                            <div className="footer-bottom__box">
                                <p>Все права защищены © 2022</p>
                            </div>
                        </footer>
                </div>
            </Router>
        );
    }
}

export default App;