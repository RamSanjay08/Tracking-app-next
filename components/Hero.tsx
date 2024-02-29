import React from "react";
import Image from "next/image";
import categories from "@/data/categories";

function Hero() {
  return (
    <section className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="hero-img"
          width={800}
          height={200}
          className="w-full absolute mt-[-50px]"
        />
        <div className="mt-[70px] z-10">
          <h2 className="text-[55px] tracking-widest text-red-600 font-semibold">
            DISCOVER
          </h2>
          <p className="text-[20px]">Your Amazing City</p>
          <div className="mt-5 z-20 flex  items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Search Anything"
              className="border-[1px] p-3 px-5 w-[36%] z-10 rounded-full bg-white shadow-sm"
            />
            <button className="bg-red-600 z-10 p-3 rounded-full cursor-pointer hover:scale-105 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mt-4">
        <p>Or Browse the category</p>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-11 z-20 w-[50%]">
            {categories.map(({id,title,image})=> (
                <div key={id} className="z-10 w-[60px] bg-white border-[1px] rounded-full p-4 cursor-pointer">
                    <Image src={image} alt="categories" width={30} height={30} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
