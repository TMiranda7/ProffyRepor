import React from 'react';
import { Link } from 'react-router-dom';

import backicon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';


import './style.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

 const PageHeader:React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backicon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="proffy"/>
            </div>  

            <div className="header-content">
                <strong>{props.title}</strong>
                <p>{props.description ? props.description : null }</p>
                
                {props.children}
            </div>
        </header>     
        
    )
 }

 export default PageHeader;