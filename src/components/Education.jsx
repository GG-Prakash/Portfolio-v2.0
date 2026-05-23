import EducationCard from "./EducationCard"
const Education = () => {
    return (
        <section id="education" className="sectioneven relative overflow-hidden">
            <div className="max-w-5xl mx-auto z-10 relative">

                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Education</h2>
                    <div className="w-24 h-1 bg-cyan-500 rounded-full mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                    <p className="text-sm md:text-base tracking-[4px] text-cyan-400/80 uppercase font-medium">2017 - Present</p>
                </div>

                <div className="w-full flex flex-col md:pl-10">
                    <EducationCard
                        title="BE - Computer Science and Engineering"
                        des="Mount Zion College of Engineering and Technology"
                        subTitle="2021 - 2025"
                        result="7.64 CGPA" />
                    <EducationCard
                        title="Higher Secondary (HSC)"
                        des="Karaikudi Maharishi Vidya Mandir Higher Secondary School"
                        subTitle="2019 - 2021"
                        result="81.52%" />
                    <EducationCard
                        title="Secondary School (SSLC)"
                        des="C.V.CT.V Meenakshi Achi Matriculation School"
                        subTitle="2017 - 2019"
                        result="71.2%" />
                </div>
            </div>
        </section>
    )
}
export default Education