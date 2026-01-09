"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // example icon
import ContactForm from "./components/ContactFrom";
import ContactFormDesktop from "./components/ContactFormDesktop";
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
    <section className=" w-full flex flex-row items-center justify-center pt-4 bg-white">
          <div className="w-full flex flex-row items-center justify-center relative">
            <Image
              src={"/images/image.png"}
              alt="Logo"
              className="object-contain"
              width={100} // adjust as needed
              height={50} // adjust as needed
            ></Image>
            
          </div>
        </section>
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
            <header className="text-2xl ">Regular Cleanings</header>
            <header className="text-2xl ">Deep Cleaning</header>
            <header className="text-2xl ">Move In/Out</header>
            <header className="text-2xl ">Post Construction</header>
            
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
              Special Services
            </p>
            <header className="text-2xl">Painting </header>
                        <header className="text-2xl">Drywall </header>
            

            <header className="text-2xl">Flooring </header>
            
            <header className="text-2xl">Concrete </header>
            

            
            
            
            
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
            <header className="text-2xl fpont">Popcorn Ceiling Removal </header>
            <header className="text-2xl">Decks and Porches </header>
            <header className="text-2xl">Remodeling Kitchen </header>
            <header className="text-2xl">Bath Remodeling </header>
            <header className="text-2xl">Much More! </header>
            
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
              <header className="text-gray-700">909-609-6815</header>
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
                drcleanhouse12@gmail.com
              </header>
            </div>
          </div>
          {/* Email Section end*/}
          {/* Other Section */}
          <div className="flex flex-row justify-center items-center gap-2">
            
          </div>
          {/* Other Section end*/}
        </section>
        {/* Header section end */}

        {/* Gray bar section  */}

        <section className=" w-full flex flex-row items-center justify-center pt-4 gap-8 bg-gray-700 pb-4">
          
          <header className="text-orange-300 font">We serve the Inland Empire, Orange County, and Los Angeles areas </header>
          
        </section>

        {/* Gray bar Section end */}
{/* Hero Image with Text Overlay begin*/}
        

        {/*services section begin*/}
        <section className="grid grid-cols-2 justify-center center-tems w-[80%]">
        <section className="relative h-125 w-full flex flex-col items-center justify-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/cleaner-house.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="house-cleaning"
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
            
          </section>
        </section>
        
        <section
          id="#popcorn-ceiling"
          className="relative h-125 w-full flex flex-col items-center justify-center"
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
            
          </div>
        </section>
        </section>

        {/*services section end*/}
        {/* Content Section end*/}

        <section id="contact-form" className="w-full bg-gray-700 flex flex-row justify-center items-center p-8">
<header className="text-5xl text-white font-bold ">Get in contact viw email with us here. Please allow up to 24 hours for dR Clean House to respond. </header>
          <ContactFormDesktop></ContactFormDesktop>
        </section>
        
        {/** End of wrapper section */}
      </section>
    </>
  );
}
