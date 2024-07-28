import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BackdropLoader from "./BackdropLoader";

const Navbar = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearch =()=>{
    if(searchTerm.trim()){
      router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  }

  return (
    <div className="shadow-md bg-[#fff]">
      {/* <BackdropLoader open={loading} />   */}
      <div className="py-[2vh] lg:py-[1vh] w-[90%] mx-auto flex flex-row justify-between items-center">
        
        <Link href="/">
          <img
            src="/logo.jpg"
            className="cursor-pointer w-[12vh] lg:w-[20vh]"
          />
        </Link>

        <div className="flex flex-row rounded-md overflow-hidden border-2 border-[#4f4f4f]">
          <input
            type="text"
            placeholder="Search Movies, series, animes here.."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="px-[1vh] lg:px-[2vh] py-[0.6vh] lg:py-[1vh] focus:outline-none w-[45vw] lg:w-[30vw] text-[1.8vh] lg:text-[2.3vh]"
          />
          <button 
            onClick={handleSearch}
            className="bg-[#f5c518] px-[1vh] lg:px-[2vh] py-[0.6vh] lg:py-[1vh]"
          >
            <Image src="/search.png" width={15} height={15} />
          </button>
        </div>

        <button className="contact bg-[#f5c518] px-[2vh] py-[1vh] hover:scale-110 duration-300 transition-all font-semibold text-[2.3vh]">
          Contact Us
        </button>

      </div>
    </div>
  );
};

export default Navbar;
