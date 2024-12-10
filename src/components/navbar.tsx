import { useState } from "react";
function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-[7px] bg-gradient-to-r from-[#011F29] to-[#143E14] shadow-md">
                <nav className="flex justify-between items-center my-[7px] mx-20 h-10 pb-13 sm:mx-5 md:mx-5 lg:mx-20">
                    <div className="flex justify-center items-center w-[20%] sm:w-full sm:justify-between md:w-full lg:w-[20%]">
                    {/* flex justify-between items-center w-full md:w-full lg:w-[20%] lg:justify-between */}
                        <a href="/"><img className="w-[10%] sm:w-[45%] md:w-[15%] lg:w-[60%]" src="/icons/Green badge logo.webp" alt="" /></a>
                        <div className="w-0 sm:w-[70%] md:w-8 lg:w-0 flex justify-end lg:hidden" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer w-[0%] sm:w-[40%] md:w-[80%] lg:w-[0%]" src="/icons/menu.png" alt=""/> : <img className="cursor-pointer w-[0%] sm:w-[40%] md:w-[70%] lg:w-[0%]" src="/src/assets/icons/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-between items-center text-[14px] space-x-6 sm:hidden md:hidden lg:flex">
                        <li className="text-center"><a className='hover:text-[#A7C712] pr-[10px]' href="/">Home</a></li>
                        <li className="text-center"><a className='hover:text-[#A7C712]  pr-3' href="#about">About us</a></li>
                        <li className="text-center"><a className='hover:text-[#A7C712] pr-3' href="#contact">Contact us</a></li>
                        <li className="text-center"><a className='hover:text-[#A7C712] pr-3' href="#faq">Support & FAQS</a></li>
                    </ul>
                    <div className="text-[14px] flex sm:hidden md:hidden lg:flex">
                        <a className="text-[14px] mr-[20px]" href="/login" rel="noopener noreferrer"><button  className="px-[30px] py-[5px] border border-[#03FF95] text-[#008890] bg-[#FFFFFF] rounded-md hover:bg-gray-300" type="button">Log in</button></a>
                        <a href="/register" rel="noopener noreferrer"><button  className="px-[30px] py-[5px] border border-[#008890] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-md" type="button">Register</button></a>
                    </div>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[68px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-1000  bg-gradient-to-r from-[#011F29] to-[#143E14] text-white sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-[50px]">
                            <li className=""><a className='hover:text-[#A7C712] pr-[10px]' onClick={showNav} href="">Home</a></li>
                            <li className=""><a className='hover:text-[#A7C712]  pr-3' onClick={showNav} href="#about">About us</a></li>
                            <li className=""><a className='hover:text-[#A7C712] pr-3' onClick={showNav} href="#contact">Contact us</a></li>
                            <li className=""><a className='hover:text-[#A7C712] pr-3' onClick={showNav} href="#faq">Support & FAQS</a></li>
                        </ul>
                        <div className="text-[14px] sm:pl-[30px] md:pl-[30px]">
                            <a className="text-[14px] mr-[20px]" href="/login" rel="noopener noreferrer" onClick={showNav}><button  className="px-[30px] py-[5px] border border-[#03FF95] text-[#008890] bg-[#FFFFFF] rounded-md hover:bg-gray-300 sm:mb-[10px] md:mb-[10px]" type="button">Log in</button></a>
                            <a href="/register" rel="noopener noreferrer" onClick={showNav}><button  className="px-[30px] py-[5px] border border-[#008890] text-white bg-gradient-to-r from-[#03FF95] to-[#008890] rounded-md" type="button">Register</button></a>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar