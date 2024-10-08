import { useState } from 'react'
import './App.css'
import ImageSwiper from './ImageSwiper'; 
import SideBar from './SideBar';
import ExpandableSection from './ExpandableSection';



function App() {
  

  return (
    <>
      

<div className="overflow-x-hidden">
  
  <header className=" flex items-center justify-between p-4  md:flex  ">
    
    <img className='xl:ml-72' src='/images/logo.png' alt='logo'></img>
    
    {/* <img  className=" xl:ml-72  "src='/images/CTA.png'></img> */}
    <nav className="flex  space-x-3 hidden md:flex xl:mr-12" >
      <a href="#" class="text-gray-700 text-xl" >Galeria zdjęć</a>
      <a href="#" class="text-gray-700 text-xl">FAQ</a>
      
    </nav>
    <button className='bg-blue-700  rounded-lg    px-2 py-2 text-white xl:mr-72 hidden md:flex '>Zadzwoń do nas</button>
  </header>
  <SideBar/>

  <main className="flex  xl:relative flex-col space-y-4   mt-4  bg-white col-span-2    " >
    <section class="flex-1 bg-white   p-4">
      <h2 className='text-6xl  xl:ml-72 xl:text-7xl xl:mt-14'>SPRZEDAJEMY SAMOCHODY <br/>Z EUROPY</h2>
    <p className='mt-8 md:text-xl xl:ml-72'>Kup komfortowy pojazd, aby każda podróż<br/> była wyjątkowym przeżyciem.</p>

    <button className='mr-4 bg-blue-700 rounded-lg px-3 py-3 mt-8 text-white xl:ml-72'>Zobacz zdjęcia</button>
    <button className='bg-white border border-blue-700 text-blue-700 rounded-lg px-3 py-3 mt-8 hover:text-white hover:bg-blue-700'>Zadzwoń do nas</button>

    </section>
    

    <img className='xl:ml-72 object-cover max-w-full xl:absolute xl:w-7/12 xl:right-0 top-56' src='/images/auta.png' alt='cars'></img>

  </main>
   
  
  <section className="flex-1 bg-white p-4 xl:mt-64 ">
      <p className='text-blue-700 text-2xl xl:ml-72'>Prezentacja firmy</p>
      <h2 className='text-3xl  xl:ml-72'>ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h2>

      <button className='mt-4 mr-4 xl:ml-72'>Samochody osobowe</button>
      <button className='mt-4 xl:ml-4'>Samochody dostawcze</button>

    </section>
  <ImageSwiper />
  <ExpandableSection></ExpandableSection>
  <footer className="col-span-3 justify-between flex items-center justify-center p-4 mt-0.5 bg-gray-700 text-white">
    <p className=' xl:ml-72 '>Cars Spot</p>
    <p className='xl:mr-72'>Polityka prywatności </p>

  </footer>
</div>

    </>
  )
  
}

export default App
