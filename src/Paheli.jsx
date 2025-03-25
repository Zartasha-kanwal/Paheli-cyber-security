import React from 'react'
import { useState } from "react";

export default function Paheli() {
  const [isMenuopen,setIsmenuopen]=useState(false)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = () => {
    setIsmenuopen(!isMenuopen)
  } 

 
    
  return (
   <section>
      <div className=' lg:h-[54px] pt-[13px] pb-[13px]'>
            <div className=' flex flex-row flex-wrap gap-4 justify-around'>
                <ul>
                <li className='flex flex-wrap max-sm:justify-center items-center'>
                    <i className="fa-solid fa-house text-blue-700 mt-1 mr-2"></i>
                    <p className='text-[grey] flex-none'>Welcome to Paheli.</p>
                    <strong className='text-[#dd7b30]'>Need Help?</strong>
                    <a href='#' className='text-blue-700'>Get in Touch</a>
                </li>
                    
                </ul>
                <ul className='flex flex-row flex-wrap gap-4 justify-center items-center'>
                    <li>
                    <i class="fa-solid fa-location-dot text-blue-700 mt-1 mr-2"></i>
                    <a className='text-[grey]'>521684 Majadra Street, New York.</a> 
                    </li>
                    <li>
                    <i class="fa-solid fa-envelope-open text-blue-700 mt-1 mr-2"></i>
                    <a className='text-[grey] hover:text-blue-700 cursor-pointer'>support.Paheli@gmail.com</a>
                    </li>
                    <li>
                    <i class="fa-solid fa-phone text-blue-700 mt-1 mr-2"></i>
                    <a href='tel' className='text-[grey] hover:text-blue-700 cursor-pointer'>+5-547-254-3526</a>
                    </li>
                </ul>
            </div>
      </div>
      {/* Header section */} 
      <nav className="bg-[#272B3A] h-[100px] flex items-center justify-between px-6 lg:px-[10px] xl:px-[150px] sticky top-0 z-20">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src="https://paheli-cyber.vercel.app/assets/white-logo-BJo8rE1w.png"
          alt="Logo"
          className="h-[50px]"
        />
      </div>

      {/* Center: Menu Items (Fixed Alignment) */}
      <div className="hidden lg:flex space-x-8 text-white font-semibold">

      <div className='relative group top-0'>
              <button className="hover:text-blue-700 flex items-center">
               Home▾
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <a className="block px-4 py-2 text-black hover:bg-gray-200">Home 01</a>
               <a className="block px-4 py-2 text-black hover:bg-gray-200">Home 02</a>
               <a className="block px-4 py-2 text-black hover:bg-gray-200">Home 03</a>
             </div>
            </div>
            <button className="hover:text-blue-700">About</button>
            <div className="relative top-0 group">
              <button className="hover:text-blue-700 flex items-center">
               Services▾
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <a className="block px-4 py-2 text-black hover:bg-gray-200">Services</a>
                <a className="block px-4 py-2 text-black hover:bg-gray-200">Services Details</a>
              </div>
            </div>
            <div className='relative top-0 group hover:text-blue-700 '>
              <button>Pages▾</button>
              <div className=' absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>FaQ</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Team</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Pricing</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Log In</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Register</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Search Result</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Testimonials</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Privacy policy</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Terms & conditions</a>
              </div>
            </div>
            <div className='relative top-0 group hover:text-blue-700'>
              <button>Blogs▾</button>
              <div className=' absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Blogs</a>
                <a className='text-black hover:text-blue-700 block px-4 py-2 hover:bg-gray-200'>Blog Details</a>
              </div>
            </div>
            <button className="hover:text-blue-700">Contact</button>
      </div>

      {/* Right: Icons & Buttons */}
      <div className="flex items-center space-x-4">
        {/* Search Button */}
        <button className="hidden lg:flex text-white text-xl border border-gray-400 hover:border-gray-300 h-10 w-10 lg:h-[50px] lg:w-[50px] items-center justify-center rounded-full">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

       {/* Get A Quote Button (Fixed visibility) */}
        <button className="h-[55px] w-[170px] hidden xl:block 2xl:visible rounded-[6px] text-white font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-l transition duration-800">
          Get A Quote
        </button>
      </div>

      <div className='text-5xl text-blue-700 font-bold flex items-center gap-4 lg:hidden'>
        &#x2026; 
        <button onClick={toggleMenu}> &#x2630;</button>
      </div>
    </nav>
    {isMenuopen ? (
      <div className=' w-[700px] mx-auto lg:hidden'>
          <ul className=' relative ml-[3rem] space-y-4 text-xl'>
            <li className='pt-[1rem]'>Home <a className='absolute right-3'>+</a></li>
            <li>About</li>
            <li>Services <a className='absolute right-3'>+</a></li>
            <li>Pages <a className='absolute right-3'>+</a></li>
            <li>Blog <a className='absolute right-3'>+</a></li>
            <li>Contact</li>
          </ul>
      </div> 
    ) : null }

    {/* Banner section */}
      <div className=' bg-[#2f3343] lg:py-[166px] grid lg:grid-cols-[58%_42%] grid-cols-1 max-sm:px-[2rem] sm:px-[4rem] md:px-[5rem] lg:px-[0]'>
        <div className='lg:px-[70px] pt-[4rem]'>
          <h1 className='text-6xl text-white font-bold pb-[1rem]'>Essential Policy for Cyber security Protection.</h1>
          <p className='text-[#dae0f5]  font-poppins mb-[3rem]'>In today's increasingly digital world, cybersecurity has become paramount. With the rapid expansion of online activities,</p>
          <div className=' grid lg:grid-cols-2 grid-cols-1 '>
            <button className='h-[55px] w-[191px]  rounded-[8px] p-[2px]  bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600'>
              <button className='h-[51px] w-[187px] p-4 bg-[#292d3c] rounded-[8px] flex items-center justify-center text-white font-semibold  hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 '>
               Request A Demo
              </button>
            </button>
            <div className='max-sm:mt-[1rem] sm:mt-[1rem] lg:mt-0'>
              <button className='h-[55px] w-[55px] bg-white transition group hover:bg-[#6600fc] duration-300 rounded-full '><i className="fa-solid fa-play text-blue-700 transition group-hover:text-white duration-300"></i></button> <span className='text-white font-bold cursor-pointer'>Watch Intro video</span>
            </div>
          </div>
        </div>
        <div className='pt-[4rem] lg:pr-[2rem]'>
          <img src='https://paheli-cyber.vercel.app/assets/hero-2-I-77buYX.png'/>
        </div>
      </div>
    {/* Banner section */}
    <div className='lg:pt-[100px] pt-[2rem] lg:pb-[70px] bg-[#272b3a] border  border-t-[1px] border-b-[1px] border-x-0 border-[white]'>
      <h4 className='text-[#FF8408] font-[500] text-center'>What We Do</h4>
      <h1 className='text-4xl text-center font-bold text-white mt-[1rem] mb-[1rem]'>Our Extensive Network Security Services.</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-[5rem]'>
        <div className='grid lg:grid-cols-[25%_75%]'>
          <div className='h-[75px] w-[75px] mt-[1rem] mb-2'>
            <img src='https://mediologyworld.com/static/media/icon9.e75335bac9f25b15e3ee5ed1b9b1452e.svg'/>
          </div>
          <div className='text-white text-[20px]'>
            <a className='leading-6'>Unleashing Ability through Network Management.</a> <br/>
            <a className='text-[#bbbdc2] text-[15px] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More <a className='hover:text-blue-700 hover:animate-bounce'>⬈</a>
            </a>
          </div>
        </div>
        <div className='grid lg:grid-cols-[25%_75%] grid-cols-1'>
        <div className='h-[75px] mt-[1rem] mb-2 w-[75px]'>
          <img src="https://mediologyworld.com/static/media/icon9.e75335bac9f25b15e3ee5ed1b9b1452e.svg"></img>
        </div>
          <div className='text-white text-[20px]'>
            <a className='leading-6'>Building a Robust Defense Against Cyber-Attacks</a> <br/>
            <a className='text-[#bbbdc2] text-[15px] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
            </a>
          </div>
        </div>
        <div className='grid lg:grid-cols-[25%_75%] grid-cols-1 '>
          <div className='h-[75px]  mt-[1rem] mb-2 w-[75px]'>
            <img src='https://mediologyworld.com/static/media/icon9.e75335bac9f25b15e3ee5ed1b9b1452e.svg'/>
          </div>
          <div className='text-white text-[20px]'>
            <a className='leading-6'>Harnessing the Power of Online Network Security Systems.</a> <br/>
            <a className='text-[#bbbdc2] text-[15px] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About Paheli section */}
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-[5rem] lg:h-[800px] min-h-[990px] pb-[75px] bg-[#272b3a]'>
      {/* Image col*/}
      <div className='lg:px-0 md:px-[8rem] px-[4rem]'>
        <div className='lg:relative lg:top-0 lg:h-[472px]'>
          <img src='https://paheli-cyber.vercel.app/assets/about-4-DG3PhGG_.jpg' className='bg-cover lg:w-[85%] rounded-tl-[1.5rem] rounded-br-[1.5rem]'/>
          <div className=' lg:absolute lg:top-[47%] lg:left-[30%] lg:h-[30%] pb-[4rem] lg:w-[70%]'>
            <img src=' https://paheli-cyber.vercel.app/assets/about-5-BMSxWbkU.jpg' className='bg-cover rounded-tr-[1.5rem] rounded-bl-[1.5rem] border-t-[.5rem] border-l-[.5rem] border-[#272b3a]'/>
          </div>
        </div>
      </div>
      {/* Content col*/}
      <div className=' pt-[2rem] md:px-[8rem] px-[4rem] lg:px-0'>
        <span className='text-[#FF8408] font-[500]'>About Paheli</span>
        <h1 className='text-4xl font-bold text-white mt-[1rem] mb-[1rem]'>The Comprehensive Solution for Your Needs.</h1>
        <p className='text-[#dae0f5]  font-poppins'>Organizations are now compelled to complete comprehensive cybersecurity strategies to safeguard their systems, networks, and data from the relentless onslaught of cyber threats, ensuring the protection of privacy...</p>
        <div className='flex flex-row items-center text-white mt-[1rem]'>
          <div className='lg:h-[80px] lg:w-[200px] xl:w-[120px] w-[100px] h-[80px] sm:h-[60px] max-sm:h-[45px] max-sm:w-[130px] bg-[#3c435a] rounded-full flex items-center justify-center '><i className="fa-solid fa-users text-[#FF8408] text-xl"></i></div>
          <div className='ml-[1rem]'>
            <h4 className='text-xl font-bold'>Highly Professional Members</h4>
            <p className='text-[17px] text-[#dae0f5]'>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
          </div>
        </div>
        <div className='flex flex-row items-center text-white mt-[1rem]'>
          <div className='lg:h-[80px] lg:w-[160px] xl:w-[120px] w-[100px] h-[80px] sm:h-[60px] max-sm:h-[45px] max-sm:w-[130px] bg-[#3c435a] rounded-full flex items-center justify-center '><i className="fa-solid fa-satellite-dish text-[#FF8408] text-xl"></i></div>
          <div className='ml-[1rem]'>
            <h4 className='text-xl font-bold'>Infrastructure Integration Technology</h4>
            <p className='text-[17px] text-[#dae0f5]'>Organizations are now forced to implement comprehensive cyber security strategies to protect their systems,</p>
          </div>
        </div>
        <button className="h-[55px] w-[190px] mt-[1.5rem] rounded-[6px] text-white font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-600 hover:bg-gradient-to-l transition duration-800">
          Know More About
        </button>
      </div>
    </div>


    {/*Our services*/}
    <div className='bg-[#272b3a] lg:px-[80px] px-[12px]'>
      <h4 className='text-[#FF8408] font-[500] text-center'>Our Services</h4>
      <h1 className='text-4xl font-bold text-white pt-[1rem] mb-[1rem] text-center'>From Your Cyber Security Services.</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  text-white pt-[3rem] sm:px-[6rem] max-sm:px-[3rem] lg:px-0'>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
            <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64 0H199V135H190.196V67.5C190.196 35.0833 163.917 8.80435 131.5 8.80435C99.0833 8.80435 72.8044 35.0832 72.8044 67.5V135H64V0ZM136 65L136 200L1 200L1.00001 65L9.80436 65L9.80436 132.5C9.80435 164.917 36.0833 191.196 68.5 191.196C100.917 191.196 127.196 164.917 127.196 132.5V65H136Z" fill="url(#paint0_linear_232_829)"/> <defs> 
            <linearGradient id="paint0_linear_232_829" x1="28.225" y1="19" x2="150.015" y2="173.312" gradientUnits="userSpaceOnUse"> 
            <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> </defs> 
            </svg> 
          </div>
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4]'>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
             <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_235_983)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M43.2557 174.653L43.2556 200L56.7444 200L56.7444 174.653C56.7444 164.762 64.7626 156.744 74.6535 156.744L74.7023 156.744L100 156.744L125.296 156.744L125.347 156.744C135.237 156.744 143.256 164.762 143.256 174.653L143.256 200L156.744 200L156.744 174.653C156.744 164.762 164.763 156.744 174.654 156.744L174.702 156.744L200 156.744L200 143.256L174.702 143.256L174.654 143.256C164.763 143.256 156.744 135.238 156.744 125.347L156.744 100L156.744 74.6534C156.744 64.7624 164.763 56.7442 174.654 56.7442L174.702 56.7443L200 56.7443L200 43.2557L174.702 43.2557L174.654 43.2557C164.763 43.2557 156.744 35.2375 156.744 25.3466L156.744 -6.85151e-06L143.256 -6.26191e-06L143.256 25.3466C143.256 35.2375 135.237 43.2557 125.347 43.2557L125.298 43.2557L100 43.2557L74.7022 43.2557L74.6535 43.2557C64.7626 43.2557 56.7444 35.2375 56.7444 25.3466L56.7444 -2.48038e-06L43.2556 -1.89076e-06L43.2556 25.3466C43.2556 35.2375 35.2374 43.2558 25.3465 43.2558L25.2978 43.2557L-1.96582e-06 43.2557L-1.89077e-06 56.7443L25.2964 56.7443L25.3465 56.7442C35.2374 56.7442 43.2557 64.7624 43.2557 74.6534L43.2556 100L43.2557 125.347C43.2557 135.238 35.2374 143.256 25.3465 143.256L25.2978 143.256L-1.96582e-06 143.256L-1.89077e-06 156.744L25.2964 156.744L25.3465 156.744C35.2374 156.744 43.2557 164.762 43.2557 174.653ZM143.256 100L143.256 74.6534C143.256 64.7624 135.237 56.7442 125.347 56.7442L125.296 56.7443L100 56.7443L74.7023 56.7443L74.6535 56.7442C64.7626 56.7442 56.7444 64.7624 56.7444 74.6534L56.7444 100L56.7444 125.347C56.7444 135.238 64.7626 143.256 74.6535 143.256L74.7022 143.256L100 143.256L125.298 143.256L125.347 143.256C135.237 143.256 143.256 135.238 143.256 125.347L143.256 100Z" fill="url(#paint0_linear_235_983)"/> </g> <defs> <linearGradient id="paint0_linear_235_983" x1="-4.37114e-06" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_235_983"> <rect width="200" height="200" fill="white" transform="translate(7.62939e-06 200) rotate(-90)"/> </clipPath> </defs> </svg>
          </div> 
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4]'>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
            <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_227_29)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M132.136 164.537C122.432 180.711 110.697 188 100 188C89.3026 188 77.5678 180.711 67.8635 164.537C58.3025 148.602 52 125.813 52 100C52 74.1867 58.3025 51.3982 67.8635 35.4633C77.5678 19.2895 89.3026 12 100 12C110.697 12 122.432 19.2895 132.136 35.4633C141.697 51.3982 148 74.1867 148 100C148 125.813 141.697 148.602 132.136 164.537ZM200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100ZM12 100C12 135.93 33.5326 166.83 64.3973 180.5C49.5982 162.289 40 133.013 40 100C40 66.9873 49.5982 37.7108 64.3973 19.4995C33.5326 33.1701 12 64.0704 12 100ZM188 100C188 135.93 166.467 166.83 135.603 180.5C150.402 162.289 160 133.013 160 100C160 66.9873 150.402 37.7108 135.603 19.4995C166.467 33.1701 188 64.0704 188 100ZM100 111C106.075 111 111 106.075 111 100C111 93.9249 106.075 89 100 89C93.9249 89 89 93.9249 89 100C89 106.075 93.9249 111 100 111Z" fill="url(#paint0_linear_227_29)"/> </g> <defs> <linearGradient id="paint0_linear_227_29" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#B8DBFC"/> <stop offset="1" stop-color="#F8FBFE"/> </linearGradient> <clipPath id="clip0_227_29"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          </div> 
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4]'>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
             <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_55)"> <path d="M100 200C91.6667 200 84.7222 197.309 79.1667 191.927C73.6111 186.545 70.8333 180.035 70.8333 172.396C70.8333 168.056 71.7014 164.149 73.4375 160.677C75.1736 157.205 78.2118 153.385 82.5521 149.219C87.066 145.052 90.625 141.146 93.2292 137.5C96.0069 133.681 97.3958 130.382 97.3958 127.604V118.229C93.5764 117.361 90.191 115.625 87.2396 113.021C84.4618 110.243 82.6389 106.944 81.7708 103.125H72.3958C69.4444 103.125 65.9722 104.514 61.9792 107.292C57.9861 110.069 54.1667 113.455 50.5208 117.448C46.875 121.441 43.2292 124.392 39.5833 126.302C36.1111 128.212 32.1181 129.167 27.6042 129.167C19.7917 129.167 13.1944 126.389 7.8125 120.833C2.60417 115.278 0 108.333 0 100C0 91.6667 2.60417 84.7222 7.8125 79.1667C13.1944 73.6111 19.7917 70.8333 27.6042 70.8333C34.8958 70.8333 41.1458 73.4375 46.3542 78.6458C51.5625 83.8542 56.25 88.2812 60.4167 91.9271C64.5833 95.5729 68.5764 97.3958 72.3958 97.3958H81.7708C82.6389 93.4028 84.4618 90.1041 87.2396 87.5C90.191 84.7222 93.5764 82.9861 97.3958 82.2916V72.9167C97.3958 68.4028 93.9236 62.6736 86.9792 55.7292L81.5104 50.2604C74.3924 43.1424 70.8333 35.5903 70.8333 27.6042C70.8333 19.7917 73.6111 13.2812 79.1667 8.07291C84.8958 2.69097 91.8403 0 100 0C108.333 0 115.278 2.69097 120.833 8.07291C126.389 13.4549 129.167 19.9653 129.167 27.6042C129.167 36.4583 124.826 44.7917 116.146 52.6042C107.465 60.5903 103.125 67.3611 103.125 72.9167V82.2916C107.118 82.9861 110.417 84.7222 113.021 87.5C115.799 90.1041 117.535 93.4028 118.229 97.3958H127.604C133.507 97.3958 140.278 92.9687 147.917 84.1146C155.729 75.2604 163.889 70.8333 172.396 70.8333C180.208 70.8333 186.719 73.6979 191.927 79.4271C197.309 84.9826 200 91.8403 200 100C200 108.333 197.309 115.278 191.927 120.833C186.545 126.389 180.035 129.167 172.396 129.167C165.104 129.167 158.941 126.649 153.906 121.615C148.872 116.58 144.184 112.24 139.844 108.594C135.503 104.948 131.424 103.125 127.604 103.125H118.229C116.84 111.458 111.806 116.493 103.125 118.229V127.604C103.125 132.812 107.465 139.497 116.146 147.656C124.826 155.816 129.167 164.062 129.167 172.396C129.167 180.208 126.302 186.719 120.573 191.927C115.017 197.309 108.16 200 100 200Z" fill="url(#paint0_linear_104_55)"/> </g> <defs> <linearGradient id="paint0_linear_104_55" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> <clipPath id="clip0_104_55"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          </div>
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4]'>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
            <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_116)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M103.143 0C105.352 0 107.143 1.79086 107.143 4V42.6749C107.143 47.0714 113.205 48.2497 114.852 44.1733L129.339 8.31456C130.167 6.26628 132.498 5.27669 134.547 6.10425L140.375 8.45892C142.423 9.28648 143.413 11.6178 142.585 13.6661L127.14 51.8948C125.507 55.935 130.595 59.3029 133.677 56.2217L162.831 27.0669C164.394 25.5048 166.926 25.5048 168.488 27.0669L172.933 31.5116C174.495 33.0737 174.495 35.6063 172.933 37.1684L146.752 63.3494C143.627 66.4748 147.132 71.6128 151.182 69.8432L185.11 55.0196C187.135 54.1351 189.493 55.0592 190.377 57.0835L192.894 62.8435C193.778 64.8679 192.854 67.2259 190.83 68.1104L151.734 85.1917C147.762 86.927 149.001 92.8571 153.335 92.8571H196C198.209 92.8571 200 94.648 200 96.8571V103.143C200 105.352 198.209 107.143 196 107.143H153.336C149.001 107.143 147.763 113.073 151.734 114.808L190.83 131.89C192.854 132.774 193.778 135.132 192.894 137.156L190.377 142.916C189.493 144.941 187.135 145.865 185.11 144.98L151.182 130.157C147.132 128.387 143.627 133.525 146.752 136.651L172.933 162.831C174.495 164.394 174.495 166.926 172.933 168.488L168.488 172.933C166.926 174.495 164.394 174.495 162.831 172.933L133.677 143.778C130.595 140.697 125.507 144.065 127.14 148.105L142.585 186.334C143.413 188.382 142.423 190.713 140.375 191.541L134.547 193.896C132.498 194.723 130.167 193.734 129.339 191.685L114.852 155.827C113.205 151.75 107.143 152.929 107.143 157.325V196C107.143 198.209 105.352 200 103.143 200H96.8571C94.648 200 92.8571 198.209 92.8571 196V157.325C92.8571 152.929 86.7953 151.75 85.1484 155.827L70.6605 191.685C69.8329 193.734 67.5016 194.723 65.4533 193.896L59.6253 191.541C57.577 190.713 56.5875 188.382 57.415 186.334L72.8605 148.105C74.4929 144.065 69.4046 140.697 66.3233 143.778L37.1685 172.933C35.6064 174.495 33.0737 174.495 31.5117 172.933L27.067 168.488C25.5049 166.926 25.5049 164.394 27.067 162.831L53.2479 136.65C56.3733 133.525 52.8683 128.387 48.818 130.157L14.8895 144.98C12.8652 145.865 10.5071 144.941 9.62265 142.916L7.10607 137.156C6.22161 135.132 7.14568 132.774 9.17004 131.89L48.2657 114.808C52.2374 113.073 50.9985 107.143 46.6642 107.143H4C1.79086 107.143 0 105.352 0 103.143V96.8571C0 94.648 1.79086 92.8571 4 92.8571H46.6644C50.9986 92.8571 52.2376 86.927 48.2659 85.1917L9.17001 68.1104C7.14565 67.2259 6.22158 64.8679 7.10604 62.8435L9.62262 57.0835C10.5071 55.0592 12.8651 54.1351 14.8895 55.0196L48.818 69.8432C52.8683 71.6129 56.3733 66.4748 53.2479 63.3494L27.067 37.1685C25.5049 35.6064 25.5049 33.0737 27.067 31.5116L31.5116 27.067C33.0737 25.5049 35.6064 25.5049 37.1685 27.067L66.3233 56.2218C69.4045 59.303 74.4928 55.9351 72.8605 51.8949L57.415 13.6661C56.5875 11.6178 57.5771 9.28648 59.6253 8.45892L65.4534 6.10425C67.5016 5.27669 69.833 6.26628 70.6605 8.31456L85.1484 44.1733C86.7953 48.2497 92.8571 47.0714 92.8571 42.6749V4C92.8571 1.79086 94.648 0 96.8571 0H103.143ZM100 142.857C123.669 142.857 142.857 123.669 142.857 100C142.857 76.3307 123.669 57.1429 100 57.1429C76.3307 57.1429 57.1429 76.3307 57.1429 100C57.1429 123.669 76.3307 142.857 100 142.857Z" fill="url(#paint0_linear_104_116)"/> </g> <defs> <linearGradient id="paint0_linear_104_116" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF"/> <stop offset="1" stop-color="#C0E8FF"/> </linearGradient> <clipPath id="clip0_104_116"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          </div>
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4]'>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
        <div className='p-[40px] mb-[25px] bg-[#33384b] rounded-tr-[2.5rem] rounded-bl-[2.5rem] hover:shadow-[0_0_20px_#707173] transition-shadow'>
          <div>
          <svg width="90" height="90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_227_4)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200ZM100 188C148.601 188 188 148.601 188 100C188 51.3989 148.601 12 100 12C51.3989 12 12 51.3989 12 100C12 148.601 51.3989 188 100 188ZM100 176C141.974 176 176 141.974 176 100C176 58.0264 141.974 24 100 24C58.0264 24 24 58.0264 24 100C24 141.974 58.0264 176 100 176ZM100 164C135.346 164 164 135.346 164 100C164 64.6538 135.346 36 100 36C64.6538 36 36 64.6538 36 100C36 135.346 64.6538 164 100 164ZM152 100C152 128.719 128.719 152 100 152C71.2812 152 48 128.719 48 100C48 71.2812 71.2812 48 100 48C128.719 48 152 71.2812 152 100ZM140 100C140 122.091 122.091 140 100 140C77.9086 140 60 122.091 60 100C60 77.9086 77.9086 60 100 60C122.091 60 140 77.9086 140 100Z" fill="url(#paint0_linear_227_4)"/> </g> <defs> <linearGradient id="paint0_linear_227_4" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> <clipPath id="clip0_227_4"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          </div>
          <h4 className='mt-[1rem] font-bold text-xl hover:text-blue-700 cursor-pointer'>Endpoint Security</h4>
          <p className='mt-[1rem] text-[#cdcfd4] '>This service focuses on securing end-user devices like laptops, desktops, and mobile devices from cybersecurity threats.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 hover:animate-bounce cursor-pointer'>⬈</a>
        </div>
      </div>
    </div>
   {/*our projects*/}
    <div className='bg-[#272b3a] lg:pt-[4rem] pt-[1rem] h-fit lg:px-[80px] px-[40px]'>
      <span className='text-[#FF8408] font-[500]'>Our Projects</span>
      <div className='flex flex-row justify-between flex-wrap'>
        <h1 className='text-4xl font-bold text-white pt-[1rem] mb-[1rem]'>Feat to Celebrate: Showcasing Some<br/> of Our Proud Projects.</h1>
        <button className='h-[55px] w-[191px]  rounded-[8px] p-[2px]  bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600'>
          <button className='h-[51px] w-[187px] p-4 bg-[#292d3c] rounded-[8px] flex items-center justify-center text-white font-semibold  hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 '>
            View all projects
          </button>
        </button>
      </div>
   {/*Our projects div section*/}

   <div className='w-fit grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mt-[2rem]'>
     <div className='relative overflow-hidden group rounded-tr-[2rem] rounded-bl-[2rem]'>
       <img src='https://paheli-cyber.vercel.app/assets/projects-1-_VT178Qa.jpg' class="w-full transition-transform duration-300 hover:scale-125"/>
       <div className='absolute w-full bg-white/20 flex flex-wrap -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h1 className=' font-bold text-xl ml-[.5rem] hover:text-blue-700 cursor-pointer'>Data loss prevention(DLP)</h1>
          <p className=' text-white ml-[.5rem] '>This includes implementing strategies and tools to prevent sensitive data...</p>
         <a className='text-white text-[15px] ml-[.5rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='text-white hover:text-blue-700 cursor-pointer'>⬈</a>
       </div>
      </div>
      <div className='relative overflow-hidden group rounded-tr-[2rem] rounded-bl-[2rem]'>
      <img src='https://paheli-cyber.vercel.app/assets/projects-2-CCHOISk0.jpg' class="w-full transition-transform duration-300 hover:scale-125"/>
       <div className='absolute w-full bg-white/20 flex flex-wrap -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h1 className=' font-bold text-xl ml-[.5rem] hover:text-blue-700 cursor-pointer'>Data loss prevention(DLP)</h1>
          <p className=' text-white ml-[.5rem] '>This includes implementing strategies and tools to prevent sensitive data...</p>
         <a className='text-white ml-[.5rem] text-[15px] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className=' text-white hover:text-blue-700 cursor-pointer'>⬈</a>
       </div>
      </div>
      <div className='relative overflow-hidden group rounded-tr-[2rem] rounded-bl-[2rem]'>
        <img src='https://paheli-cyber.vercel.app/assets/projects-3-CKUnqEOf.jpg' class="w-full transition-transform duration-300 hover:scale-125"/>
       <div className='absolute w-full bg-white/20 flex flex-wrap -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h1 className=' font-bold text-xl ml-[.5rem] hover:text-blue-700 cursor-pointer'>Data loss prevention(DLP)</h1>
          <p className=' text-white ml-[.5rem]'>This includes implementing strategies and tools to prevent sensitive data...</p>
         <a className='text-white text-[15px] ml-[.5rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className=' text-white hover:text-blue-700 cursor-pointer'>⬈</a>
       </div>
      </div>
      <div className='relative overflow-hidden group rounded-tr-[2rem] rounded-bl-[2rem]'>
       <img src='https://paheli-cyber.vercel.app/assets/projects-4-hxewOUUk.jpg' class="w-full transition-transform duration-300 hover:scale-125"/>
       <div className='absolute w-full bg-white/20 flex flex-wrap -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <h1 className=' font-bold ml-[.5rem] text-xl hover:text-blue-700 cursor-pointer'>Data loss prevention(DLP)</h1>
          <p className=' text-white ml-[.5rem] '>This includes implementing strategies and tools to prevent sensitive data...</p>
         <a className='text-white ml-[.5rem] text-[15px] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='text-white hover:text-blue-700 cursor-pointer'>⬈</a>
       </div>
      </div>
      <div className='relative overflow-hidden group rounded-tr-[2rem] rounded-bl-[2rem]'>
        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-s5j1s0y-x0iuAZCfJGshyOfHj1AELcznbu29kLQOcx1zfMlp' class="w-full h-full transition-transform duration-300 hover:scale-125"/>
       <div className='absolute w-full bg-white/20 flex flex-wrap -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
         <h1 className=' font-bold text-xl ml-[.5rem] hover:text-blue-700 cursor-pointer'>Data loss prevention(DLP)</h1>
         <p className=' text-white ml-[.5rem]'>This includes implementing strategies and tools to prevent sensitive data...</p>
         <a className='text-white text-[15px] ml-[.5rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='text-white hover:text-blue-700 cursor-pointer'>⬈</a>
       </div>
      </div>
      </div>
    </div>

   {/*FaQ section*/}
    <div className='max-sm:pt-[4rem] md:pt-[2rem] grid lg:grid-cols-2 grid-cols-1 gap-4 bg-[#272b3a] lg:px-[80px] px-[40px] lg:py-[50px]'>
      <div>
       <span className='text-[#FF8408] font-[500]'>FAQs</span>
       <h1 className='text-4xl font-bold text-white pt-[1rem] mb-[1rem]'>A Dedication to Supporting All Aspects of Your Life.</h1>
       <p className='text-[#cdcfd4] pt-[1rem]'>Can’t find what you are looking for?</p>
       <h4 className='text-white text-2xl font-bold pt-[1rem]'>Let's Talk: Engage with Us in a Conversation Tailored Just for You.</h4>
       <div className='flex gap-9'>
         <button className='h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] rounded-full bg-[#34384a] mt-[4rem] flex justify-center items-center'>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><g clip-path="url(#clip0_428_39)"><path d="M9.375 11.458C8.8 11.458 8.33333 10.9924 8.33333 10.4164C8.33333 9.05387 9.41458 8.45908 9.87604 8.20492C10.1781 8.03929 10.4958 7.64762 10.399 7.0945C10.3271 6.68616 9.98021 6.33929 9.57292 6.26846C9.25417 6.21012 8.94583 6.29137 8.70625 6.49346C8.46875 6.69137 8.33333 6.98304 8.33333 7.29242C8.33333 7.86846 7.86667 8.33408 7.29167 8.33408C6.71667 8.33408 6.25 7.86846 6.25 7.29242C6.25 6.36637 6.65729 5.49346 7.36667 4.89762C8.07604 4.30179 9.00937 4.04971 9.93229 4.21741C11.1917 4.43721 12.2281 5.47262 12.45 6.73512C12.6823 8.06012 12.0521 9.38408 10.8812 10.031C10.4156 10.2872 10.4156 10.3622 10.4156 10.4174C10.4156 10.9935 9.94896 11.4591 9.37396 11.4591L9.375 11.458ZM9.375 12.4997C8.65625 12.4997 8.07292 13.083 8.07292 13.8018C8.07292 14.5205 8.65625 15.1039 9.375 15.1039C10.0938 15.1039 10.6771 14.5205 10.6771 13.8018C10.6771 13.083 10.0938 12.4997 9.375 12.4997ZM20.8292 9.45804C20.8229 10.2591 20.7344 11.0393 20.5708 11.7935C21.999 12.9403 22.9167 14.6966 22.9167 16.6664V21.8747C22.9167 22.4497 22.45 22.9164 21.875 22.9164H16.6667C14.6969 22.9164 12.9406 21.9987 11.7937 20.5705C11.0396 20.733 10.2594 20.8226 9.45833 20.8289C10.901 23.3174 13.5885 24.9997 16.6667 24.9997H21.875C23.601 24.9997 25 23.6007 25 21.8747V16.6664C25 13.5882 23.3177 10.9007 20.8292 9.45804ZM18.726 10.0528C18.9187 7.33096 17.926 4.66742 16.0042 2.7445C14.0823 0.821582 11.4208 -0.174251 8.69687 0.0236655C3.98229 0.356999 0 4.77991 0 9.68304V14.931C0 17.0362 1.71042 18.7497 3.81354 18.7497H8.47708C13.8802 18.7497 18.3823 14.9299 18.726 10.0528ZM14.5312 4.21846C16.0271 5.71325 16.7979 7.78617 16.649 9.90596C16.3854 13.633 12.7198 16.6653 8.47708 16.6653H3.81354C2.85938 16.6653 2.08333 15.8872 2.08333 14.9299V9.682C2.08333 5.832 5.17917 2.36012 8.84375 2.10075C9.01771 2.08825 9.19063 2.082 9.36354 2.082C11.299 2.082 13.1594 2.8445 14.5312 4.21846Z" fill="#FF8408"></path></g></svg>
         </button>
         <button className=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="101" height="58" viewBox="0 0 101 58" fill="none"><path d="M100.761 0.479282C101.995 11.8276 98.3964 23.4807 91.2334 32.3202C86.2601 38.4516 79.4232 41.7694 72.6445 39.0847C66.6928 49.1903 55.6047 55.7086 43.4218 50.3041C41.6281 49.5069 39.9742 48.4049 38.4834 47.1035C38.297 47.2325 38.1107 47.3615 37.9243 47.4787C27.9194 53.9852 15.818 53.657 5.04436 49.6475C6.75649 51.9336 8.46862 54.2197 10.1924 56.5058C10.9611 57.5257 9.40039 58.4401 8.5618 57.7719C6.52354 56.1423 -0.651108 51.8984 0.047722 48.4986C0.711609 45.263 7.9678 42.8128 10.4021 41.4059C11.5668 40.726 12.6267 42.5431 11.4503 43.2231C10.0293 44.0437 6.36049 45.5678 4.31059 47.1739C12.7897 50.6909 22.3288 51.9219 31.1107 48.6393C32.951 47.9594 34.9659 46.9277 36.9576 45.6264C32.6365 40.9722 30.377 34.3484 32.2056 28.0998C34.1506 21.4174 43.2937 15.5791 48.5349 22.6953C54.0673 30.2217 46.4966 40.6791 40.114 45.8726C47.9409 52.3674 59.8093 50.6089 66.9374 43.7741C68.568 42.2149 69.9773 40.386 71.1537 38.393C70.1287 37.8537 69.1038 37.162 68.0905 36.3179C62.0107 31.2417 56.4433 18.0528 60.9508 10.456C65.5397 2.73019 74.2868 8.93191 76.1853 15.286C78.3283 22.496 77.0704 30.6555 73.5297 37.4786C76.3483 38.5806 79.4698 38.7213 82.5912 37.4082C87.0987 35.4973 90.6627 30.8431 93.1668 26.775C98.1052 18.7679 99.9455 9.81117 99.7708 0.479282C99.7591 -0.177231 100.703 -0.142059 100.761 0.479282ZM48.0224 27.6895C46.7762 19.9285 38.5882 20.2802 35.2804 25.8841C34.0225 28.0177 33.4867 30.679 33.5683 33.1292C33.708 37.3731 35.6997 41.4411 38.5998 44.4775C44.2021 40.3508 49.059 34.1726 48.0224 27.6895ZM74.5081 16.7163C74.2285 15.2978 73.7277 13.9613 73.0056 12.6951C70.5597 8.52159 67.0772 8.09954 62.5581 11.4173C61.3584 13.1758 61.3235 15.8839 61.4516 17.8886C61.7195 22.3905 63.3967 27.3729 65.8659 31.0893C67.4615 33.4926 69.6046 35.5208 72.0389 36.8221C75.1487 30.6672 76.162 23.2228 74.5081 16.7163Z" fill="url(#paint0_linear_431_44)"></path><defs><linearGradient id="paint0_linear_431_44" x1="101" y1="29" x2="3.45822e-07" y2="29" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8408"></stop><stop offset="0.499797" stop-color="#FA3988"></stop><stop offset="1" stop-color="#6600FC"></stop></linearGradient></defs></svg>
         </button>
        </div>
      </div>
      <div className='mt-[1rem] text-white cursor-pointer'>
        <div className='border-t-[1px] border-[#5c5e60] py-4' onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}>
          <div className='flex justify-between'>
            <h4 className='font-bold'> What should I study for cybersecurity?</h4> <span className={`font-bold text-xl ${openIndex === 1 ? "rotate-45 text-[#FF8408]" : ""}`}>+</span>
          </div>
          <p className={`text-[#bbbdc2] scale-y-0 h-0 origin-top ${openIndex === 1 ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"}`}>These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.</p>
        </div>
        <div className='border-t-[1px] border-[#5c5e60] py-4' onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}>
          <div className='flex justify-between'>
            <h4 className='font-bold'> How do I choose a cybersecurity career?</h4> <span className={`font-bold text-xl ${openIndex === 2 ? "rotate-45 text-[#FF8408]" : ""}`}>+</span>
          </div>
          <p className={`text-[#bbbdc2] scale-y-0 h-0 origin-top ${openIndex === 2 ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"}`}>These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.</p>
        </div>
        <div className='border-t-[1px] border-[#5c5e60] py-4' onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}>
          <div className='flex justify-between'>
            <h4 className='font-bold'>Can I learn cyber security in 6 months?</h4> <span className={`font-bold text-xl ${openIndex === 3 ? "rotate-45 text-[#FF8408]" : ""}`}>+</span>
          </div>
          <p className={`text-[#bbbdc2] scale-y-0 h-0 origin-top ${openIndex === 3 ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"}`}>These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.</p>
        </div>
        <div className='border-t-[1px] border-[#5c5e60] py-4' onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}>
          <div className='flex justify-between'>
            <h4 className='font-bold'>What is the highest paying job in cyber security?</h4> <span className={`font-bold text-xl ${openIndex === 4 ? "rotate-45 text-[#FF8408]" : ""}`}>+</span>
          </div>
          <p className={`text-[#bbbdc2] scale-y-0 h-0 origin-top ${openIndex === 4 ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"}`}>These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] border-[#5c5e60] py-4' onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}>
          <div className='flex justify-between'>
            <h4 className='font-bold'>What is the lowest salary in cyber security?</h4> <span className={`font-bold text-xl ${openIndex === 5 ? "rotate-45 text-[#FF8408]" : ""}`}>+</span>
          </div>
          <p className={`text-[#bbbdc2] scale-y-0 h-0 origin-top ${openIndex === 5 ? "scale-y-100 opacity-100 h-auto" : "scale-y-0 opacity-0 h-0"}`}>These services collectively help organizations establish a comprehensive cybersecurity framework and protect their digital assets from various cyber threats. This service focuses on securing end-user devices like.</p>
        </div>
      </div>
    </div>
   
   {/*Our Team section*/}
   <div className='bg-[#272b3a] pt-[6rem] pb-[2rem]'>
      <h4 className='text-[#FF8408] font-[500] text-center'>Our Team</h4>
      <h1 className='text-4xl font-bold text-white pt-[1rem] mb-[1rem] text-center'>Meet Our Awesome Team Members.</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:px-[80px] px-[80px] pt-[3rem]'>
        <div className='relative group'>
          <img src='https://paheli-cyber.vercel.app/assets/team-1-Diku3_rj.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
           <div className='flex flex-col gap-8 text-xl absolute top-[2rem] left-[1rem] scale-0 group-hover:scale-100'>
             <i className="fa-brands fa-facebook-f hover:text-pink-500"></i>
             <i className="fa-brands fa-x-twitter hover:text-pink-500"></i>
             <i className="fa-brands fa-instagram hover:text-pink-500"></i>
             <i className="fa-brands fa-pinterest-p hover:text-pink-500"></i>
           </div>
          <h1 className='font-bold text-2xl text-white mt-[1rem] hover:text-blue-700 cursor-pointer'>Bonnie Acosta</h1>
          <h4 className='text-[#cdcfd4] mt-[.25rem]'>Lead Developer</h4>
        </div>
        <div className='relative group'>
          <img src='https://paheli-cyber.vercel.app/assets/team-2-Ds6SBf2h.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          <div className='flex flex-col gap-8 text-xl absolute top-[2rem] left-[1rem] scale-0 group-hover:scale-100'>
            <i className="fa-brands fa-facebook-f hover:text-pink-500"></i>
            <i className="fa-brands fa-x-twitter hover:text-pink-500"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500"></i>
            <i className="fa-brands fa-pinterest-p hover:text-pink-500"></i>
          </div>
          <h1 className='font-bold text-2xl text-white mt-[1rem] hover:text-blue-700 cursor-pointer'>Warren Riner</h1>
          <h4 className='text-[#cdcfd4] mt-[.25rem]'>CEO & Founder</h4>
        </div>
        <div className='relative group'>
          <img src='https://paheli-cyber.vercel.app/assets/team-3-LGiUP5b2.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          <div className='flex flex-col gap-8 text-xl absolute top-[2rem] left-[1rem] scale-0 group-hover:scale-100'>
            <i className="fa-brands fa-facebook-f hover:text-pink-500"></i>
           <i className="fa-brands fa-x-twitter hover:text-pink-500"></i>
           <i className="fa-brands fa-instagram hover:text-pink-500"></i>
           <i className="fa-brands fa-pinterest-p hover:text-pink-500"></i>
          </div>
          <h1 className='font-bold text-2xl text-white mt-[1rem] hover:text-blue-700 cursor-pointer'>Helen Kurt</h1>
          <h4 className='text-[#cdcfd4] mt-[.25rem]'>Developer</h4>
        </div>
        <div className='relative group'>
          <img src='https://paheli-cyber.vercel.app/assets/team-4-K43EjdmQ.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          <div className='flex flex-col gap-8 text-xl absolute top-[2rem] left-[1rem] scale-0 group-hover:scale-100'>
            <i className="fa-brands fa-facebook-f hover:text-pink-500"></i>
            <i className="fa-brands fa-x-twitter hover:text-pink-500"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500"></i>
            <i className="fa-brands fa-pinterest-p hover:text-pink-500"></i>
          </div>
          <h1 className='font-bold text-2xl text-white mt-[1rem] hover:text-blue-700 cursor-pointer'>Wanda Wagner</h1>
          <h4 className='text-[#cdcfd4] mt-[.25rem]'>CO-Founder</h4>
        </div>
      </div>
   </div>
   

   {/*Our Blog section*/}
   <div className='bg-[#272b3a] pt-[6rem] lg:px-[80px] px-[40px] pb-[4rem]'>
      <h4 className='text-[#FF8408] font-[500] text-center'>Our Blog</h4>
      <h1 className='text-4xl font-bold text-white pt-[1rem] mb-[1rem] text-center'>Latest Blog & Articles</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-[2rem]'>
        <div>
          <div className='p-[15px] border border-[#4d4f51] rounded-tr-[2rem] rounded-bl-[2rem]'>
            <img src='https://paheli-cyber.vercel.app/assets/blog-7-Bwe7ntti.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          </div>
          <div className='flex flex-row justify-between items-center text-white px-[1rem] pt-[1rem]'>
            <div>
             <i className="fa-solid fa-user text-[#FF8408]"></i>
             <span className='ml-[4px]'>By Admin</span>
            </div>
            <div>
             <i className="fa-solid fa-calendar-days text-[#FF8408]"></i>
             <span className='ml-[4px]'>November 6, 2024</span>
            </div>
          </div>
          <p className='mt-[1rem] text-white text-xl font-bold ml-[1rem]'>Navigating the Impact of Blockchain Technology in the Logistics Sector.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] ml-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 text-white hover:animate-bounce cursor-pointer'>⬈</a>
        </div>

        <div>
          <div className='p-[15px] border border-[#4d4f51] rounded-tr-[2rem] rounded-bl-[2rem]'>
            <img src='https://paheli-cyber.vercel.app/assets/blog-8-BxzV8nRw.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          </div>
          <div className='flex flex-row justify-between items-center text-white px-[1rem] pt-[1rem]'>
            <div>
             <i className="fa-solid fa-user text-[#FF8408]"></i>
             <span className='ml-[4px]'>By Admin</span>
            </div>
            <div>
             <i className="fa-solid fa-calendar-days text-[#FF8408]"></i>
             <span className='ml-[4px]'>November 6, 2024</span>
            </div>
          </div>
          <p className='mt-[1rem] text-white text-xl font-bold ml-[1rem]'>Ensuring Data Security Amid Office Transitions The Emerging Trend of 2024.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] ml-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 text-white hover:animate-bounce cursor-pointer'>⬈</a>
        </div>

        <div>
          <div className='p-[15px] border border-[#4d4f51] rounded-tr-[2rem] rounded-bl-[2rem]'>
            <img src='https://paheli-cyber.vercel.app/assets/blog-9-ChdVjA7S.jpg' className='rounded-tr-[2rem] rounded-bl-[2rem]'/>
          </div>
          <div className='flex flex-row justify-between items-center text-white px-[1rem] pt-[1rem]'>
            <div>
             <i className="fa-solid fa-user text-[#FF8408]"></i>
             <span className='ml-[4px]'>By Admin</span>
            </div>
            <div>
             <i className="fa-solid fa-calendar-days text-[#FF8408]"></i>
             <span className='ml-[4px]'>November 6, 2024</span>
            </div>
          </div>
          <p className='mt-[1rem] text-white text-xl font-bold ml-[1rem]'>Securing the Future: How AI Redefines Customer Workload Protection.</p>
          <a className='text-[#bbbdc2] text-[15px] mt-[1rem] ml-[1rem] cursor-pointer hover:text-blue-700 hover:underline decoration-blue-700'>Read More</a> <a className='hover:text-blue-700 text-white hover:animate-bounce cursor-pointer'>⬈</a>
       </div>
      </div>
   </div>


   {/*Logo carousel section*/}
   <div className="overflow-hidden w-full bg-[#272b3a] pt-[4rem] pb-[4rem] border border-t-[#625d5d] border-b-[#625d5d] border-l-0" >
      <div className="flex w-max animate-scroll space-x-4">
        {/* Images (Duplicate for seamless loop) */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMHcSXBPEx4BhAcpGQdgaiIH1frHMwzMBdA&s" alt="img1" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://i.postimg.cc/HLvfswW7/DALL-E-2025-03-25-12-32-48-A-modern-tech-inspired-event-logo-with-the-word-Event-written-on-it.webp" alt="img2" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://www.defense.com/assets/blog/heros/managed-vs-unmanaged-siem-68c9af61af9af9760afae41b07de758d8c16cf6f35ab3398e591837ef639fefc.jpg" alt="img4" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://www.cdnlogo.com/logos/t/51/trust.svg" alt="img4" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://cybrotech.us/wp-content/uploads/2023/12/VAPT.png" alt="img5" className="w-40 h-20 object-cover rounded-lg" />
        
        {/* Duplicate images for infinite loop */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMHcSXBPEx4BhAcpGQdgaiIH1frHMwzMBdA&s" alt="img1" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://i.postimg.cc/HLvfswW7/DALL-E-2025-03-25-12-32-48-A-modern-tech-inspired-event-logo-with-the-word-Event-written-on-it.webp" alt="img2" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://www.defense.com/assets/blog/heros/managed-vs-unmanaged-siem-68c9af61af9af9760afae41b07de758d8c16cf6f35ab3398e591837ef639fefc.jpg" alt="img3" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://www.cdnlogo.com/logos/t/51/trust.svg" alt="img4" className="w-40 h-20 object-cover rounded-lg" />
        <img src="https://cybrotech.us/wp-content/uploads/2023/12/VAPT.png" alt="img5" className="w-40 h-20 object-cover rounded-lg" />
      </div>

      {/* Tailwind animation styles */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>

   
   {/*Footer section*/}
   <footer className='bg-[#272b3a]'>
    <div className='pt-[4rem] lg:px-[80px] px-[40px]'>
      <div className='grid lg:grid-cols-[30%_20%_50%] md:grid-cols-2 grid-cols-1  border-b-[#625d5d]'>
        <div className='flex gap-3'>
          <div className='h-[50px] w-[50px] bg-white rounded-full group flex items-center justify-center'>
            <i className="fa-solid fa-phone text-blue-700 group-hover:text-black"></i>
          </div>
          <div>
            <h1 className='text-white text-xl font-bold'>Give Us A Call</h1>
            <h1 className='text-white text-xl font-bold'>+319-490-4589</h1>
          </div>
        </div>
        <div className='flex text-white gap-8 gap-y-5 justify-center items-center text-xl lg:border md:border-0 lg:border-y-0 lg:border-x-[#625d5d] max-sm:mt-[3rem] md:mt-[2rem] lg:mt-0'>
         <i className="fa-brands fa-facebook-f"></i>
         <i className="fa-brands fa-x-twitter"></i>
         <i className="fa-brands fa-instagram"></i>
         <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <div className='flex justify-center max-sm:flex-wrap items-center gap-4 max-sm:mt-[3rem] md:mt-[2rem] lg:mt-0'>
          <h1 className='text-white text-xl font-bold'>Join Our<br/> Newsletter</h1>
          <div className='bg-[#3e445b] flex flex-row  h-[65px] justify-center items-center px-[1rem] rounded-xl'>
           <input type='text' placeholder='Enter Your Email' className='outline-0 bg-[#3e445b] text-[#bbbdc2]'/>
          </div>
          <button className="h-[65px] min-w-[170px] rounded-[6px] text-white font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-l transition duration-800">
           Submit Now
          </button>
        </div>
      </div>

      <div className='grid lg:grid-cols-[31%_23%_23%_23%] md:grid-cols-2 grid-cols-1 gap-4 py-[4rem]'>
        <div>
          <img src='https://paheli-cyber.vercel.app/assets/white-logo-BJo8rE1w.png'/>
          <p className='text-[#bbbdc2] mt-[2rem]'>Cybersecurity is crucial in today's digital age, where many individuals and organizations store a significant amount of sensitive data on computers...</p>
        </div>
        <div className='text-white flex flex-col gap-y-2'>
           <h4 className='text-xl font-bold mb-[1rem]'>Contact Us</h4>
           <h3 className='flex'><span className='font-bold'>Address:</span><p className='text-[#bbbdc2]'>521684 Majadra Street Victoria Road, New York.</p></h3>
           <h3 className='flex'><span className='font-bold'>Email:</span><p className='text-[#bbbdc2] hover:text-white hover:underline hover:font-bold cursor-pointer'>Paheli@gmail.com</p></h3>
           <h3 className='flex'><span className='font-bold'>Phone:</span><p className='text-[#bbbdc2] hover:text-white hover:underline hover:font-bold cursor-pointer'>+5-547-254-3526</p></h3>
        </div>
        <div>
          <h4 className=' text-white text-xl font-bold mb-[1rem]'>Quick Links</h4>
          <ul className='text-[#bbbdc2]'>
            <li className='hover:text-white hover:underline'>About</li>
            <li className='hover:text-white hover:underline'>Services</li>
            <li className='hover:text-white hover:underline'>Testimonial</li>
            <li className='hover:text-white hover:underline'>Our Blog</li>
          </ul>
        </div>

        <div>
          <h4 className=' text-white text-xl font-bold mb-[1rem]'>Resourses</h4>
          <ul className='text-[#bbbdc2]'>
            <li className='hover:text-white hover:underline'>FAQs</li>
            <li className='hover:text-white hover:underline'>Privacy Policy</li>
            <li className='hover:text-white hover:underline'>Terms & Conditions</li>
            <li className='hover:text-white hover:underline'>contact Us</li>
          </ul>
        </div>

      </div>

      <div className='py-6 border border-x-0 border-t-[#625d5d] text-[#bbbdc2] font-bold text-center'>
        <p>Copyright @ 2024 <span className='text-[#FF8408]'>Paheli</span>, All Rights Reserved</p>
      </div>


    </div>
   </footer>
   

  </section>
)}
