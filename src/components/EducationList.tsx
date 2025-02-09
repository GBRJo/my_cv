type Education = {
  id: string;
  institution: string;
  specialization: string;
  duration: string;
};

export const EducationList = ({ educationData }: { educationData: Education[] }) => {
  return (
    <div>
      {educationData.map(education => (
        <div key={education.id} className="mb-4">
          <span>{education.institution}</span>
          <h6 className="my-1 opacity-75">{education.duration}</h6>
          <p>{education.specialization}</p>
        </div>
      ))}
    </div>
  );
};
