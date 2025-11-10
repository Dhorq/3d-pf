const NavBar = () => {
  return (
    <div className="fixed flex flex-row justify-between left-0 right-0 mx-10 sm:mx-30 z-1">
      <h1 className="font-black">DHORQ</h1>
      <ul className="hidden sm:flex flex-row gap-5">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
