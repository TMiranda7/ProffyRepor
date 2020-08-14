import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';

import TeacherItem from '../../components/TeacherItem'
import  Select  from '../../components/select';

import './style.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Que incrivel que você quer dar aula!" >
             <form id="search-teacher">

                    <Select name="subject" label="Matéria" options={[
                        {value:"portugues",label:"Portugues"},
                        {value:"matematica",label:"Matemática"},
                        {value:"historia",label:"História"},
                        {value:"geografia",label:"Geografia"},
                        {value:"ingles",label:"Inglês"},
                        {value:"educacaoFisica",label:"Ed.Física"},
                    ]}/>
                    
                    <Select name="week_day" label="Dia" options={[
                        {value:"1",label:"Segunda"},
                        {value:"2",label:"Terça"},
                        {value:"3",label:"Quarta"},
                        {value:"4",label:"Quinta"},
                        {value:"5",label:"Sexta"},
                        {value:"6",label:"Sábado"},
                    ]}/>
                <Input type="time" name="time" label="Hora" /> 
                 
             </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList