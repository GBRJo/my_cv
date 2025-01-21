import { BaseTemplate } from '@/templates/BaseTemplate';

export default function PageOne() {
  return (
    <BaseTemplate
      summaryHeader="Experienced in creating IT products in the fields of medtech, social networks, construction, finance, and consumer goods."
      summaryDescription="Participated in the full product development cycle — from mockup to deployment and release — leveraging both design expertise (from classical training to real-world project experience) and frontend development skills. Worked in small startups as well as large web agencies with full-scale teams."
      skills={[
        {
          id: '1',
          skillsHeader: 'Design',
          tags: [
            { id: '1-1', text: 'ui/ux' },
            { id: '1-2', text: 'illustration' },
            { id: '1-3', text: 'branding' },
          ],
        },
        {
          id: '2',
          skillsHeader: 'tools',
          tags: [
            { id: '2-1', text: 'illustrator', iconSrc: '/assets/images/tags/illustrator.svg' },
            { id: '2-2', text: 'photoshop', iconSrc: '/assets/images/tags/photoshop.svg' },
            { id: '2-3', text: 'figma', iconSrc: '/assets/images/tags/figma.svg' },
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
