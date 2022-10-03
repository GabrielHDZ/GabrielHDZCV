import { NextPage } from 'next'
import React from 'react'
import Header from '../components/navbar/header'

const Profile: NextPage = () => {
    return (
        <main>
            <Header />
            <article>
                <h1>Sobre mi</h1>
                <p>
                    Desde joven he sido del tipo de persona que le gusta saber el funcionamiento de las cosas,
                    desarmar juguetes que llegan a mis manos, siempre ha sido uno de mis hobbys favoritos, tuve la oportunidad de conocer el mundo de la tecnologia en la secundaria,
                    desde ahi siempre me ha dado un sentimiento de alegria al saber que existe una basta cantidad de conocimiento en Internet.
                </p>
                <p>
                    Cuando llego el momento de tomar una decision bastante importante en la vida de estudiante, decidi elegir una carrera que se relacionara con la tecnologia
                    y que no fuese muy costosa ya que siempre hay que tener en cuenta los gastos imprevistos, por ello aplique en una Universidad publica ubicada en el
                    municipio de Comitan de Dominguez, Chiapas.
                </p>

                <p>
                    Estudie en el Instituto Tecnológico de Comitán la carrera de Ingeniería Sistemas Computacionales, ahi aprendi y entendi muchas cosas que
                    me han ayudado en mi formacion personal y profesional, entender en que consiste la etica profesional y porque es sumamente importante en el campo de la
                    tecnologia es una de las cosas que tengo muy presente al trabajar con informacion personal de multitud de personas, entender las habilidades y aptitudes
                    necesarias para trabajar en equipo tambien es una de las bases que considero sumamente importantes.
                </p>
                <p>En este momento, he tenido algunos inconvenientes para terminar el proceso de certificación y de titulación de la carrera, mas sin embargo
                    he tenido la oportunidad de dedicarle tiempo a un área en especifica, el desarrollo de software. He desarrollado practicas con el lenguaje
                    PHP, con Javascript y hacer uso de una de sus bibliotecas mas importantes React y ReactNative, además trabajar con NodeJS y
                    generar software en consola de comando, en servidores gratuitos y en el Frontend, con React y con Javascript Vanilla, ademas de usar sus librerias, herramientas y frameworks
                    mas solicitados por el mercado laboral, tales como NextJs, Gatsby, ExpressJs y Typescript.
                    <br />
                    Aplicar buenas practicas haciendo uso del controlador de versiones GIT y haciendo uso de servicios de repositorios remotos GitHub y Gitlab
                </p>

                <h1>Skills tech</h1>
                <h2>Tecnologias varias</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Control de versiones GIT</li>
                    <li>GitHub</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Docker nivel basico</li>
                </ul>
                <h2>Lenguajes de programacion</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Java nivel basico</li>
                    <li>TypeScript nivel basico</li>
                    <li>Go nivel basico</li>
                </ul>
                <h2>Bases de datos</h2>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
            </article>
        </main>

    )
}

export default Profile