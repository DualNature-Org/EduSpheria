import React from 'react';
import data from "../Assets/whyChooseUs.json";

function WhyChooseUs() {
  return (
    <div className='flex justify-center items-center gap flex-wrap px-4 sm:px-0 bg-gray-100'>
      <h1 className='text-4xl px-8 py-8 text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold flex flex-row flex-wrap w-full'>
        Why choose <span className='ml-5 text-lime-500'>us?</span>
      </h1>
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full p-5 ${item.bgColor} m-10 sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 border border-gray-300 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2`}
        >
          <div className='flex justify-center items-center'>
            <img
              src={require(`../Assets/Images/${item.image}`)}
              alt={item.title}
              className='w-[15rem] h-[15rem] m-3 rounded-full'
            />
          </div>
          <h2 className='text-xl sm:text-2xl font-semibold mb-2'>{item.title}</h2>
          <p className='text-sm sm:text-base'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
