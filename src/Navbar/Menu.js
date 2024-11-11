import SANSANICON from "../Assets/SANSAN.png";

function Menu() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-1 justify-start items-start">
          <img src={SANSANICON} alt="SANSAN" />
        </div>
        <div className="flex flex-row gap-8">
          <div>HOME</div>
          <div>PROJECTS</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </div>
    </>
  );
}

export default Menu;
