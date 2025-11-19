const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div>
      <p className="text-center">
        This Site is Under Construction. Find my others:
      </p>
      <div className="text-center font-bold">
        <a
          className="mr-5 hover:text-amber-200"
          href="https://portfolio-ridho-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          First Portfolio
        </a>
        <a
          className="hover:text-amber-200"
          href="https://new-pf-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Second Portfolio
        </a>
      </div>
      <p className="text-center mt-10">&copy; {date} Ridho Rifqy Muhammad 💘</p>
    </div>
  );
};

export default Footer;
