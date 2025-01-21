import { BaseTemplate } from '@/templates/BaseTemplate';

export default function PageOne() {
  return (
    <BaseTemplate
      summaryHeader="Experienced in creating IT products in the fields of medtech, social networks, construction, finance, and consumer goods."
      summaryDescription="Participated Participated in the full product development cycle — from mockup to deployment and release — leveraging both design expertise (from classical training to real-world project experience) and frontend development skills. Worked in small startups as well as large web agencies with full-scale teams.in the full product development cycle — from mockup to deployment and release — leveraging both design expertise (from classical training to real-world project experience) and frontend development skills. Worked in small startups as well as large web agencies with full-scale teams."
      skills={[
        {
          id: '1',
          skillsHeader: 'Frontend Development',
          tags: [
            { id: '1-1', text: 'html5', iconSrc: '/assets/images/tags/html.svg' },
            { id: '1-2', text: 'css3', iconSrc: '/assets/images/tags/css3.svg' },
            { id: '1-3', text: 'typescript', iconSrc: '/assets/images/tags/typescript.svg' },
            { id: '1-4', text: 'javascript', iconSrc: '/assets/images/tags/javascript.svg' },
            { id: '1-5', text: 'react', iconSrc: '/assets/images/tags/react.svg' },
            { id: '1-6', text: 'nextjs', iconSrc: '/assets/images/tags/nextjs.svg' },
            { id: '1-7', text: 'redux', iconSrc: '/assets/images/tags/redux.svg' },
            { id: '1-8', text: 'remix', iconSrc: '/assets/images/tags/remix.svg' },
            { id: '1-9', text: 'scss', iconSrc: '/assets/images/tags/sass.svg' },
            { id: '1-10', text: 'tailwind', iconSrc: '/assets/images/tags/tailwing.svg' },
          ],
        },
        {
          id: '2',
          skillsHeader: 'tools',
          tags: [
            { id: '2-1', text: 'git', iconSrc: '/assets/images/tags/git.svg' },
            { id: '2-2', text: 'vscode', iconSrc: '/assets/images/tags/vscode.svg' },
            { id: '2-3', text: 'prettier', iconSrc: '/assets/images/tags/prettier.svg' },
            { id: '2-4', text: 'eslint', iconSrc: '/assets/images/tags/eslint.svg' },
            { id: '2-5', text: 'husky', iconSrc: '/assets/images/tags/husky.svg' },
            { id: '2-6', text: 'vite', iconSrc: '/assets/images/tags/vitejs.svg' },
            { id: '2-7', text: 'webpack', iconSrc: '/assets/images/tags/webpack.svg' },
          ],
        },
        {
          id: '3',
          skillsHeader: 'Languages',
          tags: [
            { id: '3-1', text: 'Russian (Native)' },
            { id: '3-2', text: 'English (Intermediate)' },
          ],
        },
      ]}
    >
    </BaseTemplate>
  );
}
