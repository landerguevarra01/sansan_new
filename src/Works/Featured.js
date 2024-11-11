import React from "react";

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
    <div className="text-responsiveBanner">
      <div className="font-bold">
        FEATURED <span className="text-[#DB0102]">WORKS</span>
      </div>
      <div className="text-responsiveParagraph">
        Let's make your brand the star of the show. Check out my works to see
        the fun unfold, and let's create something spectacular together!
      </div>
      {works.map((work) => (
        <div key={work.id} className="flex flex-row gap-12">
          <div>{work.id}</div>
          <div className="font-bold">{work.title}</div>
          <div className="absolute right-0 mr-20">
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
      ))}
    </div>
  );
}

export default Featured;
