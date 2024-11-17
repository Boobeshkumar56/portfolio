import React, { useState } from 'react'
const NavItems = () => {
  const navLinks = ["Home", "Projects", "Contract", "About"];

  return (
    <ul className="nav-ul">
      {navLinks.map((link, index) => (
        <li key={index} className="nav-li">
          <a className="nav-li_a" href={link}>{link}</a>
        </li>
      ))}
    </ul>
  );
};
const nav = () => {
    const [isopen,setisopen]=useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto '>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                Boobesh Kumar</a>
                <button onClick={ ()=>setisopen(!isopen)} className='text-neutral-400 focus:outline-none sm:hidden hover:text-white  flex' aria-label="Toggle-menu">
                    <img src={isopen ? "assets/close.svg":"/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                </button>
                <nav className='sm:flex hidden'>
                <NavItems/>
                </nav>

            </div>
        </div>
        <div className={`nav-sidebar ${isopen ? 'max-h-screen':'max-h-0'}`}>
            <nav className='p-5'>
                <NavItems/>
            </nav>
        </div>
    </header>
  )
}

export default nav