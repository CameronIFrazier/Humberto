"use client";


import { useRouter } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline"; // example icon
import ContactForm from "./components/ContactFrom";
import ContactFormDesktop from "./components/ContactFormDesktop";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [cleaning, setCleaning] = useState(true);
  const [construction, setConstruction] = useState(false);
   const [open, setOpen] = useState(false);
 const router = useRouter();
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
              {/* QUICK EMAIL 
              <a href="mailto:dRCleanHouse@gmail.com?subject=Quote Request&body=Hi, I would like a quote.">
  Email Us
</a> */}

              <header className="text-white text-sm ">900-509-6815</header>
            </div>
          </div>
          <button onClick={() => router.push("../constructionPage")} className="mt-4 text-orange-300 ">
            View Our Construction Services
          </button>
          <div className="relative inline-block z-11 mt-2">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-green-900 text-white rounded"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#bathroom")}>
            Bathroom
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black " onClick={()=>router.push("./constructionPage#kitchen")}>
            Kitchen
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#flooring")}>
            Flooring
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#exterior")}>
            Exterior
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("/constructionPage#painting")}>
            Painting
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#painting")}>
            Trim
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#painting")}>
            Casing
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#flooring")}>
            Extra Services 
          </button>
        </div>
      )}
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
            <p className="text-white text-4xl font-bold">Special Services</p>
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
            <header className="text-2xl">And Much More! </header>
          </div>
        </section>

        {/*services section end*/}
        {/* Content Section end*/}

        <section id="#contact-form"></section>
        <header className="text-2xl text-white font-bold bg-gray-700 text-center">
            Get in contact via email with us here. Please allow up to 24 hours
            for dR CleaN House to respond.{" "}
          </header>
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
            We serve the Inland Empire, Orange County, and Los Angeles areas{" "}
          </header>
          <button onClick={() => router.push("../constructionPage")}>View Our Construction Services</button>
          <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-green-900 text-white rounded"
      >
        Menu
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#bathroom")}>
            Bathroom
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black " onClick={()=>router.push("./constructionPage#kitchen")}>
            Kitchen
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#flooring")}>
            Flooring
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#exterior")}>
            Exterior
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("/constructionPage#painting")}>
            Painting
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#painting")}>
            Trim
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#painting")}>
            Casing
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black" onClick={()=>router.push("./constructionPage#flooring")}>
            Extra Services 
          </button>
        </div>
      )}
    </div>
        </section>

        {/* Gray bar Section end */}

        {/*services section begin*/}

        <section className="flex flex-col justify-center items-center w-full bg-white-">
          <section className="w-[80%] flex flex-row">
            <section className="flex flex-col gap-4 pb-4">
              <header className="text-6xl font-bold text-gray-700 mt-4">
                House Cleaning Services
              </header>
              <section className="flex flex-row">
                <section className="overflow-hidden relative h-125 w-200 flex flex-col items-center justify-center border border-white rounded-lg">
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
                <section className="flex flex-col gap-4 pl-4">
                  <header className="text-6xl text-gray-700">
                    Regular Cleanings
                  </header>
                  <p className="text-black">
                    Keep your home consistently fresh with routine cleaning
                    services tailored to your schedule. We handle dusting,
                    vacuuming, mopping, and surface cleaning to maintain a
                    healthy living space.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Deep Cleaning
                  </header>
                  <p className="text-black">
                    A thorough top-to-bottom cleaning that targets built-up
                    dirt, grime, and hard-to-reach areas. Ideal for seasonal
                    refreshes or homes that need extra attention.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Move In/Out
                  </header>
                  <p className="text-black">
                    Ensure a spotless start or a stress-free move with detailed
                    cleaning designed for empty homes. We prepare spaces for new
                    occupants or help you leave your place in pristine
                    condition.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Post Construction
                  </header>
                  <p className="text-black">
                    Remove dust, debris, and construction residue after
                    renovations or new builds. Our team leaves your space clean,
                    polished, and ready to enjoy.
                  </p>
                </section>
              </section>
            </section>
          </section>
