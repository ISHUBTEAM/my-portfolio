
import './App.css'

function App() {
  return (
    <div className="container">

      {/* Introduction */}
      <header>
        <h1>Hi, I'm Yeabsira Mersha 👋</h1>

        <p className="subtitle">
          Information Systems Student | Aspiring Cybersecurity & ML Professional
        </p>

        <p>
          I enjoy learning technology, solving problems, and exploring how
          cybersecurity and machine learning can make a difference.
        </p>
      </header>

      {/* About Me */}
      <section>
        <h2>About Me</h2>

        <p>
          I am an Information Systems student at Addis Ababa University.
          I am interested in cybersecurity and machine learning, and I enjoy
          learning new technologies and solving problems.
        </p>
      </section>

      {/* Currently Learning */}
      <section>
        <h2>Currently Learning & Exploring</h2>

        <ul>
          <li>HTML, CSS, and JavaScript</li>
          <li>React</li>
          <li>Python and C++</li>
          <li>Cybersecurity fundamentals</li>
          <li>Machine learning and AI</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>

        <div className="projects">

          {/* Task Manager */}
          <div className="project-card">
            <h3>Task Manager</h3>

            <p>
              A task management application where users can add tasks,
              mark them as completed, delete tasks, and filter tasks by status.
            </p>

            <p>
              <strong>Technologies:</strong> HTML, CSS, JavaScript
            </p>

            <a
              href="https://yeabu-tech.github.io/Task-manager/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Portfolio */}
          <div className="project-card">
            <h3>Personal Portfolio Website</h3>

            <p>
              A responsive personal portfolio website created to showcase
              my skills, learning journey, and projects.
            </p>

            <p>
              <strong>Technologies:</strong> HTML, CSS, JavaScript, React
            </p>

            <p>Currently in development 🚧</p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>

        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>C++</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>

        <p>
          I'm always interested in learning, building projects, and connecting
          with other people in technology.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/yeabu-tech"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yeabsira-mersha-71998524b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Yeabsira Mersha. Built with React.</p>
      </footer>

    </div>
  )
}

export default App

