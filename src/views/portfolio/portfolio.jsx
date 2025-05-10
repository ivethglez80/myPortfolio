import React from "react";
import { FormattedMessage } from "react-intl";

import lawyer from "./../../img/lawyerWbst.png";
import chef from "./../../img/chefLanding.png";
import poke from "./../../img/pokeApi.png";
import wkngOn from "./../../img/workingOn.png";
import invitation from "./../../img/invitation.png";
import DE from "./../../img/diaespecial.png";
import web4 from "./../../img/web4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

{
  /* images ecommerce bonita */
}
import bonitaImg from "./../../img/bonita.png";

{
  /* images webBlog */
}
import wb1 from "./../../img/portfolio/ibm/19.png";
import wb2 from "./../../img/portfolio/ibm/20.png";
import wb3 from "./../../img/portfolio/ibm/21.png";
import wb4 from "./../../img/portfolio/ibm/22.png";
import wb5 from "./../../img/portfolio/ibm/23.png";
const wbImgs = [wb1, wb2, wb3, wb4, wb5];

{
  /* imagesInvitation  */
}
import inv1 from "./../../img/portfolio/invitacion/11.png";
import inv2 from "./../../img/portfolio/invitacion/12.png";
import inv3 from "./../../img/portfolio/invitacion/13.png";
import inv4 from "./../../img/portfolio/invitacion/14.png";
import inv5 from "./../../img/portfolio/invitacion/15.png";
import inv6 from "./../../img/portfolio/invitacion/16.png";
import inv7 from "./../../img/portfolio/invitacion/17.png";
import inv8 from "./../../img/portfolio/invitacion/18.png";
const invImgs = [inv1, inv2, inv3, inv4, inv5, inv6, inv7, inv8];

{/* sandiwch images */}
import san1 from "./../../img/portfolio/sandwich/1.png";
import san2 from "./../../img/portfolio/sandwich/2.png";
import san3 from "./../../img/portfolio/sandwich/3.png";
import san4 from "./../../img/portfolio/sandwich/4.png";
import san5 from "./../../img/portfolio/sandwich/5.png";
import san6 from "./../../img/portfolio/sandwich/6.png";
import san7 from "./../../img/portfolio/sandwich/7.png";
import san8 from "./../../img/portfolio/sandwich/8.png";
import san9 from "./../../img/portfolio/sandwich/9.png";
import san10 from "./../../img/portfolio/sandwich/10.png";
import san11 from "./../../img/portfolio/sandwich/24.png";
import san12 from "./../../img/portfolio/sandwich/25.png";
const sanImgs = [
  san1,
  san2,
  san3,
  san4,
  san5,
  san6,
  san7,
  san8,
  san9,
  san10,
  san11,
  san12,
];

{/* modo image */}
import modo1 from "./../../img/portfolio/modo/modopic.png";

