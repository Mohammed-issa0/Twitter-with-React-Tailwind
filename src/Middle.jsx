import React from "react";
import king from "./king.png";
import TheLord from "./TheLord.jpg";
import {
  FaTwitter,
  FaImage,
  FaBatteryFull,
  FaSmile,
  FaRProject,
  FaPoll,
  FaComment,
  FaRetweet,
  FaHeart,
  FaShare,
  FaCloudMoon,
} from "react-icons/fa";
export default function Middle() {
  return (
    <div className="w-full xl:w-1/2 h-screen overflow-y-auto">
      {/* sticky header */}
      <div className="flex justify-between items-center border px-4 py-3 sticky top-0 bg-white dark:bg-dim-900 border-gray-200 dark:border-dim-200">
        <h4 className="text-gray-800 dark:text-gray-100 font-bold">Home</h4>
        <FaTwitter className="text-lg text-blue-400" />
      </div>

      {/* tweet box */}
      <div className="border pb-3 border-gray-200 dark:border-dim-200">
        <div className="flex p-4 ">
          <img src={king} className="rounded-full size-10" alt="king" />
          <textarea
            className="p-2 dark:text-white text-gray-900 w-full h-16 bg-transparent focus:outline-none resize-none"
            placeholder="What's Happening?"
          ></textarea>
        </div>
        <div className="flex p-4 w-full">
          <a href="www" className="text-blue-400 rounded-full p-2">
            <FaImage className="text-lg" />
          </a>
          <a href="www" className="text-blue-400 rounded-full p-2">
            <FaPoll className="text-lg" />
          </a>
          <a href="www" className="text-blue-400 rounded-full p-2">
            <FaRProject className="text-lg" />
          </a>
          <a href="www" className="text-blue-400 rounded-full p-2">
            <FaSmile className="text-lg" />
          </a>
          <a href="www" className="text-blue-400 rounded-full p-2">
            <FaBatteryFull className="text-lg" />
          </a>
          <a
            href="www"
            className="font-bold text-blue-400 rounded-full text-white px-6 ml-auto mr-1 felx items-center"
          >
            Tweet
          </a>
        </div>
      </div>

      {/* show tweets */}
      <div className="text-center py-4 bg-white dark:bg-dim-900 border border-gray-200 dark:border-dim-200 cursor-pointer text-blue-400 text-sm">
        Show 9 Tweets
      </div>

      {/* Tweet1  */}
      <div className="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4">
        <div className="flex items-center p-4 pb-0">
          <img src={king} className="rounded-full size-10" alt="king" />
          <p className="ml-2 flex flex-shrink-0 items-center text-lg font-medium text-gray-800 dark:text-white">
            Mohammed issa
            <span className="ml-1 text-sm leading-5 text-gray-400 pt-1">
              @mohammed-issa0 . Nov 2
            </span>
          </p>
        </div>

        <div className="pl-8 xl:pl-16 pr-4">
          <p className="w-auto font-medium text-gray-800-800 dark:text-white">
            Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.
            <br />
            <br />
            Experience is the name everyone gives to their
            <a href="www" className="text-blue-400">
              mistakes
            </a>
            <br />
            <br />
            Simplicity is the soul of efficiency.
          </p>
          <img
            className="rounded-2xl border w-full border-gray-600 my-3 mr-2"
            src={king}
            alt="king"
          />
          <div className="flex items-center justify-between w-full">
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaComment className="mr-2 text-lg" />
              12.3 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400">
              <FaRetweet className="mr-2 text-lg" />
              74.8 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-500">
              <FaHeart className="mr-2 text-lg" />
              52.6 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaShare className="mr-2 text-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Tweet1  */}
      <div className="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4">
        <div className="flex items-center p-4 pb-0">
          <img src={TheLord} className="rounded-full size-10" alt="lord" />
          <p className="ml-2 flex flex-shrink-0 items-center text-lg font-medium text-gray-800 dark:text-white">
            Mohammed issa
            <span className="ml-1 text-sm leading-5 text-gray-400 pt-1">
              @mohammed-issa0 . Nov 2
            </span>
          </p>
        </div>

        <div className="pl-8 xl:pl-16 pr-4">
          <p className="w-auto font-medium text-gray-800-800 dark:text-white">
            Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.
            <br />
            <br />
            Experience is the name everyone gives to their
            <a href="www" className="text-blue-400">
              mistakes
            </a>
            <br />
            <br />
            Simplicity is the soul of efficiency.
          </p>
          <img
            className="rounded-2xl border w-full border-gray-600 my-3 mr-2"
            src={TheLord}
            alt="lord"
          />
          <div className="flex items-center justify-between w-full">
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaComment className="mr-2 text-lg" />
              12.3 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400">
              <FaRetweet className="mr-2 text-lg" />
              74.8 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-500">
              <FaHeart className="mr-2 text-lg" />
              52.6 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaShare className="mr-2 text-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* Tweet1  */}
      <div className="border border-gray-200 dark:border-dim-200 cursor-pointer pb-4">
        <div className="flex items-center p-4 pb-0">
          <img src={king} className="rounded-full size-10" alt="king" />
          <p className="ml-2 flex flex-shrink-0 items-center text-lg font-medium text-gray-800 dark:text-white">
            Mohammed issa
            <span className="ml-1 text-sm leading-5 text-gray-400 pt-1">
              @mohammed-issa0 . Nov 2
            </span>
          </p>
        </div>

        <div className="pl-8 xl:pl-16 pr-4">
          <p className="w-auto font-medium text-gray-800-800 dark:text-white">
            Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.
            <br />
            <br />
            Experience is the name everyone gives to their
            <a href="www" className="text-blue-400">
              mistakes
            </a>
            <br />
            <br />
            Simplicity is the soul of efficiency.
          </p>
          <img
            className="rounded-2xl border w-full border-gray-600 my-3 mr-2"
            src={king}
            alt="king"
          />
          <div className="flex items-center justify-between w-full">
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaComment className="mr-2 text-lg" />
              12.3 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-green-400 dark:hover:text-green-400">
              <FaRetweet className="mr-2 text-lg" />
              74.8 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-500">
              <FaHeart className="mr-2 text-lg" />
              52.6 K
            </div>
            <div className="flex transition items-center dark:text-white text-xs text-gray-400 hover:text-blue-400 dark:hover:text-blue-400">
              <FaShare className="mr-2 text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* toggle */}
      <div className="py-2 border border-gray-200 dark:border-dim-200 bg-white dark:bg-dim-300">
        <div className="text-center p-6 bg-white dark:bg-dim-900 border-y border-gray-200 dark:border-dim-200">
          <h3 className="dark:text-white text-gray-900 text-2xl font-bold mb-2">
            Customize Your View
          </h3>
          <p className="text-gray-500 mb-5 text-sm">
            Manage your font size, color and bakcground. These settings affect
            all the Twitter accounts on this browser.
          </p>
          <a
            href={{ javascript: void 0 }}
            className="mx-auto size-11 xl:w-48 flex items-center justify-center bg-blue-400 py-3 rounded-full text-white font-bold"
          >
            <FaCloudMoon className="block xl:hidden text-lg" />
            <span className="hidden xl:block font-bold ">
              {" "}
              Toggle Dark Mode
            </span>
          </a>
        </div>
      </div>

      {/* spinner */}
      <div className="p-4 border boder-gray-200 dark:border-gray-700 ">
        <div class="">
          <svg
            class="text-blue-400 animate-spin mx-auto "
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-900"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
