
// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   ArrowRight,
//   Send,
// } from "lucide-react";

// export default function Page1() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Your message has been submitted!");
//   };

//   const contacts = [
//     {
//       icon: Phone,
//       title: "Call Us",
//       detail: "+92 123 456 7890",
//     },
//     {
//       icon: Mail,
//       title: "Email Us",
//       detail: "info@codesthinker.com",
//     },
//     {
//       icon: MapPin,
//       title: "Our Office",
//       detail: "Bahawalpur, Pakistan",
//     },
//   ];

//   const socials = [
//     { icon: Facebook, url: "https://facebook.com" },
//     { icon: Twitter, url: "https://twitter.com" },
//     { icon: Instagram, url: "https://instagram.com" },
//     { icon: Linkedin, url: "https://linkedin.com" },
//   ];

//   return (
//     <section className="w-full bg-slate-50 px-5 py-16 sm:px-8 lg:px-16">
//       <div className="mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <span className="mb-4 inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-800">
//             CONTACT US
//           </span>

//           <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
//             Let's Start a{" "}
//             <span className="text-blue-700">Conversation</span>
//           </h1>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
//             Have a project in mind? Tell us about your ideas and
//             let's build something amazing together.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-5">
//           {/* Left Contact Panel */}
//           <div className="relative overflow-hidden bg-gradient-to-br from-[#080044] via-[#1000a8] to-[#2563eb] p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
//             <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

//             <div className="relative z-10">
//               <h2 className="text-3xl font-bold">
//                 Get in touch
//               </h2>

//               <p className="mt-4 leading-7 text-blue-100">
//                 We're always ready to help you with your next
//                 big idea. Contact us and let's discuss your project.
//               </p>

//               <div className="mt-10 space-y-7">
//                 {contacts.map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <div key={index} className="flex items-center gap-4">
//                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
//                         <Icon size={23} />
//                       </div>

//                       <div>
//                         <h3 className="text-sm font-semibold text-blue-100">
//                           {item.title}
//                         </h3>
//                         <p className="mt-1 text-sm font-medium text-white">
//                           {item.detail}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-12 border-t border-white/20 pt-7">
//                 <p className="mb-4 text-sm font-semibold">
//                   Follow us on social media
//                 </p>

//                 <div className="flex gap-3">
//                   {socials.map((social, index) => {
//                     const Icon = social.icon;

//                     return (
//                       <a
//                         key={index}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={`Social media ${index + 1}`}
//                         className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-800"
//                       >
//                         <Icon size={19} />
//                       </a>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="p-7 sm:p-10 lg:col-span-3 lg:p-12">
//             <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
//               Send us a message
//             </h2>

//             <p className="mt-2 text-sm text-slate-500">
//               Fill out the form below and we'll get back to you.
//             </p>

//             <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="mb-2 block text-sm font-semibold text-slate-700"
//                   >
//                     Full Name *
//                   </label>

//                   <input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     required
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm font-semibold text-slate-700"
//                   >
//                     Email Address *
//                   </label>

//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="mb-2 block text-sm font-semibold text-slate-700"
//                 >
//                   Subject
//                 </label>

//                 <input
//                   id="subject"
//                   name="subject"
//                   type="text"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="What is your project about?"
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="mb-2 block text-sm font-semibold text-slate-700"
//                 >
//                   Your Message *
//                 </label>

