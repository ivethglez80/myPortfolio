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


const Card = ({ urlLink, cardImg, title, desc, defaultT, defaultD }) => {
    return (
        <>
            <a href={urlLink} target="_blank" rel="noopener noreferrer" >
                <div className="flex flex-col items-center mb-10 mx-4 md:w-[302px] md:mb-20">
                    <img src={cardImg} alt="portfolio card" className="w-[300px] h-auto" />
                    <h4 className="font-title font-bold text-xl">
                        <FormattedMessage id={title} defaultMessage={defaultT} />
                    </h4>
                    <p className="font-txt break-normal text-sm md:text-base">
                        <FormattedMessage id={desc} defaultMessage={defaultD} />
                    </p>
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

            <div className="row-span-2 mt-10 md:mt-20 md:mx-10">
                <div className="flex flex-wrap justify-around">

                    <Card
                        urlLink={"https://github.com/ivethglez80/landing-basic-react-cssModules"}
                        cardImg={lawyer}
                        title="portfolio.title1" desc="portfolio.desc1"
                        defaultT="Bufete de Abogados"
                        defaultD="Página landing responsive ReactJs / TailwindCss nodemailer"
                    />

                    <Card
                        urlLink={"https://private-chef-at-los-cabos.vercel.app/"}
                        cardImg={chef}
                        title="portfolio.title2" desc="portfolio.desc2"
                        defaultT="Servicios de Chef Privado"
                        defaultD="Página landing responsive ReactJs / TailwindCss nodemailer iNext18"
                    />

                    <Card
                        urlLink={"https://youtu.be/Cwm9KB4JrXE?si=jajS96NMvKOxqNgh"}
                        cardImg={bonitaImg}
                        title="portfolio.title3" desc="portfolio.desc3"
                        defaultT="Bonita"
                        defaultD="Aplicación de comercio electrónico PERN CRUD"
                    />

                    <Card
                        urlLink={"https://www.linkedin.com/posts/iveth-gonzalez-98799895_javascript-redux-react-activity-7089720138811252736-gsE-?utm_source=share&utm_medium=member_desktop"}
                        cardImg={poke}
                        title="portfolio.title4" desc="portfolio.desc4"
                        defaultT="PokeApi"
                        defaultD="SPA que consume API, funciones de renderizado y creación JS/React/NodeJs/Express"
                    />

                    <Card
                        urlLink={"https://invitation-front.vercel.app/"}
                        cardImg={invitation}
                        title="portfolio.title5" desc="portfolio.desc5"
                        defaultT="Wedding invitation"
                        defaultD="SPA que usa el stack PERN, funcionalidades CRUD a traves de HTTP y autenticacion/autorizacion para admin con auth0"
                    />

                    <Card
                        urlLink={"https://dia-especial-front.vercel.app/"}
                        cardImg={DE}
                        title="portfolio.title6" desc="portfolio.desc6"
                        defaultT="Digital invitations Front Store"
                        defaultD="SPA que usa el stack PERN, funcionalidades CRUD a traves de HTTP y autenticacion/autorizacion para admin. Catalogo y dashboard"
                    />

                    <Card
                        urlLink={"https://youtu.be/2yJir5O6b90"}
                        cardImg={web4}
                        title="portfolio.title7" desc="portfolio.desc7"
                        defaultT="Invitacion + dashboard"
                        defaultD="Landing estilada y animada con funcionalidades que se administran por dashbooard con login"
                    />

                    <Card
                        urlLink={"https://github.com/ivethglez80/CustomerOrdersManagement.git"}
                        cardImg={wkngOn}
                        title="portfolio.titleCurrent" desc="portfolio.descCurrent"
                        defaultT="Actualmente trabajando en"
                        defaultD="Aplicación multilingüe SPA CRUD PERN para gestionar pedidos de clientes con diferentes perfiles"
                    />
                </div>
            </div>


        </div>
    )
};

export default Portfolio;