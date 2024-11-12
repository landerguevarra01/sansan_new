import React from "react";
import "../App.css";

function Featured() {
  const works = [
    { id: "01", title: "AMAZON LISTING" },
    { id: "02", title: "BANNERS" },
    { id: "03", title: "BOOTH DESIGN" },
    { id: "04", title: "BRANDING" },
    { id: "05", title: "LED VISUALS" },
    { id: "06", title: "SOCIAL MEDIA POSTS" },
    { id: "07", title: "WEBSITE DESIGN" },
  ];

  return (
    <div
      className="text-responsiveBanner relative w-[1207px]"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <div className="">
        FEATURED{" "}
        <span
          className="text-[#DB0102]"
          style={{
            fontFamily: "Roxborough CF",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Works
        </span>
      </div>
      <div
        className="text-responsiveParagraph"
        style={{
          fontFamily: "Helvetica",
          fontWeight: "normal",
          fontStyle: "normal",
        }}
      >
        Let's make your brand the star of the show. Check out my works to <br />
        see the fun unfold, and let's create something spectacular together!
      </div>
      <div className="divider" />
      {works.map((work) => (
        <>
          <div
            key={work.id}
            className="flex flex-row items-center gap-12 cursor-pointer hover:scale-105 transform transition-all duration-300"
          >
            <div
              className=""
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {work.id}
            </div>
            <div className="">{work.title}</div>
            <div className="absolute right-0 -mt-8">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 36.0001L38 4.00012M38 4.00012H6M38 4.00012V36.0001"
                  stroke="#F3F3F3"
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          <div className="divider" />
        </>
      ))}
    </div>
  );
}

export default Featured;
