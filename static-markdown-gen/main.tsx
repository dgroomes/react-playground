/** @jsx md */
import {readFileSync, writeFileSync} from 'fs';
import {md, renderToMarkdown} from './jsx-to-markdown';

// This component shows the value proposition of "JSX to Markdown". You can design your Markdown document using the full
// expressiveness of JSX: loops, conditionals, etc. Your bringing the data to a view and you don't need to worry about
// escaping your content so it renders correctly in Markdown, and you certainly don't need to string concatenate
// Markdown tags or your content.
function Portfolio(data) {
  return (
    <document title={data.name}>
      <p>{data.title}</p>

      <h2>Projects</h2>
      {data.projects.map((project) => (
        // I couldnt' get <></> fragment syntax to work here, not sure why.
        <fragment>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>

            {/* The "join" call is a little lame. It might be cooler to make a component that renders a comma delimited
              list*/}
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

const data = JSON.parse(readFileSync('./portfolio-data.json', 'utf-8'));
const markdown = renderToMarkdown(Portfolio(data));

writeFileSync('./portfolio.md', markdown);

console.log('Generated portfolio.md');
