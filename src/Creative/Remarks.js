import React from "react";
import AboutJayson from "../Assets/AboutJayson.png";

function Remarks() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="text-responsiveBanner2 flex flex-col justify-center items-center">
          <div className="flex">
            <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
            <div>CREATIVE</div>
          </div>
          <div className="flex">
            <div>twists</div>
            <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
          </div>
          <div className="flex">
            <div>REMARKABLE</div>
          </div>
          <div className="flex">
            <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
            <div>impacts</div>
            <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center text-responsiveBanner">
          <div>
            <div className="font-bold">
              MEET THE MIND
              <br />
              BEHIND THE <span className="text-[#DB0102]">MAGIC</span>
            </div>
            <div className="text-responsiveParagraph">
              Hey there! 👋 I'm SanSan, your friendly neighborhood graphic
              designer with a passion for turning pixels into masterpieces.
              Armed with a keyboard in one hand and a paintbrush in the other,
              I'm on a mission to make the world a little more colorful-one
              design at a time.
            </div>
            <button className="flex flex-row justify-center items-center text-responsiveParagraph2 w-fit border-solid border-[2px] rounded-full">
              View More
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 22L23 2M23 2H3M23 2V22"
                  stroke="#F5F5F5"
                  stroke-width="3"
                  stroke-linecap="square"
                />
              </svg>
            </button>
          </div>
          <div>
            <img
              src={AboutJayson}
              alt="Meeet Jayson"
              className="w-[1439px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Remarks;
