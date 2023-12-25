import React from "react";
import { FormattedMessage } from "react-intl";
import ComingSoonPic from "./../../img/comingSoon.png"

const BlogCard = ({ blogImg, title, content, defTitle, defContent }) => {
    return (
        <div className="text-slate-300 w-[200px] mt-5 md:w-[300px] md:h-[400px] md:mt-16 rounded-xl bg-gray-800">
            <img src={blogImg} alt="blog" className="md:w-[300px] md:h-auto rounded-t-xl" />
            <p className="font-title font-bold pt-2"><FormattedMessage id={title} defaultMessage={defTitle} /> <br /></p>
            <p className="font-txt px-2 text-xs md:text-base"><FormattedMessage id={content} defaultMessage={defContent} /></p>
        </div>
    )
}

const Blog = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-5 md:mt-0 md:grid md:grid-cols-3 md:mx-10 md:gap-20 animate-fadeIn md:pt-[50px]">

                <div className="md:col-span-2 text-slate-300 flex flex-col items-center md:mt-16 relative">
                    <img src={ComingSoonPic} alt="coming soon" className="rounded-lg w-[280px] md:h-[400px] md:w-auto z-[-1]" />
                    <div className="absolute bottom-0 text-center w-full">
                        <p className="font-title font-bold text-xl md:text-2xl"><FormattedMessage id="blog.titleMain" defaultMessage="Titulo Foco" /></p>
                        {/* <p className="font-txt text-xs px-2 md:text-base"><FormattedMessage id="blog.pMain" defaultMessage="este texto sería el intro de una sola línea" /></p> */}
                    </div>
                </div>


                <div className="md:col-span-1">
                    <BlogCard
                        blogImg={ComingSoonPic}
                        title="blog.title1" content="blog.p1"
                        defTitle="Primer título"
                        defContent="Lorem ipsum dolor sit amet, consectetr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />

                    {/* <BlogCard title="blog.title2" content="blog.p2" 
                      defTitle=""
                      defContent=""
            /> */}
                </div>

            </div>
        </>
    )
};

export default Blog;