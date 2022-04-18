import Link from "next/link";
import { HiBell, HiSearch, HiUserCircle } from "react-icons/hi";
import {useEffect, useState} from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <header className={`${isScrolled && 'bg-black'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div className="flex-shrink-0"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600 object-contain"
          cursor="pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>{" "}
        <ul className="hidden space-x-4 md:flex ">
          <li className="lists">Home</li>
          <li className="lists">Movies</li>
          <li className="lists">TV Shows</li>
          <li className="lists">New & Popular</li>
          <li className="lists">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <HiSearch className="hidden sm:inline h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <HiBell className="sm:inline h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <HiUserCircle className="sm:inline h-6 w-6 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
