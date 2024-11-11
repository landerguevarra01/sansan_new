import React from "react";
import AboutJayson from "../Assets/AboutJayson.png";

function Remarks() {
  return (
    <>
      <div>
        <div>
          <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
          <div>CREATIVE</div>
        </div>
        <div>
          <div>twists</div>
          <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
        </div>
        <div>
          <div>REMARKABLE</div>
        </div>
        <div>
          <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
          <div>impacts</div>
          <div className="w-[231px] h-[128px] bg-[#D9D9D9]" />
        </div>
      </div>
      <div>
        <div>
          <div>
            MEET THE MIND
            <br />
            BEHIND THE <span>MAGIC</span>
          </div>
          <div>
            Hey there! 👋 I'm SanSan, your friendly neighborhood graphic
            designer with a passion for turning pixels into masterpieces. Armed
            with a keyboard in one hand and a paintbrush in the other, I'm on a
            mission to make the world a little more colorful-one design at a
            time.
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src={AboutJayson} alt="Meeet Jayson" />
        </div>
      </div>
    </>
  );
}

export default Remarks;
