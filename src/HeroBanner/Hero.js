import JaysonIcon from "../Assets/jaysonicon.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center text-responsiveBanner font-bold mt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={JaysonIcon} alt="Jayson Icon" className="" />
        </div>
        <div>HEY THERE! I’M SANSAN, A</div>
        <div>
          <button className="w-fit flex flex-row justify-center items-center border-[#DB0102] border-solid bg-[#DB0102] rounded-full">
            GRAPHIC DESIGNER
            <div className="-mt-8">
              <svg
                width="42"
                height="42"
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
          <div className="">GOT A PROJECT IN MIND?</div>
          <div>
            <button className="w-fit flex flex-row justify-center items-center border-[#B0B0B0] border-solid bg-[#B0B0B0] rounded-full">
              LET’S CHAT
              <div className="-mt-8">
                <svg
                  width="42"
                  height="42"
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
        </div>
      </div>
    </>
  );
}

export default Hero;
