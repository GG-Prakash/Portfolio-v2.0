import React from "react";

const EducationCard = ({ title, subTitle, result, des }) => {
    return (
        <div className="w-full flex group relative mt-8 first:mt-0">
            {/* Timeline Line (for larger screens) */}
            <div className="hidden md:flex flex-col items-center mr-8">
                <div className="w-4 h-4 rounded-full border-4 border-slate-900 bg-cyan-500 group-hover:bg-indigo-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 relative z-10"></div>
                <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent -mt-2 group-last:hidden"></div>
            </div>

            {/* Mobile Timeline indicator */}
            <div className="md:hidden w-8 h-[2px] bg-cyan-500/50 group-hover:bg-cyan-400 mt-6 relative shrink-0">
                <div className="absolute w-2 h-2 rounded-full bg-cyan-500 -left-1 -top-[3px]"></div>
            </div>

            {/* Card Content */}
            <div className="flex-1 glass-card p-6 md:p-8 rounded-2xl group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 mt-1">
                            {subTitle}
                        </p>
                    </div>
                    <div className="shrink-0">
                        <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                            {result}
                        </span>
                    </div>
                </div>
                {des && (
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        {des}
                    </p>
                )}
            </div>
        </div>
    );
};

export default EducationCard;
