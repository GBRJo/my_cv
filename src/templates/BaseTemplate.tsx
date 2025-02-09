import { TagButton } from '@/components/buttons/TagButton';
import { EducationList } from '@/components/EducationList';
import { ExperienceList } from '@/components/ExperienceList';
import { Tag } from '@/components/Tag';
import { ToggleSwitch } from '@/components/ToggleSwitch';
import { additionalEducation, primaryEducation } from '@/data/educationData';
import Image from 'next/image';

type TagButtonProps = {
  iconSrc: string;
  label: string;
  href: string;
};

export const BaseTemplate = (props: {
  summaryHeader: string;
  summaryDescription?: string;
  skills: { id: string; skillsHeader: string; tags: { id: string; text: string; iconSrc?: string }[] }[];
  children?: React.ReactNode;
}) => {
  const { summaryHeader, summaryDescription, skills, children } = props;

  const tagButtons: TagButtonProps[] = [
    { iconSrc: '/assets/images/tagButtons/behance.svg', label: 'Behance', href: 'https://example.com/1' },
    { iconSrc: '/assets/images/tagButtons/dribble.svg', label: 'Dribble', href: 'https://example.com/2' },
    { iconSrc: '/assets/images/tagButtons/git.svg', label: 'Github', href: 'https://example.com/3' },
    { iconSrc: '/assets/images/tagButtons/linkedIn.svg', label: 'Linkedin', href: 'https://example.com/4' },
    { iconSrc: '/assets/images/tagButtons/hh.svg', label: 'HeadHunter', href: 'https://example.com/5' },
  ];

  return (
    <div className="m-auto grid max-w-screen-xl gap-10 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="container-custom col-span-2 mx-auto mt-8 w-fit px-1 pb-8 pt-16 antialiased">
        <div className="mb-6 flex items-center space-x-4">
          <div className="font-roboto text-32 font-100 leading-120 tracking-0 antialiased opacity-75">
            Hello! I’m Ann
          </div>
          <Image
            src="/assets/images/avatar.webp"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="cursor-default">I have 5 years of experience as a</h1>
        <ToggleSwitch leftLabel="designer" rightLabel="developer" />
        <h1 className="cursor-default">in the IT industry</h1>
      </div>
      <div className="container-custom flex flex-col gap-4">
        <h3>Portfolios</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          {tagButtons.map(button => (
            <TagButton
              key={button.label}
              iconSrc={button.iconSrc}
              label={button.label}
              href={button.href}
            />
          ))}
        </div>
      </div>
      <div className="container-custom flex flex-col gap-4">
        <h3>Contacts</h3>
        <div className="flex flex-row gap-4">
          <div className="flex flex-1 flex-col gap-0.5">
            <h6 className="opacity-75">Telegram</h6>
            <a
              href="https://t.me/Anna_Cherniakova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@Anna_Cherniakova</span>
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <h6 className="opacity-75">E-mail</h6>
            <a
              href="mailto:anchernyakova@yandex.ru"
              target="_self"
            >
              <span>anchernyakova@yandex.ru</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-custom flex flex-col gap-2">
        <h2 className="mb-4">Summary</h2>
        {summaryHeader && <h4>{summaryHeader}</h4>}
        {summaryDescription && (
          <p>
            {summaryDescription}
          </p>
        )}
      </div>
      <div className="container-custom flex flex-col gap-6">
        <h2>Skills</h2>
        {skills.map(skillBlock => (
          <div key={skillBlock.id} className="flex flex-col gap-2">
            <h4>{skillBlock.skillsHeader}</h4>
            <div className="flex flex-wrap gap-2">
              {skillBlock.tags.map(tag => (
                <Tag key={tag.id} text={tag.text} iconSrc={tag.iconSrc} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container-custom flex flex-col gap-2">
        <h2 className="mb-4">Experience</h2>
        <ExperienceList />
      </div>
      <div className="container-custom flex flex-col gap-2">
        <h2 className="mb-4">Education</h2>
        <h4 className="mb-2">Primary Education</h4>
        <EducationList educationData={primaryEducation} />
        <h4 className="my-2">Certification & Additional Education</h4>
        <EducationList educationData={additionalEducation} />
      </div>
      {children}
    </div>
  );
};
