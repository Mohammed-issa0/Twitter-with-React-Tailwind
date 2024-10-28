import React from "react";
import king from "./king.png";
import TheLord from "./TheLord.jpg";
import { FaSearch } from "react-icons/fa";
export default function Right() {
  return (
    <div class="hidden w-[30%] xl:block h-screen overflow-y-auto">
      {/* <!-- Search --> */}
      <div class="relative m-2">
        <FaSearch className="text-gray-600 absolute left-4 top-1/2 -translate-y-1/2 font-bold" />
        <i class="fa-solid fa-magnifying-glass "></i>
        <input
          type="text"
          class="w-full bg-gray-200 dark:bg-dim-400 border-gray-200 dark:border-dim-400 text-gray-100  focus:outline-none  font-normal h-9  pl-12 text-sm rounded-full"
          placeholder="Search Twitter"
        />
      </div>
      <div class="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
        <h3 class="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200">
          What’s happening
        </h3>
        <div class="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 class="font-bold  text-gray-800 dark:text-white">#Palestine</h4>
          <p class="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div class="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 class="font-bold  text-gray-800 dark:text-white">#Palestine</h4>
          <p class="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div class="p-3 border-b border-gray-200 dark:border-dim-200">
          <h4 class="font-bold  text-gray-800 dark:text-white">#Palestine</h4>
          <p class="text-xs text-gray-400">29.7K Tweets</p>
        </div>
        <div class="text-blue-400  p-3 cursor-pointer">Show more</div>
      </div>
      {/* <!-- Who to follow  --> */}
      <div class="bg-gray-50 dark:bg-dim-700 rounded-2xl m-2">
        <h3 class="text-gray-900 dark:text-white font-bold p-3 border-b border-gray-200 dark:border-dim-200">
          Who to follow
        </h3>
        <div class="p-5 border-b border-gray-200 dark:border-dim-200 flex justify-between items-center">
          <div class="flex ">
            <img class="w-10 h-10 rounded-full" src={TheLord} alt="" />
            <div class=" ml-2  text-sm ">
              <h5 class="text-gray-900 dark:text-white font-bold">
                abdoelazizgamal
              </h5>
              <p class="text-gray-400 ">@abdoelazizgamal</p>
            </div>
          </div>
          <a
            href="www"
            class="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"
          >
            Follow
          </a>
        </div>
        <div class="p-5 border-b border-gray-200 dark:border-dim-200 flex justify-between items-center">
          <div class="flex ">
            <img class="w-10 h-10 rounded-full" src={king} alt="" />
            <div class=" ml-2  text-sm ">
              <h5 class="text-gray-900 dark:text-white font-bold">
                abdoelazizgamal
              </h5>
              <p class="text-gray-400 ">@abdoelazizgamal</p>
            </div>
          </div>
          <a
            href="www"
            class="text-xs font-bold text-blue-400 px-4 py-1 rounded-full border-2 border-blue-400"
          >
            Follow
          </a>
        </div>
        <div class="p-5 border-b border-gray-200 dark:border-dim-200 ">
          <div class="flex gap-x-4 animate-pulse">
            <div class="rounded-full bg-gray-400 h-12 w-12"></div>
            <div class="flex-1  space-y-2 py-1">
              <div class="h-4 bg-gray-400 rounded w-5/6"></div>
              <div class="h-4 bg-gray-400 rounded w-3/4"></div>
              <div class="h-4 bg-gray-400 rounded w-4/6"></div>
            </div>
          </div>
        </div>

        <div class="text-blue-400  p-3 cursor-pointer">Show more</div>
      </div>
    </div>
  );
}
