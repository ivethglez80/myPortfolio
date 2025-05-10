import React from "react";
import { FormattedMessage } from "react-intl";
import {MdDoubleArrow} from "react-icons/md";
import {PiPlant} from "react-icons/pi";

const Profile = () => {
    return (
        <div className="animate-fadeIn mx-5 md:mx-10 mt-10 md:mt-2 md:pb-0 md:grid md:grid-cols-4 md:gap-16 text-slate-300 md:pt-[40px] md:h-screen">

            <div className="text-start mb-5 md:mb-0">
            <h1 className="font-title font-bold text-2xl"><FormattedMessage id="profile.edu" defaultMessage="EDUCACION" /></h1 >
            <div className="border-t border-sky-500 mt-2 mb-5 md:mb-10 mr-10 border-2"></div>
            <span className="flex mt-0 md:mt-20"><MdDoubleArrow className="text-sky-500"/> <h4 className="font-title">B.U.A.P</h4></span>
            <p className="font-txt text-sm"><FormattedMessage id="profile.edu1" defaultMessage="Licenciatura en Ciencias de la Computación" /></p>
            <span className="flex mt-12"><MdDoubleArrow className="text-sky-500"/><h4 className="font-title">SoyHenry</h4></span>
            <p className="font-txt text-sm"><FormattedMessage id="profile.edu2" defaultMessage="Desarrollador Web Full Stack" /></p>
            <span className="flex mt-12"><MdDoubleArrow className="text-sky-500"/><h4 className="font-title">FCodeCamp</h4></span>
            <p className="font-txt text-sm"><FormattedMessage id="profile.edu3" defaultMessage="Diseño web Responsive / JavaScript / Bibliotecas de front-end" /></p>
            </div>

            <div>
            <h1 className="font-title font-bold text-2xl text-start"><FormattedMessage id="profile.sk" defaultMessage="CONOCIMIENTOS" /></h1 >
            <div className="border-t border-sky-500 mt-2 mb-4 mr-10 border-2"></div>
            <ul className="font-subtitle">
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-4 my-1 hover:bg-white hover:text-black">JAVASCRIPT</li>
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">REACT JS</li>
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-4 my-1 hover:bg-white hover:text-black">NEXT JS</li>
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">REDUX</li>
                <li className="border border-slate-300 rounded-full text-start mr-14 pl-4 my-1 hover:bg-white hover:text-black">TAILWIND CSS</li>
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">NODE JS</li>
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-4 my-1 hover:bg-white hover:text-black">EXPRESS JS</li>
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">POSTGRESQL</li>
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-12 my-1 hover:bg-white hover:text-black">GIT</li>
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">JEST JS</li>        
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-12 my-1 hover:bg-white hover:text-black">MYSQL</li>    
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">NEST</li>        
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-12 my-1 hover:bg-white hover:text-black">REACT NATIVE</li>    
                <li className="border border-slate-300 rounded-full ml-20 pl-4 my-1 hover:bg-white hover:text-black">SWAGGER</li>        
                <li className="border border-slate-300 rounded-full text-start mr-20 pl-12 my-1 hover:bg-white hover:text-black">DOCKER</li>    
            </ul>
            </div>

            <div className="text-start mt-5 md:mt-0 mb-5 md:mb-0">
            <h1 className="font-title font-bold text-2xl"><FormattedMessage id="profile.langs" defaultMessage="IDIOMAS" /></h1 > 
            <div className="border-t border-sky-500 mt-2 mb-0 md:mb-10 mr-10 border-2"></div>           
            <ul className="font-subtitle mb-16">               
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>English: advanced-C2 </li> </span>
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>Español: nativo</li> </span>
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>Estudiando para HSK1</li> </span>
            </ul>
            <h1 className="font-title font-bold text-2xl"><FormattedMessage id="profile.skGoals" defaultMessage="ME INTERESA" /></h1 > 
            <div className="border-t border-sky-500 mt-2 mb-0 md:mb-10 mr-10 border-2"></div>           
            <ul className="font-subtitle">
                {/* <span className="flex ml-3 mt-3 md:mt-20"><MdDoubleArrow className="text-sky-500"/> <li>Docker</li> </span>
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>GraphL</li> </span>
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>MongoDB</li> </span> */}
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>Security</li> </span>
                <span className="flex ml-3 mt-4"><MdDoubleArrow className="text-sky-500"/> <li>Test automatization</li> </span>
            </ul>
            </div>

            <div className="text-start pb-5 mb-20 md:mb-0">
            <h1 className="font-title font-bold text-2xl"><FormattedMessage id="profile.Hb" defaultMessage="HOBBIES" /></h1 >
            <div className="border-t border-sky-500 mt-2 mb-0 md:mb-10 mr-10 border-2"></div>
            <ul className="text-sm">
                <span className="flex  mt-3 md:mt-20"><PiPlant className="text-sky-500"/><li><FormattedMessage id="profile.Hb1" defaultMessage="Programar proyectos personales" /></li> </span>
                <span className="flex  mt-4"><PiPlant className="text-sky-500"/><li><FormattedMessage id="profile.Hb2" defaultMessage="Leer" /></li> </span>
                <span className="flex  mt-4"><PiPlant className="text-sky-500"/><li><FormattedMessage id="profile.Hb3" defaultMessage="Largas caminatas" /></li> </span>
                <span className="flex  mt-4"><PiPlant className="text-sky-500"/><li><FormattedMessage id="profile.Hb4" defaultMessage="Pasar tiempo con familiares y amigos" /></li> </span>
            </ul>
            </div>
            
        </div>
    )
};

export default Profile;
