"use client";
import Hero from "@/components/Hero";
import Image from "@/node_modules/next/image";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-white-1500">
      <header className="w-full bg-white-1500 mb-24 md:mb-16">
        <div className="container">
          <Image
            src="/images/logo_RR_only_cropped.jpg"
            alt="Logo"
            width={150}
            height={150}
            className="w-auto h-[80px] md:h-[80px]"
          />
        </div>
      </header>
      <main className="justify-center items-center">
        <Hero />
      </main>
    </div>
  );
};

export default Home;