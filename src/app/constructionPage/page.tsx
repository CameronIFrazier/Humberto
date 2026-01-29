"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ConstructionPage() {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-auto bg-white flex flex-col items-center ">
        <section className="bg-white w-[75%] flex flex-row items-center justify-center gap-24">
          <Image
            src={"/images/image.png"}
            alt="Logo"
            className="object-contain"
            width={100} // adjust as needed
            height={50} // adjust as needed
          ></Image>
          {/* Phone Section */}
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src={"/images/smartphone-call.png"}
              alt="Logo"
              className="object-contain"
              width={40} // adjust as needed
              height={40} // adjust as needed
            ></Image>
            <div className="flex flex-col">
              <header className="text-gray-700 font-bold">CALL US ON </header>
              <header className="text-gray-700">909-509-6815</header>
            </div>
          </div>
          {/* Phone Section end*/}

          {/* Email Section */}
          <div className="flex flex-row justify-center items-start gap-2">
            <Image
              src={"/images/mailicon.png"}
              alt="Icon"
              className="object-contain"
              width={45} // adjust as needed
              height={45} // adjust as needed
            ></Image>
            <div className="flex flex-col">
              <header className="text-gray-700 font-bold">EMAIL US AT </header>
              <header className="text-gray-700">
                dRCleaNhouse12@gmail.com
              </header>
            </div>
          </div>
          {/* Email Section end*/}
          {/* Other Section */}
          <div className="flex flex-row justify-center items-center gap-2"></div>
          {/* Other Section end*/}
        </section>
        {/* Header section end */}

        {/* Gray bar section  */}

        <section className=" w-full flex flex-row items-center justify-center pt-4 gap-8 bg-gray-700 pb-4">
          <header className="text-orange-300 font">
            We serve the Inland Empire, Orange County, and Los Angeles
            areas{" "}
          </header>
          <button onClick={() => router.push("../")}>
            Cleaning Services
          </button>
        </section>
        <div className="w-[80%]">
          <header className="text-gray-700 text-6xl font-bold mt-4 mb-4">
            {" "}
            Construction Services
          </header>
        </div>
        <section className="flex flex-row w-[80%] ">
          
          <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/images/cleaner-house.jpg')",
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-" />

            {/* Content above overlay */}
            <section
              id="house-cleaning"
              className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
            ></section>
          </section>
          <section className="flex flex-col p-4">
            <header className="text-3xl text-gray-700">Item</header>
            <p className="text-black">Description</p>
            <header className="text-3xl text-gray-700">Item</header>
            <p className="text-black">Description</p>
            <header className="text-3xl text-gray-700">Item</header>
            <p className="text-black">Description</p>
            <header className="text-3xl text-gray-700">Item</header>
            <p className="text-black">Description</p>
          </section>
        </section>
        <button className="text-black text-5xl">Contact us</button>
      </section>
    </>
  );
}
