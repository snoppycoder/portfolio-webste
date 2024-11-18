import React, { useState } from 'react'
import { MenuIcon, MapPinIcon, PhoneIcon, InboxIcon as EnvelopeIcon, XIcon, GitlabIcon as GitHubIcon, LinkedinIcon, MailIcon, CodeIcon, BookOpenIcon, BriefcaseIcon, GraduationCapIcon, AwardIcon, UserIcon } from 'lucide-react'
import './App.css'
import './HeroSection.css';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="main min-h-screen bg-gray-100 dark:bg-gray-900">
    
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <button onClick={toggleMenu} className="toggle md:hidden">
              {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" /> : <MenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <a href="#about" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
              <a href="#skills" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
              <a href="#education" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Education</a>
              <a href="#projects" className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            </div>
          )}
        </nav>
      </header>
      <HeroSection/>
      <main className="container mx-auto px-6 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Third-year Software Engineering student based in Ethiopia with a focus on full-stack development, data structures, algorithms, and software engineering best practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate about combining logical problem-solving with creative solutions, particularly in JavaScript, React, Node.js, and TypeScript.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Committed to a self-driven journey of mastering Data Structures and Algorithms (DSA) and proficiently using HTML, CSS, JavaScript, Python, Java, and SQL.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard icon={<CodeIcon />} title="Programming Languages" skills={['HTML', 'CSS', 'JavaScript', 'NoSql', 'TypeScript', 'Python', 'Go', 'Java', 'SQL']} />
            <SkillCard icon={<BookOpenIcon />} title="Frameworks & Libraries" skills={['React', 'Node.js', 'async-mutex', 'NestJs', 'Mongoose' ]} />
            <SkillCard icon={<BriefcaseIcon />} title="Tools & Platforms" skills={['VS Code', 'Supabase', 'Render', 'node-telegram-bot-api']} />
            <SkillCard icon={<GraduationCapIcon />} title="Other Concepts" skills={['Asynchronous programming', 'Mutex', 'Cache optimization', 'API integration']} />
          </div>
        </section>

        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Education</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Bachelor's Degree in Software Engineering (in progress)</h3>
            <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Current Studies:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Fundamental of Electric Circuits</li>
              <li>Human-Computer Interaction</li>
              <li>Fundamental of Software Engineering</li>
              <li>Computer Architecture</li>
              <li>Web Development</li>
            </ul>
          </div>
        </section>

        <section id="certifications" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Certifications and Courses</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
      
              <li>Self-study in PCIe data transmission techniques including encoding and synchronization</li>
              <li>Cisco Certified Network Associate (CCNA)</li>
              <li> AWS Training and Certification </li>
              <li>Google AI – AI For Everyone</li>
              <li>Microsoft Certificate (On Introduction to AI) </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Telegram Bot for Daily Bible Verses"
              description="Created a bot using node-telegram-bot-api, axios, and node-cron that sends daily Bible verses to users and responds to commands. Utilized Supabase for storing chat IDs and Render for deployment."
            />
            <ProjectCard
              title="React Login & Signup Form"
              description="Designed a toggle system between login and signup forms using event listeners and CSS classes. Demonstrated front-end skills with a user-centric focus on functionality and accessibility."
            />
            <ProjectCard
              title="Sentiment Analysis Project"
              description="Developed a logistic regression-based sentiment analysis model, aiming to classify text as positive, negative, or neutral. Planned to leverage Node.js for deploying a pretrained model."
            />
            <ProjectCard
              title="API Integration Projects"
              description="Worked on advanced API projects, pushing beyond simple tasks like QR code generation to more complex applications that require asynchronous fetching, parsing, and rendering data dynamically."
            />
          </div>
        </section>

        <section id="problem-solving" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Problem-Solving Approach</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Completed over 55 LeetCode problems, including sliding window and greedy solutions, challenges in array manipulation, and the 3Sum problem using three-pointer techniques.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Emphasizes clean, efficient code, avoiding immediate solutions to focus on developing independent problem-solving skills.
            </p>
          </div>
        </section>

        <section id="philosophy" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Learning Philosophy and Goals</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Highly motivated to enhance software engineering knowledge, aiming for proficiency in data structures, algorithms, and efficient coding practices.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Balancing academic studies with practical project-based learning and consistent engagement in platforms like LeetCode.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Recently applied for the ALX African Tech Championship, showcasing a dedication to advancing skills and connecting with the broader tech community. I often try engaging in Hackathlons both virtual and in-person contest, go to seminars and connect with others that have the same passion as I have.
            </p>
          </div>
        </section>

        <section id="soft-skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Soft Skills & Personal Qualities</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Strong analytical thinker with a focus on understanding underlying principles of algorithms and software architecture.</li>
              <li>Disciplined and committed to self-improvement, with a structured approach to study sessions, time management, and personal goal setting.</li>
              <li>Effective communicator who can explain complex concepts in simple terms, as preferred when receiving explanations.</li>
              <li>Culturally connected, with a growing interest in ethical tech practices and applying knowledge to benefit the Ethiopian tech ecosystem.</li>
            </ul>
          </div>
        </section>

        <section id="interests" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Interests</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Enjoys reading books, watching podcase maily in the realm of tech, and I do like watching tech-based movies and I find it a source of relaxation and creativity, balancing intense study with personal time to refresh.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Interested in projects that are both challenging and impactful, with a goal to contribute to open-source initiatives and deepen technical expertise.
            </p>
          </div>
        </section>
      </main>
      <ContactSection/>
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="container mx-auto px-6 py-4">
          <div className="contact-info-f">
            <a href="https://github.com/snoppycoder/" target='_blank' className="links">
              <GitHubIcon className="icons h-6 w-6" />
              <span className="footer github">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/milki-legesse-66607a312/" target='_blank' className="links">
              <LinkedinIcon className="icons h-6 w-6" />
              <span className="footer linkedIn">LinkedIn</span>
            </a>
            <a href="milkiLegesse6@gmail.com" className="links" target='_blank'>
              <MailIcon className="icons h-6 w-6" />
              <span className="footer email" >Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
interface SkillCardProps {
  icon: React.ReactNode; 
  title: string; 
  skills: string[]; 
}
const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-white">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
interface ProjectCardProps {
  title: string; // The title is a string
  description: string; // The description is a string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}



const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Software Engineering Student & Full-Stack Developer</p>
        <p className="hero-description">
          Passionate about creating innovative solutions and mastering the art of coding.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button primary">View Projects</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};



const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('http://localhost:3000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Do You Want To Get In Touch?</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <MapPinIcon className="icon" />
              <span>Addis Ababa, Ethiopia</span>
            </li>
            <li>
              <PhoneIcon className="icon" />
              <span>+251 992011922</span>
            </li>
            <li>
              <EnvelopeIcon className="icon" />
              <span>MilkiLegesse6@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
