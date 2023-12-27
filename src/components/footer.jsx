import React from "react";

const Footer = () => {
    return (
        // Clases para fijar el footer en la parte inferior y sobre otros elementos
        <div className="fixed bottom-0 w-full z-50 bg-opacity-90 ">
            
            <div className="md:flex md:flex-row justify-between items-center mx-10 py-3 ">
                <div className="w-full md:w-5/6 border-t-2 border-gray-200">
                    {/* Contenido izquierdo del footer */}
                </div>

                <div className="text-slate-200 md:text-end w-full md:w-1/6 mt-3 md:mt-0">
                    <p>PORTFOLIO 2024</p>
                </div>
            </div>

        </div>
    );
};


export default Footer;

