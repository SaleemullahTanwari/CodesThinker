import React, { useState } from "react";
const Services = () => {
  const [activeTab, setActiveTab] = useState("Development");

  const services = {
    Development: [
      "Custom Development",
      "Web App Development",
      "Mobile App Development",
      "Blockchain Dev",
      "Crypto Token Dev",
      "Wordpress Dev",
    ],
    Management: [
      "Project Management",
      "Product Management",
      "Community Management",
      "Business Management",
      "Team Management",
      "Operations Management",
    ],
    Marketing: [
      "Digital Marketing",
      "Social Media Marketing",
      "SEO Optimization",
      "Email Marketing",
      "Content Marketing",
      "Paid Advertising",
    ],
    "Graphics & Visuals": [
      "Logo Design",
      "UI/UX Design",
      "Brand Identity",
      "Social Media Graphics",
      "Web Design",
      "Visual Branding",
    ],
    "Video Editing": [
      "YouTube Video Editing",
      "Reels & Shorts",
      "Promotional Videos",
      "Motion Graphics",
      "Intro & Outro Videos",
      "Explainer Videos",
    ],
    "Content Writing": [
      "Website Content",
      "Blog Writing",
      "SEO Content Writing",
      "Technical Writing",
      "Copywriting",
      "Social Media Content",
    ],
  };

  const categories = Object.keys(services);

  return (
    <section className="min-h-[700px] w-full bg-white px-5 py-14 md:px-10 lg:px-16">
   
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
          <span className="text-[#1900B8]">Services</span> We Offer
        </h2>

        <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-black md:text-xl">
          TOJO GLOBAL offers crypto solutions, targeted marketing, impactful
          design, custom development, and professional video editing to elevate
          your brand.
        </p>
      </div>

     
      <div className="mx-auto mt-9 grid max-w-[1515px] grid-cols-1 items-center gap-10 lg:grid-cols-[475px_1fr] lg:gap-16">
        
       
        <div className="flex w-full flex-col gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`h-[51px] w-full rounded-full border-2 px-4 text-lg font-semibold transition duration-300 md:text-2xl ${
                activeTab === category
                  ? "border-[#1D00B8] bg-gradient-to-r from-[#08004D] to-[#1900C5] text-white"
                  : "border-gray-200 bg-white text-black hover:border-[#1900B8] hover:text-[#1900B8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      
        <div className="flex min-h-[250px] w-full flex-wrap content-center items-center justify-start gap-x-7 gap-y-8 lg:pl-5">
          {services[activeTab].map((service) => (
            <div
              key={service}
              className="cursor-pointer text-base font-semibold text-black transition duration-300 hover:-translate-y-1 hover:text-[#1900B8] md:text-lg"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

     
     
    </section>
  );
};
export default Services;

