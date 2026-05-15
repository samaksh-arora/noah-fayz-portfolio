import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Analyst',
      company: 'ID Ventures',
      location: 'Detroit, MI',
      period: 'May 2026 – August 2026',
      description: [
        'Source and screen 50+ early-stage deals weekly using market mapping, outreach, and CRM pipelines to identify high-potential opportunities.',
        'Build 3-statement financial models and perform valuation analysis, including DCF and comps, to support ~$100K–$500K seed-stage investment decisions.',
        'Draft 2–3 investment memos weekly and participate in 10+ pitch meetings, board discussions, and strategic diligence sessions.',
        'Develop AI-driven workflows using Python and OpenAI APIs to automate deal sourcing and diligence, improving screening efficiency by ~30–50%.'
      ]
    },
    {
      title: 'Portfolio Manager',
      company: 'FAYZ Capital',
      location: 'Detroit, MI',
      period: 'January 2023 – Present',
      description: [
        'Built Python-based trading models using 3+ indicators, including EMA, RSI, and volatility, to execute short-term options and equity trades systematically.',
        'Backtested 50+ strategy iterations in ThinkorSwim across 3 asset classes to refine risk and execution rules efficiently.',
        'Analyzed 30+ public companies using valuation and earnings metrics to support medium- and long-term positioning strategically.',
        'Applied technical analysis across 1,000+ trades using trend, momentum, and volume data to manage downside risk consistently.'
      ]
    },
    {
      title: 'Finance / Business Development Intern',
      company: 'American Rheinmetall',
      location: 'Plymouth, MI',
      period: 'May 2025 – August 2025',
      description: [
        'Organized and analyzed 4,400+ Excel-based product lines across multi-tiered Bills of Materials (BOMs) for complex defense vehicle systems.',
        'Identified part redundancies, pricing inefficiencies, and savings opportunities across supplier data tied to $10M+ defense contracts.',
        'Supported $25M+ in proposal development and supplier evaluation efforts, improving cost estimation accuracy by 18%.',
        'Streamlined cross-department reporting workflows across 5 teams, reducing manual processing time by 30% and improving data visibility.'
      ]
    },
    {
      title: 'Founder',
      company: 'Buyifi Real Estate Investment',
      location: 'Detroit, MI',
      period: 'December 2023 – January 2025',
      description: [
        'Evaluated detailed financial data and property valuations, identifying new opportunities that increased portfolio returns by 20%.',
        'Conducted in-depth market research on 100+ properties, analyzing price trends and investment potential to guide strategic acquisitions.',
        'Negotiated directly with sellers and agents to secure below-market deals, optimizing up to 75% profit margins on key properties.',
        'Managed property assessments and due diligence processes, ensuring compliance with all legal and financial requirements on 20+ deals.'
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