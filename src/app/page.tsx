"use client";

import houseClean from "./images/deep-clean-house-hero.webp";
import logo from "./images/image.png";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [cleaning, setCleaning] = useState(true);
  const [construction, setConstruction] = useState(false);

  const cleaningChange = () => {
    setConstruction(false);
    setCleaning(true);
  };
  const constructionChange = () => {
    setCleaning(false);
    setConstruction(true);
  };
//forcing to vercel 
  return (
    <>
      <section className="bg-white min-h-screen w-full flex flex-col items-center ">
        {/* Title Section begin */}
        <section className="bg-gray-300 w-full flex flex-col p-12 items-center justify-center">
          
          <Image src={logo}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"></Image>
          <button
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="  bg-green-700 text-white px-4 py-2 rounded"
          >
            Contact Us
          </button>
        </section>
        {/* Title Section end */}

        {/* Content Section begin*/}
        <section className="w-auto bg- mt-8 flex flex-col">
          <header className="text-5xl p-4 text-black ">
            We clean, you relax.
          </header>
          <div className="flex flex-row p-4 ">
            <button
              className="
    text-black pr-4
    hover:underline
    active:text-gray-600
    transition
  "
              onClick={cleaningChange}
            >
              Cleaning Services
            </button>

            <button
              className="
    text-black
    hover:underline
    active:text-gray-600
    transition
  "
              onClick={constructionChange}
            >
              Construction Services
            </button>
          </div>
          {/* Re-usable Card Like section begin*/}
          {construction && (
            <>
              <div className="w-auto flex flex-col">
                <Image
                  src={houseClean}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"
                />
                <div className="flex flex-col p-4">
                  <header className="text-black text-3xl">
                    Deep Cleaning Services
                  </header>
                  <p className=" text-black">Describe cleaning services here</p>
                </div>
              </div>
              {/* Re-usable Card Like section end*/}
            </>
          )}
          {cleaning && (
            <>
              <div className="w-auto flex flex-col">
                <Image
                  src={houseClean}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"
                />
                <div className="flex flex-col p-4">
                  <header className="text-black text-3xl">
                    Deep Cleaning Services
                  </header>
                  <p className=" text-black">Describe cleaning services here</p>
                </div>
              </div>
              {/* Re-usable Card Like section end*/}
              <hr className="my-8 border-t border-gray-500" />
              {/* 2 begin*/}
              <div className="w-auto flex flex-col">
                <Image
                  src={houseClean}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"
                />
                <div className="flex flex-col p-4">
                  <header className="text-black text-3xl ml-auto pr-4">
                    Paint jobs
                  </header>
                  <p className=" text-black ml-auto pr-4">
                    Describe cleaning services here
                  </p>
                </div>
              </div>
              {/* 2 end*/}
              <hr className="my-8 border-t border-gray-500" />
              {/* 3 begin*/}
              <div className="w-auto flex flex-col">
                <Image
                  src={houseClean}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"
                />
                <div className="flex flex-col p-4">
                  <header className="text-black text-3xl mx-auto">
                    Carpet Cleanings
                  </header>
                  <p className=" text-black mx-auto">
                    Describe cleaning services here
                  </p>
                </div>
              </div>
              {/* 3 end*/}
              <hr className="my-8 border-t border-gray-500" />
              {/* 4 begin*/}
              <div className="w-auto flex flex-col">
                <Image
                  src={houseClean}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"
                />
                <div className="flex flex-col p-4">
                  <header className="text-black text-3xl mx-auto">
                    Window Cleaning
                  </header>
                  <p className=" text-black mx-auto">
                    Describe cleaning services here
                  </p>
                </div>
              </div>
              {/* 4 end*/}{" "}
            </>
          )}
        </section>
        {/* Content Section end*/}

        {/* Contact Section begin*/}
        <section className="bg-gray-300 w-full flex flex-col p-12 items-center justify-center">
          <header className="text-2xl text-black">Phone: 909-509-6815</header>
          <header className="text-2xl text-black">Email:</header>
          <header className="text-2xl text-black">FaceBook:</header>
          <Image src={logo}
                  alt="deep clean house"
                  className="w-auto h-auto p-2"></Image>
        </section>
        {/* Contact Section end*/}
      </section>
    </>
  );
}
