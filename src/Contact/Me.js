import React from "react";

function Me() {
  return (
    <>
      <div
        className="text-responsiveBanner flex justify-between w-[1207px]"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        <div>
          LET'S MAKE THIS
          <br />
          MONOCHROMATIC WORLD
          <br />
          <span
            className="font-normal"
            style={{
              fontFamily: "Roxborough CF",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            a <span className="text-[#DB0102]">colorful one.</span>
          </span>
        </div>
        <div className="text-responsiveParagraph2 flex flex-col justify-center items-center">
          <button className="flex flex-row justify-center items-center text-responsiveParagraph2 w-fit border-solid border-[2px] rounded-full mt-20 px-8 py-2 gap-4 hover:bg-[#DB0102] hover:border-[#DB0102]">
            Contact
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
      </div>
    </>
  );
}

export default Me;
