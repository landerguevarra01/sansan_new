import JaysonIcon from "../Assets/jaysonicon.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center text-responsiveBanner font-bold mt-40 -tracking-wider">
        <div className="flex flex-col justify-center items-center">
          <img src={JaysonIcon} alt="Jayson Icon" className="" />
        </div>
        <div>HEY THERE! I’M SANSAN, A</div>
        <div className="flex flex-col justify-center items-center">
          <button className="w-fit flex justify-center items-center gap-4 border-[#DB0102] border-solid bg-[#DB0102] text-[#1D1D1D] rounded-full px-10">
            GRAPHIC DESIGNER
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
        <div className="">Welcome to my creative space!</div>
        <div className="flex flex-row justify-center items-center">
          GOT A PROJECT IN MIND?
          <span>
            <div>
              <button className="w-fit flex flex-row justify-center items-center gap-4 border-[#B0B0B0] border-solid bg-[#B0B0B0] text-[#1D1D1D] rounded-full px-10 ml-4">
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
