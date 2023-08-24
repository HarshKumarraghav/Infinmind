import Link from "next/link";
import { BiLocationPlus } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/10 mt-10 px-4 md:px-0">
        <div className=" px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl  flex gap-x-2   mb-2  font-main font-bold items-center cursor-pointer">
                <img
                  src="/logo/Logo.png"
                  className="w-10 h-10  rounded-full"
                  alt=""
                />
                InfiniMind.ai
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                InfiniMind.AI: The ultimate destination where human creativity
                intersects with the power of artificial intelligence. Unleash
                the full potential of your imagination and bring your ideas to
                life in ways you've never imagined.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul className="text-sm md:text-base leading-relaxed">
                <li className="flex items-center mb-2">
                  <BsTelephoneFill className="mr-2" size={20} />
                  +91 7078218794
                </li>
                <li className="flex items-center mb-2">
                  <HiMail className="mr-2" size={20} />
                  Info@InfiniMind.ai
                </li>
                <li className="flex items-center">
                  <BiLocationPlus className="mr-2" size={20} />
                  Gautam Buddha Nagar, Uttar Pradesh, India
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <div className="flex gap-4">
                <Link
                  className="cursor-pointer"
                  href="https://twitter.com/_Harsh_raghav_"
                  target="_blank"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://harshraghav.tech"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaGlobe size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 flex justify-center items-center bg-primary/20 shadow-light-shadow text-center">
        <p className="text-sm ">
          &copy; 2023 InfiniMind.ai. All Rights Reserved by InfiniMind.ai
          Software Pvt Ltd
        </p>
      </div>
    </>
  );
};

export default Footer;
