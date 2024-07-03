import React from "react";
import { FormattedMessage } from "react-intl";
import lawyer from "./../../img/lawyerWbst.png";
import chef from "./../../img/chefLanding.png";
import bonitaImg from "./../../img/bonita.png";
import poke from "./../../img/pokeApi.png";
import wkngOn from "./../../img/workingOn.png";
import invitation from "./../../img/invitation.png";
import DE from "./../../img/diaespecial.png";
import web4 from "./../../img/web4.jpg";


const Card = ({ urlLink, cardImg, title, desc, defaultT, defaultD, tecs, defaultTecs }) => {
    return (
        <>
            <a href={urlLink} target="_blank" rel="noopener noreferrer" >
                {/* <div className="flex flex-col items-center mb-10 mx-4 md:w-[302px] md:mb-20">
                    <img src={cardImg} alt="portfolio card" className="w-[300px] h-auto" />
                    <h4 className="font-title font-bold text-xl">
                        <FormattedMessage id={title} defaultMessage={defaultT} />
                    </h4>
                    <p className="font-txt break-normal text-sm md:text-base">
                        <FormattedMessage id={desc} defaultMessage={defaultD} />
                    </p>
                </div> */}
                <div className=" w-screen h-[620px] md:h-[320px] mb-12 flex justify-center">
                    <div className="w-[90%] md:w-[70%] border-4 border-sky-300 shadow-md rounded-3xl p-2 hover:bg-gray-800 hover:shadow-blue-500 hover:-translate-x-4
                                    md:flex md:flex-row">
                        <div className="w-full md:w-1/2 h-[300px]">
                            <img src={cardImg} alt="" className="h-full w-full object-cover rounded-3xl" />
                        </div>
                        <div className="w-full md:w-1/2 md:flex md:justify-center md:flex-col">
                            <div>

                                <div>
                                    <h4 className="font-title font-bold text-2xl pt-2">
                                        <FormattedMessage id={title} defaultMessage={defaultT} />
                                    </h4>
                                    <hr className="border-2 border-t-sky-300 md:mx-4" />
                                </div>
                                <div className="pt-4">
                                    <p className="font-txt break-normal text-lg md:text-base md:px-4">
                                        <FormattedMessage id={desc} defaultMessage={defaultD} />
                                    </p>
                                </div>

                            </div>

                            <div className="md:pt-8 text-sky-300">
                                <p>
                                    <FormattedMessage id={tecs} defaultMessage={defaultTecs} />
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

const Portfolio = () => {
    return (
        <div className="animate-fadeIn text-slate-300 md:grid md:grid-row-3 mb-10 md:mb-0">

            <div className="row-span-1 flex flex-col items-start pt-10 ml-3 md:ml-10">
                <h1 className="font-title text-2xl md:text-4xl font-bold">
                    PORTFOLIO
                </h1>
                <div className="border-t border-sky-300 border-4 w-[200px] md:w-[300px] md:mt-3"></div>
            </div>

            <div className="row-span-2 mt-10 md:mt-20">
                <div className="flex flex-wrap justify-around">

                    {/* <p>
                        Es dificil seleccionar trabajos para colocar en este espacio, no soy diseñador y algunos proyectos no son tan guapos, pero las funcionalidades son geniales, lo cual es mi expertise
                    </p> */}

                    <Card
                        urlLink={"https://youtu.be/Cwm9KB4JrXE?si=jajS96NMvKOxqNgh"}
                        cardImg={bonitaImg}
                        title="portfolio.title3" desc="portfolio.desc3"
                        defaultT="Bonita"
                        defaultD="Tienda online completa para vender productos y articulos de belleza al por mayor, cuenta con 
                        catalogo con sus filtros y busquedas, carrito de compras, favoritos, estado local para manejar selcciones sin login,
                        dashboard para admin, superadmin y compradores, cada uno con sus propias funcionalidades. 
                        Pasarela de pagos por mercado pago y manejo de inventario completo por producto, colores, marcas, tamaños, presentaciones.
                        Ademas de poder accionar descuentos por temporada, codigo o producto. sistema de reseñas y recordatorio de carrito pendiente"
                        tecs="portfolio.tecs3"
                        defaultTecs="JavaScript, ReactJs, CSS, Tailwind, NodeJs, Express, PostgreSQL, Jest"
                    />

                    <Card
                        urlLink={"https://dia-especial-front.vercel.app/"}
                        cardImg={DE}
                        title="portfolio.title6" desc="portfolio.desc6"
                        defaultT="Digital invitations Front Store"
                        defaultD="Website completo para la venta de invitaciones de eventos electronicas, la tienda cuenta con catalogo y sistema de pedidos personales con formulario de requerimentos. Se concentra el dashboard para admin para modificar catalogo, cuenta tambien con sistema de notificaciones de pedidos"
                        tecs="portfolio.tecs6"
                        defaultTecs="JavaScript, ReactJs, CSS, Tailwind, NodeJs, Express, PostgreSQL, Jest"
                    />



                    <Card
                        urlLink={"https://private-chef-at-los-cabos.vercel.app/"}
                        cardImg={chef}
                        title="portfolio.title2" desc="portfolio.desc2"
                        defaultT="Servicios de Chef Privado"
                        defaultD="Website showcase para servicios de chef privado, dirigido a publico de diferentes nacionalidades, por lo tanto es bilingue ingles/español con funcionalidades dirigidas a demostrar el producto y servicio con elegancia y suaves llamados a la accion"
                        tecs="portfolio.tecs2"
                        defaultTecs="JavaScript, ReactJs, CSS, Tailwind, NodeJs, Express, PostgreSQL, Jest"
                    />

                    <Card
                        urlLink={"https://youtu.be/2yJir5O6b90"}
                        cardImg={web4}
                        title="portfolio.title7" desc="portfolio.desc7"
                        defaultT="web Invitacion + admin dashboard"
                        defaultD="He generado una gran cantidad de invitaciones digitales personalizadas con funcionalidades como gps, cuenta atras, recordatorios al mail, confirmacion de asistencia por formulario, el invitado puede seleccionar el regalo que dara por medio de catalogo. El dashboard para administrar regalos y a los invitados confirmados, la lista de regalos que se puede modificar y ver los que han sido ya seleccionados. Cada invitacion con diseño totalmente diferente ha reforzado mis capacidades de estilizado en front"
                        tecs="portfolio.tecs7"
                        defaultTecs="JavaScript, ReactJs, CSS, Tailwind, NodeJs, Express, PostgreSQL, Jest"
                    />


                  


                    <Card
                        urlLink={"https://github.com/ivethglez80/CustomerOrdersManagement.git"}
                        cardImg={wkngOn}
                        title="portfolio.titleCurrent" desc="portfolio.descCurrent"
                        defaultT="Actualmente trabajando en"
                        defaultD="Aplicación multilingüe SPA CRUD PERN para gestionar pedidos de clientes con diferentes perfiles"
                        tecs="portfolio.tecsCurrent"
                        defaultTecs="JavaScript, ReactJs, CSS, Tailwind, NodeJs, Express, PostgreSQL, Jest"
                    />
                </div>
            </div>


        </div>
    )
};

export default Portfolio;