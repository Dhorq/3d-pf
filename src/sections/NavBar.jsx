const NavBar = () => {
  return (
    <div className="fixed flex flex-row justify-between left-0 right-0 mx-10 sm:mx-20 z-1">
      <h1 className="font-black">DHORQ</h1>
      <ul className="flex flex-row gap-5">
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
