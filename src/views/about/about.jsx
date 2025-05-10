import React from "react";
import { FormattedMessage } from "react-intl";
import "./../../App.css";
import { Fade } from "react-awesome-reveal";
import first from "./../../img/iconsAbout/1.png";
import second from "./../../img/iconsAbout/2.png";
import third from "./../../img/iconsAbout/3.png";
import fourth from "./../../img/iconsAbout/4.png";
import fifth from "./../../img/iconsAbout/5.png";


const About = () => {
    return (
        <div className=" md:grid md:grid-cols-2 animate-fadeIn  md:pt-[50px] md:h-screen">



            <div className="z-1 text-slate-300 text-start md:ml-10 md:mr-10">
                <h2 className="font-title font-bold text-2xl md:text-3xl mt-5 ml-5 md:ml-0 md:mt-0">
                    <FormattedMessage id="about.title" defaultMessage="ACERCA DE MI" />
                </h2>

                <div className="border-t border-sky-500 my-4 border-2 ml-5 mr-10 md:ml-0 md:mr-20 mb-5"></div>

                <div className="mx-5 md:mx-0">
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p1" defaultMessage="¡Hola! Soy Iveth, desarrolladora Full Stack con formación en Ciencias de la Computación y una gran pasión por aprender y crear cosas que hagan la vida más fácil (¡y si pueden ser lindas, mejor!). Soy naturalmente curiosa y disfruto resolver problemas, sobre todo cuando eso mejora la experiencia del usuario o simplifica algún proceso." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p2" defaultMessage="He trabajado con distintas tecnologías y me encanta enfrentar nuevos desafíos ya sea resolver un bug complicado, colaborar en equipo o aprender un framework nuevo. Me siento cómoda trabajando bajo presión y creo que la buena comunicación y la gestión del tiempo son tan importantes como escribir código limpio." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p3" defaultMessage="Servía café en mis días de estudiante. Ahora sirvo código, y lo hago bien cargado!." />
                </p>
                </div>

            </div>

            <div className="w-full h-[500px] relative">
                <Fade cascade direction="right" damping={1} delay={300} duration={1000}>
                    <img src={first} alt="primera imagen" className="h-[500px] w-full object-contain  z-0 absolute top-0 left-0" />
                    <img src={second} alt="2da imagen" className="h-[500px] w-full object-contain  z-10 absolute top-0 left-0" />
                    <img src={third} alt="3a imagen" className="h-[500px] w-full object-contain  z-20 absolute top-0 left-0" />
                    <img src={fourth} alt="4a imagen" className="h-[500px] w-full object-contain  z-30 absolute top-0 left-0" />
                    <img src={fifth} alt="5a imagen" className="h-[500px] w-full object-contain  z-40 absolute top-0 left-0" />
                </Fade>
            </div>

           

            <div>

            </div>

           

        </div>
    )
};

export default About;
