import JaysonIcon from "../Assets/jaysonicon.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center item-center text-center text-[80px] font-bold mt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={JaysonIcon} alt="Jayson Icon" className="max-w-[230px]" />
        </div>
        <div>HEY THERE! I’M SANSAN, A</div>
        <div>
          <button className="w-fit border-[#DB0102] border-solid bg-[#DB0102] rounded-full">
            GRAPHIC DESIGNER
          </button>
        </div>
        <div className="">Welcome to my creative space!</div>
        <div className="flex flex-row justify-center items-center">
          <div className="">GOT A PROJECT IN MIND?</div>
          <div>
            <button className="w-fit border-[#B0B0B0] border-solid bg-[#B0B0B0] rounded-full">
              LET’S CHAT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
