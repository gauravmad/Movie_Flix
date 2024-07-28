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

  return (
    <div className="shadow-md bg-[#fff]">
      {/* <BackdropLoader open={loading} />   */}
      <div className="py-[1vh] w-[90%] mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <Image
            width={150}
            height={50}
            src="/logo.jpg"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex flex-row rounded-md overflow-hidden border-2 border-[#4f4f4f]">
          <input
            type="text"
            placeholder="Search Movies, series, animes here.."
            className="px-[2vh] py-[1vh] focus:outline-none  w-[30vw] text-[2.3vh]"
          />
          <button className="bg-[#f5c518] px-[2vh] py-[1vh] text-[2.3vh]">
            <Image src="/search.png" width={20} height={20} />
          </button>
        </div>

        <button className="bg-[#f5c518] px-[2vh] py-[1vh] hover:scale-110 duration-300 transition-all font-semibold text-[2.3vh]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
