import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, logo }) => {
    return (
        <div className="w-full p-6 glass-card rounded-2xl flex flex-col group relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <div className="flex flex-col gap-6 h-full">
                <div className="w-16 h-16 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    <img src={logo} alt="logo" className="max-w-full max-h-full object-contain" />
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
