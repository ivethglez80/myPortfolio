
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { langContext } from "./../context/langContext";
import { FormattedMessage } from "react-intl";
import langEsp from "./../img/icons8-spain-100.png";
import langEng from "./../img/icons8-usa-100.png";
import langEspBlue from "./../img/icons8-spain-30-blue.png";
import langEngBlue from "./../img/icons8-usa-30-blue.png";
import { MdMenu } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const location = useLocation();
    const languaje = useContext(langContext);
    const langStatus = localStorage.getItem('langStored');

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className="text-slate-200 font-subtitle flex md:items-center justify-between sm:flex-wrap z-1 ">

                <div className="flex items-start md:items-center">

                    <span className="text-xs ml-3 mt-6 md:ml-10 md:mt-0 py-0 px-2 bg-sky-500 text-gray-900">
                        {location.pathname === "/" ? <p>ONLINE PORTFOLIO</p> : <p>IVETH GONZALEZ</p>}
                    </span>

                    <div className="flex flex-col items-center">

                        <span className="text-3xl md:hidden mt-4 my-auto relative ml-3">
                            {menuOpen ? (
                                <AiOutlineClose onClick={toggleMenu} />
                            ) : (
                                <MdMenu onClick={toggleMenu} />
                            )}
                        </span>

                        <ul className={`bg-gray-500 pb-2 text-start pr-3 rounded-md absolute mt-12 ml-6
                           md:pb-0 md:mt-0 md:bg-transparent md:pt-0 md:flex md:items-center  md:opacity-100 md:z-10 md:static
                           ${menuOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"} transition duration-300 ease-in-out`}>

                            <li className={location.pathname === "/" ? "text-sky-500" : "text-slate-200"}>
                                <Link to="/" className="ml-5 hover:text-sky-500" onClick={toggleMenu}><FormattedMessage id="nav.home" defaultMessage="Home" /></Link>
                            </li>

                            <li className={location.pathname === "/about" ? "text-sky-500" : "text-slate-200"}>
                                <Link to="/about" className="ml-5 hover:text-sky-500" onClick={toggleMenu}><FormattedMessage id="nav.about" defaultMessage="Acerca de" /></Link>
                            </li>

                            <li className={location.pathname === "/profile" ? "text-sky-500" : "text-slate-200"}>
                                <Link to="/profile" className="ml-5 hover:text-sky-500" onClick={toggleMenu}><FormattedMessage id="nav.profile" defaultMessage="Perfil" /></Link>
                            </li>

                            <li className={location.pathname === "/portfolio" ? "text-sky-500" : "text-slate-200"}>
                                <Link to="/portfolio" className="ml-5 hover:text-sky-500" onClick={toggleMenu}><FormattedMessage id="nav.portfolio" defaultMessage="Portfolio" /></Link>
                            </li>

                            <li className={location.pathname === "/contact-info" ? "text-sky-500" : "text-slate-200"}>
                                <Link to="/contact-info" className="ml-5 hover:text-sky-500" onClick={toggleMenu}><FormattedMessage id="nav.contact" defaultMessage="Contacto" /></Link>
                            </li>

                            {/* <li className={location.pathname === "/blog" ? "text-sky-500" : "text-slate-200"}>
            <Link to="/blog" className="ml-5 mr-0" onClick={toggleMenu}><FormattedMessage id="nav.blog" defaultMessage="Blog" /></Link>
            </li> */}

                        </ul>
                    </div>

                </div>

                <div className="border-t-2 border-slate-200 w-10 md:w-20 mt-8 md:mt-0 md:pt-0 hidden md:block">
                </div>

                <div className="mr-2 md:mr-10 flex items-start pt-5 md:pt-0">
                    <button onClick={() => languaje.setLang('es-Ar')} className="ml-0 mr-5">
                        {
                            langStatus === "es-Ar" ?
                                <img src={langEspBlue} alt="spain flag" className="hover:sky-500" />
                                :
                                <img src={langEsp} alt="spain flag" className="hover:sky-500" />
                        }
                    </button>
                    <button onClick={() => languaje.setLang('en-US')}>
                        {
                            langStatus === "en-US" ?
                                <img src={langEngBlue} alt="usa flag" />
                                :
                                <img src={langEng} alt="usa flag" />
                        }
                    </button>
                </div>

            </div>
        </>
    )
};

export default NavBar;




