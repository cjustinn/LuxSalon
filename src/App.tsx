import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

import env from 'react-dotenv';
import FooterLocationInformation from './components/LocationInformationFooter';
import ServicesPage from './pages/Services';

function App() {
  const [ locationData, setLocationData ] = useState<[]>([]);

  useEffect(() => {
    fetch(`${env.API_URL}/api/location?mode=full`).then(resp => resp.json()).then(locations => {
      setLocationData(locations.data);
    }).catch(err => console.log(err));
  }, []);

  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <body className="h-full">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </body>

      <footer className="bg-primary-500 w-full">
        <FooterLocationInformation locations={locationData}/>
        <p className="text-primary-200 px-6 text-md text-center font-raleway hover:opacity-75"><a href="https://github.com/cjustinn/LuxSalon" target="_blank" rel="noreferrer">&copy; 2022 Justin Mercer</a></p>
      </footer>
    </div>
  );
}

export default App;
