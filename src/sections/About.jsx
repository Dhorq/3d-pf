const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "React.js",
    "Next.js",
  ];
  const backendSkills = ["Node.js", "Express.js", "PostgreSQL", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-15"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl text-center">About</h2>
        <div className="p-10 mt-12 border hover:-translate-y-1 transition-all">
          <p className="text-opacity-50 mb-5 text-justify">
            Recent graduate in Computer Science from Bina Nusantara University
            aspiring to build a career in software development. Possess a strong
            academic foundation in computer science, with exposure to system
            analysis, data, and software engineering. Driven by curiosity and a
            growth mindset, I am committed to mastering modern technologies,
            improving software quality, and delivering impactful solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-mono mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((i, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-mono mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((i, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-5">🎓 Education</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="font-semibold">
                Bina Nusantara University (2020-2024)
              </li>
              <li>
                Relevant Coursework: Data Analytics, Data Management &
                Descriptive Analytics, Statistical for Decision Making,
                Application of Predictive Analytics to Business Data,
                Prescriptive Analytics and Optimization, and Digitalization of
                Markets and Consumption.
              </li>
            </ul>
          </div>
          <div className="p-6 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-5">🏢 Work Experiences</h3>
            <div className="space-y-4 ">
              <div>
                <h4 className="font-semibold">Data Analyst at DPR RI (2023)</h4>
                <p>
                  Utilized Tableau Desktop to create a performance dashboard
                  highlighting key metrics and trends, enhancing reporting
                  efficiency and decision-making. Processed and analyzed data
                  using Python (Pandas, Matplotlib, Seaborn) to ensure accuracy,
                  uncover patterns, and generate actionable business insights.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  System Analyst at KEMENKEU (2023)
                </h4>
                <p>
                  Designed a high-fidelity ticketing system mockup in Figma and
                  developed a responsive website using HTML, CSS, and JavaScript
                  to enhance user experience. Conducted UAT for the
                  e-Phytosanitary system and contributed to creating flowcharts
                  and ERDs to improve application logic and database design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
