import React, { useState } from 'react';
import Navbar from './assets/Components/Navbar';
import Home from './assets/Pages/Home';
import Page2 from './assets/Pages/Page2';
import Page3 from './assets/Pages/page3';
import Page4 from './assets/Pages/Page4';
import Page5 from './assets/Pages/Page5';
import Page6 from './assets/Pages/Page6';
import Page7 from './assets/Pages/Page7';
import Footer from './assets/Pages/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  return (
    <>
    <div className={!darkMode ? "text-black w-full mx-auto min-h-screen":"text-white w-full min-h-screen"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Home darkMode={darkMode}/>
      <Page2  darkMode={darkMode}/><hr></hr>
     <Page3 darkMode={darkMode}/><hr></hr>
     <Page4/><hr></hr>
     <Page5/><hr></hr>
     <Page6/><hr></hr>
     <Page7/>
     <Footer/>
      </div>
    </>
  );
};

export default App;
