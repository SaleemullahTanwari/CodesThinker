import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  "Industry Expert Staff",
  "Client-Centric Focus",
  "Partner rather than Vendor",
  "Solutions Geared to Improve Productivity",
  "Collaborative Approach Throughout the Process",
];

const AboutP3 = () => {
  return (
    <section className="w-full bg-white px-1 py-19 sm:px-19 lg:py-[30px] h-[690px]">
      <div className="mx-auto flex w-[90%] max-w-[100%] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[90px]">

      
        <div className="h-[490px] w-full shrink-0 sm:h-[290px] lg:h-[420px] lg:w-[420px]  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaExbPpy_W44P3s8Uj38wovv1i194CsbjHfdRHfyIF6Q&s=10"
            alt="Codes Thinker team"
            className="h-full w-full border border-gray-300 object-cover rounded"
          />
        </div>

        {/* Right Content */}
        <div className="w-full flex-1 h-[500px]">
          <p className="mb-3 text-[17px] font-normal text-black">
            WHO <span className="text-[#1800B8]">WE</span> ARE
          </p>

          <h2 className="mb-2 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            YOUR <span className="text-[#1800B8]">VISION OUR</span> CODE
          </h2>

          <p className="text-justify text-base leading-[1.7] text-black sm:text-[15px] sm:leading-[1.42]">
            At Codes Thinker, we are a passionate team of developers,
            designers, and strategists dedicated to building smart,
            scalable, and user-focused digital solutions. We thrive on
            creativity, and cutting-edge technology to transform ideas
            into impactful products. With a commitment to quality,
            transparency, and client satisfaction, we don't just deliver
            code — we deliver value. Every project we take on reflects
            our belief in innovation, precision, and long-term partnerships.
          </p>

          {/* Feature Buttons */}
          <div className="mt-6 flex flex-col items-start gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex min-h-[48px] max-w-full items-center gap-4 rounded-full bg-white px-4 py-2 text-black shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:translate-x-1 hover:shadow-[0_14px_25px_rgba(0,0,0,0.17)]"
              >
                <ArrowRight
                  size={21}
                  strokeWidth={2.8}
                  className="shrink-0"
                />

                <span className="text-sm font-medium sm:text-[18px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutP3;