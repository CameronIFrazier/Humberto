"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactForm from "../components/ContactFormDesktop";

export default function ConstructionPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showBath, setShowBath] = useState(false);
  const [showKitchen, setShowKitchen] = useState(false);
  const [showExterior, setShowExterior] = useState(false);
  const [showPaintTrimCasing, setShowPaintTrimCasing] = useState(false);
  const [showFlooringExtras, setShowFlooringExtras] = useState(false);

  return (
    <>
      <section className="bg-white min-h-screen w-full flex flex-col md:hidden items-center ">
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
                dRCleanHouse12@gmail.com
              </header>

              <header className="text-white text-sm ">900-509-6815</header>
            </div>
          </div>
          <button onClick={() => router.push("../")} className="mt-4 text-orange-300 ">
            View Our Cleaning Services
          </button>
          <div className="relative inline-block mt-2 z-11 flex justify-center items-center">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 bg-green-900 text-white rounded"
            >
              Menu
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("bathroom")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Bathroom
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black "
                  onClick={() =>
                    document
                      .getElementById("kitchen")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Kitchen
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("flooring")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Flooring
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("exterior")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Exterior
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Painting
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Trim
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Casing
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("flooring")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Extra Services
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Begin List of stuff */}
        <div className="relative h-64 w-full flex flex-col items-center justify-center" id="bathroom">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/bathroom.jpeg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-1 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">Bathroom</p>

            <button
              className="text-white mb-4 rounded-lg bg-green-900 p-2 mt-2"
              onClick={() => setShowBath(!showBath)}
            >
              Click to see all Bathroom options {showBath ? "↑" : "↓"}
            </button>
          </section>
        </div>

        {/* Container with transition */}
        <section
          className={`grid grid-cols-2 gap-2 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
            showBath ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <header className="text-2xl text-gray-700">
            -Complete Remodeling
          </header>
          <header className="text-2xl text-gray-700">-Medicine Cabinet</header>
          <header className="text-2xl text-gray-700">-Toilets</header>
          <header className="text-2xl text-gray-700">-Vanity</header>
          <header className="text-2xl text-gray-700">-Fixtures</header>
          <header className="text-2xl text-gray-700">-Tub Install</header>
          <header className="text-2xl text-gray-700">-Shower Install</header>
          <header className="text-2xl text-gray-700">-Mirrors</header>
          <header className="text-2xl text-gray-700">-Shower Pans</header>
          <header className="text-2xl text-gray-700">-Light Fixtures</header>
          <header className="text-2xl text-gray-700">-Exhaust Fan</header>
          <header className="text-2xl text-gray-700">-Sink</header>
          <header className="text-2xl text-gray-700">-Shower Valve</header>
          <header className="text-2xl text-gray-700">-Faucet</header>
        </section>
        <div className="relative h-64 w-full flex flex-col items-center justify-center" id="kitchen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/kitchen2.avif')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#kitchen"
            className="relative z-10 flex flex-col items-center justify-center gap-1 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">Kitchen</p>
            <button
              className="text-white mb-4 rounded-lg bg-green-900 p-2 mt-2"
              onClick={() => setShowKitchen(!showKitchen)}
            >
              Click to see all Kitchen options {showKitchen ? "↑" : "↓"}
            </button>
          </section>
        </div>

        {/* Container with transition */}
        <section
          className={`grid grid-cols-2 gap-2 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
            showKitchen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <header className="text-2xl text-gray-700">-Cabinets</header>
          <header className="text-2xl text-gray-700">-Tile</header>
          <header className="text-2xl text-gray-700">-Counter Tops</header>
          <header className="text-2xl text-gray-700">-Sink</header>
          <header className="text-2xl text-gray-700">-Faucet</header>
          <header className="text-2xl text-gray-700">-Flooring</header>
          <header className="text-2xl text-gray-700">-Back Splash</header>
          <header className="text-2xl text-gray-700">-Shower Pans</header>
          <header className="text-2xl text-gray-700">-Lighting</header>
          <header className="text-2xl text-gray-700">-Electrical</header>
          <header className="text-2xl text-gray-700">-Hood</header>
          <header className="text-2xl text-gray-700">-Garbage Disposal</header>
        </section>

        <div className="relative h-64 w-full flex flex-col items-center justify-center" id="exterior">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/SmallHouseExteriors.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-1 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">Exterior</p>
            <button
              className="text-white mb-4 rounded-lg bg-green-900 p-2 mt-2"
              onClick={() => setShowExterior(!showExterior)}
            >
              Click to see all Exterior options {showExterior ? "↑" : "↓"}
            </button>
          </section>
        </div>

        {/* Container with transition */}
        <section
          className={`grid grid-cols-2 gap-2 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
            showExterior ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <header className="text-2xl text-gray-700">-Paint</header>
          <header className="text-2xl text-gray-700">-Stucco</header>
          <header className="text-2xl text-gray-700">-Siding</header>
          <header className="text-2xl text-gray-700">-Windows</header>
          <header className="text-2xl text-gray-700">-Doors</header>
          <header className="text-2xl text-gray-700">-Decks</header>
          <header className="text-2xl text-gray-700">-Cement</header>
          <header className="text-2xl text-gray-700">-Artifical Grass</header>
          <header className="text-2xl text-gray-700">-Lighting</header>
          <header className="text-2xl text-gray-700">-Outlets</header>
          <header className="text-2xl text-gray-700">-retaining Wall</header>
          <header className="text-2xl text-gray-700">-Pavers</header>
          <header className="text-2xl text-gray-700">-Patio Covers</header>
          <header className="text-2xl text-gray-700">-Irrigation</header>

          <header className="text-2xl text-gray-700">-Fence</header>
          <header className="text-2xl text-gray-700">
            -Low Voltage Lighting{" "}
          </header>
        </section>
        <div className="relative h-64 w-full flex flex-col items-center justify-center" id="painting">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/Painting.jpeg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-1 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">
              Painting, Triming and Casing
            </p>
            <button
              className="text-white mb-4 rounded-lg bg-green-900 p-2 mt-2"
              onClick={() => setShowPaintTrimCasing(!showPaintTrimCasing)}
            >
              Click to see all Services Provided{" "}
              {showPaintTrimCasing ? "↑" : "↓"}
            </button>
          </section>
        </div>

        {/* Container with transition */}
        <section
          className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
            showPaintTrimCasing
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <header className="text-3xl font-bold text-gray-700">Painting</header>

          <header className="text-2xl text-gray-700">-Interior </header>
          <header className="text-2xl text-gray-700">-Exterior</header>
          <header className="text-2xl text-gray-700">-Stain</header>
          <header className="text-3xl font-bold text-gray-700">Trim</header>

          <header className="text-2xl text-gray-700">-Baseboards</header>
          <header className="text-2xl text-gray-700">-Door and Door</header>
          <header className="text-3xl font-bold text-gray-700">Casing</header>
          <header className="text-2xl text-gray-700">-Crown Molding</header>
          <header className="text-2xl text-gray-700">-Custom Cabinets</header>
        </section>
        <div className="relative h-64 w-full flex flex-col items-center justify-center" id="flooring">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/images/flooring.jpg')" }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content above overlay */}
          <section
            id="#house-cleaning"
            className="relative z-10 flex flex-col items-center justify-center gap-1 p-4 text-center"
          >
            <p className="text-white text-4xl font-bold">
              Flooring & Extra Services
            </p>
            <button
              className="text-white mb-4 rounded-lg bg-green-900 p-2 mt-2"
              onClick={() => setShowFlooringExtras(!showFlooringExtras)}
            >
              Click to see all Services Provided{" "}
              {showFlooringExtras ? "↑" : "↓"}
            </button>
          </section>
        </div>

        {/* Container with transition */}
        <section
          className={`flex flex-col gap-2 pl-4 overflow-hidden transition-all duration-500 ease-in-out ${
            showFlooringExtras
              ? "max-h-[2000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <header className="text-3xl font-bold text-gray-700">Flooring</header>
          <header className="text-2xl text-gray-700">-Laminite</header>
          <header className="text-2xl text-gray-700">-Vinyl</header>
          <header className="text-2xl text-gray-700">-Carpet</header>
          <header className="text-2xl text-gray-700">-Tile</header>
          <header className="text-3xl font-bold text-gray-700">
            Extra Services
          </header>
          <header className="text-2xl text-gray-700">
            -Furniture Assembly
          </header>
          <header className="text-2xl text-gray-700">-Move Applicances</header>
          <header className="text-2xl text-gray-700">
            -Install Appliances
          </header>
          <header className="text-2xl text-gray-700">-Weed Maintenance</header>
          <header className="text-2xl text-gray-700">-Junk Removal</header>
        </section>

        <section id="#contact-form"></section>
        <header className="text-2xl text-white font-bold bg-gray-700 text-center">
            Get in contact via email with us here. Please allow up to 24 hours
            for dR CleaN House to respond.{" "}
          </header>
        <ContactForm></ContactForm>
      </section>
      {/* Desktop View  */}
      <section className=" hidden md:flex w-full h-auto bg-white flex-col items-center ">
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
          <button onClick={() => router.push("../")}>
            View Our Cleaning Services
          </button>
          <div className="relative inline-block">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 bg-green-900 text-white rounded"
            >
              Menu
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("bathroom")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Bathroom
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black "
                  onClick={() =>
                    document
                      .getElementById("kitchen")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Kitchen
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("flooring")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Flooring
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("exterior")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Exterior
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Painting
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Trim
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("painting")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Casing
                </button>
                <button
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
                  onClick={() =>
                    document
                      .getElementById("flooring")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
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
            <section
              className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg"
              id="bathroom"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/bathroom.jpeg')",
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
            <div className="pl-4 flex flex-col">
              <header className="text-5xl text-gray-700 font-bold">
                We Offer:
              </header>
              <div className="flex flex-row">
                <section className="flex flex-col pr-8 gap-4">
                  <header className="text-3xl text-gray-700">
                    Complete Remodeling
                  </header>

                  <header className="text-3xl text-gray-700">Toilets</header>

                  <header className="text-3xl text-gray-700">Vanity</header>

                  <header className="text-3xl text-gray-700">Fixtures</header>
                  <header className="text-3xl text-gray-700">
                    Tub Installation
                  </header>

                  <header className="text-3xl text-gray-700">
                    Shower Installation
                  </header>
                </section>

                <section className="flex flex-col pl-2 pr-8 gap-4">
                  <header className="text-3xl text-gray-700">
                    Medicine Cabinet
                  </header>

                  <header className="text-3xl text-gray-700">Mirros</header>
                  <header className="text-3xl text-gray-700">
                    Shower Pans
                  </header>

                  <header className="text-3xl text-gray-700">
                    Light Fixtures{" "}
                  </header>
                  <header className="text-3xl text-gray-700">
                    Exhaust Fan
                  </header>

                  <header className="text-3xl text-gray-700">Sink</header>
                </section>

                <section className="flex flex-col pl-2 gap-4 pr-4">
                  <header className="text-3xl text-gray-700">Faucet</header>
                  <header className="text-3xl text-gray-700">
                    Shower Valve
                  </header>
                </section>
              </div>
            </div>
          </section>

          <hr className="my-6 border-gray-300" />
          {/* Kitchen */}
          <section className="flex flex-row " id="kitchen">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/kitchen2.avif')",
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
            <div className="pl-4 flex flex-col">
              <header className="text-5xl text-gray-700 font-bold">
                We Offer:
              </header>
              <div className="flex flex-row">
                <section className="flex flex-col pr-8 gap-4">
                  <header className="text-3xl text-gray-700">Cabinets</header>

                  <header className="text-3xl text-gray-700">Tile</header>

                  <header className="text-3xl text-gray-700">
                    Counter Tops
                  </header>

                  <header className="text-3xl text-gray-700">Sink</header>
                  <header className="text-3xl text-gray-700">Faucet </header>

                  <header className="text-3xl text-gray-700">
                    Garbade Disposal
                  </header>
                </section>

                <section className="flex flex-col pl-2 pr-8 gap-4">
                  <header className="text-3xl text-gray-700">Flooring</header>

                  <header className="text-3xl text-gray-700">
                    Back Splash
                  </header>
                  <header className="text-3xl text-gray-700">Lighting</header>

                  <header className="text-3xl text-gray-700">
                    Electrical{" "}
                  </header>
                  <header className="text-3xl text-gray-700">Hood</header>
                </section>

                <section className="flex flex-col pl-2 gap-4 pr-4"></section>
              </div>
            </div>
          </section>
          <hr className="my-6 border-gray-300" />
          {/* Exterior */}
           <section className="flex flex-row " id="exterior">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/SmallHouseExteriors.jpg')",
                }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50" />

              {/* Content above overlay */}
              <header className="relative z-10 text-white text-4xl font-bold">
                Exterior
              </header>
              <section
                id="house-cleaning"
                className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
              ></section>
            </section>
            <div className="pl-4 flex flex-col">
              <header className="text-5xl text-gray-700 font-bold">
                We Offer:
              </header>
              <div className="flex flex-row">
                <section className="flex flex-col pr-8 gap-4">
                  <header className="text-3xl text-gray-700">Paint</header>

                  <header className="text-3xl text-gray-700">Stucco</header>

                  <header className="text-3xl text-gray-700">
                    Siding
                  </header>

                  <header className="text-3xl text-gray-700">Windows</header>
                  <header className="text-3xl text-gray-700">Doors </header>

                  <header className="text-3xl text-gray-700">
                   Decks
                  </header>
                </section>

                <section className="flex flex-col pl-2 pr-8 gap-4">
                  <header className="text-3xl text-gray-700">Cement</header>

                  <header className="text-3xl text-gray-700">
                    Artificial Grass
                  </header>
                  <header className="text-3xl text-gray-700">Lighting</header>

                  <header className="text-3xl text-gray-700">
                    Outlets{" "}
                  </header>
                  <header className="text-3xl text-gray-700">Retaining Wall</header>
                                    <header className="text-3xl text-gray-700">Pavers</header>

                </section>
                <section className="flex flex-col pl-2 pr-8 gap-4">
                  <header className="text-3xl text-gray-700">Pavers</header>

                  <header className="text-3xl text-gray-700">
                    Patio Covers
                  </header>
                  <header className="text-3xl text-gray-700">Low Voltage Lighting</header>

                  <header className="text-3xl text-gray-700">
                    Irrigation{" "}
                  </header>
                  <header className="text-3xl text-gray-700">Fence</header>
                                    

                </section>

                <section className="flex flex-col pl-2 gap-4 pr-4"></section>
              </div>
            </div>
          </section>
          <hr className="my-6 border-gray-300" />
          {/* Flooring */}
          <section className="flex flex-row  " id="flooring">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/flooring.jpg')",
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
                Flooring
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
              <header className="text-3xl text-gray-700">
                Furniture Assembly
              </header>

              <header className="text-3xl text-gray-700">
                Move Appliances
              </header>

              <header className="text-3xl text-gray-700">
                Install Appliances
              </header>

              <header className="text-3xl text-gray-700">
                Weed Maintenance
              </header>
              <header className="text-3xl text-gray-700">Junk Removal</header>
            </section>

            <section className="flex flex-col pl-2 gap-4 pr-4"></section>
          </section>
          <hr className="my-6 border-gray-300" />

          {/* Paint, Trim, Casing */}
          <section className="flex flex-row  " id="painting">
            <section className="overflow-hidden relative h-100 w-125 flex flex-col items-center justify-center border border-white rounded-lg ">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/Painting.jpeg')",
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
          <header className="text-gray-700 text-5xl pb-2">
            Talk to us for a quote on any service.
          </header>
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
