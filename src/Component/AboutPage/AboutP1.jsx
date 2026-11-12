import React from "react";

const AboutP1 = () => {
  return (
    <section className=" h-[550px] w-full max-w-full overflow-x-clip border-t-[5px] border-[#10005D] bg-[#E8F6FF]">
      <div className="mx-auto flex min-h-[540px] w-full max-w-[80%] flex-col items-center justify-center gap-10 px-4 py-10 sm:px-6 md:px-10 lg:flex-row lg:gap-12 xl:gap-20">

       
        <div className="w-full min-w-0 lg:flex-1">
          <h1 className="mb-7 text-3xl font-semibold leading-[1.12] tracking-tight text-black sm:text-3xl xl:text-4xl">
            Building{" "}
            <span className="text-[#1800B8]">
              Future-Ready Software
            </span>
          </h1>

          <p className="break-words text-justify text-base leading-relaxed text-black sm:text-lg xl:text-[18px] xl:leading-[1.45]">
            We are a team of passionate developers, designers,
            and thinkers building scalable solutions for tomorrow.
            At [Codes Thinker], we don't just build software — we
            craft scalable, intelligent solutions that drive real-world
            impact. Our team of developers, designers, and
            strategists work together to deliver innovative digital
            products tailored for tomorrow's challenges. Rooted in
            collaboration, quality, and forward thinking, we're
            committed to helping businesses grow through technology.
          </p>
        </div>

       
        <div className="h-[300px] w-[300px] min-w-0 sm:h-[300px] lg:h-[350px] lg:flex-1 xl:h-[400px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaExbPpy_W44P3s8Uj38wovv1i194CsbjHfdRHfyIF6Q&s=10"
            alt="Building future-ready software"
            className="block h-full w-full border border-gray-300 object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutP1;