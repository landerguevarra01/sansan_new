import SANSANICON from "../Assets/SANSAN.png";

function Menu() {
  return (
    <header className="flex justify-between items-center text-responsiveNav">
      <div className="flex items-center">
        <img src={SANSANICON} alt="SANSAN Logo" className="h-10 w-auto" />
      </div>

      <nav className="flex gap-8">
        {["HOME", "PROJECTS", "ABOUT", "CONTACT"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className=""
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
