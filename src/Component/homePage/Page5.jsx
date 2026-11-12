
import React from "react";
import {
  FaBitcoin,
  FaBriefcase,
  FaLock,
  FaRocket,
  FaExchangeAlt,
  FaLightbulb,
  
} from "react-icons/fa";

const Page5 = () => {
  const features = [
    { id: 1, title: "Blockchain Expertise", icon: <FaBitcoin /> },
    { id: 2, title: "Small Business Support", icon: <FaBriefcase /> },
    { id: 3, title: "Crypto Solutions", icon: <FaLock /> },
    { id: 4, title: "Startup Business", icon: <FaRocket /> },
    { id: 5, title: "B2B Integration", icon: <FaExchangeAlt /> },
    { id: 6, title: "Fintech Innovation", icon: <FaLightbulb /> },
  ];

  const indents = [
    "ml-0",
    "ml-24",
    "ml-48",
    "ml-48",
    "ml-24",
    "ml-0",
  ];

  return (
    <section className="h-[500px] w-full overflow-x-hidden bg-[#F3F4F6] px-5 py-5">
      <div className="mx-auto flex max-w-[850px] flex-col items-center justify-center gap-12 lg:flex-row lg:justify-end lg:gap-0">

       
        <div className="relative z-0 flex h-[300px] w-[200px] shrink-0 items-center justify-center rounded-full border border-black shadow-[20px_25px_35px_rgba(0,0,0,0.12)] md:h-[300px] md:w-[400px] lg:-mr-[85px] lg:h-[280px] lg:w-[280px]">
          <h2 className="text-center text-3xl font-bold leading-[1.5] text-black md:text-4xl lg:text-[42px]">
            KEY
            <br />
            FEATURES
          </h2>
        </div>

        
        <div className="relative z-10 flex w-full flex-col gap-[10px] lg:w-[600px]">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`flex h-[60px] w-100 items-center gap-8 rounded-full border-2 border-black px-6 text-black  transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl md:px-8 ${indents[index]}`}
            >
              <span className="flex w-8 shrink-0 items-center justify-center text-[26px]">
                {item.icon}
              </span>

              <h3 className="text-lg font-semibold tracking-tight md:text-xl lg:text-[23px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

     
     
    </section>
  );
};

export default Page5;
