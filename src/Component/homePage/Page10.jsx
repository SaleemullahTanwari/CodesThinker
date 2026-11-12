import React, { useState } from "react";
import { FaChevronDown, } from "react-icons/fa";

const Page10 = () => {
const [activeIndex, setActiveIndex] = useState(null);

const faqData = [
{
id: 1,
question: "What Services do you offer?",
answer:
"We offer professional web design, web development, UI/UX design, responsive websites, and custom digital solutions to help your business grow.",
},
{
id: 2,
question: "How long does a project usually take?",
answer:
"Project timelines depend on the requirements. A standard website usually takes around 1–4 weeks, while larger projects may take longer.",
},
{
id: 3,
question: "Do you offer post-launch support?",
answer:
"Yes! We provide website maintenance, bug fixes, performance optimization, and ongoing technical support after your website launches.",
},
{
id: 4,
question: "Can I get a custom design for my brand?",
answer:
"Absolutely! We create unique designs according to your brand identity, business goals, preferred colors, and target audience.",
},
];

const toggleFAQ = (index) => {
setActiveIndex(activeIndex === index ? null : index);
};

return ( <section className="min-h-screen w-full overflow-x-hidden bg-[#F8F9FB] px-5 py-8 md:px-10 lg:px-12">

```
  {/* Heading */}
  <div className="mb-14 text-center md:mb-20">
    <p className="text-lg text-slate-600 md:text-[21px]">
      Have You Any Question
    </p>

    <h2 className="mt-1 text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
      <span className="text-[#1900B8]">
        Frequently
      </span>{" "}
      Asked Questions
    </h2>
  </div>

  {/* Main Content */}
  <div className="mx-auto grid max-w-[1730px] grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

    {/* Left FAQ Accordion */}
    <div className="flex w-full flex-col gap-6 md:gap-8">

      {faqData.map((item, index) => (
        <div
          key={item.id}
          className="group overflow-hidden rounded-xl bg-white shadow-[0_20px_35px_rgba(0,0,0,0.10)] transition duration-300 hover:shadow-[0_24px_40px_rgba(0,0,0,0.13)]"
        >

          {/* Question */}
          <button
            type="button"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
            className="flex min-h-[78px] w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
          >
            <span className="text-lg font-semibold leading-snug text-black md:text-[24px]">
              {item.question}
            </span>

            <FaChevronDown
              className={`shrink-0 text-lg text-black transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Answer */}
          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              activeIndex === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-base leading-7 text-slate-600 md:px-6 md:text-lg">
                {item.answer}
              </p>
            </div>
          </div>

        </div>
      ))}

    </div>

    {/* Right Image */}
    <div className="h-[300px] w-full overflow-hidden rounded-xl border border-[#e5d17b] bg-[#FFE78A] sm:h-[400px] lg:h-[540px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLNs5FS5qAhzXI3q8bCth3S8Be5MV5CxIsviiFVjcUFez-TEo0rJz3Pg&s=10"
        alt="Frequently asked questions"
        className="h-full w-full object-cover"
      />
    </div>

  </div>

  

</section>


);
};

export default Page10;
