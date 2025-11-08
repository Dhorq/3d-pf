const Contact = () => {
  return (
    <section id="contact" className="mt-30 mb-10">
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="text-center shadow-2xl shadow-black-200 border p-10">
        <div className="flex flex-row justify-around items-center">
          <div className="text-center shadow-2xl shadow-black-200 p-10 hover:-translate-y-1 transition-all">
            <h2 className="font-medium">Social Media</h2>
            <a href="">Instagram</a>
          </div>
          <div className="text-center shadow-2xl shadow-black-200 p-10 hover:-translate-y-1 transition-all">
            <h2 className="font-medium">Programming</h2>
            <a href="">Hackerrank</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
