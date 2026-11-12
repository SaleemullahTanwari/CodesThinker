import React from "react";
const steps = [
  { id: 1, title: "1- Submit Application" },
  { id: 2, title: "1- Submit Application" },
  { id: 3, title: "1- Submit Application" },
  { id: 4, title: "1- Submit Application" },
];

const D2 = () => {
  return (
    <section className="min-h-[620px] w-full bg-white px-4 py-10 sm:px-8">
      {/* Heading */}
      <h1 className="text-center text-3xl font-semibold leading-tight text-[#1800B8] sm:text-4xl md:text-5xl">
        Your Path to Joining Code's Thinker
      </h1>

      {/* Circles */}
      <div className="mx-auto mt-[80px] flex max-w-[100%] flex-wrap items-start justify-center gap-x-8 gap-y-8 lg:gap-x-[30px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex w-[250px] flex-col items-center"
          >
            <div className="h-[160px] w-[160px] rounded-full border-[4px] border-black bg-white sm:h-[190px] sm:w-[190px]" />

            <h2 className="mt-4 whitespace-nowrap text-center text-xl font-semibold text-black sm:text-[20px]">
              {step.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default D2;