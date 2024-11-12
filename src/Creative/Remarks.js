import React from "react";
import AboutJayson from "../Assets/AboutJayson.png";
import "../App.css";
import { WavingHand } from "@tensaye-yuan/react-waving-hand";
import "@tensaye-yuan/react-waving-hand/dist/index.css";

// import Marquee from "react-fast-marquee";

function Remarks() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-row gap-12 justify-center items-center text-responsiveBanner w-[1207px]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          <div>
            MEET THE MIND
            <br />
            BEHIND THE{" "}
            <span
              className="text-[#DB0102]"
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Magic
            </span>
            <div
              className="text-responsiveParagraph"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "normal",
                fontStyle: "normal",
              }}
            >
              Hey there!{" "}
              <WavingHand loop={0} motion={true} size="2.5rem" type={3} /> I'm
              SanSan, your friendly neighborhood graphic designer with a passion
              for turning pixels into masterpieces. Armed with a keyboard in one
              hand and a paintbrush in the other, I'm on a mission to make the
              world a little more colorful-one design at a time.
            </div>
            <button
              className="flex flex-row justify-center items-center text-responsiveParagraph2 w-fit border-solid border-[2px] rounded-full px-8 py-2 gap-4 mt-12 hover:bg-[#DB0102] hover:border-[#DB0102]"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              View More
              <svg
                width="20"
                height="20"
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
        <div className="divider" />
      </div>
    </>
  );
}

export default Remarks;
