import React from "react";
import { FormattedMessage } from "react-intl";
import "./../../App.css";

import prflPic from "./../../img/prfl_pic.png";
import prflPicSm from "./../../img/prfl_picSm.png";
// import ReactTyped from "react-typed";
import Typed from "typed.js";
import { useEffect, useRef } from "react";


const Home = () => {

    

    useEffect(()=>{
        const msgs  =  {
            strings:["FULL STACK DEVELOPER", "PERN DEVELOPER", "PASSIONATE PROGRAMER", ],
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

        <div className="md:grid md:grid-cols-2 md:grid-rows-3 animate-fadeIn">

            <div className="flex md:pl-16 row-start-2 pt-5 md:pt-0 pl-4 ">
                <div className="text-start">

                    <p className="font-txt italic text-sky-500 pl-1 text-3xl">
                        <FormattedMessage id="home.hello" defaultMessage="Hola" /> !!
                    </p>
                    <h1 className="font-title font-extrabold text-5xl md:text-6xl text-slate-300">
                        <FormattedMessage id="home.name" defaultMessage="Soy Iveth" />
                        <br />Gonzalez
                    </h1>

                   <div className="bg-slate-300 font-subtitle pl-1 text-2xl">
                        <span id="elem"></span> |
                    </div>

                </div>
            </div>

            {/* <img src={prflPic} alt="developer picture" className="h-screen" /> */}
            <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-screen md:z-[-1] hidden md:block">
                <img src={prflPic} alt="avatar" className="md:w-full md:h-full md:object-cover" />
            </div>

            <div className="">
                <img src={prflPicSm} alt="avatar" className="h-full pt-3 md:hidden" />
            </div>

        </div>

    )
};

export default Home;