import React, { useState } from 'react';

function App() {
  const [emailVisible, setEmailVisible] = useState(false);

  const personalInfo = {
    name: "Marouane",
    role: "Frontend Developer",
    bio: "I build fast, responsive, and modern web applications using React, Vite, and clean styling layouts.",
    email: "marouane.dev@example.com",
    github: "https://github.com",
  };

  const projects = [
    {
      title: "My First React App",
      description: "A single-page application built using Vite, React 19, and automated GitHub Actions deployment pipelines.",
      link: "https://github.com/my-portifolio"
    },
    {
      title: "Secure Domain Routing",
      description: "Configured a personal qzz.io subdomain securely routed through Cloudflare DNS proxy infrastructure.",
      link: "#"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
      lineHeight: '1.6'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 10%',
        backgroundColor: '#1e293b',
        borderBottom: '1px solid #334155'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#38bdf8' }}>{personalInfo.name}.dev</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>About</a>
          <a href="#skills" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Skills</a>
          <a href="#projects" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
        </div>
      </nav>

      {/* Hero Intro Section */}
      <header id="about" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800' }}>
          Hi, I'm <span style={{ color: '#38bdf8' }}>{personalInfo.name}</span>
        </h1>
        <h2 style={{ fontSize: '1.7rem', color: '#94a3b8', marginBottom: '1.5rem' }}>{personalInfo.role}</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          {personalInfo.bio}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setEmailVisible(!emailVisible)}
            style={{
              backgroundColor: '#38bdf8',
              color: '#0f172a',
              border: 'none',
              padding: '0.8rem 2rem',
              borderRadius: '6px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {emailVisible ? 'Hide Email' : 'Get In Touch'}
          </button>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            style={{
              border: '1px solid #475569',
              color: '#f8fafc',
              padding: '0.8rem 2rem',
              borderRadius: '6px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            GitHub Profile
          </a>
        </div>
        
        {emailVisible && (
          <p style={{ marginTop: '1.5rem', fontFamily: 'monospace', color: '#38bdf8', fontSize: '1.1rem' }}>
            {personalInfo.email}
          </p>
        )}
      </header>

      {/* Integrated Repository Language Graph Section */}
      <section id="skills" style={{ padding: '4rem 10%', backgroundColor: '#111827', textAlign: 'center', borderTop: '1px solid #1e293b' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>Repository Languages</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Visual breakdown of the technologies running this portfolio app.</p>
        
        <div style={{ 
          display: 'flex', 
          height: '16px', 
          width: '100%', 
          maxWidth: '500px', 
          margin: '0 auto 1.5rem', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
        }}>
          <div style={{ width: '38%', backgroundColor: '#e34c26' }} title="HTML 38%"></div>
          <div style={{ width: '31.7%', backgroundColor: '#563d7c' }} title="CSS 31.7%"></div>
          <div style={{ width: '30.3%', backgroundColor: '#f1e05a' }} title="JavaScript 30.3%"></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#e34c26' }}></span>
            HTML <strong>38%</strong>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#563d7c' }}></span>
            CSS <strong>31.7%</strong>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f1e05a' }}></span>
            JavaScript <strong>30.3%</strong>
          </span>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" style={{ padding: '5rem 10%', backgroundColor: '#1e293b' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.25rem', fontWeight: '700' }}>
          Featured Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              backgroundColor: '#0f172a', 
              padding: '2rem', 
              borderRadius: '12px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#38bdf8' }}>{project.title}</h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1rem' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>
                View Project Code →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Block */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2.5rem', 
        color: '#64748b', 
        fontSize: '0.95rem',
        borderTop: '1px solid #334155'
      }}>
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
