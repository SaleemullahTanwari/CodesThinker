import React from "react";
import {
FaFacebookF,
FaTwitter,
FaInstagram,
FaLinkedinIn,
FaPhoneAlt,
FaEnvelope,
FaMapMarkerAlt,

} from "react-icons/fa";
const Footer = () => {
const services = [
"Business Intelligence",
"Virtual Workstation",
"Network Services",
"Data Science",
"IT Strategy",
];
const company = [
"About Us",
"Latest Projects",
"IT Solutions",
"Team Members",
"Contact Us",
];

const socialLinks = [
{ icon: <FaFacebookF />, url: "https://facebook.com" },
{ icon: <FaTwitter />, url: "https://twitter.com" },
{ icon: <FaInstagram />, url: "https://instagram.com" },
{ icon: <FaLinkedinIn />, url: "https://linkedin.com" },
];

const contactInfo = [
{
icon: <FaPhoneAlt />,
content: ( <a href="tel:+447470103120">
+44 7470 103120 </a>
),
},
{
icon: <FaEnvelope />,
content: ( <a href="mailto:info@codesthinker.com">
(mailto:info@codesthinker.com) </a>
),
},
{
icon: <FaMapMarkerAlt />,
content: ( <p>
Bartle House 9 Oxford Court,
 </p>
),
},
{
icon: <FaMapMarkerAlt />,
content: ( <p>
Hassan Manzil Basement Goheer
</p>
),
},
];

const handleSubscribe = (e) => {
e.preventDefault();
alert("Thank you for subscribing!");
e.target.reset();
};

return ( <footer className="relative w-full overflow-hidden bg-[#0B063A] px-5 pb-5 pt-12 text-white sm:px-8 lg:px-[6.7%] lg:pt-14">


  
  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.85fr_0.95fr_1.15fr] lg:gap-10">
    <div className="min-w-0">
      <a href="/" className="mb-7 inline-flex items-center">
       

          <div>
           <img src="https://codesthinker.vercel.app/assets/companylogo-C8Mpu76G.webp" alt="" className='h-15' />
          </div>
       
      </a>

      <p className="max-w-[480px] text-base leading-7 text-white sm:text-lg">
        We offer a range of cutting-edge web development
        and software solutions tailored to meet client
        needs. Our experienced team delivers collaboratively
        and efficiently.
      </p>

     
      <div className="mt-7 flex flex-wrap gap-5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Social media ${index + 1}`}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1900B8] text-xl text-white transition duration-300 hover:-translate-y-1 hover:bg-[#4A35FF]"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>

   
    <div>
      <h3 className="mb-6 text-2xl font-bold">
        Services
      </h3>

      <ul className="flex flex-col gap-1.5 text-base sm:text-lg">
        {services.map((service) => (
          <li key={service}>
            <a
              href="#services"
              className="transition-colors hover:text-[#8D7BFF]"
            >
              {service}
            </a>
          </li>
        ))}
      </ul>
    </div>

   
    <div>
      <h3 className="mb-6 text-2xl font-bold">
        Company
      </h3>

      <ul className="flex flex-col gap-1.5 text-base sm:text-lg">
        {company.map((item) => (
          <li key={item}>
            <a
              href="#company"
              className="transition-colors hover:text-[#8D7BFF]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

  
    <div className="min-w-0">
      <h3 className="mb-5 text-2xl font-bold">
        Contact Info
      </h3>

      <div className="flex flex-col gap-4">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1900B8] text-lg">
              {item.icon}
            </div>

            <div className="min-w-0 flex-1 text-base leading-7 sm:text-lg [&_a]:break-words [&_a]:transition-colors [&_a:hover]:text-[#A89AFF] [&_p]:break-words">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

  
  <div className="mt-12 flex justify-center lg:mt-[68px] lg:justify-end">
    <form
      onSubmit={handleSubscribe}
      className="flex w-full max-w-[350px] overflow-hidden rounded-lg bg-white sm:h-[45px]"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Your Mail"
        aria-label="Your email address"
        className="min-w-0 flex-1 bg-white px-4 py-4 text-base text-black outline-none placeholder:text-gray-400 sm:text-lg"
      />

      <button
        type="submit"
        className="shrink-0 bg-[#1900B8] px-4 text-base font-semibold text-white transition hover:bg-[#3020D9] sm:px-7 sm:text-lg"
      >
        Submit
      </button>
    </form>
  </div>

  
  <div className="mt-8 border-t border-white/30" />

  
  <div className="pt-7 text-center text-sm text-white">
    © 2024-All Rights Reserved-Code's Thinker
  </div>

 
</footer>

);
};

export default Footer;
