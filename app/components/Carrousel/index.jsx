/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Carousel } from "flowbite-react";

const photos = [
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    alt: "...",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    alt: "...",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    alt: "...",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    alt: "...",
  },
];

function Carrousel() {
  return (
    <div className=" h-4/5">
      <h1 className=" mb-5 font-bold text-4xl text-orange-500">PICS</h1>
      <Carousel slideInterval={5000}>
        {photos.map((photo, index) => (
          <img key={index} src={photo.src} alt={photo.alt} />
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;
