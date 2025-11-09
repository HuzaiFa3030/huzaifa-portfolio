import React from "react";

// Portfolio - Single File React Component (TailwindCSS + Framer Motion)
// Replace placeholder links (PLAY_STORE_LINK, APP_STORE_LINK, GITHUB_LINK, LINKEDIN_LINK)
// with real URLs. Resume download points to the provided Word file — replace as needed.

export default function Portfolio() {
  const projects = [
    {
      title: "Virtual Triage",
      desc: "Healthcare platform app for online consultation and triage. Cross-platform (React Native).",
      tags: ["React Native", "AWS S3", "Redux"],
      play: "PLAY_STORE_LINK",
      app: "APP_STORE_LINK",
    },
    {
      title: "Hala Canada",
      desc: "Service-based application built for Canadian users with smooth offline-first UX.",
      tags: ["React Native", "Node.js", "Cloud"],
      play: "PLAY_STORE_LINK",
      app: "APP_STORE_LINK",
    },
    {
      title: "BizTalk",
      desc: "Business communication & collaboration mobile solution with realtime features.",
      tags: ["React Native", "Realtime", "UI/UX"],
      play: "PLAY_STORE_LINK",
      app: "APP_STORE_LINK",
    },
    {
      title: "ScribleSend",
      desc: "Document sharing and e-signature app focused on secure workflows.",
      tags: ["React Native", "Security", "AWS"],
      play: "PLAY_STORE_LINK",
      app: "APP_STORE_LINK",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">Muhammad Huzaifa</h1>
          <p className="text-sm text-gray-600">Mobile App Developer · React Native Specialist</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="sandbox:/mnt/data/Muhammad_Huzaifa_Resume_Modern.docx" download className="ml-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg">Download CV</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-10">
        {/* Hero */}
        <section className="bg-white p-8 rounded-2xl shadow-sm grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Hi, I am Muhammad Huzaifa</h2>
            <p className="mt-3 text-gray-700">React Native developer with 3+ years of experience building and shipping cross-platform mobile applications. I focus on performance, reusable components, and clean UX.</p>

            <div className="mt-6 flex gap-3">
              <a href="https://github.com/HuzaiFa3030" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg">GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-huzaifa-999bb2207/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg">LinkedIn</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div>
                <strong>Location</strong>
                <div>Orangi Town, Karachi, Pakistan</div>
              </div>
              <div>
                <strong>Contact</strong>
                <div>+92-317-2043030 · muhammadhuzaifa3030@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Placeholder for an illustration or device mockup */}
            <div className="h-56 w-full rounded-xl bg-gradient-to-tr from-indigo-100 to-white flex items-center justify-center text-indigo-300">App Mockup</div>
          </div>
        </section>

        {/* Skills + Tools */}
        <section id="skills" className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">Tech Stack</h3>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>React Native · React.js · JavaScript (ES6+)</li>
              <li>Redux · Context API</li>
              <li>Node.js · RESTful APIs</li>
              <li>AWS (S3, EC2) · Git</li>
              <li>HTML · CSS · Tailwind · Bootstrap</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">Core Strengths</h3>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>Cross-platform mobile apps</li>
              <li>Reusable component architecture</li>
              <li>Performance optimization (30%+ improvements)</li>
              <li>Automated testing & CI-friendly code</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">Tools & Workflow</h3>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>Git · GitHub</li>
              <li>Play Store & App Store deployments</li>
              <li>Figma (prototyping) · Jira (task tracking)</li>
              <li>Docker basics · AWS S3</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3 className="text-xl font-semibold mb-4">Key Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="px-2 py-1 text-xs border rounded">{t}</span>)}</div>
                <div className="mt-4 flex gap-3">
                  <a href={p.play} target="_blank" rel="noreferrer" className="text-sm underline">Play Store</a>
                  <a href={p.app} target="_blank" rel="noreferrer" className="text-sm underline">App Store</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong>HnH Soft Tech Solutions Pvt. Ltd.</strong>
                  <div className="text-sm text-gray-600">Mobile App Developer — 2023 &ndash; Present</div>
                </div>
                <div className="text-sm text-gray-600">Karachi, Pakistan</div>
              </div>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
                <li>Designed and maintained cross-platform apps using React Native.</li>
                <li>Integrated AWS services and REST APIs for scalable solutions.</li>
                <li>Delivered reusable UI components and improved delivery speed by 25%.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong>Super-Nova Solutions Pvt. Ltd.</strong>
                  <div className="text-sm text-gray-600">Mobile App Developer — 2021 &ndash; Dec 2022</div>
                </div>
                <div className="text-sm text-gray-600">Karachi, Pakistan</div>
              </div>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
                <li>Built UI components from prototypes and optimized performance across devices.</li>
                <li>Worked with native modules to implement platform-specific features.</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <strong>ISF Consultant of Business & Hardware Solution Pvt. Ltd.</strong>
                  <div className="text-sm text-gray-600">IT Consultant — 2018 &ndash; 2021</div>
                </div>
                <div className="text-sm text-gray-600">Karachi, Pakistan</div>
              </div>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
                <li>Implemented software customizations for clients and improved productivity through streamlined processes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 text-sm text-gray-700">Orangi Town, Karachi, Pakistan</p>
          <p className="text-sm text-gray-700">+92-317-2043030 · muhammadhuzaifa3030@gmail.com</p>
          <div className="mt-4">
            <a href="mailto:muhammadhuzaifa3030@gmail.com" className="px-4 py-2 border rounded-lg">Email Me</a>
            <a href="https://github.com/HuzaiFa3030" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg ml-3">GitHub</a>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6">Designed & Built by Muhammad Huzaifa</footer>
      </main>
    </div>
  );
}
