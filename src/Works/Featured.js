import React, { useState } from "react";
import "../App.css";

function Featured() {
  const works = [
    {
      id: "01",
      title: "AMAZON LISTING",
      description: "Description for AMAZON LISTING",
    },
    { id: "02", title: "BANNERS", description: "Description for BANNERS" },
    {
      id: "03",
      title: "BOOTH DESIGN",
      description: "Description for BOOTH DESIGN",
    },
    { id: "04", title: "BRANDING", description: "Description for BRANDING" },
    {
      id: "05",
      title: "LED VISUALS",
      description: "Description for LED VISUALS",
    },
    {
      id: "06",
      title: "SOCIAL MEDIA POSTS",
      description: "Description for SOCIAL MEDIA POSTS",
    },
    {
      id: "07",
      title: "WEBSITE DESIGN",
      description: "Description for WEBSITE DESIGN",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="text-responsiveBanner relative w-[1207px]"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <div>
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
      {works.map((work, index) => (
        <div key={work.id}>
          <div
            className="flex flex-row items-center gap-12 cursor-pointer hover:scale-105 transform transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div
              style={{
                fontFamily: "Roxborough CF",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {work.id}
            </div>
            <div>{work.title}</div>
            <div className="absolute right-0 -mt-8">
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M6 36.0001L38 4.00012M38 4.00012H6M38 4.00012V36.0001"
                  stroke={openIndex === index ? "#DB0102" : "#F3F3F3"}
                  strokeWidth="8"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          {openIndex === index && (
            <div className="accordion-content transform transition-transform ease-in-out duration-500 mt-4 text-gray-600">
              {work.description}
            </div>
          )}
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}

export default Featured;
