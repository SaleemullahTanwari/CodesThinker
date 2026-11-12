// import React from 'react'
// // import SimpleForm from './Component/FormHandling/SimpleForm'
// // import MultipleForm from './Component/FormHandling/MultipleForm'
// import Footer from './Component/Common/footer'
// import Navebaar from './Component/Common/Navebaar'
// import AboutPage from './Component/Pages/AboutPage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from './Component/Pages/HomePage'
// import Services from './Component/Pages/Services'
// import ServicesDetail from './Component/Pages/ServicesDetail'
// import Projects from './Component/Pages/Projects'
// import Team from './Component/Pages/Team'
// import Contact from './Component/Pages/Contact'
// import AllThemeUse from './Component/StorePage/AllThemeUse'
// import Store from './Component/Pages/Store'
// // import Contact from './Component/Pages/Contact'






// const App = () => {
//   const [theme,setTheme]=useState("#FF0000")
//   return (

//      <div className='flex justify-center items-center  text-amber-50 flex-col '>

    
//       <BrowserRouter>
//       <Navebaar/>
//      <Routes>
//      <Route path='/' element= {<HomePage/>}/>
//      <Route path='/About' element={<AboutPage/>}/>
//      <Route path='/Services' element={<Services/>}/>
//      <Route path='/Services/:id' element={<ServicesDetail/>}/>
//      <Route path='/Projects' element={<Projects/>}/>
//      <Route path='/Team' element={<Team/>}/>
//      <Route path='/Contact' element={<Contact/>}/>
//      </Routes>
     
//      <Footer/>
//      </BrowserRouter> 
     
//      {/* <SimpleForm/> */}
//      {/* <MultipleForm/>
//       */}


//        <Store.Provider value={{theme,setTheme}}>
//   <AllThemeUse/>
// </Store.Provider> 



//      </div>
//   )
// }

// export default App








import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Component/Common/footer";
import Navebaar from "./Component/Common/Navebaar";
import HomePage from "./Component/Pages/HomePage";
import AboutPage from "./Component/Pages/AboutPage";
import Services from "./Component/Pages/Services";
import ServicesDetail from "./Component/Pages/ServicesDetail";
import Projects from "./Component/Pages/Projects";
import Team from "./Component/Pages/Team";
import Contact from "./Component/Pages/Contact";
import Store from "./Component/Pages/Store";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const currentTheme = {
    background: theme === "dark" ? "#060145" : "#FFFFFF",
    text: theme === "dark" ? "#FFFFFF" : "#111827",
  };

  return (
    <Store.Provider value={{ theme, setTheme, currentTheme }}>
      <div
        className={`app theme-${theme}`}
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.text,
          minHeight: "100vh",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <BrowserRouter>
          <Navebaar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Services" element={<Services />} />
            <Route
              path="/Services/:id"
              element={<ServicesDetail />}
            />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </Store.Provider>
  );
};

export default App;
