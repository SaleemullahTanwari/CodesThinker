
// import React from "react";
// import { FaStar } from "react-icons/fa";

// const Page7 = () => {
//   return (
//     <section className="relative min-h-[500px] w-full overflow-x-hidden bg-[#08003F] px-5 py-12 text-white md:px-10 lg:px-16">
//       <div className="mx-auto grid max-w-[1510px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.5fr] lg:gap-16">
          
//         <div className="text-center lg:text-left">
//           <h2 className="text-2xl font-medium leading-tight tracking-tight md:text-2xl lg:text-[37px] text-center">
//             Our <span className="font-semibold text-[#FFF000]">Clients,</span>
//             <br />
//             In Their Own Words
//           </h2>
//         </div>
//         <div>
//           <div className="min-h-[250px] rounded-xl bg-gradient-to-br from-[#11066A] to-[#0B064C] p-4 md:min-h-[300px] ">

           
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="text-3xl font-semibold md:text-4xl">
//                 5.0
//               </span>

//               <div className="flex gap-2 text-2xl text-[#FFB800] md:gap-3 md:text-[20px]">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <FaStar key={star} />
//                 ))}
//               </div>
//             </div>

           
//             <div className="mt-7 flex items-center gap-6">

             
//               <div className="relative flex h-[100px] w-[100px] shrink-0 items-end justify-center overflow-hidden rounded-full bg-white md:h-[150px] md:w-[150px]">
//                 <div className="relative mb-0 flex h-[115px] w-[90px] flex-col items-center md:h-[130px] md:w-[110px]">

                  
//                   <div className="relative z-10 mt-4 flex h-[78px] w-[76px] items-center justify-center rounded-[23px] border-2 border-[#D5A900] bg-[#F5CF00] shadow-inner md:h-[88px] md:w-[86px]">

                    
//                     <div className="absolute -top-4 h-5 w-10 rounded-t-lg border border-[#D5A900] bg-[#E6BB00]" />

//                     <div className="absolute top-[25px] flex w-10 justify-between md:top-[29px]">
//                       <span className="h-3 w-3 rounded-full bg-black" />
//                       <span className="h-3 w-3 rounded-full bg-black" />
//                     </div>

                  
//                     <div className="absolute bottom-5 h-3 w-8 rounded-b-full border-b-[4px] border-black md:bottom-6" />
//                   </div>

                 
//                   <div className="absolute bottom-0 h-8 w-[88px] rounded-t-xl bg-[#E83A00] md:h-9 md:w-[105px]" />
//                 </div>
//               </div>

//               <div className="min-w-0">
//                 <h3 className="text-xl font-bold md:text-3xl">
//                   Muhammad Waseem
//                 </h3>

//                 <p className="mt-1 text-lg text-gray-300 md:text-2xl">
//                   Customer
//                 </p>
//               </div>
//             </div>

           
//             <p className="mt-7 text-lg leading-relaxed md:mt-6 md:text-2xl md:leading-[1.55]">
//               Excellent service! Codes Thinker delivered a stunning,
//               responsive website on time. Highly recommended for web
//               solutions.
//             </p>
//           </div>

         
//           <div className="mt-10 flex justify-center lg:justify-start lg:pl-9">
//             <button
//               onClick={() =>
//                 window.open(
//                   "https://www.google.com/search?q=Codes+Thinker+reviews",
//                   "_blank"
//                 )
//               }
//               className="rounded-[25px] bg-[#FFF000] text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300  px-4 py-3 text-2xl"
//             >
//               Add Your Reviews
//             </button>
//           </div>
//         </div>
//       </div>

     
//     </section>
//   );
// };

// export default Page7;


import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Muhammad Waseem",
    role: "Customer",
    rating: "5.0",
    review:
      "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly recommended for web solutions.",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    role: "Business Owner",
    rating: "5.0",
    review:
      "Amazing experience! The team delivered a professional website with a beautiful design and smooth user experience.",
  },
  {
    id: 3,
    name: "Ali Hassan",
    role: "Customer",
    rating: "5.0",
    review:
      "Great service and excellent communication. The website looks modern, works smoothly, and meets all my expectations.",
  },
];

const Page7 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slider: every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeReview = reviews[activeIndex];

  return (
    <section className="relative min-h-[500px] w-full overflow-x-hidden bg-[#08003F] px-5 py-12 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[100%] grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.5fr] lg:gap-16">

        {/* Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-medium leading-tight tracking-tight md:text-2xl lg:text-[37px]">
            Our{" "}
            <span className="font-semibold text-[#FFF000]">
              Clients,
            </span>
            <br />
            In Their Own Words
          </h2>
        </div>

        {/* Review Slider */}
        <div className="min-w-0">

          {/* Review Box */}
          <div
            className="min-h-[220px] rounded-xl bg-gradient-to-br from-[#11066A] to-[#0B064C] p-4 md:min-h-[270px] md:p-6"
          >
            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl font-semibold md:text-4xl">
                {activeReview.rating}
              </span>

              <div className="flex gap-2 text-xl text-[#FFB800] md:gap-3 md:text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
            </div>

            {/* Customer Information */}
            <div
              key={activeReview.id}
              className="mt-5 flex animate-[fadeIn_0.4s_ease-in-out] items-center gap-4 sm:gap-6"
            >
              {/* LEGO Avatar */}
              <div className="relative flex h-[100px] w-[100px] shrink-0 items-end justify-center overflow-hidden rounded-full bg-white md:h-[150px] md:w-[150px]">
                <div className="relative mb-0 flex h-[115px] w-[90px] flex-col items-center md:h-[130px] md:w-[110px]">

                  {/* Head */}
                  <div className="relative z-10 mt-4 flex h-[78px] w-[76px] items-center justify-center rounded-[23px] border-2 border-[#D5A900] bg-[#F5CF00] shadow-inner md:h-[88px] md:w-[86px]">
                    <div className="absolute -top-4 h-5 w-10 rounded-t-lg border border-[#D5A900] bg-[#E6BB00]" />

                    {/* Eyes */}
                    <div className="absolute top-[25px] flex w-10 justify-between md:top-[29px]">
                      <span className="h-3 w-3 rounded-full bg-black" />
                      <span className="h-3 w-3 rounded-full bg-black" />
                    </div>

                    {/* Smile */}
                    <div className="absolute bottom-5 h-3 w-8 rounded-b-full border-b-[4px] border-black md:bottom-6" />
                  </div>

                  {/* Body */}
                  <div className="absolute bottom-0 h-8 w-[88px] rounded-t-xl bg-[#E83A00] md:h-9 md:w-[105px]" />
                </div>
              </div>

              {/* Name and Role */}
              <div className="min-w-0">
                <h3 className="break-words text-xl font-bold md:text-3xl">
                  {activeReview.name}
                </h3>

                <p className="mt-1 text-lg text-gray-300 md:text-2xl">
                  {activeReview.role}
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p
              key={`${activeReview.id}-text`}
              aria-live="polite"
              className="mt-6 text-base leading-relaxed sm:text-lg md:text-2xl md:leading-[1.55]"
            >
              {activeReview.review}
            </p>
          </div>

          {/* Slider Dots */}
          <div className="mt-5 flex justify-center gap-3">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-4 bg-[#FFF000]"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* Add Reviews Button */}
          <div className="mt-8 flex justify-center lg:justify-start lg:pl-9">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://www.google.com/search?q=Codes+Thinker+reviews",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="rounded-[25px] bg-[#FFF000] px-2.5 py-3 text-lg font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300 sm:text-2xl"
            >
              Add Your Reviews
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Page7;
