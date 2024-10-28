import React from "react";
import king from "./king.png";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaListUl,
  FaUser,
  FaEllipsisH,
  FaFeather,
  FaChevronDown,
} from "react-icons/fa";
export default function Left() {
  return (
    <div className="xl:w-1/5 xl:pr-1 w-20 h-full flex flex-col items-start ">
      {/* logo */}
      <a href="www" className="link-active my-2">
        <FaTwitter className="text-3xl text-blue-500" />
      </a>

      {/* nav */}
      <nav className="mt-5">
        <a href="www" className="link-active mb-8">
          <FaHome className="font-bold text-xl" />
          <span className="icon">Home</span>
        </a>

        <a href="www" className="link">
          <FaHashtag className="font-bold text-xl" />
          <span className="icon">Explore</span>
        </a>
        <a href="www" className="link">
          <FaBell className="font-bold text-xl" />
          <span className="icon">Notification</span>
        </a>
        <a href="www" className="link">
          <FaEnvelope className="font-bold text-xl" />
          <span className="icon">Messages</span>
        </a>
        <a href="www" className="link">
          <FaBookmark className="font-bold text-xl" />
          <span className="icon">BookMarks</span>
        </a>
        <a href="www" className="link">
          <FaListUl className="font-bold text-xl" />
          <span className="icon">Lists</span>
        </a>
        <a href="www" className="link">
          <FaUser className="font-bold text-xl" />
          <span className="icon">Profile</span>
        </a>
        <a href="www" className="link">
          <FaEllipsisH className="font-bold text-xl" />
          <span className="icon">More</span>
        </a>

        {/* Button */}
        <a
          href="www"
          className="mx-auto w-11 h-11 xl:w-full flex items-center justify-center bg-blue-400 rounded-full text-white font-bold"
        >
          <FaFeather className="font-bold text-xl block xl:hidden" />
          <span className="icon xl:ml-0">Tweet</span>
        </a>

        {/* user */}
        <div className="mt-auto w-14 xl:w-full flex justify-between  rounded-full p-2  cursor-pointer ">
          <img className="size-11 rounded-full" src={king} alt="king" />

          <div className="hidden xl:flex flex-col ml-1">
            <h4 className="text-gray-800 dark:text-white font-bold text-sm">
              Mohammed issa
            </h4>
            <p className="text-gray-400 text-sm">@Mohammed-issa0</p>
          </div>

          <FaChevronDown className="text-xs hidden font-bold xl:flex items-center xl:ml-4 text-white" />
        </div>
      </nav>
    </div>
  );
}