//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us more about your requirements..."
//                   required
//                   className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:bg-[#080044] sm:w-auto"
//               >
//                 Send Message
//                 <Send
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import {
//   MessageCircle,
//   Handshake,
//   Send,
//   User,
//   Phone,
//   Mail,
// } from "lucide-react";


// const Page1= () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "Discuss Your Project",
//       description:
//         "Invite clients to share their ideas and requirements, fostering an open dialogue about potential collaborations.",
//     },
//     {
//       icon: Handshake,
//       title: "Get a Free Consultation",
//       description:
//         "Offer a no-obligation consultation to understand the client's needs and propose tailored solutions.",
//     },
//     {
//       icon: Send,
//       title: "Reach Us Anytime",
//       description:
//         "Provide multiple contact channels, ensuring clients can connect with you at their convenience.",
//     },
//   ];
//   const ContactUs = () => {
//   const form = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm('service_i3dycj8', 'template_9modqc5', form.current, {
//         publicKey: 'bvH3EBBLwg8VsV-3i',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//          );
//   };
// };
 
 
//   return (
//     <section className="w-full bg-[#F5F9FF] px-5 py-16 sm:px-8 lg:px-12">
//       {/* Heading */}
//       <div className="mb-12 text-center">
//         <p className="mb-3 text-lg text-[#64748B]">Let's Talk</p>

//         <h1 className="text-3xl font-bold leading-tight text-[#101D50] sm:text-4xl lg:text-5xl">
//           <span className="text-[#2710E8]">
//             Let's Collaborate
//           </span>{" "}
//           and Innovate
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
//         {/* Left Features */}
//         <div className="flex flex-col gap-10 sm:gap-12">
//           {features.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="flex items-start gap-5 sm:gap-7"
//               >
//                 <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-[#E4EAFF]">
//                   <Icon
//                     size={38}
//                     strokeWidth={1.8}
//                     className="text-[#2410F5]"
//                   />
//                 </div>

//                 <div>
//                   <h2 className="mb-2 text-xl font-bold text-[#101D50] sm:text-2xl">
//                     {item.title}
//                   </h2>

//                   <p className="max-w-[530px] text-base leading-7 text-[#64769D] sm:text-lg">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="rounded-2xl bg-white/80 p-6 shadow-[0_15px_45px_rgba(42,80,160,0.12)] sm:p-9 lg:p-8 xl:p-9">
//           <h2 className="mb-7 text-center text-2xl font-bold text-[#101D50]">
//             CONTACT US
//           </h2>

//           <form   ref={form} onSubmit={handleSubmit} className="space-y-4">
//             {/* Name and Phone */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
//                 <User size={25} className="shrink-0 text-[#26376D]" />

//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   aria-label="Full Name"
//                   required
//                   className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
//                 />
//               </div>

//               <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
//                 <Phone size={25} className="shrink-0 text-[#26376D]" />

//                 <input
//                   type="tel"
//                    name="Phone"
//                   placeholder="Phone Number"
//                   aria-label="Phone Number"
//                   required
//                   className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
//               <Mail size={25} className="shrink-0 text-[#26376D]" />

//               <input
//                 type="email"
//                  name="email"
//                 placeholder="Email"
//                 aria-label="Email"
//                 required
//                 className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex items-start gap-4 rounded-lg border-2 border-[#D8E1F7] p-4 transition focus-within:border-[#3920F5]">
//               <MessageCircle
//                 size={25}
//                 className="mt-1 shrink-0 text-[#26376D]"
//               />

//               <textarea
//                name="message"
//                 placeholder="Message"
//                 aria-label="Message"
//                 required
//                 rows={5}
//                 className="min-h-[125px] w-full resize-y bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end pt-1">
//               <button
//                 type="submit"
//                  value="Send" 
//                 className="flex h-[60px] min-w-[190px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#123BFF] to-[#5100F5] px-8 text-lg font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <Send size={23} />
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Page1;





import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MessageCircle,
  Handshake,
  Send,
  User,
  Phone,
  Mail,
} from "lucide-react";

const Page1 = () => {
  const form = useRef();

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

    emailjs
      .sendForm(
        "service_w7vvmpf",
        "template_9modqc5",
        form.current,
        {
          publicKey: "bvH3EBBLwg8VsV-3i",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message could not be sent. Please try again.");
        }
      );
  };

  return (
    <section className="w-full bg-[#F5F9FF] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mb-12 text-center">
        <p className="mb-3 text-lg text-[#64748B]">
          Let's Talk
        </p>

        <h1 className="text-3xl font-bold leading-tight text-[#101D50] sm:text-4xl lg:text-5xl">
          <span className="text-[#2710E8]">
            Let's Collaborate
          </span>{" "}
          and Innovate
        </h1>
      </div>

      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

        <div className="rounded-2xl bg-white/80 p-6 shadow-[0_15px_45px_rgba(42,80,160,0.12)] sm:p-9 lg:p-8 xl:p-9">
          <h2 className="mb-7 text-center text-2xl font-bold text-[#101D50]">
            CONTACT US
          </h2>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
                <User size={25} className="shrink-0 text-[#26376D]" />

                <input
                  type="text"
                  name="name"
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
                  name="Phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  required
                  className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
                />
              </div>
            </div>

            <div className="flex h-16 items-center gap-4 rounded-lg border-2 border-[#D8E1F7] px-4 transition focus-within:border-[#3920F5]">
              <Mail size={25} className="shrink-0 text-[#26376D]" />

              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                className="w-full bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
              />
            </div>

            <div className="flex items-start gap-4 rounded-lg border-2 border-[#D8E1F7] p-4 transition focus-within:border-[#3920F5]">
              <MessageCircle
                size={25}
                className="mt-1 shrink-0 text-[#26376D]"
              />

              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                required
                rows={5}
                className="min-h-[125px] w-full resize-y bg-transparent text-base text-[#101D50] outline-none placeholder:text-[#7B89AA]"
              />
            </div>

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

export default Page1;