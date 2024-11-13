import SANSANICON from "../Assets/SANSAN.png";

function Menu() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className="flex justify-between items-center text-responsiveNav w-full">
      <div className="flex items-center">
        <img
          src={SANSANICON}
          alt="SANSAN Logo"
          className="h-[82px] w-auto cursor-pointer"
          onClick={() => scrollToSection("home")}
        />
      </div>

      <nav className="flex gap-8">
        {["home", "projects", "about", "contact"].map((item, index) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item);
            }}
            className="border-solid border-[2px] rounded-full px-4 hover:bg-[#DB0102] hover:border-[#DB0102]"
            aria-label={item}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Menu;
