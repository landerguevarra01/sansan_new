import React from "react";

function Footer() {
  const socialLinks = [
    { name: "BEHANCE", url: "https://www.behance.net/jaysonsanagu2" },
    {
      name: "FACEBOOK",
      url: "https://www.facebook.com/sanagustinjayson.creatives",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/sanagustinjayson.creatives/",
    },
  ];
  return (
    <>
      <div
        className="flex flex-col text-responsiveFoot w-[1207px] mb-8"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="text-[180px]">©2024</div>
          <div className="flex flex-col text-responsiveNav gap-4 -mt-20">
            <button
              className=" border-[2px] border-solid rounded-full px-4 hover:bg-[#DB0102] hover:border-[#DB0102]"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              sanagustinjayson.creatives@gmail.com
            </button>
            <div
              className="flex flex-row justify-between"
              style={{
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontStyle: "normal",
              }}
            >
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="cursor-pointer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-[180px] -mt-24">SANSAN.GRAPHICS</div>
        <div
          className="flex flex-row justify-between items-center text-responsiveNav"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          <a href="https://www.facebook.com/lander.guevarra.9">
            CODED BY: LANDER GUEVARRA
          </a>
          {
            // This is a single-line comment
          }
          <div>LAST UPDATED: 11/12/2024</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
