// import React, { useContext } from 'react';
// import { Sun } from "lucide-react";
// const Navebaar = () => {
//  const { theme, setTheme, currentTheme } = useContext(Store);
//   return (
//     <div style={{backgroundColor:theme}} className='h-[80px] w-full'>
     
       
// <nav
//   style={{
//     backgroundColor: currentTheme.background,
//     color: currentTheme.text,
//   }}
//   className="fixed z-20 h-[80px] w-full flex items-center justify-around gap-7"
// >

//           <img src="https://codesthinker.vercel.app/assets/companylogo-C8Mpu76G.webp" alt="" className='h-15'/>
//         <ul className='flex gap-8 text-[21px] font-medium transition duration-300' >
//           <li className=' hover:text-blue-500'><a href="/">Home</a></li>
//           <li className=' hover:text-blue-500'><a href="/About">About</a></li>
//           <li className=' hover:text-blue-500'><a href="/Services">Services</a></li>
//           <li className=' hover:text-blue-500'><a href="/Projects">Projects</a></li>
//           <li className=' hover:text-blue-500'><a href="/Team">Team</a></li>
//           <li className=' hover:text-blue-500'><a href="/Contact">Contact</a></li>
 






//         </ul>
//         <div className='flex gap-4'>
//         <button
//   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//   className="rounded-full p-2"
// >
//   <Sun size={22} />
// </button>
//       {/* <button className='border-2 px-7 py-2 rounded-2xl bg-gradient-to-r from-[#060145] to-blue-600 hover:scale-105'>
       
//   <span className="m-auto w-fit font-bold text-amber-50 transition-all duration-500 hover:scale-90 active:scale-75">
//     Login
//   </span>
// </button> */}
// <a href="#_" class="relative inline-flex items-center justify-start inline-block px-7 py-3 overflow-hidden font-bold rounded-2xl group   bg-gradient-to-r from-[#060145] to-blue-600">
//     <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
//     <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-800 opacity-100 group-hover:-translate-x-8"></span>
//     <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Login</span>
//     <span class="absolute inset-0 border-2 border-white rounded-2xl"></span>
// </a>

//    </div>  

//       </nav>
      
//     </div>
//   )
// }

// export default Navebaar





import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import Store from "../Pages/Store";

const Navebaar = () => {
  const { theme, setTheme } = useContext(Store);

  const isDark = theme === "dark";

  const currentTheme = {
    background: isDark ? "#060145" : "#FFFFFF",
    text: isDark ? "#FFFFFF" : "#111827",
    shadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.08)",
  };

  const navLinks = [
    ["Home", "/"],
    ["About", "/About"],
    ["Services", "/Services"],
    ["Projects", "/Projects"],
    ["Team", "/Team"],
    ["Contact", "/Contact"],
  ];

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="h-[80px] w-full">
      <nav
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          boxShadow: currentTheme.shadow,
        }}
        className="fixed top-0 z-50 flex h-[80px] w-full items-center justify-around gap-7 transition-colors duration-300"
      >
        {/* Logo */}
        <a href="/" aria-label="Codes Thinker home">
          <img
            src="https://codesthinker.vercel.app/assets/companylogo-C8Mpu76G.webp"
            alt="Codes Thinker logo"
            className="h-[60px] w-auto object-contain"
          />
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-[21px] font-medium">
          {navLinks.map(([label, path]) => (
            <li key={path} className="hover:text-blue-500">
              <a
                href={path}
                style={{ color: currentTheme.text }}
                className="transition-colors duration-300 hover:!text-blue-500"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle and Login */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDark ? "Light Mode" : "Dark Mode"}
            className="flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: isDark ? "#1800B8" : "#F3F4F6",
              color: isDark ? "#FACC15" : "#111827",
              borderColor: isDark ? "#4338CA" : "#D1D5DB",
            }}
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Login Button */}
          <a
            href="#_"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#060145] to-blue-600 px-7 py-3 font-bold text-white"
          >
            <span className="absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-white opacity-[3%]" />

            <span className="absolute -left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-blue-800 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8" />

            <span className="relative text-white">
              Login
            </span>

            <span className="absolute inset-0 rounded-2xl border-2 border-white" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navebaar;

