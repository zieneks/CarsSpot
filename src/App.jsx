import { useState } from 'react'
import './App.css'
import ImageSwiper from './ImageSwiper'; 
import SideBar from './SideBar';



function App() {
  

  return (
    <>
      

<div class="overflow-x-hidden">
  
  <header class=" flex items-center justify-between p-4  md:flex  ">
    
    <img  className=" xl:ml-72  "src='/images/CTA.png'></img>
    <nav class="flex space-x-3 hidden md:flex">
      <a href="#" class="text-gray-700 text-xl">Galeria zdjec</a>
      <a href="#" class="text-gray-700 text-xl">FAQ</a>
      
    </nav>
    <button className='bg-blue-700  rounded-lg    px-2 py-2 text-white xl:mr-72 hidden md:flex '>Zadzowon do nas</button>
  </header>
  <SideBar/>

  <main class="flex  xl:relative flex-col space-y-4   mt-4  bg-white col-span-2    " >
    <section class="flex-1 bg-white   p-4">
      <h2 className='text-6xl  xl:ml-72 xl:text-7xl xl:mt-14'>SPRZEDAJEMY SAMOCHODY <br/>Z EUROPY</h2>
    <p className='mt-8 xl:ml-72'>Kup komfortowy pojazd, aby każda podróż<br/> była wyjątkowym przeżyciem.</p>

    <button className='mr-4 bg-blue-700 rounded-lg px-3 py-3 mt-8 text-white xl:ml-72'>Zobacz zdjęcia</button>
    <button className='bg-white border border-blue-700 text-blue-700 rounded-lg px-3 py-3 mt-8 hover:text-white hover:bg-blue-700'>Zadzwoń do nas</button>

    </section>
    

    <img className='xl:ml-72 object-cover max-w-full xl:absolute xl:w-7/12 xl:right-0 top-56' src='/images/auta.png'></img>

  </main>
   
  
  <section class="flex-1 bg-white p-4 xl:mt-64 ">
      <p className='text-blue-700 text-2xl xl:ml-72'>Prezentacja firmy</p>
      <h2 className='text-3xl font-bold bg-rgb(40 40 40 / var(--tw-bg-opacity)) xl:ml-72'>ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</h2>

      <button className='mt-4 mr-4 xl:ml-72'>Samochody osobowe</button>
      <button className='mt-4 xl:ml-4'>Samochody dostawcze</button>

        
    </section>
  <ImageSwiper />
  


   
    <section class="grid grid-cols-1 text-white lg:grid-cols-2  bg-gray-700 mt-12 xl:gap-12">
      <div className=' mt-10 pb-24 xl:ml-72 ' >

      <h2 className=' text-2xl font-bold ml-4   '>Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h2>
      <p className='mt-5 ml-4  '>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
      <button className='ml-4 mt-5 border-b-2 '>Rozwiń</button>
      </div>
      
      <div className='mt-10 pb-24   xl:mr-72'>

      <h2 className=' text-2xl font-bold ml-4 '>Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.</h2>
      <p className='mt-5 ml-4  '>Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]</p>
      <button className='ml-4 mt-5 border-b-2' >Rozwiń</button>

      </div>
      
    </section> 


  

  
  <footer class="col-span-3 justify-between flex items-center justify-center p-4 mt-0.5 bg-gray-700 text-white">
    <p className=' xl:ml-72 '>Cars Spot</p>
    <p className='xl:mr-72'>Polityka prywatnosci </p>

  </footer>
</div>

    </>
  )
  
}

export default App
