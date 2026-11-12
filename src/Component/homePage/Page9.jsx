
// import React from "react";
// import {
//   FaPhoneAlt,
//   FaComments,
//   FaHeadset,
 
// } from "react-icons/fa";

// const Page9 = () => {
//   const contactInfo = [
//     {
//       id: 1,
//       title: "Discuss Your Project",
//       description:
//         "Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.",
//       icon: <FaPhoneAlt />,
//     },
//     {
//       id: 2,
//       title: "Get a Free Consultation",
//       description:
//         "Offer a no-obligation consultation to understand the client's needs and propose tailored solutions.",
//       icon: <FaComments />,
//     },
//     {
//       id: 3,
//       title: "Reach Us Anytime",
//       description:
//         "Provide multiple contact channels, ensuring clients can connect with you at their convenience.",
//       icon: <FaHeadset />,
//     },
//   ];

//   return (
//     <section className="min-h-screen w-full overflow-x-hidden bg-[#F8F9FB] px-5 py-12 md:px-10 lg:px-12 lg:py-7">

//       {/* Heading */}
//       <div className="mb-12 text-center">
//         <p className="text-xl text-slate-600 md:text-2xl">
//           let's Talk
//         </p>

//         <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#202938] md:text-5xl lg:text-[50px]">
//           <span className="text-[#1900B8]">
//             Let's Collaborate
//           </span>{" "}
//           and Innovate
//         </h2>
//       </div>

//       {/* Main Content */}
//       <div className="mx-auto grid max-w-[1730px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

//         {/* Left Information */}
//         <div className="flex flex-col gap-16 md:gap-20 lg:gap-[78px]">

//           {contactInfo.map((item) => (
//             <div
//               key={item.id}
//               className="group flex items-start gap-5 md:gap-7"
//             >
//               {/* Icon */}
//               <div className="flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1900B8] to-[#6447FF] text-3xl text-white shadow-md transition duration-300 group-hover:scale-110 md:h-[78px] md:w-[78px]">
//                 {item.icon}
//               </div>

//               {/* Text */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-semibold text-black md:text-[28px]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-1 max-w-[550px] text-base leading-7 text-slate-600 md:text-[22px] md:leading-8">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}

//         </div>

//         {/* Right Contact Form */}
//         <div className="w-full rounded-2xl bg-[#F8F9FB] p-5 shadow-[0_20px_35px_rgba(0,0,0,0.10)] md:p-8 lg:p-10">

//           <h3 className="mb-3 text-center text-2xl font-bold text-black md:text-[26px]">
//             CONTACT US
//           </h3>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Form submitted! Connect a backend to receive messages.");
//             }}
//             className="flex flex-col gap-5"
//           >

//             {/* Name and Phone */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 className="h-[62px] min-w-0 rounded-lg border-2 border-black bg-transparent px-3 text-lg outline-none transition focus:border-[#1900B8] md:text-xl"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 className="h-[62px] min-w-0 rounded-lg border-2 border-black bg-transparent px-3 text-lg outline-none transition focus:border-[#1900B8] md:text-xl"
//               />

//             </div>

//             {/* Email */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               className="h-[62px] w-full rounded-lg border-2 border-black bg-transparent px-3 text-lg outline-none transition focus:border-[#1900B8] md:text-xl"
//             />

//             {/* Message */}
//             <textarea
//               name="message"
//               placeholder="Message"
//               required
//               rows="5"
//               className="min-h-[180px] w-full resize-y rounded-lg border-2 border-black bg-transparent px-3 py-3 text-lg outline-none transition focus:border-[#1900B8] md:text-xl"
//             />

//             {/* Send Button */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 className="min-w-[160px] rounded-full bg-gradient-to-r from-[#10004F] to-[#1900B8] px-10 py-4 text-xl font-medium text-white transition duration-300 hover:scale-105 hover:shadow-lg"
//               >
//                 Send
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>

     

//     </section>
//   );
// };

// export default Page9;

import React from "react";
import {
  MessageCircle,
  Handshake,
  Send,
  User,
  Phone,
  Mail,
} from "lucide-react";


const Page9= () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Discuss Your Project",
      description:
        "Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.",
    },
    {
      icon: Handshake,
      title: "Get a Free Consultation",
      description:
        "Offer a no-obligation consultation to understand the client's needs and propose tailored solutions.",
    },
    {
      icon: Send,
      title: "Reach Us Anytime",
      description:
        "Provide multiple contact channels, ensuring clients can connect with you at their convenience.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  return (
    <section className="w-full bg-[#F5F9FF] px-5 py-16 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-lg text-[#64748B]">Let's Talk</p>

        <h1 className="text-3xl font-bold leading-tight text-[#101D50] sm:text-4xl lg:text-5xl">
          <span className="text-[#2710E8]">
            Let's Collaborate
          </span>{" "}
          and Innovate
        </h1>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Features */}
        <div className="flex flex-col gap-10 sm:gap-12">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-5 sm:gap-7"
              >
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-[#E4EAFF]">
                  <Icon
                    size={38}
                    strokeWidth={1.8}
                    className="text-[#2410F5]"
                  />
                </div>

                <div>
                  <h2 className="mb-2 text-xl font-bold text-[#101D50] sm:text-2xl">
                    {item.title}
                  </h2>

                  <p className="max-w-[530px] text-base leading-7 text-[#64769D] sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl bg-white/80 p-6 shadow-[0_15px_45px_rgba(42,80,160,0.12)] sm:p-9 lg:p-8 xl:p-9">
          <h2 className="mb-7 text-center text-2xl font-bold text-[#101D50]">
            CONTACT US
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
                <User size={25} className="shrink-0 text-[#26376D]" />

                <input
                  type="text"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  required
                  className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
                />
              </div>

              <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
                <Phone size={25} className="shrink-0 text-[#26376D]" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  required
                  className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
              <Mail size={25} className="shrink-0 text-[#26376D]" />

              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                required
                className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
              />
            </div>

            {/* Message */}
            <div className="flex items-start gap-4 rounded-lg border-2 border-[#D8E1F7] p-4 transition focus-within:border-[#3920F5]">
              <MessageCircle
                size={25}
                className="mt-1 shrink-0 text-[#26376D]"
              />

              <textarea
                placeholder="Message"
                aria-label="Message"
                required
                rows={5}
                className="min-h-[125px] w-full resize-y bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                className="flex h-[60px] min-w-[190px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#123BFF] to-[#5100F5] px-8 text-lg font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Send size={23} />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page9;
