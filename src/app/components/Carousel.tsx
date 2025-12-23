"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const images: string[] = [
  "/deep-clean-house-hero.webp",
  "/deep-clean-house-hero.webp",
  "/deep-clean-house-hero.webp",
];

export default function Carousel() {
  const canLoop = images.length > 1;

  return (
    <div className="w-auto max-w-3xl mx-auto py-8 ">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={canLoop}
        slidesPerView={1}        // One image at a time
        spaceBetween={20}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className=" w-auto aspect-[16/9]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                priority={index === 0}
              />
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
