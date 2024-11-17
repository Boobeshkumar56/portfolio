import React from 'react'
import Nav from './sections/nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contract from './sections/Contract';
import Footer from './sections/Footer';
const App = () => {
  return (
   <main className='max-w-7xl h-fit mx-auto'>
    <h1 className='text'></h1>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Contract/>
    <Footer/>
   </main>
  )
}
export default App;
