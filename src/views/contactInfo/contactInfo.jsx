import React from "react";
import { FormattedMessage } from "react-intl";
// import ReactTyped from "react-typed";
import mailIcon from "./../../img/MailIcon.png"
import linkedinIcon from "./../../img/linkedinIcon.png"
import gitIcon from "./../../img/githubIcon.png"
import twittericon from "./../../img/twittericon.png"
import locationIcon from "./../../img/ubicationicon.png"
import Typed from "typed.js"
import { useEffect, useRef } from "react"

const ContactInfo = () => {

    useEffect(()=>{
        const msgs  =  {
            strings:["HIRE ME", "CONTRATAME", "LET'S WORK TOGUETHER", "TRABAJEMOS JUNTOS" ],
            startDelay: 200,
            typeSpeed: 100,
            backDelay: 100,
            backSpeed: 100,
            showCursor: false,
            loop: true,
        }
        const typed = new Typed ('#elem', msgs);

        return () => {
            typed.destroy();
    };
 }, []);


    return (
        <div className="animate-fadeIn h-full md:grid md:grid-rows-3 md:h-screen">

            <div className="row-span-1 pt-5 pb-10 md:pb-0 md:pt-24">{/*title ans subtitle */}
                <h1 className="font-title text-3xl md:text-5xl font-bold text-slate-300 ">
                    <FormattedMessage id="contact.title" defaultMessage="CONTACTAME" />
                </h1>

                <div className="text-sky-300 font-subtitle pl-1">                   
                    <span id="elem"></span> |
                </div>
            </div>

            <div className="md:row-span-1 md:grid md:grid-cols-5 md:mx-10 place-items-center text-slate-300 font-subtitle text-xs">{/*contact icons*/}
                <div className="pb-4 md:pb-0">
                    <a href="mailto:iveth.dev@gmail.com" className="flex flex-col items-center">
                    <img src={mailIcon} alt="icon mail" className=""/>
                    <p>iveth.dev@gmail.com</p>
                    </a>
                </div>

                <div className="pb-4 md:pb-0">
                    <a href="https://www.linkedin.com/in/iveth-gonzalez-98799895/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src={linkedinIcon} alt="icon linkedin" />
                    <p>in/iveth-gonzalez/</p>
                    </a>
                </div>

                <div className="pb-4 md:pb-0">
                    <a href="https://github.com/ivethglez80" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src={gitIcon} alt="github linkedin" />
                    <p>/ivethglez80</p>
                    </a>
                </div>

                <div className="pb-4 md:pb-0">
                    <a href="https://twitter.com/IvethDev" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src={twittericon} alt="twitter linkedin" />
                    <p>IvethDev</p>
                    </a>
                </div>

                <div className="flex flex-col items-center">
                    <img src={locationIcon} alt="icon linkedin" />                    
                    <p className="location"></p>
                </div>
            </div>

            <div className="row-span-1 md:pt-16">{/*footer name*/}
                <div className="border-b border-slate-300 md:mb-3 mx-10 mt-10 mb-10"></div>
                <p className="text-4xl mb-20 md:text-6xl font-bold font-title text-gray-500 text-opacity-50 pt-0 md:pt-16">
                    IVETH GONZALEZ
                </p>

            </div>

        </div>
    )
};

export default ContactInfo;
