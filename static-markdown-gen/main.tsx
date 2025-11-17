/** @jsx md */
import { readFileSync, writeFileSync } from 'fs';
import { md, renderToMarkdown } from './jsx-to-markdown.tsx';

function Portfolio({ data }) {
  return (
    <document title={data.name}>
      <p>{data.title}</p>

      <h2>Projects</h2>
      {data.projects.map((project, index) => (
        <fragment key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.tech.join(', ')}
          </p>
        </fragment>
      ))}

      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </document>
  );
}

const portfolioData = JSON.parse(
  readFileSync('./portfolio-data.json', 'utf-8')
);

const portfolioTree = Portfolio({ data: portfolioData });

const markdown = renderToMarkdown(portfolioTree);

writeFileSync('./portfolio.md', markdown);

console.log('Generated portfolio.md');
