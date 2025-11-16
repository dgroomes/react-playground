import {
  Document,
  H1,
  H2,
  H3,
  H4,
  P,
  UL,
  LI,
  Section,
  Article,
  Strong,
  Link
} from './markdown-components.jsx';

export function PortfolioMarkdown({ data }) {
  return Document({
    title: data.name,
    children: [
      H2({ children: data.title }),
      P({ children: data.bio }),

      Section({
        title: 'Contact',
        children: UL({
          children: [
            LI({ children: ['Email: ', data.contact.email] }),
            LI({ children: ['GitHub: ', data.contact.github] }),
            LI({ children: ['LinkedIn: ', data.contact.linkedin] })
          ]
        })
      }),

      Section({
        title: 'Projects',
        children: data.projects.map((project) =>
          Article({
            children: [
              H3({ children: project.name }),
              P({ children: project.description }),
              P({
                children: [
                  Strong({ children: 'Technologies:' }),
                  ' ',
                  project.tech.join(', ')
                ]
              }),
              P({
                children: [
                  Strong({ children: 'URL:' }),
                  ' ',
                  project.url
                ]
              })
            ]
          })
        )
      }),

      Section({
        title: 'Skills',
        children: UL({
          children: data.skills.map((skill) => LI({ children: skill }))
        })
      }),

      P({
        children: [
          '---',
          '\n\n',
          Strong({ children: 'Generated with React Static Site Generator' })
        ]
      })
    ]
  });
}
