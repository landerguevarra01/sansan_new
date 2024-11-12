import SANSANICON from "../Assets/SANSAN.png";

function Menu() {
  const scrollToTop = (offset = 0) => {
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };
  return (
    <header className="flex justify-between items-center text-responsiveNav w-full">
      <div className="flex items-center">
        <img
          src={SANSANICON}
          alt="SANSAN Logo"
          className="h-[82px] w-auto cursor-pointer"
          onClick={scrollToTop}
        />
      </div>

      <nav className="flex gap-8">
        {["HOME", "PROJECTS", "ABOUT", "CONTACT"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              if (item === "HOME") {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToTop(1000); // Scroll to top with 20px offset
              }
            }}
            className="border-solid border-[2px] rounded-full px-4 hover:bg-[#DB0102] hover:border-[#DB0102]"
            aria-label={item}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Menu;
