/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { AiFillPicture } from "react-icons/ai";

const photos = [
  {
    src: "/assets/images/hb3.jpg",
    alt: "...",
  },
  {
    src: "/assets/images/hb2.jpg",
    alt: "...",
  },
  {
    src: "/assets/images/hb1.jpg",
    alt: "...",
  },
  {
    src: "/assets/images/hb4.jpg",
    alt: "...",
  },
];

function Carrousel() {
  return (
    <div className="h-4/5 flex flex-col items-center justify-center">
      <h1 className=" text-5xl pb-20 font-bold flex flex-row  gap-5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:bg-slate-200 ">
          P I C T U R E S
        </span>
        <AiFillPicture className="text-[#667eea]" />
      </h1>
      <Carousel slideInterval={5000}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="object-contain h-3/4 w-1/2"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;
