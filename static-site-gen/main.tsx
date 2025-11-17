import React from 'react@19.2.0';
import { renderToStaticMarkup } from 'react-dom@19.2.0/server';
import { readFileSync, writeFileSync } from 'fs';

interface Project {
  name: string;
  description: string;
  tech: string[];
}

interface PortfolioData {
  name: string;
  title: string;
  projects: Project[];
  skills: string[];
}

function Portfolio({ data }: { data: PortfolioData }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${data.name} - Portfolio`}</title>
      </head>
      <body>
        <h1>{data.name}</h1>
        <p>{data.title}</p>

        <section>
          <h2>Projects</h2>
          {data.projects.map((project, index) => (
            <article key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.tech.join(', ')}</p>
            </article>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </body>
    </html>
  );
}

// Read portfolio data
const portfolioData: PortfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

// Render the React component to static HTML
const html = renderToStaticMarkup(<Portfolio data={portfolioData} />);

// Add DOCTYPE (renderToStaticMarkup doesn't include it)
const fullHtml = `<!DOCTYPE html>\n${html}`;

// Write to file
writeFileSync('./portfolio.html', fullHtml);

console.log('✓ Generated portfolio.html');
