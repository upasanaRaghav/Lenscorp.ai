import React from 'react';

import Image from "next/image";
import Logo from "../images/logoLens.png";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">MakeMyWeb.</span>
              <Image
                src={Logo}
                layout="intrinsic"
                width={90}
                height={90}
                objectFit="cover"
                style={{ marginLeft:'2px' }}
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
              <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> MakeMyWeb. </a>
                </li>

                <li>
                <a style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(54deg, #0091ff 0, #9cfeff 100%)', transition: 'color 0.5s' }} className="block transition hover:text-gray-500/75" href="#">Home</a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Company </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blogs </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">  <FaMoon /> </a>
                 
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
