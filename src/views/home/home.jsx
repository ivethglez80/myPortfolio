import React from "react";
import { FormattedMessage } from "react-intl";
import "./../../App.css";

import prflPic from "./../../img/prfl_pic.png";
import prflPicSm from "./../../img/prfl_picSm.png";
// import ReactTyped from "react-typed";


const Home = () => {
    
   return (

        <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:mb-24 animate-fadeIn">

            <div className="flex md:pl-16 row-start-2 pt-5 md:pt-0 pl-4 ">
                <div className="text-start">

                    <p className="font-txt italic text-sky-500 pl-1">
                        <FormattedMessage id="home.hello" defaultMessage="Hola" /> !!
                    </p>
                    <h1 className="font-title font-extrabold text-5xl md:text-6xl text-slate-300">
                        <FormattedMessage id="home.name" defaultMessage="Soy Iveth" />
                        <br />Gonzalez
                    </h1>

                   <div className="bg-slate-300 font-subtitle pl-1">
                        {/* <ReactTyped
                            strings={["FULL STACK DEVELOPER", "PERN DEVELOPER"]}
                            typeSpeed={100}
                            loop
                            backSpeed={30}
                            cursorChar=">"
                            showCursor={true}
                        /> */}
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