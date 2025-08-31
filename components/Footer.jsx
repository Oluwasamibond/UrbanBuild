import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo & text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image
                src="/assets/logo.svg"
                width={230}
                height={48}
                alt="logo"
              />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              dolor impedit rem.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-[#d7d7d7]">
            <h4 className="text-2xl font-semibold text-white mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-[#ffca3b] text-xl" />
                <p>1250 Brickstone Ave, US</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-[#ffca3b] text-xl" />
                <p>email@urbanbuild.com</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-[#ffca3b] text-xl" />
                <p>+1 (816) 000-0000</p>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div className="flex-1 text-[#d7d7d7]">
            <h4 className="text-2xl font-semibold text-white mb-10">
              Newsletter
            </h4>
            <p className="mb-9">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              similique soluta delectu.
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <Input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button
                className="bg-[#ffca3b] w-12 h-12 absolute right-2 top-2 bottom-2
              text-primary text-xl flex items-center justify-center"
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div
        className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex
      flex-col gap-6 xl:flex-row items-center justify-between"
      >
        <p className="text-[#d7d7d7]">
          Copyright &copy; 2025 UrbanBuild. All rights reserved
        </p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-[#ffca3b] transition-all"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