const PortfolioCard = ({
  title,
  titled,
  desc1,
  desc1d,
  desc2,
  desc2d,
  desc3,
  desc3d,
  desc4,
  desc4d,
  tecs1,
  tecs1d,
  tecs2,
  tecs2d,
  tecs3,
  tecs4,
  imgs,
  videoLink,
  proyectoLink
}) => {
  return (
    <>
      <div className="md:ml-12 gap-8 flex flex-col md:grid md:grid-cols-2 pt-16 md:pt-24">
        <div className="h-[340px] md:h-[400px] w-full">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiperw-full min-w-[250px] h-[340px] md:h-[400px] md:ml-8"
          >
            {imgs.map((src, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="max-h-[320px] md:h-[400px] w-[80%] object-contain"
                />               
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-white overflow-y-auto md:px-8 h-[340px] md:h-[400px] pt-2">
          <h1 className="text-2xl font-semibold">
            <FormattedMessage id={title} defaultMessage={titled} />
          </h1>
          <p className="text-base font-light tracking-wide italic pt-4">
            <FormattedMessage id={desc1} defaultMessage={desc1d} />
          </p>
          {
            desc2 && (
              <p className="text-base font-light tracking-wide italic">
            <FormattedMessage id={desc2} defaultMessage={desc2d} />
          </p>
            )}
             {
            desc3 && (
          <p className="text-base font-light tracking-wide italic">
            <FormattedMessage id={desc3} defaultMessage={desc3d} />
          </p>
          )}
          {desc4 && (
            <p className="text-base font-light tracking-wide italic">
              <FormattedMessage id={desc4} defaultMessage={desc4d} />
            </p>
          )}
          <div className="w-full flex justify-evenly">
           {videoLink && (
             <a
                    href={videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 underline hover:text-blue-200"
                  >
                    <FormattedMessage
                      id="videotext"
                      defaultMessage="Watch project video"
                      />
                  </a>
                )}

                {proyectoLink && (
             <a
                    href={proyectoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 underline hover:text-blue-200"
                  >
                    <FormattedMessage
                      id="proyectotext"
                      defaultMessage="Go to project"
                      />
                  </a>
                )}
          </div>
          <div className="pt-4">
            <p>
              <FormattedMessage id={tecs1} defaultMessage={tecs1} />
            </p>
            {tecs2 && (
              <p className="pt-2">
                <FormattedMessage id={tecs2} defaultMessage={tecs2} />
              </p>
            )}
             {tecs3 && (
              <p className="pt-2">
                <FormattedMessage id={tecs3} defaultMessage={tecs3} />
              </p>
            )}
             {tecs4 && (
              <p className="pt-2">
                <FormattedMessage id={tecs4} defaultMessage={tecs4} />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center items-center h-full ">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PortfolioCard
              title="portfolio.title1"
              titled="Blog Web APP"
              desc1="portfolio.desc11"
              desc1d="Front: NEXT | TAILWINDCSS"
              desc2="portfolio.desc12"
              desc3="portfolio.desc13"
              desc4="portfolio.desc14"
              tecs1="portfolio.tecs1"
              imgs={sanImgs}
              videoLink="https://youtu.be/u6H1F68Zmyc"
              proyectoLink="https://sandwich-blog-client.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="portfolio.title2"
              titled="Invitación para eventos"
              desc1="portfolio.desc21"
              desc1d="Front: VITE | REDUX | TAILWINDCSS"
              desc2="portfolio.desc22"
              desc3="portfolio.desc23"
              tecs1="portfolio.tecs2"
              tecs2="portfolio.tecs21"
              imgs={invImgs}
              videoLink="https://youtu.be/t7I1o0owZbY"
              proyectoLink="https://invitacion-seba-eve.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="portfolio.title3"
              titled="Website con blog"
              desc1="portfolio.desc31"
              desc1d="Front: NEXT | TAILWINDCSS"
              desc2="portfolio.desc32"
              desc3="portfolio.desc33"
              desc4="portfolio.desc34"
              tecs1="portfolio.tecs3"
              imgs={wbImgs}
              videoLink="https://youtu.be/XUKNtrJ42Iw"
              proyectoLink="https://www.ibmdecaba.com.ar/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioCard
              title="portfolio.title4"
              titled="Bonita Ecommerce"
              desc1="portfolio.desc41"
              desc1d="Front: REACT | TAILWINDCSS | STYLED COMPONENTS"
              desc2="portfolio.desc42"
              desc3="portfolio.desc43"
              desc4="portfolio.desc44"
              tecs1="portfolio.tecs4"
              imgs={[bonitaImg]}
              videolink="https://youtu.be/Cwm9KB4JrXE"
              proyectoLink=""
            />
          </SwiperSlide>

          
          <SwiperSlide>
            <PortfolioCard
              title="portfolio.title5"
              titled="Formulario con logica compleja"
              desc1="portfolio.desc51"
              desc1d="Front: NEXT | TAILWINDCSS"              
              tecs1="portfolio.tecs51"
              tecs2="portfolio.tecs52"
              tecs3="portfolio.tecs53"
              tecs4="portfolio.tecs54"
              imgs={[modo1]}
              videolink="https://youtu.be/Lid6aZQpPPM"
              proyectoLink="https://modobrasil.com/"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
