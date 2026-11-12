import React from 'react';

const D1 = ({ id }) => {
  return (
    <section className="min-h-[550px] w-full max-w-full overflow-x-clip border-t-[5px] border-[#10005D] bg-[#E8F6FF]">
      <div className="mx-auto flex min-h-[540px] w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-10 lg:flex-row lg:gap-12">

        <div className="w-full min-w-0 flex-1">
          <p className="mb-3 text-sm font-semibold text-[#1800B8]">
            SERVICE DETAILS — {id}
          </p>

          <h1 className="mb-7 text-3xl font-semibold leading-tight text-black sm:text-4xl">
            Building{' '}
            <span className="text-[#1800B8]">
              Future-Ready Software
            </span>
          </h1>

          <p className="text-justify text-base leading-relaxed text-black sm:text-lg">
            We are a team of passionate developers, designers,
            and thinkers building scalable solutions for tomorrow.
            We craft intelligent digital solutions that help
            businesses grow through technology.
          </p>
        </div>
           <div className="h-[300px] w-full min-w-0 sm:h-[350px] lg:flex-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaExbPpy_W44P3s8Uj38wovv1i194CsbjHfdRHfyIF6Q&s=10"
            alt="Building future-ready software"
            className="h-full w-full rounded-2xl border border-gray-300 object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default D1;