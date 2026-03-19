import React from 'react';
import Image from 'next/image';
import Logo from '../src/svg/PIXEL.svg'
import Link from 'next/link';

export default function Header() {
  return(
    <header className='w-full flex justify-between h-fit px-25 py-10 items-center'>
      <Link href="/">
        <Image
          className='w-[13.5625rem] h-[55px]'
          src={Logo}
          alt="Logotipe"
          width={217}
          height={55}
        />
      </Link>

      <nav className='flex w-fit h-fit gap-10'>
        <a href="#main">Главная</a>
        <a href="#aboutUs">О нас</a>
        <a href="#employers">Работодатели</a>
      </nav>
      <button className='py-2.5 px-8.75 flex gap-1.5 border-3 border-black rounded-[3.0625rem] items-center font-[Russo One] text-3xl duration-150 transition-all ease-in hover:bg-black cursor-pointer hover:text-white active:scale-99 active:duration-75 active:shadow-xl'>
        Узнать больше
        <svg className='w-8 h-8' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3235 9.3371L3.7954 31.1888L-0.00071264 27.449L21.5274 5.59721L0.996209 5.17645L0.858642 0.000936222L30.1888 0.602028L31.2275 29.92L26.0506 29.8597L25.3235 9.3371Z" fill="#DFA8FF"/>
        </svg>
      </button>
    </header>
  );
}