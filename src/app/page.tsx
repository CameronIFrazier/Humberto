"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // example icon
import ContactForm from "./components/ContactFrom";
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
      <section className="bg-white min-h-screen w-full flex flex-col md:hidden items-center ">
        {/* Header Scetion */}
        <section className="bg-gray-700 w-full flex flex-col items-center p-4 justify-center">
          <div className="w-[75%] flex flex-col items-start justify-start">
            <div className="w-full flex flex-row justify-between">
              <header className="text-white text-sm font-bold">
                EMAIL US AT
              </header>
              <Image
                src={"/images/smartphone-call.png"}
                alt="icon"
                width={30}
                height={30}
                className="object-contain "
              ></Image>
              <header className="text-white text-sm font-bold">
                CALL US ON
              </header>
            </div>
          </div>

          <div className="w-[75%] flex flex-col items-start justify-start pt-2">
            <div className="w-full flex flex-row justify-between">
              <header className="text-white text-xs">
                dRCleanHouse@gmail.com
              </header>
              {/* QUICK EMAIL 
              <a href="mailto:dRCleanHouse@gmail.com?subject=Quote Request&body=Hi, I would like a quote.">
  Email Us
</a> */}

              <header className="text-white text-sm ">900-509-6815</header>
            </div>
          </div>
        </section>
        {/* Logo Section begin */}
        <section className=" w-full flex flex-row items-center justify-center pt-4">
          <div className="w-[75%] flex flex-row items-center justify-between relative">
            <Image
              src={"/images/image.png"}
              alt="Logo"
              className="object-contain"
              width={100} // adjust as needed
              height={50} // adjust as needed
            ></Image>
            <Popover className="relative">
              <PopoverButton className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
                <Bars3Icon className="h-6 w-6 text-black" />
              </PopoverButton>

              {/* Popover panel */}
              <PopoverPanel
                anchor="bottom"
                className="mt-2 flex flex-col rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <a
                  onClick={() => {
                    document
                      .getElementById("#house-cleaning")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  House Cleaning
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#house-painting")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  House Painting
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#popcorn-ceiling")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  Popcorn Ceiling Removal
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  Email Us
                </a>
              </PopoverPanel>
            </Popover>
          </div>
        </section>
        {/* Logo Section end */}

        {/* Content Section begin*/}
        <section className="w-full bg mt-4 flex flex-col justify-center items-center">
          {/* Hero Image with Text Overlay begin*/}
          <div
            className="h-64 w-full bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/images/low-lighting-room.jpg')" }}
          >
            <div className="flex flex-col p-4">
              <p className=" text-white text-font-bold text-4xl font-bold">
                Tired of your dirty House?<br></br>
              </p>
              <p className="">So are we.</p>
            </div>
          </div>
          {/* Hero Image with Text Overlay end*/}
          <div className="flex flex-col w-auto justify-center items-center ">
            <header className="font-bold text-4xl text-gray-700 p-4 ">
              Professional Home Remodeling and General Contractor Services
            </header>
          </div>
        </section>

        {/*services section begin*/}
        <div className="relative h-64 w-full flex flex-col items-center justify-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/cleaner-house.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">
              House Cleaning Services
            </p>
            <p className="text-white">
              Keep your home sparkling clean with our professional cleaning
              services. We handle every room with care, from kitchens to
              bedrooms. Our team ensures a fresh and hygienic living space for
              you and your family.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </section>
        </div>
        <section
          id="#house-painting"
          className="relative h-64 w-full flex flex-col items-center justify-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/painted-house.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <p className="text-white text-4xl font-bold">
              House Painting Services
            </p>
            <p className="text-white">
              Transform your home with our expert interior and exterior painting
              services. We use high-quality paints and techniques for a flawless
              finish. Our work refreshes your space and adds lasting beauty to
              every room.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </div>
        </section>
        <section
          id="#popcorn-ceiling"
          className="relative h-64 w-full flex flex-col items-center justify-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/popcorn-ceiling.avif')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <p className="text-white text-4xl font-bold">
              Popcorn Ceiling Removal
            </p>
            <p className="text-white">
              Update your home with our safe and efficient popcorn ceiling
              removal services. We carefully remove outdated textures for a
              smooth, modern ceiling. Enjoy a cleaner, brighter look that
              enhances the overall feel of your home.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </div>
        </section>

        {/*services section end*/}
        {/* Content Section end*/}

        <section id="#contact-form"></section>
        <ContactForm></ContactForm>
        
      </section>

      {/* Desktop Viewport */}
      <section className="hidden md:flex flex-col items-center justify-center bg-white min-h-screen w-full">
        {/* Header Section */}
        <section className="bg-gray-700 w-full flex flex-col items-center p-4 justify-center">
          <div className="w-[75%] flex flex-col items-start justify-start">
            <div className="w-full flex flex-row justify-between">
              <header className="text-white text-sm font-bold">
                EMAIL US AT
              </header>
              <Image
                src={"/images/smartphone-call.png"}
                alt="icon"
                width={30}
                height={30}
                className="object-contain "
              ></Image>
              <header className="text-white text-sm font-bold">
                CALL US ON
              </header>
            </div>
          </div>

          <div className="w-[75%] flex flex-col items-start justify-start pt-2">
            <div className="w-full flex flex-row justify-between">
              <header className="text-white text-xs">
                dRCleanHouse@gmail.com
              </header>
              {/* QUICK EMAIL 
              <a href="mailto:dRCleanHouse@gmail.com?subject=Quote Request&body=Hi, I would like a quote.">
  Email Us
</a> */}

              <header className="text-white text-sm ">900-509-6815</header>
            </div>
          </div>
        </section>
        {/* Header section end */}

        {/* Logo Section begin */}

        <section className=" w-full flex flex-row items-center justify-center pt-4">
          <div className="w-[75%] flex flex-row items-center justify-between relative">
            <Image
              src={"/images/image.png"}
              alt="Logo"
              className="object-contain"
              width={100} // adjust as needed
              height={50} // adjust as needed
            ></Image>
            <Popover className="relative">
              <PopoverButton className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
                <Bars3Icon className="h-6 w-6 text-black" />
              </PopoverButton>

              {/* Popover panel */}
              <PopoverPanel
                anchor="bottom"
                className="mt-2 flex flex-col rounded-lg bg-gray-100 p-4 shadow-lg"
              >
                <a
                  onClick={() => {
                    document
                      .getElementById("#house-cleaning")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  House Cleaning
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#house-painting")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  House Painting
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#popcorn-ceiling")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  Popcorn Ceiling Removal
                </a>
                <a
                  onClick={() => {
                    document
                      .getElementById("#contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-2 py-2 rounded hover:bg-gray-200 text-black cursor-pointer"
                >
                  Email Us
                </a>
              </PopoverPanel>
            </Popover>
          </div>
        </section>

                  {/* Logo Section end */}

                  <section className="w-full bg mt-4 flex flex-col justify-center items-center">
          {/* Hero Image with Text Overlay begin*/}
          <div
            className="h-200 w-full bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/images/low-lighting-room.jpg')" }}
          >
            <div className="flex flex-col p-4">
              <p className=" text-white text-font-bold text-4xl font-bold">
                Tired of your dirty House?<br></br>
              </p>
              <p className="">So are we.</p>
            </div>
          </div>
          {/* Hero Image with Text Overlay end*/}
          <div className="flex flex-col w-auto justify-center items-center ">
            <header className="font-bold text-4xl text-gray-700 p-4 ">
              Professional Home Remodeling and General Contractor Services
            </header>
          </div>
        </section>

        {/*services section begin*/}
        <div className="relative h-64 w-full flex flex-col items-center justify-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/cleaner-house.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">
              House Cleaning Services
            </p>
            <p className="text-white">
              Keep your home sparkling clean with our professional cleaning
              services. We handle every room with care, from kitchens to
              bedrooms. Our team ensures a fresh and hygienic living space for
              you and your family.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </section>
        </div>
        <section
          id="#house-painting"
          className="relative h-64 w-full flex flex-col items-center justify-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/painted-house.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <p className="text-white text-4xl font-bold">
              House Painting Services
            </p>
            <p className="text-white">
              Transform your home with our expert interior and exterior painting
              services. We use high-quality paints and techniques for a flawless
              finish. Our work refreshes your space and adds lasting beauty to
              every room.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </div>
        </section>
        <section
          id="#popcorn-ceiling"
          className="relative h-64 w-full flex flex-col items-center justify-center"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/popcorn-ceiling.avif')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center">
            <p className="text-white text-4xl font-bold">
              Popcorn Ceiling Removal
            </p>
            <p className="text-white">
              Update your home with our safe and efficient popcorn ceiling
              removal services. We carefully remove outdated textures for a
              smooth, modern ceiling. Enjoy a cleaner, brighter look that
              enhances the overall feel of your home.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("#contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block px-2 py-1 rounded bg-gray-500 text-white"
            >
              Email Us
            </button>
          </div>
        </section>

        {/*services section end*/}
        {/* Content Section end*/}



<section id="#contact-form"></section>
        <ContactForm></ContactForm>
{/** End of wrapper section */}
      </section>
    </>
  );
}
