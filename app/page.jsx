import Image from "next/image";
import WelcomeSection from "./components/WelcomeSection";
import Carrousel from "./components/Carrousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-gradient-to-t from-[#fad0c4] to-[#ffd1ff] ">
        <WelcomeSection />
      </div>
      <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-yellow-100 ">
        <Carrousel />
      </div>
      {/* <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-purple-200 ">
        <WelcomeSection />
      </div>
      <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-pink-300 ">
        <WelcomeSection />
      </div> */}
    </main>
  );
}