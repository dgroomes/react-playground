/** @jsx md */
import { md } from './jsx-to-markdown-factory.jsx';

export function Portfolio({ data }) {
  return (
    <document title={data.name}>
      <p>{data.title}</p>

      <section title="Projects">
        {data.projects.map((project, index) => (
          <article key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.tech.join(', ')}
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
    </document>
  );
}
