"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/ContactFormDesktop";

export default function ConstructionPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
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

          <div className="flex flex-row justify-center items-center gap-2"></div>
        </section>

        <section className=" w-full flex flex-row items-center justify-center pt-4 gap-8 bg-gray-700 pb-4">
          <header className="text-orange-300 font">
            We serve the Inland Empire, Orange County, and Los Angeles
            areas{" "}
          </header>
          <button onClick={() => router.push("../")}>View Our Cleaning Services</button>
          <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={() =>
    document
      .getElementById("bathroom")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Bathroom
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black " onClick={() =>
    document
      .getElementById("kitchen")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Kitchen
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={() =>
    document
      .getElementById("flooring")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Flooring
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"onClick={() =>
    document
      .getElementById("painting")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Painting
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={() =>
    document
      .getElementById("painting")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Trim
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={() =>
    document
      .getElementById("painting")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Casing
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={() =>
    document
      .getElementById("painting")
      ?.scrollIntoView({ behavior: "smooth" })
  }>
            Extra Services 
          </button>
        </div>
      )}
    </div>
        </section>
        <div className="w-[80%]">
          <header className="text-gray-700 text-6xl font-bold mt-4 mb-4">
            {" "}
            Construction Services
          </header>
        </div>

        {/* Grid  */}
        <section className="w-[80%] ">
          
{/* Bathroom */}
<hr className="my-6 border-gray-300" />

          <section className="flex flex-row  ">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg" id="bathroom">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/cleaner-house.jpg')",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Content above overlay */}
              <header className="relative z-10 text-white text-4xl font-bold">
                Bathroom
              </header>
              <section
                id="house-cleaning"
                className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
              ></section>
            </section>
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">
                We Offer:
              </header>
              <header className="text-3xl text-gray-700">Complete Remodeling</header>

              <header className="text-3xl text-gray-700">Toilets</header>

              <header className="text-3xl text-gray-700">Vanity</header>

              <header className="text-3xl text-gray-700">Fixtures</header>
              <header className="text-3xl text-gray-700">Tub Installation</header>

              <header className="text-3xl text-gray-700">Shower Installation</header>

            </section>
           
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-3xl text-gray-700">Medicine Cabinet</header>

              <header className="text-3xl text-gray-700">Mirros</header>
              <header className="text-3xl text-gray-700">Shower Pans</header>

              <header className="text-3xl text-gray-700">Light Fixtures </header>
              <header className="text-3xl text-gray-700">Exhaust Fan</header>

              <header className="text-3xl text-gray-700">Sink</header>
              <header className="text-3xl text-gray-700">Shower Valve</header>

              
            </section>
           

            <section className="flex flex-col pl-2 gap-4 pr-4">
             
              <header className="text-3xl text-gray-700">Faucet</header>
            </section>
          </section>

          <hr className="my-6 border-gray-300" />
{/* Kitchen */}
          <section className="flex flex-row " id="kitchen">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/cleaner-house.jpg')",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Content above overlay */}
              <header className="relative z-10 text-white text-4xl font-bold">
                Kitchen
              </header>
              <section
                id="house-cleaning"
                className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
              ></section>
            </section>
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">
                We Offer:
              </header>
              <header className="text-3xl text-gray-700">Cabinets</header>

              <header className="text-3xl text-gray-700">Tile</header>

              <header className="text-3xl text-gray-700">Counter Tops</header>

              <header className="text-3xl text-gray-700">Sink</header>
              <header className="text-3xl text-gray-700">Faucet </header>

              <header className="text-3xl text-gray-700">Garbade Disposal</header>

            </section>
           
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-3xl text-gray-700">Flooring</header>

              <header className="text-3xl text-gray-700">Back Splash</header>
              <header className="text-3xl text-gray-700">Lighting</header>

              <header className="text-3xl text-gray-700">Electrical </header>
              <header className="text-3xl text-gray-700">Hood</header>

           

              
            </section>
           

            <section className="flex flex-col pl-2 gap-4 pr-4">
             
              
            </section>
          </section>
          <hr className="my-6 border-gray-300" />
{/* Flooring */}
          <section className="flex flex-row  " id="flooring">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/cleaner-house.jpg')",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Content above overlay */}
              <header className="relative z-10 text-white text-4xl font-bold">
                Flooring and Extra Services
              </header>
              <section
                id="house-cleaning"
                className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
              ></section>
            </section>
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">
                Flooring:
              </header>
              <header className="text-3xl text-gray-700">Laminate</header>

              <header className="text-3xl text-gray-700">Vinyl</header>

              <header className="text-3xl text-gray-700">Carpet</header>

              <header className="text-3xl text-gray-700">Tile</header>
              

            </section>
           <div className="w-px h-auto bg-gray-500 " />
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">
                Extras
              </header>
              <header className="text-3xl text-gray-700">Furniture Assembly</header>

              <header className="text-3xl text-gray-700">Move Appliances</header>

              <header className="text-3xl text-gray-700">Install Appliances</header>

              <header className="text-3xl text-gray-700">Weed Maintenance</header>
              <header className="text-3xl text-gray-700">Junk Removal</header>

           

              
            </section>
           

            <section className="flex flex-col pl-2 gap-4 pr-4">
             
              
            </section>
          </section>
          <hr className="my-6 border-gray-300" />

{/* Paint, Trim, Casing */}
          <section className="flex flex-row  " id="painting">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg " >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/cleaner-house.jpg')",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Content above overlay */}
              <header className="relative z-10 text-white text-4xl font-bold">
                Paint, Trim, Casing
              </header>
              <section
                id="house-cleaning"
                className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
              ></section>
            </section>
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">
                Paint
              </header>
              <header className="text-3xl text-gray-700">Laminate</header>

              <header className="text-3xl text-gray-700">Vinyl</header>

              <header className="text-3xl text-gray-700">Carpet</header>

              <header className="text-3xl text-gray-700">Tile</header>
            </section>
            <div className="w-px h-auto bg-gray-500 " />
            <section className="flex flex-col pl-2 pr-8 gap-4">
              <header className="text-5xl text-gray-700 font-bold">Trim</header>
              <header className="text-3xl text-gray-700">Basebaord</header>

              <header className="text-3xl text-gray-700">Door and Door </header>
            </section>
            <div className="w-px h-auto bg-gray-500 " />

            <section className="flex flex-col pl-2 gap-4 pr-4">
              <header className="text-5xl text-gray-700 font-bold">
                Casing
              </header>
              <header className="text-3xl text-gray-700">Crown Molding</header>

              <header className="text-3xl text-gray-700">
                Custom Cabinets{" "}
              </header>
            </section>
          </section>

          {/* grid end */}
          <hr className="my-6 border-gray-300" />
          <header className="text-gray-700 text-5xl pb-2">Talk to us for a quote on any service.</header>
        </section>
<section
                    id="contact-form"
                    className="w-full bg-gray-700 flex flex-row justify-center items-center p-8"
                  >
                    <header className="text-5xl text-white font-bold ">
                      Get in contact via email with us here. Please allow up to 24 hours
                      for dR CleaN House to respond.{" "}
                    </header>
                    <ContactForm></ContactForm>
                  </section>
        
      </section>
    </>
  );
}
