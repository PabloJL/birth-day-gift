"use client";
import { TypeAnimation } from "react-type-animation";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function WelcomeSection() {
  return (
    <section className="lg:py-16 ">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center lg:text-left lg:justify-self-start"
        >
          <h1 className="text-white mb-4 text-6xl sm:text-7xl lg:text-7xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 hover:bg-slate-200 ">
              Happy{" "}
            </span>
            <br />
            <TypeAnimation
              className="text-[#a1c4fd]"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                " Birthday!!",
                2000,
                " 24!!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-5xl lg:text-5xl mb-8 font-bold text-[#a18cd1]">
            Mi amor 💝
          </p> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-4 place-content-center mt-10 lg:mt-0 mx-auto lg:place-content-start text-center relative inline-block"
        >
          <div className="flex justify-center bg-gradient-to-b from-[#ff9a9e] rounded-full  w-[400px] h-[390px] relative overflow-hidden  ">
            <Image
              src="/assets/images/cake.svg"
              alt="me"
              width={250}
              height={250}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WelcomeSection;
