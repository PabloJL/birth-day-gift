"use client";
import { Button, Card } from "flowbite-react";
import { FaSpotify } from "react-icons/fa";

const songs = [
  {
    imgUrl: "https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0",
    songUrl: "https://open.spotify.com/intl-es/track/3AJwUDP919kvQ9QcozQPxg",
    song: "Yellow",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Cigarettes_After_Sex_-_Apocalypse.png",
    songUrl: "https://open.spotify.com/intl-es/track/0yc6Gst2xkRu0eMLeRMGCX",
    song: "Apocalypse",
  },
  {
    imgUrl: "https://i.scdn.co/image/ab67616d0000b27308c3459da0ec44b7e790555d",
    songUrl: "https://open.spotify.com/intl-es/track/5t6GawlTh3qmDpncM495yl",
    song: "More than a fever",
  },
  {
    imgUrl: "https://f4.bcbits.com/img/a2411729190_10.jpg",
    songUrl: "https://open.spotify.com/intl-es/track/6kkeI0X5UUHzpAC2UX9g99",
    song: "I Wanna Love",
  },
];

function SongsSection() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className=" text-5xl pb-20 font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c471f5] to-[#fa71cd] hover:bg-slate-200 ">
          SONGS 4 YOU
        </span>
      </h1>
      <div className="flex flex-col justify-center gap-20 md:flex-row">
        {songs.map((song, index) => (
          <Card
            key={index}
            className=" max-w-80 hover:scale-125"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={song.imgUrl}
          >
            <div className="flex justify-between items-center">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {song.song}
              </h5>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={song.songUrl}
                className="font-normal text-gray-700 dark:text-gray-400"
              >
                <FaSpotify className="text-2xl" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SongsSection;
