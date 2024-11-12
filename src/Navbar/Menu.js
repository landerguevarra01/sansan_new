import SANSANICON from "../Assets/SANSAN.png";

function Menu() {
  return (
    <header className="flex justify-between items-center text-responsiveNav w-[1728px]">
      <div className="flex items-center">
        <img src={SANSANICON} alt="SANSAN Logo" className="h-[82px] w-auto" />
      </div>

      <nav className="flex gap-8">
        {["HOME", "PROJECTS", "ABOUT", "CONTACT"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
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
