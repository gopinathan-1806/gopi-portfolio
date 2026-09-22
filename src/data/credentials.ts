// ---------------------------------------------------------------------------
// Certifications, awards, and education.
// ---------------------------------------------------------------------------

export type Certification = {
  title: string;
  issuer: string;
  type: "certification" | "award" | "recognition";
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    type: "certification",
  },
  {
    title: "Recognized for Onboarding NGDC Regions into IBM Cloud",
    issuer: "IBM",
    type: "recognition",
  },
  {
    title: "Accenture Pinnacle Award",
    issuer: "Accenture",
    type: "award",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.E. in Mechanical Engineering",
    school: "Sri Krishna College of Technology",
    location: "Coimbatore, India",
  },
];
