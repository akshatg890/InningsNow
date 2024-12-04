import React from 'react'

function Footer() {
    return (
        <div 
            className="bg-gray-800 text-white py-4 w-full h-max absolute bottom-0 left-0 right-0"
        >
            {/* Top section starts here */}
            <div className="bg-white text-center py-2 font-heading">

                <p className="text-custom-brown text-xl ">For latest news and updates please</p>

                <p className="text-green-400 text-3xl font-bold">follow us on</p>

                {/* social media section starts here */}
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="text-blue-600  text-3xl"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-pink-600 text-3xl"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-black text-3xl"><i className="fab fa-xing"></i></a>
                    <a href="#" className="text-red-600 text-3xl"><i className="fab fa-youtube"></i></a>
                </div>
                {/* social media section ends here */}
            </div>
            {/* Top section ends here */}

            {/* Lower link section starts here */}
            <div 
                className="text-center mt-4 bg-gradient-to-bl from-green-200 to-green-400 text-custom-brown cursor-pointer"
            >
                <ul 
                    className="flex flex-col sm:flex-row items-center font-content space-x-4 text-sm py-2"
                >
                    <li className='hover:underline  w-full'>ABOUT</li>
                    <li className='hover:underline  w-full'>PRIVACY POLICY</li>
                    <li className='hover:underline  w-full'>TERMS OF SERVICE</li>
                    <li className='hover:underline  w-full'>ICC POLICY</li>
                </ul>
                <hr className="border-gray-600 my-4" />
                <p className="text-sm font-content text-black pb-2">© CricHeroes Pvt Ltd. All rights reserved. CIN U72901GJ2016PTC092938</p>
            </div>
            {/* Lower link section ends here */}

        </div>
    );
}

export default Footer