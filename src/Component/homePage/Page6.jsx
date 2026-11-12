
import React from "react";
import { FaSpa, FaShieldAlt, FaShapes } from "react-icons/fa";
const Page6 = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We hold ourselves to a strong ethical and moral code.",
      icon: <FaSpa />,
    },
    {
      id: 2,
      title: "Trust",
      description:
        "We are dependable, loyal, and hardworking to achieve the same goal.",
      icon: <FaShieldAlt />,
    },
    {
      id: 3,
      title: "Excellence",
      description:
        "We consistently strive to deliver high-quality work without compromise.",
      icon: <FaShapes />,
    },
  ];

  return (
    <section className="relative min-h-[400px] w-full overflow-x-hidden border-t-4 border-[#10005D] bg-white px-1 py-1 md:px-5 md:py-1">
      <div className="mx-auto max-w-[800px]">
       
        <div>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            OUR{" "}
            <span className="text-[#1800B8]">
              VALUE
            </span>
          </h2>

          <p className="mt-3 text-2xl font-medium leading-snug text-black md:text-2xl">
            A melting pot for the best ideas
          </p>
        </div>

       
        <div className="mt-6 flex max-w-[100%] flex-col gap-7 md:mt-9 gap-[19px]">
          {values.map((item) => (
            <div
              key={item.id}
              className="group flex items-start  gap-2"
            >
              
              <div className="flex shrink-0 items-center justify-center rounded-[18px] bg-[#090044] md:h-[80px] md:w-[80px]">
                <span className="text-[20px] text-fuchsia-500  transition duration-300 group-hover:scale-110 md:text-[50px]">
                  {item.icon}
                </span>
              </div>

             
              <div className="flex-1 pt-0">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-black md:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xl leading-relaxed text-black md:text-[26px] md:leading-[1.5]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default Page6;
