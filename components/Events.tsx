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
      <div className="flex justify-center relative items-center h-[200px] pt-16  w-[1500px] flex-grow">
        <img src="ISDLab.png" alt="Event" className="border rounded-lg object-cover w-full" />
        <div className="absolute bottom-0 right-0 mb-4 mr-4 text-white bg-black bg-opacity-50 p-2 rounded-3xl ">
            <div className="font-bold">ISD Lab Training</div>
            <div className="">Learn More <span>→</span></div>
        </div>
     </div>

    </div>
  );
}

export default Events;
