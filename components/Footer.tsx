'use client';
import { Open_Sans } from 'next/font/google';
import { IoMdMail } from "react-icons/io";
import { FiInstagram } from 'react-icons/fi';
import { FaYoutube } from "react-icons/fa";
import styles from '../page.module.css';
import ChangingHello from './ChangingHello';
import logo from "@/assets/logo.png";

const openSans = Open_Sans({ subsets: ['latin'] });

const Sample = () => {
  return (
    <>
      <footer className={`bg-black ${openSans.className}`}>
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700">
          <div className="flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0">
            <div>
              <img 
                src={logo.src} 
                style={{ height: '120px', width: 'auto' }} 
                alt="Logo" 
              />
            </div>

            <p className="text-gray-400 text-center">
              A way to share stories anonymously.
            </p>
            <div className="flex mt-4 space-x-4 items-baseline justify-center md:items-start md:justify-start">
              <a href="https://www.instagram.com/raw_shots29/" target="_blank">
                <FiInstagram className="dark:text-white text-2xl " />
              </a>

              <a href="" target="_blank">
                <FaYoutube className="dark:text-white text-2xl" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com"
                target="_blank"
              >
                <IoMdMail className="dark:text-white text-2xl " />
              </a>
            </div>
            <a
              href="/docs/privacy-policy"
              className="text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="/docs/terms"
              className="text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          <ChangingHello />
        </div>

        <div className="pb-8">
          <p className="text-sm dark:text-neutral-400 text-center">
            &copy; {new Date().getFullYear()} Weekend Knocks | All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Sample;
