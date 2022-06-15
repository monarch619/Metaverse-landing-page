import React from 'react'
import Header from './components/Header'
import SectionFirst from './components/SectionFirst'
import SectionSecond from './components/SectionSecond'
import SectionThird from './components/SectionThird'
import Footer from './components/Footer'


const App = () => {
  return (
    <div id='app'>
      <Header />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <Footer />
    </div>
  );
}

export default App;
