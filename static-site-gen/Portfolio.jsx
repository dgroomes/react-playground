import React from 'react';

export function Portfolio({ data }) {
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
