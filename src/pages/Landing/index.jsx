import React,{ useState , useEffect } from 'react';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from  '../../assets/images/icons/study.svg';
import giveIcon from  '../../assets/images/icons/give-classes.svg';
import porpleHeart from '../../assets/images/icons/purple-heart.svg';

import './style.css';


function Landing (){

    const [totalConnection , setTotalConnection] = useState(0);

    useEffect( () =>{
        api.get('connections').then( res =>{
            setTotalConnection( res.data.total )
        })
    }, [] )

    return(
        <div id="page-landing">
            <div id="page-landing-content"  className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>sua Plataforma de Cursos</h2>
                </div>
                
                <img src={landingImg} alt=" Plataforma de estudos" className="hero-image"/>

                <div className="button-container">
                    <a href="/study" className="study">
                        <img src={studyIcon} alt="" className="Estudar"/>
                        Estudar
                    </a>

                    <a href="/give-class" className="give-class">
                        <img src={giveIcon} alt="" className="Estudar"/>
                        Ensinar
                    </a>
                </div>

                <span className="total-connections">
                    Total de {totalConnection} conexões já Realizadas!
                    <img src={porpleHeart} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing