/** @jsx md */
import { md } from './jsx-to-markdown.jsx';

export function PortfolioMarkdownJSX({ data }) {
  return (
    <document title={data.name}>
      <h2>{data.title}</h2>
      <p>{data.bio}</p>

      <section title="Contact">
        <ul>
          <li>Email: {data.contact.email}</li>
          <li>GitHub: {data.contact.github}</li>
          <li>LinkedIn: {data.contact.linkedin}</li>
        </ul>
      </section>

      <section title="Projects">
        {data.projects.map((project, index) => (
          <article key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.tech.join(', ')}
            </p>
            <p>
              <strong>URL:</strong> {project.url}
            </p>
          </article>
        ))}
      </section>

      <section title="Skills">
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <hr />
      <p>
        <strong>Generated with React JSX to Markdown</strong>
      </p>
    </document>
  );
}
