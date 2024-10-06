import React from 'react';

const Testimonials = () => {
    const profiles = [
        {
            name: "Aryan Kumar",
            location: "Rajasthan",
            rating: "4.5",
            description: "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!.",
            picture: "https://via.placeholder.com/150", // Replace with your actual image URL
        },
        {
            name: "Sneha Singh",
            location: "Maharashtra",
            rating: "4.8",
            description: "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!.",
            picture: "https://via.placeholder.com/150",
        },
        {
            name: "Ravi Sharma",
            location: "Delhi",
            rating: "4.2",
            description: "I've tried several e-waste platforms, but Green Volt is a game-changer. The convenience, educational content, and the overall experience have been fantastic. Highly recommended!.",
            picture: "https://via.placeholder.com/150",
        },
    ];
    
    return (
        <div className="w-full h-screen mt-24 xl:mt-44 flex flex-col items-center">
            {/* TOP */}
            <div className="text-[150px] text-center font-bold mb-[-40px] block font-sf-pro bg-gradient-to-r from-[#32bf00] to-[#175900] bg-clip-text text-transparent tracking-tight">
                Testimonials
            </div>

            {/* MIDDLE CARDS */}
            <div className="flex flex-wrap justify-center my-auto">
                {profiles.map((profile, index) => (
                    <div key={index} className="shadow-md rounded-3xl border-2 border-green-900  overflow-hidden m-4 flex flex-col w-[418px] h-[255px] p-4">
                        {/* Top div with PFP, Name, and Rating */}
                        <div className="flex mb-4">
                            <div className="flex-shrink-0">
                                <img src={profile.picture} alt={profile.name} className="w-24 h-24 rounded-full" />
                            </div>
                            <div className="flex-grow flex items-center justify-between pl-4">
                                <div>
                                    <h2 className="text-xl font-bold">{profile.name}</h2>
                                    <p className="text-green-600">{profile.location}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <p className="text-lg font-semibold">Rating: {profile.rating}</p>
                                </div>
                            </div>
                        </div>
                        {/* Bottom div with description */}
                        <div className="flex-grow p-2">
                            <p className="text-gray-800 text-sm">{profile.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* BOTTOM */}
            <div className="flex justify-between px-44 items-center w-full">
                {/* LEFT */}
                <div className="">
                    <div className="bg-green-700 rounded-lg inline-block w-[80px] mr-6">&nbsp;</div>
                    <div className="bg-green-500 rounded-full inline-block w-[18px]">&nbsp;</div>
                </div>

                {/* RIGHT */}
                <div className=""><span>arrow</span> <span>arrow    </span></div>
            </div>

        </div>
    );
};

export default Testimonials;
