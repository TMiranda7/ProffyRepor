import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import  WarningImage  from '../../assets/images/icons/warning.svg';

import  './style.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/select';


function TeacherForm(){

    const [ name , setName ] = useState('');
    const [ avatar , setAvatar ] = useState('');
    const [ whatsapp , setWhatsapp ] = useState('');
    const [ bio , setBio ] = useState('');
    const [ cust , setCust ] = useState('');
    const [ from , setFrom ] = useState('');
    const [ to , setTo ] = useState('');
    

    const [ scheduleWeek , setScheduleWeek ] = useState([
        { week_day:0 , from: "00:00 AM" , to: "00:00 AM" },
    ])

    function addAulas(){
        setScheduleWeek([ ...scheduleWeek,
        {week_day:0 ,from:"00:00 AM" , to:"00:00 AM"} 
    ])}

    function inSubmited(){
        console.log({
            name,
            whatsapp,
            bio
        })
    }

    return(
        
        <div id="page-teacher-form" className="container">
            <PageHeader title="Esses são nossos Proffys!" 
                description="Primeiro passo é você preencher esse formulário!"/>

            <main>
                <form onSubmit={inSubmited}>
                    <fieldset>
                        <legend> Seus Dados </legend>
                        <Input name="name" label="Nome Completo" value={name} onChange={(e) => { setName(e.target.value)} } />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value)} }/>
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value)} } />
                        <TextArea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value)} }/>
                    </fieldset>

                    <fieldset>
                        <legend> Sobre as Aulas... </legend>
                        <Select name="subject" label="Matéria" options={[
                            {value:"portugues",label:"Portugues"},
                            {value:"matematica",label:"Matemática"},
                            {value:"historia",label:"História"},
                            {value:"geografia",label:"Geografia"},
                            {value:"ingles",label:"Inglês"},
                            {value:"educacaoFisica",label:"Ed.Física"},
                        ]}/>
                        <Input name="cust" label="Valor Hora/Aula" value={cust} onChange={(e)=>{ setCust(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend> Horários disponiveis 
                            <button onClick={addAulas}> + Novo Horário </button> 
                        </legend>

                        {scheduleWeek.map( week =>{
                            return (
                            <div key={week.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia" options={[
                                        {value:"1",label:"Segunda"},
                                        {value:"2",label:"Terça"},
                                        {value:"3",label:"Quarta"},
                                        {value:"4",label:"Quinta"},
                                        {value:"5",label:"Sexta"},
                                        {value:"6",label:"Sábado"},
                                    ]}/>
                            <Input type="time" name="from" label="De" value={ from } onChange={ (e) => {setFrom(e.target.value)}} />
                            <Input type="time" name="to" label="Até" value={ to } onChange={ (e) => {setTo(e.target.value)}} />
                        </div>
                        )})}
                    </fieldset>                    

                    <footer>
                        <p>
                            <img src={WarningImage} alt="Aviso Importante!"/>
                            Importante! <br />
                            Rreencha os dados!
                        </p>

                        <button type="submit" > Salvar Cadastro </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm