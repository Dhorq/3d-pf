import { ArrowDown } from "lucide-react";
import graduationphoto from "./../assets/img/graduationphoto.jpg";

const Header = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 items-center justify-center h-screen">
        <p className="text-3xl font-bold">Ridho Rifqy Muhammad</p>
        {/* <img
          className="w-[200px] bg-gray-500 shadow-[15px_10px_15px_rgba(107,114,128,0.5)]"
          src={graduationphoto}
          alt="Graduation Photo"
        /> */}
        <p>Love to develope things.</p>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Header;
