import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
    </div>
  );
}

export default App;
