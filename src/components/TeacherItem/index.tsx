import React from 'react';

import whatsapp from  '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/19714655?s=460&u=5758e1bc769fc2343d4b75fc9b56ea7766dbd8a9&v=4" alt="Thiago Miranda"/>
                        <div>
                            <strong>Thiago Miranda</strong>
                            <span>Matematica</span>
                        </div>
                    </header>
                    <p>
                        um cara que gosta bastante de matematica , pense num caba pra gostar de matematica!
                    </p>
                    <footer>
                        <p>
                            Preço 
                        </p>
                        <strong>R$ 50,00 </strong>

                        <button>
                        <img src={whatsapp} alt="Contato"/>
                        Entrar em contato
                    </button>
                    </footer>

                   
                </article>
    )
}

export default TeacherItem
