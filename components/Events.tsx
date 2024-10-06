import React from 'react';

const Events = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* TOP */}
      <div className="flex justify-around mb-28 w-full">
        <div className='flex justify-center items-center'>DOT</div>
        <div className="text-[150px] font-bold mb-[-40px] block font-sf-pro bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent tracking-tight">
            Events</div>
        <div className='flex justify-start items-center'>DOT</div>
      </div>

      {/* Image and within */}
      <div className="flex justify-center relative items-center h-[50%] pt-16 w-[90%] flex-grow">
        <img src="ISDLab.png" alt="Event" className="border rounded-lg object-cover w-full" />
        <div className="absolute bottom-4 right-0 mb-4 mr-4 text-white  bg-opacity-75 p-4 rounded-3xl shadow-lg transition-transform transform hover:scale-105">
            <div className="font-bold text-5xl md:text-8xl">ISD Lab Training</div>
            <div className="font-bold text-right text-4xl mt-2">Learn More <span>→</span></div>
        </div>

     </div>

    </div>
  );
}

export default Events;
