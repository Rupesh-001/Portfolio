import { useEffect, useState } from "react";
import * as Lucide from "lucide-react";
import "./portfolio.css";

const EMAIL = "varmarupesh101@gmail.com";
function Icon({ name, ...props }) {
  const names = {
    "code-2": "Code2", "search-check": "SearchCheck", "shield-check": "ShieldCheck",
    "file-check-2": "FileCheck2", "arrow-up-right": "ArrowUpRight", "external-link": "ExternalLink"
  };
  const key = names[name] || name.split("-").map(part => part[0].toUpperCase() + part.slice(1)).join("");
  const Component = Lucide[key] || Lucide.CircleHelp;
  return <Component size={20} strokeWidth={1.8} {...props} />;
}

export default function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") === "dark"; }
    catch { return false; }
  });
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  useEffect(() => {
    const links = [...document.querySelectorAll(".side-nav-link")];
    const sections = links.map(link => document.getElementById(link.dataset.section)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-35% 0px -45% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  function submitContact(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`[Portfolio Contact] ${data.get("subject")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return <div className="portfolio-app">





<nav className="side-nav" aria-label="Main navigation">
<a href="#home" className={`side-nav-link ${active === 'home' ? 'active' : ''}`} data-section="home">Home</a>
<a href="#about" className={`side-nav-link ${active === 'about' ? 'active' : ''}`} data-section="about">About</a>
<a href="#skills" className={`side-nav-link ${active === 'skills' ? 'active' : ''}`} data-section="skills">Skills</a>
<a href="#projects" className={`side-nav-link ${active === 'projects' ? 'active' : ''}`} data-section="projects">Projects</a>
<a href="#contact" className={`side-nav-link ${active === 'contact' ? 'active' : ''}`} data-section="contact">Contact</a>
<button type="button" className="theme-toggle" id="themeToggle" onClick={() => setDark(value => !value)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title="Switch theme">
<Icon name={dark ? "sun" : "moon"} aria-hidden="true" />
<span className="theme-toggle-label">{dark ? "Light" : "Dark"}</span>
</button>
</nav>


<main>

<section id="home" className="intro-section">
<div className="intro-content">
<p className="hero-eyebrow">HELLO, I'M</p>
<h1>Rupesh Varma <span aria-hidden="true"></span></h1>
<p>
                    I'm a passionate <strong>Cybersecurity and Digital Forensics </strong>
                     student with a keen interest in <em>web development</em>.
                    I build web applications using technologies like
                    <strong>HTML, CSS, JavaScript, React, and Node.js</strong>,
                    while learning to develop secure, responsive solutions to real-world problems.
                </p>
</div>
<div className="connect-card">
<h2>Let's Connect</h2>
<button type="button" className="connect-button" id="copyEmail" onClick={copyEmail}>
<Icon name="mail" aria-hidden="true" />
<span id="emailLabel">{copied ? "Email Copied!" : "Copy Email"}</span>
</button>
<a href="/Rupesh_Varma_Resume_ATS.pdf" className="resume-button" download>
<Icon name="download" aria-hidden="true" />
<span>Download Resume</span>
</a>
</div>
</section>

<section id="about" className="about-section">
<div className="about-heading">
<p className="section-label">BEYOND THE INTRODUCTION</p>
<h2>What I Do</h2>
</div>
<div className="about-content">
<div className="about-text">
<h3>Turning Ideas Into Practical Solutions</h3>
<p>
                        I enjoy taking ideas and turning them into working applications.
                        My approach is hands-on: build, experiment, troubleshoot, and improve.
                    </p>
<p>
                        Alongside web development, I explore cybersecurity and digital forensics,
                        with an interest in application security, digital evidence integrity,
                        and understanding how systems can be made more secure.
                    </p>
<p>
                        I focus on learning through real projects, strengthening my technical
                        foundations, and developing solutions that are useful, reliable, and maintainable.
                    </p>
</div>
<div className="about-details">
<article className="detail-card">
<Icon name="code-2" aria-hidden="true" />
<div>
<h4>Build</h4>
<p>Web Development</p>
<span>Creating functional and responsive applications</span>
</div>
</article>
<article className="detail-card">
<Icon name="search-check" aria-hidden="true" />
<div>
<h4>Investigate</h4>
<p>Digital Forensics</p>
<span>Examining digital evidence and its integrity</span>
</div>
</article>
<article className="detail-card">
<Icon name="shield-check" aria-hidden="true" />
<div>
<h4>Secure</h4>
<p>Cybersecurity</p>
<span>Understanding vulnerabilities and defensive practices</span>
</div>
</article>
</div>
</div>
</section>

<section id="skills" className="skills-section">
<div className="skills-heading">
<p className="section-label">MY TECHNICAL TOOLKIT</p>
<h2>Skills & Technologies</h2>
<p className="skills-description">
                    Technologies I use and skills I am developing through hands-on projects and continuous learning.
                </p>
</div>
<div className="skills-grid">
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="monitor" aria-hidden="true" />
<h3>Frontend Development</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-html5-plain" aria-hidden="true"></i><span>HTML5</span></div>
<div className="tech-icon"><i className="devicon-css3-plain" aria-hidden="true"></i><span>CSS3</span></div>
<div className="tech-icon"><i className="devicon-javascript-plain" aria-hidden="true"></i><span>JavaScript</span></div>
<div className="tech-icon"><i className="devicon-react-original" aria-hidden="true"></i><span>React</span></div>
<div className="tech-icon"><i className="devicon-vitejs-plain" aria-hidden="true"></i><span>Vite</span></div>
</div>
</article>
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="server" aria-hidden="true" />
<h3>Backend Development</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-nodejs-plain" aria-hidden="true"></i><span>Node.js</span></div>
<div className="tech-icon"><i className="devicon-express-original" aria-hidden="true"></i><span>Express</span></div>
<div className="tech-icon"><i className="devicon-python-plain" aria-hidden="true"></i><span>Python</span></div>
<div className="tech-icon"><i className="devicon-flask-original" aria-hidden="true"></i><span>Flask</span></div>
</div>
</article>
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="database" aria-hidden="true" />
<h3>Databases</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-mongodb-plain" aria-hidden="true"></i><span>MongoDB</span></div>
<div className="tech-icon"><i className="devicon-firebase-plain" aria-hidden="true"></i><span>Firebase</span></div>
<div className="tech-icon"><i className="devicon-mysql-plain" aria-hidden="true"></i><span>MySQL</span></div>
</div>
</article>
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="shield-check" aria-hidden="true" />
<h3>Cybersecurity & Forensics</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-kalilinux-plain" aria-hidden="true"></i><span>Kali Linux</span></div>
<div className="tech-icon"><i className="devicon-wireshark-plain" aria-hidden="true"></i><span>Wireshark</span></div>
<div className="tech-icon"><Icon name="file-check-2" aria-hidden="true" /><span>Evidence Integrity</span></div>
<div className="tech-icon"><Icon name="fingerprint" aria-hidden="true" /><span>File Hashing</span></div>
</div>
</article>
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="wrench" aria-hidden="true" />
<h3>Tools & Workflow</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-git-plain" aria-hidden="true"></i><span>Git</span></div>
<div className="tech-icon"><i className="devicon-git-plainhub" aria-hidden="true"></i><span>GitHub</span></div>
<div className="tech-icon"><i className="devicon-vscode-plain" aria-hidden="true"></i><span>VS Code</span></div>
<div className="tech-icon"><i className="devicon-linux-plain" aria-hidden="true"></i><span>Linux</span></div>
</div>
</article>
<article className="skill-card">
<div className="skill-card-heading">
<Icon name="smartphone" aria-hidden="true" />
<h3>Android Development</h3>
</div>
<div className="tech-icons">
<div className="tech-icon"><i className="devicon-kotlin-plain" aria-hidden="true"></i><span>Kotlin</span></div>
<div className="tech-icon"><i className="devicon-android-plain" aria-hidden="true"></i><span>Android</span></div>
<div className="tech-icon"><i className="devicon-firebase-plain" aria-hidden="true"></i><span>Firebase</span></div>
</div>
</article>
</div>
</section>

<section id="projects" className="projects-section">
<div className="projects-heading">
<p className="section-label">SELECTED WORK</p>
<h2>Projects I've Worked On</h2>
<p className="projects-description">
                    A selection of projects where I explore software development, security, and digital forensics.
                </p>
</div>
<div className="projects-grid">
<article className="project-card">
<div className="project-preview screenshot-preview">
<img src="hash-verification.png" alt="HashLab hash generator and verifier application screenshot" loading="lazy" />
</div>
<div className="project-body">
<div className="project-title-row">
<span className="project-number">01</span>
<h3>Hash Verification</h3>
</div>
<p>
                            Generate and verify cryptographic hashes for text and files using industry-standard
                            algorithms to help check file integrity.
                        </p>
<div className="project-tags">
<span>Cybersecurity</span><span>Hashing</span><span>File Integrity</span>
</div>
<div className="project-actions">
<a className="project-button" href="https://github.com/Rupesh-001/hash-generator-verifier" target="_blank" rel="noopener noreferrer">
<Icon name="github" aria-hidden="true" /> Code
                            </a>
<a className="project-button" href="https://hash-generator-verifier.vercel.app" target="_blank" rel="noopener noreferrer">
<Icon name="external-link" aria-hidden="true" /> Preview
                            </a>
</div>
</div>
</article>
<article className="project-card">
<div className="project-preview screenshot-preview">
<img src="metascan.png" alt="MetaScan metadata and privacy analyzer application screenshot" loading="lazy" />
</div>
<div className="project-body">
<div className="project-title-row">
<span className="project-number">02</span>
<h3>MetaScan</h3>
</div>
<p>
                            A metadata and privacy analyzer for examining hidden file metadata, location information,
                            device details, timestamps, and privacy-sensitive data.
                        </p>
<div className="project-tags">
<span>Digital Forensics</span><span>Metadata</span><span>Privacy</span>
</div>
<div className="project-actions">
<a className="project-button" href="https://github.com/Rupesh-001/metascan" target="_blank" rel="noopener noreferrer">
<Icon name="github" aria-hidden="true" /> Code
                            </a>
<a className="project-button" href="https://metascan-nu.vercel.app" target="_blank" rel="noopener noreferrer">
<Icon name="external-link" aria-hidden="true" /> Preview
                            </a>
</div>
</div>
</article>
<article className="project-card">
<div className="project-preview screenshot-preview">
<img src="digital-evidence-management.png" alt="EvidenceChain digital evidence management dashboard screenshot" loading="lazy" />
</div>
<div className="project-body">
<div className="project-title-row">
<span className="project-number">03</span>
<h3>Digital Evidence Management System</h3>
</div>
<p>
                            A digital forensics application for managing evidence records, tracking chain of custody,
                            recording audit activity, and verifying evidence integrity with SHA-256 hashes.
                        </p>
<div className="project-tags">
<span>Python Flask</span><span>MongoDB</span><span>Digital Forensics</span>
</div>
<div className="project-actions">
<a className="project-button" href="https://github.com/Rupesh-001/Digital-Evidence-Management-System" target="_blank" rel="noopener noreferrer">
<Icon name="github" aria-hidden="true" /> Code
                            </a>
<a className="project-button" href="https://evidencechain.onrender.com" target="_blank" rel="noopener noreferrer">
<Icon name="external-link" aria-hidden="true" /> Preview
                            </a>
</div>
</div>
</article>
</div>
</section>

<section id="contact" className="contact-section">
<div className="contact-heading">
<p className="section-label">GET IN TOUCH</p>
<h2>Let's Build Something <span>Together.</span></h2>
<p className="contact-intro">
                    Have a project idea, internship opportunity, or a cybersecurity topic to discuss?
                    Send me a message — I'd be happy to connect.
                </p>
</div>
<div className="contact-layout">
<div className="contact-info">
<article className="contact-info-card">
<span className="contact-icon"><Icon name="mail" aria-hidden="true" /></span>
<div>
<h3>Email</h3>
<p>For opportunities and project enquiries</p>
<a href="mailto:varmarupesh101@gmail.com">varmarupesh101@gmail.com</a>
</div>
</article>
<article className="contact-info-card">
<span className="contact-icon">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.16 1.19a10.95 10.95 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.7 5.44-5.28 5.72.42.36.78 1.06.78 2.14v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"></path>
</svg>
</span>
<div>
<h3>GitHub</h3>
<p>Explore my code and projects</p>
<a href="https://github.com/Rupesh-001" target="_blank" rel="noopener noreferrer">github.com/Rupesh-001</a>
</div>
</article>
<article className="contact-info-card">
<span className="contact-icon">
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.21 0h.01Z"></path>
</svg>
</span>
<div>
<h3>LinkedIn</h3>
<p>Connect professionally</p>
<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a>
</div>
</article>
<div className="contact-note">
<Icon name="shield-check" aria-hidden="true" />
<p>Interested in web development, cybersecurity, and digital forensics opportunities.</p>
</div>
</div>
<form className="contact-form" id="contactForm" onSubmit={submitContact}>
<div className="contact-form-heading">
<h3>Send a Message</h3>
<p>Fill out the details below to prepare an email.</p>
</div>
<div className="form-field">
<label htmlFor="contactName">Your name</label>
<input type="text" id="contactName" name="name" placeholder="Enter your name" autocomplete="name" required />
</div>
<div className="form-field">
<label htmlFor="contactEmail">Your email</label>
<input type="email" id="contactEmail" name="email" placeholder="you@example.com" autocomplete="email" required />
</div>
<div className="form-field">
<label htmlFor="contactSubject">Subject</label>
<input type="text" id="contactSubject" name="subject" placeholder="What would you like to discuss?" required />
</div>
<div className="form-field">
<label htmlFor="contactMessage">Message</label>
<textarea id="contactMessage" name="message" rows="5" placeholder="Write your message here..." required></textarea>
</div>
<button type="submit" className="contact-submit">
<span>Prepare Email</span>
<Icon name="arrow-up-right" aria-hidden="true" />
</button>
<p className="contact-form-hint" id="contactFormHint">
                        This opens your default email app with your message filled in; it does not send anything automatically.
                    </p>
</form>
</div>
</section>
</main>


<footer className="site-footer">
<p>© <span id="currentYear">{new Date().getFullYear()}</span> Rupesh Varma. All rights reserved.</p>
</footer>


  </div>;
}