<hr className="border-gray-700 w-[80%] my-8 border-t-2 "></hr>
          <section className="w-[80%] flex flex-row">
            <section className="flex flex-col gap-4 pb-4">
              <header className="text-6xl font-bold text-gray-700">
                Special Services
              </header>
              <section className="flex flex-row pr-4">
                <section className="flex flex-col gap-4">
                  <header className="text-6xl text-gray-700">Painting</header>
                  <p className="text-black">
                    Professional interior and exterior painting services that
                    refresh and protect your space. We deliver clean lines, even
                    coverage, and long-lasting results.
                  </p>

                  <header className="text-6xl text-gray-700">Drywall</header>
                  <p className="text-black">
                    Expert drywall installation and repair for smooth, seamless
                    walls and ceilings. Our work prepares your space perfectly
                    for paint or finishing.
                  </p>

                  <header className="text-6xl text-gray-700">Flooring</header>
                  <p className="text-black">
                    Quality flooring installation and replacement to improve
                    comfort, durability, and style. We work with a variety of
                    materials to match your vision.
                  </p>

                  <header className="text-6xl text-gray-700">Concrete</header>
                  <p className="text-black">
                    Reliable concrete services for patios, walkways, and
                    structural surfaces. Built to withstand daily use while
                    enhancing your property’s appearance.
                  </p>
                </section>
                <section className="overflow-hidden relative h-125 w-200 flex flex-col items-center justify-center border border-white rounded-lg">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/painted-house.jpg')",
                    }}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 " />

                  {/* Content above overlay */}
                  <section
                    id="house-cleaning"
                    className="relative z-10 flex flex-col items-center justify-center gap-2 p-4 text-center"
                  ></section>
                </section>
              </section>
            </section>
          </section>
          <section className="w-[80%] flex flex-row">
            <section className="flex flex-col gap-4 pb-4">
              <section className="flex flex-row">
                <section className="overflow-hidden relative h-125 w-200 flex flex-col items-center justify-center border border-white rounded-lg">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/popcorn-ceiling.avif')",
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
                <section className="flex flex-col gap-4 pl-4">
                  <header className="text-6xl text-gray-700">
                    Popcorn Ceiling Removal
                  </header>
                  <p className="text-black">
                    Safe and efficient popcorn ceiling removal to modernize your
                    home. We leave behind a smooth, clean finish ready for paint
                    or texture.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Decks and Porches
                  </header>
                  <p className="text-black">
                    Custom deck and porch construction designed to extend your
                    outdoor living space. We focus on durability, safety, and
                    visual appeal.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Kitchen Remodeling
                  </header>
                  <p className="text-black">
                    Complete kitchen remodeling services tailored to your needs
                    and style. From layout to finishes, we create functional and
                    beautiful kitchens.
                  </p>

                  <header className="text-6xl text-gray-700">
                    Bath Remodeling
                  </header>
                  <p className="text-black">
                    Bathroom remodeling solutions that enhance comfort,
                    function, and design. We transform outdated bathrooms into
                    clean, modern spaces.
                  </p>
                </section>
              </section>
            </section>
          </section>
          <hr className="border-gray-700 w-[80%] my-8 border-t-2 "></hr>
          <header className="text-6xl text-gray-700">And Much More...</header>
          <p className="text-black mb-4">
            Get in contact to discuss your specific needs and see how we can
            help!
          </p>
        </section>

        {/*services section end*/}
        {/* Content Section end*/}

        <section
          id="contact-form"
          className="w-full bg-gray-700 flex flex-row justify-center items-center p-8"
        >
          <header className="text-5xl text-white font-bold ">
            Get in contact via email with us here. Please allow up to 24 hours
            for dR CleaN House to respond.{" "}
          </header>
          <ContactFormDesktop></ContactFormDesktop>
        </section>

        {/** End of wrapper section */}
      </section>
    </>
  );
}
