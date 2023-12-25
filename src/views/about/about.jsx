import React from "react";
import { FormattedMessage } from "react-intl";
import "./../../App.css";
import dots from "./../../img/blueDotsDouble.png";
import avatar from "./../../img/heronight2.png";
import hero from "./../../img/heronight.png";
import hero3 from "./../../img/heronight3.png";
import hero4 from "./../../img/heronight4.png";
import hero5 from "./../../img/heronight5.png";
import hero6 from "./../../img/heronight6.png";
import hero7 from "./../../img/heronight7.png";
import avatarSm from "./../../img/heronight2Sm.png";
import hero3Sm from "./../../img/heronight3Sm.png";
import hero4Sm from "./../../img/heronight4Sm.png";
import hero5Sm from "./../../img/heronight5Sm.png";
import hero6Sm from "./../../img/heronight6Sm.png";
import hero7Sm from "./../../img/heronight7Sm.png";

const About = () => {
    return (
        <div className=" md:grid md:grid-cols-2 animate-fadeIn  md:pt-[60px] md:mb-5">



            <div className="z-1 text-slate-300 text-start md:py-auto md:ml-10 md:mr-10">
                <h2 className="font-title font-bold text-2xl md:text-3xl mt-5 ml-5 md:ml-0 md:mt-0">
                    <FormattedMessage id="about.title" defaultMessage="ACERCA DE MI" />
                </h2>

                <div className="border-t border-sky-500 my-4 border-2 ml-5 mr-10 md:ml-0 md:mr-20 mb-5"></div>

                <div className="mx-5 md:mx-0">
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p1" defaultMessage="Impulsada por una pasión inquebrantable por la codificación y la tecnología, prospero al crear experiencias digitales fluidas y resolver problemas complejos como Full Stack Developer. Con una sólida base en tecnologías tanto de front-end como de back-end, me especializo en crear aplicaciones web robustas que rompen barreras y ofrecen experiencias de usuario excepcionales." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p2" defaultMessage="En mi viaje como Full Stack Developer, he abrazado desafíos, fomentando la innovación y la eficiencia a través de mi código. Creo en el poder de la tecnología para transformar ideas en realidad y busco constantemente oportunidades para expandir mis habilidades y conocimientos en el siempre cambiante panorama tecnológico." />
                </p><br/>
                <p className="font-txt text-xs md:text-base">
                    <FormattedMessage id="about.p3" defaultMessage="Cuando no estoy inmersa en líneas de código, soy una aventurera de corazón, explorando el mundo de los lenguajes y marcos de codificación con la misma entusiasmo que me lleva a descubrir nuevos lugares. Ya sea optimizando algoritmos o descubriendo gemas ocultas durante mis viajes, abordo cada esfuerzo con curiosidad y determinación." />
                </p>
                </div>

            </div>

            {/* <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
                <img src={dots} alt="blue dots" className="w-full h-full object-cover" />
            </div> */}


            <div className="mt-5 hidden md:block md:z-[-1]"> {/*todos los iconos y avatar en lg screen*/}
            
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero} alt="logo1" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen ">
                <img src={hero3} alt="logo2" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero4} alt="logo3" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero5} alt="logo4" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero6} alt="logo5" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
                <img src={hero7} alt="logo6" className="w-full h-full object-cover" />
            </div>

            </div>

            <div className="md:hidden relative "> {/*iconos +avatar en small screen */}
            <div className="relative h-[380px]">
                <img src={avatarSm} alt="avatar" className="absolute"/>
                <img src={hero} alt="avatar" className="absolute"/>
                <img src={hero3Sm} alt="avatar" className="absolute"/>
                <img src={hero4Sm} alt="avatar" className="absolute"/>
                <img src={hero5Sm} alt="avatar" className="absolute"/>
                <img src={hero6Sm} alt="avatar" className="absolute"/>
                <img src={hero7Sm} alt="avatar" className="absolute"/>
            </div>    
            </div>

        </div>
    )
};

export default About;