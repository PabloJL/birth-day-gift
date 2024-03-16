import Image from "next/image";
import WelcomeSection from "./components/WelcomeSection";
import Carrousel from "./components/Carrousel";
import CardSection from "./components/Card";
import FooterSection from "./components/Footer";
import SongsSection from "./components/Songs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-gradient-to-t from-[#fad0c4] to-[#ffd1ff] ">
        <WelcomeSection />
      </div>
      <div className=" mx-auto px-20 py-5 h-screen w-full content-center bg-purple-300 ">
        <Carrousel />
      </div>
      <div className=" mx-auto px-20 py-5  md:h-screen h-auto w-full content-center bg-pink-300 ">
        <SongsSection />
      </div>
      <div className=" mx-auto px-20 py-5 md:h-screen h-auto  w-full content-center  bg-yellow-100 ">
        <CardSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </main>
  );
}
