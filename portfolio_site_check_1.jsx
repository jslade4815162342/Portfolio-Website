export default function PortfolioSiteCheck1() {
  const projects = [
    {
      title: "Movie Collection Manager",
      subtitle: "Full-stack web application",
      stack: "Django, SQL, HTML/CSS, Responsive UI",
      summary:
        "A movie collection management app built to support full CRUD functionality, search and sorting, pagination with saved preferences, per-record images, and a polished responsive interface. The project focuses on clean data management, usability, and reliable database-backed behavior.",
      highlights: [
        "Implemented create, read, update, and delete operations backed by SQL persistence.",
        "Added configurable pagination and preserved user page-size preferences.",
        "Supported movie poster images with graceful handling for missing or broken images.",
        "Built search, filtering, sorting, and a stats view to improve browsing and analysis."
      ]
    },
    {
      title: "Orders API",
      subtitle: "Serverless backend development",
      stack: "AWS Lambda, API Gateway, REST APIs",
      summary:
        "A cloud-based Orders API designed to manage restaurant orders through scalable serverless endpoints. The project includes status updates, retrieval of active orders, and historical order access, with an emphasis on clear endpoint design and practical backend architecture.",
      highlights: [
        "Built REST endpoints for creating, retrieving, and updating order data.",
        "Added PATCH routes for targeted order status changes.",
        "Implemented GET routes for active restaurant orders and year-based order history.",
        "Worked with deployed cloud infrastructure and endpoint testing workflows."
      ]
    },
    {
      title: "Housing Price Prediction Project",
      subtitle: "Data science and machine learning",
      stack: "Python, Data Analysis, Machine Learning",
      summary:
        "A data science project focused on predicting housing prices using exploratory data analysis and machine learning methods. The goal was to understand the data, identify important predictive features, and evaluate model performance in a structured report.",
      highlights: [
        "Performed exploratory data analysis to identify patterns and outliers.",
        "Prepared data for modeling and compared predictive approaches.",
        "Evaluated results and communicated findings in a formal report structure.",
        "Emphasized both technical accuracy and clear presentation of conclusions."
      ]
    },
    {
      title: "Computer Vision Coursework",
      subtitle: "Feature detection and image analysis",
      stack: "Python, NumPy, Image Processing",
      summary:
        "Coursework in applied computer vision involving classical vision methods such as corner detection, feature tracking concepts, and image processing pipelines. This work developed a stronger understanding of how low-level vision techniques support larger recognition and analysis tasks.",
      highlights: [
        "Worked with classical computer vision methods including corner detection concepts.",
        "Implemented and analyzed image-processing pipelines in Python.",
        "Explored algorithm behavior through experimentation and debugging.",
        "Strengthened foundations for future work in vision and machine learning."
      ]
    }
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            Jude Slade
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="border-b border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_.7fr] md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Portfolio Website
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Computer science student building practical software, backend systems, and data-driven projects.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-neutral-700">
                I am Jude Slade, a computer science student with experience in full-stack development,
                cloud-based APIs, data science, and computer vision coursework. This portfolio brings
                together projects that reflect both technical problem-solving and a strong focus on
                building usable, working systems.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="rounded-2xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  View Projects
                </a>
                <a
                  href="#about"
                  className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  About Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-start md:pt-8">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-neutral-500">Focus Areas</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                  <li>• Full-stack web development</li>
                  <li>• REST API design and backend systems</li>
                  <li>• Data analysis and machine learning</li>
                  <li>• Computer vision fundamentals</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-neutral-500">Current Domain</p>
                <p className="mt-3 break-all text-sm leading-7 text-neutral-700">
                  jslade-movie-collection-manager.org
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
            <p className="text-lg leading-8 text-neutral-700">
              These projects reflect my experience across web development, backend APIs, data science,
              and computer vision. Together, they show a mix of hands-on implementation, debugging,
              cloud deployment, and technical communication.
            </p>
          </div>

          <div className="mt-12 grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="grid gap-8 md:grid-cols-[1fr_.9fr]">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
                    </div>
                    <p className="text-base leading-8 text-neutral-700">{project.summary}</p>
                    <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                      <span className="font-semibold text-neutral-900">Tech Stack:</span> {project.stack}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      Key Contributions
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="rounded-2xl bg-neutral-50 px-4 py-3">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:py-24">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">About</p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About me</h2>
              <p className="text-lg leading-8 text-neutral-700">
                I am a computer science student interested in building systems that are both functional
                and thoughtfully designed. My work has included full-stack web applications, AWS-based
                backend services, machine learning analysis, and computer vision assignments that focus
                on implementation and understanding the underlying algorithms.
              </p>
              <p className="text-lg leading-8 text-neutral-700">
                I enjoy solving technical problems step by step, whether that means debugging an API,
                organizing application data, improving a user interface, or analyzing model results.
                I value clear structure, practical results, and projects that demonstrate real progress
                from idea to deployment.
              </p>
            </div>

            <div className="grid gap-4 self-start">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">What I bring</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                  <li>• Experience building and testing CRUD-based web applications</li>
                  <li>• Familiarity with cloud deployment and API workflows</li>
                  <li>• Coursework in data structures, algorithms, networking, VR, and computer vision</li>
                  <li>• Strong interest in practical software engineering and applied problem-solving</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Portfolio goals</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700">
                  This site is designed to present my work clearly to recruiters, professors, and
                  collaborators by showing what I built, how I approached each project, and what skills
                  each project demonstrates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</p>
                <h2 className="text-3xl font-semibold tracking-tight">Let’s connect</h2>
                <p className="text-lg leading-8 text-neutral-700">
                  I am interested in opportunities where I can continue growing as a developer while
                  contributing strong technical work in software engineering, backend development,
                  data-focused projects, or related technical roles.
                </p>
              </div>
              <div className="rounded-3xl bg-neutral-50 p-6">
                <p className="text-sm font-semibold text-neutral-500">Add your real contact details before publishing</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
                  <p><span className="font-semibold text-neutral-900">Email:</span> your-email@example.com</p>
                  <p><span className="font-semibold text-neutral-900">GitHub:</span> github.com/yourusername</p>
                  <p><span className="font-semibold text-neutral-900">LinkedIn:</span> linkedin.com/in/yourprofile</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Jude Slade</p>
          <p>Built for jslade-movie-collection-manager.org</p>
        </div>
      </footer>
    </div>
  );
}
