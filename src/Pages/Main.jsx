import React from 'react';
import Services from '../Components/Services';
import Testemonils from '../Components/Testemonils';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../Components/WhyChooseUs';

function Main() {
  return (
    <div className='gap-30'>
      <header className='relative w-full h-[40.90rem] flex flex-col md:flex-col lg:flex-row'>
        <div className='absolute inset-0 bg-Landing bg-cover bg-center'></div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='flex flex-col relative justify-center items-center sm:items-start px-6 sm:px-12 md:px-24 lg:px-36 h-full text-white'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-center sm:text-left animate-bounce'>
            Friendly Guidance, <span className='text-lime-500'>Professional Support</span>
          </h1>
        </div>
        <form className='flex flex-col relative items-center justify-center w-full md:w-auto bg-gray-800 bg-opacity-70 rounded-lg p-8'>
          <input className='w-80 h-12 p-3 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl' type='text' placeholder='Enter your email' />
          <select className='w-80 h-12 p-2 border border-gray-400 rounded-md mb-4 text-lg sm:text-xl'>
            <option value='0'>Select your field</option>
            <option value='software/hardware'>Software/Hardware</option>
            <option value='professional-writing'>Professional Writing</option>
            <option value='academic-writing'>Academic Writing</option>
          </select>
          <button className='bg-lime-500 text-white px-6 py-3 rounded-md text-lg sm:text-xl font-semibold hover:bg-lime-400'>
            <Link to="/submitform">Get a Quote</Link>
          </button>
        </form>
      </header>
      <WhyChooseUs />
      <Services />
      <Testemonils />
    </div>
  );
}

export default Main;
