import React from "react";
const page3 = () => {
  const features = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process",
  ];

  return (
    <section className="min-h-[660px] w-full bg-[#EAF6FF] px-6 py-16 md:px-10 lg:px-12">
      <div className=" flex w-[100%]  gap-2">
        <div className="w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-black text-5xl lg:text-[54px]">
            About <span className="text-[#1900B8]">Code's</span> Thinker
          </h2>

          <p className="mt-3 text-base text-black md:text-lg">
            We redefine excellence in business solution at Code's Thinker...
          </p>

        
          <div className="mt-5 flex flex-col items-start gap-[10px]">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex w-fit max-w-full items-center gap-5 rounded-full bg-[#EAF6FF] px-[14px] 
                py-[11px] shadow-[0_15px_30px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <span className="h-4 w-4 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-purple-600"></span>

                <p className="text-base font-normal text-black text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRIjQEILabJ_GTIA8Qa_N3Yz73HY8LXSfkO4n2Q-54A&s=10"
            alt="About Code's Thinker"
            className="h-[400px] w-fborder border-gray-300 object-cover h-[506px] rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
};

export default page3;
