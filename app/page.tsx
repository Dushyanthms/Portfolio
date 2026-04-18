export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
          Dushyanth M S
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Building intelligent systems that <span className="text-blue-500">predict, adapt, and secure</span>.
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Computer Science Engineer focused on Machine Learning, Systems, and Cybersecurity.
          I design data-driven systems that analyze behavior, detect anomalies, and make decisions
          before failures or threats occur.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Dushyanthms"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-80"
          >
            GitHub
          </a>

          <a
            href="mailto:msdushyant36@gmail.com"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-900"
          >
            Contact
          </a>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Build models for pattern recognition, anomaly detection, and intelligent decision systems.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-bold">Systems Engineering</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Design scalable and reliable systems that handle real-world data and performance constraints.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-bold">Cybersecurity</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Analyze threats, detect vulnerabilities, and build systems that improve security posture.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROJECT 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">
              CTI Risk Scorer (ML Threat Intelligence System)
            </h3>

            <p className="text-gray-400 mt-3">
              Built a Flask-based system to analyze URLs, IPs, and file hashes using machine learning
              to predict cybersecurity risks. Implemented data preprocessing, model integration,
              and feedback-driven retraining.
            </p>

            <a
              href="https://github.com/Dushyanthms/cti-risk-scorer.git"
              className="text-blue-400 text-sm mt-4 inline-block"
            >
              View Project →
            </a>
          </div>

          {/* PROJECT 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold">
              Automated Diet Planner (Data-driven System)
            </h3>

            <p className="text-gray-400 mt-3">
              Developed a Django-based system that calculates BMI and generates personalized
              diet recommendations using rule-based logic and structured data models.
            </p>

            <a
              href="https://github.com/Dushyanthms/Diet-planner-mini-project-.git"
              className="text-blue-400 text-sm mt-4 inline-block"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="space-y-6">

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-bold">
              Software Development Engineer Intern – Bluestock Fintech
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Worked on backend systems using Python, implemented business logic,
              optimized performance, and improved application reliability in fintech systems.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-bold">
              Cybersecurity Intern – Cybersena (R&D)
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Worked on vulnerability assessment, penetration testing, log analysis,
              and threat detection using real-world system data.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Java",
            "Machine Learning",
            "Cybersecurity",
            "Data Analysis",
            "Next.js",
            "React",
            "System Design",
            "Git & GitHub"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Vision</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          I aim to build intelligent systems that move beyond reactive computing —
          systems that anticipate problems, adapt in real time, and operate at scale.
          <br /><br />
          My long-term goal is to work at the intersection of AI and systems engineering,
          building infrastructure that improves decision-making in complex environments.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 mt-24 text-sm">
        © {new Date().getFullYear()} Dushyanth M S
      </footer>

    </main>
  );
}