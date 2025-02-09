import { experiences } from '@/data/experienceData';

export const ExperienceList = () => {
  return (
    <div>
      {experiences.map(experience => (
        <div key={experience.id} className="mb-6">
          <h4 className="mb-1.5">{experience.organization}</h4>
          <span>{experience.position}</span>
          <h6 className="mb-2 mt-1 opacity-75">{experience.duration}</h6>
          <ul className="list-inside space-y-1">
            {experience.responsibilities.map(responsibility => (
              <li key={`${experience.id}-${responsibility}`}>
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
