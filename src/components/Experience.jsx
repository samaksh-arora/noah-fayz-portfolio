import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Business Development Intern',
      company: 'American Rheinmetall',
      location: 'Plymouth, MI',
      period: 'May 2025 – August 2025',
      description: [
        'Organize and analyze 4,400+ Excel-based product lines across multi-tiered Bills of Materials (BOMs) for complex defense vehicle systems',
        'Identify part redundancies, pricing inefficiencies, and savings opportunities across supplier data tied to $10M+ defense contracts',
        'Supported $25M+ in proposal development and supplier evaluation efforts, improving cost estimation accuracy by 18%'
      ]
    },
    {
      title: 'Founder',
      company: 'Buyifi Real Estate Investment',
      location: 'Detroit, MI',
      period: 'December 2023 – January 2025',
      description: [
        'Evaluated detailed financial data and property valuations, identifying new opportunities that increased portfolio returns by 20%',
        'Conducted in-depth market research on 100+ properties, analyzing price trends and investment potential to guide strategic acquisitions',
        'Negotiated directly with sellers and agents to secure below-market deals, optimizing up to 75% profit margins on key properties'
      ]
    },
    {
      title: 'Founder',
      company: 'Buyifi Amazon FBA',
      location: 'Detroit, MI',
      period: 'January 2023 – August 2024',
      description: [
        'Sold 300+ consumer products across 5+ SKUs, generating $5,000 in consistent monthly revenue with a 30–50% profit margin.',
        'Scaled targeted ad campaigns with a $1,200 PPC budget, increasing conversion rates by 45% and significantly boosting sales volume.',
        'Negotiated supplier and freight costs, reducing per-unit expenses by 20% and optimizing inventory turnover to prevent stockouts.'
      ]
    },
    {
      title: 'Quantitative Trading (Personal Project)',
      company: 'Options Algorithmic Trading Development',
      location: 'Detroit, MI',
      period: 'January 2023 – Present',
      description: [
        'Built a Python-based trading algorithm using EMA crossovers, RSI, and volatility signals, producing a consistent 73% annualized return',
        'Backtested 1,200+ strategies in ThinkorSwim and Python to optimize precise entry, exit, and risk parameters across multiple asset classes',
        'Automated order execution and dynamic position sizing, cutting manual trading time by 95% and improving execution precision overall'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p className="location">{exp.location}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
