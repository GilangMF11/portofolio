"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Hallo, Saya {" "}</span> 
                    <br/>
                    <TypeAnimation sequence={[
                        "Gilang Miftakhul Fahmi", 
                        1000,
                        "Web Developer",
                        1000,
                        "Mobile Developer",
                        1000,
                        "Freelancer",
                        1000
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    speed={50}
                    />
                </h1>
                <p className="text-[#ADB7BE] sm:text-lg text-lg mb-6 lg:text-xl">
                    Website Portofolio Next JS + Tailwind
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white">Hire Me</button>
                    <button className="px-6 py-3 w-full sm:w-fit  rounded-full  bg-black hover:bg-gray-50 text-white hover:text-black border border-white mt-3">Download CV</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                    src={"/images/Gilang.png"} 
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={150} 
                    height={150}
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;
