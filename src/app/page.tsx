"use client"
import React from "react";
import FormSub from "./components/Set";
import Header from "./components/Header";
import { BackgroundBeams } from "./bg";

import Image from "next/image";


function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-white text-center mb-12">
          Ferris is proud of You!!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image src="/images/Rustcert.png" className="w-96 max-w-full rounded-2xl" alt="Graduation" width={384} height={384} />
          <div className="flex flex-col items-center justify-around">
            <h2 className="text-xl font-bold text-white text-center  mb-4">
              Enter your Solana Wallet address to check eligibility
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FormSub/>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams/>
    </>
  );
}

export default Home;
