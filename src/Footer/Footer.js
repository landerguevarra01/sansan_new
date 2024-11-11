import React from "react";

function Footer() {
  const socialLinks = [
    { name: "BEHANCE", url: "#" },
    { name: "FACEBOOK", url: "#" },
    { name: "INSTAGRAM", url: "#" },
  ];
  return (
    <>
      <div className="text-responsiveFoot font-bold">
        <div className="flex flex-row justify-between items-center">
          <div>©2024</div>
          <div className="flex flex-col text-responsiveNav">
            <button className=" border-[2px] border-solid rounded-full">
              sanagustinjayson.creatives@gmail.com
            </button>
            <div className="flex flex-row justify-between">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="cursor-pointer">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="">SANSAN.GRAPHICS</div>
        <div className="flex flex-row justify-between items-center text-responsiveNav">
          <div>CODED BY: LANDER GUEVARRA</div>
          {
            // This is a single-line comment
          }
          <div>LAST UPDATED: 08/17/2024</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
