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
        <header>
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <p>{data.bio}</p>
        </header>

        <section>
          <h3>Contact</h3>
          <ul>
            <li>Email: {data.contact.email}</li>
            <li>GitHub: {data.contact.github}</li>
            <li>LinkedIn: {data.contact.linkedin}</li>
          </ul>
        </section>

        <section>
          <h3>Projects</h3>
          {data.projects.map((project, index) => (
            <article key={index}>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <p>Technologies: {project.tech.join(', ')}</p>
              <p>URL: {project.url}</p>
            </article>
          ))}
        </section>

        <section>
          <h3>Skills</h3>
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <footer>
          <p>Generated with React Static Site Generator</p>
        </footer>
      </body>
    </html>
  );
}
