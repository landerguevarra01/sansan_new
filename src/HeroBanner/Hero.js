import React, { useState } from "react";
import JaysonLogo from "../Assets/SANSAN_LOGO_1080.png";
import JaysonGif from "../Assets/JAYSON_ANIMATED.gif";
import "../App.css";

function Hero() {
  const [imageSrc, setImageSrc] = useState(JaysonLogo);
  return (
    <>
      <div
        className="flex flex-col justify-center item-center text-center text-[30px] 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] mt-8"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            src={imageSrc}
            onMouseEnter={() => setImageSrc(JaysonGif)}
            onMouseLeave={() => setImageSrc(JaysonLogo)}
            alt="Jayson Icon"
            className="w-[120px] 2xl:w-[270px] xl:w-[230px] lg:w-[200px] md:w-[170px] sm:w-[130px] h-auto"
          />
        </div>
        <div>HEY THERE! I’M SANSAN, A</div>
        <div className="flex flex-col justify-center items-center">
          <button className="w-fit flex justify-center items-center gap-4 border-[#DB0102] border-solid bg-[#DB0102] hover:border-[#B0B0B0] hover:border-solid hover:bg-[#B0B0B0] text-[#1D1D1D] rounded-full px-10 hover:scale-105 transition-transform ease-in-out duration-300">
            GRAPHIC DESIGNER
            <svg
              className="-mt-8"
              width="32"
              height="32"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 36L38 4M38 4H6M38 4V36"
                stroke="#1E1E1E"
                stroke-width="8"
                stroke-linecap="square"
              />
            </svg>
          </button>
        </div>
        <div
          className=""
          style={{
            fontFamily: "Roxborough CF",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Welcome to my creative space!
        </div>
        <div className="flex flex-row justify-center items-center">
          GOT A PROJECT IN MIND?
          <span>
            <div>
              <button className="w-fit flex flex-row justify-center items-center gap-4 border-[#B0B0B0] border-solid bg-[#B0B0B0] hover:border-[#DB0102] hover:border-solid hover:bg-[#DB0102] text-[#1D1D1D] rounded-full px-10 ml-4 hover:scale-105 transition-transform ease-in-out duration-300">
                LET’S CHAT
                <div className="-mt-8">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 36L38 4M38 4H6M38 4V36"
                      stroke="#1E1E1E"
                      stroke-width="8"
                      stroke-linecap="square"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Hero;
