// components/Menu.js

const Navbar = () => {
    return (
        <nav>
            <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-6">
                
                <div className="flex-shrink-0 pl-10">
                    SRM LOGO
                </div>

                {/* Menu */}
                <div className="flex-grow flex justify-center">
                    <ul className="flex space-x-4 text-[21px]">
                        <li>
                            <a href="#home" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="#isd-lab" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                ISD&nbsp;Lab
                            </a>
                        </li>
                        <li>
                            <a href="#drones" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                Drones
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#worklets" className="text-white hover:bg-gray-700 px-7 py-2 rounded">
                                Worklets
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-shrink-0">
                    CTECH LOGO
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
