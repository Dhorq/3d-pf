const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <p className="text-center">&copy; {date} Ridho Rifqy Muhammad</p>
      <p className="text-center mt-10">
        This Site is Under Construction. Find my others:
      </p>
      <div className="text-center font-bold mb-5">
        <a
          className="mr-5 hover:text-amber-200"
          href="https://portfolio-ridho-six.vercel.app/"
        >
          First Portfolio
        </a>
        <a
          className=" hover:text-amber-200"
          href="https://new-pf-eight.vercel.app/"
        >
          Second Portfolio
        </a>
      </div>
    </div>
  );
};

export default Footer;
