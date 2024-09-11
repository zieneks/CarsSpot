import { useState } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      
      <button
        onClick={toggleSidebar}
        className="fixed top-2 right-4 z-50 bg-blue-700 text-white p-2 rounded-md md:hidden"
      >
        {isOpen ? 'Zamknij' : 'Menu'}
      </button>

      
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="mt-8 ">
          <ul>
            <img  className=" ml-4 mb-4 "src='/images/CTA.png'></img>
            <li className="p-3 ml-2  hover:bg-gray-700 cursor-pointer">Galeria zdjęć</li>
            <li className="p-3 ml-2 mb-3 hover:bg-gray-700 cursor-pointer">FAQ</li>
            <button className='bg-blue-700  rounded-lg  ml-4   px-2 py-2 text-white '>Zadzowon do nas</button>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
