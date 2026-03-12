export const doctorSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://drsurabhinikam.com/#clinic",
      name: "Dr. Surabhi Nikam Mirajkar — ENT & Allergy Clinic",
      url: "https://drsurabhinikam.com",
      logo: "https://drsurabhinikam.com/images/logo.png",
      image: "https://drsurabhinikam.com/images/og-image.jpg",
      description:
        "Ethical, patient-centered ENT and allergy care in Mumbai. Specializations include ENT, Allergy & Immunotherapy, and Fellowship-trained Skull Base Surgery.",
      telephone: "+91-98765-43210",
      email: "dr.surabhi@drsurabhinikam.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0760",
        longitude: "72.8777",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      medicalSpecialty: [
        "https://schema.org/Otolaryngology",
        "https://schema.org/Allergist",
      ],
      hasMap: "https://maps.google.com/?q=Mumbai+ENT+Clinic",
      priceRange: "$$",
    },
    {
      "@type": "Physician",
      "@id": "https://drsurabhinikam.com/#doctor",
      name: "Dr. Surabhi Nikam Mirajkar",
      givenName: "Surabhi",
      familyName: "Nikam Mirajkar",
      gender: "Female",
      jobTitle: "ENT Specialist & Allergy Specialist",
      description:
        "Dr. Surabhi Nikam Mirajkar is a dedicated and compassionate ENT specialist committed to delivering ethical, patient-centered care. With qualifications including MBBS, MS (ENT), certification as an Allergy Specialist, and a Fellowship in Skull Base Surgery, she brings advanced expertise combined with a deeply human touch to every consultation.",
      url: "https://drsurabhinikam.com",
      image: "https://drsurabhinikam.com/images/dr-surabhi.jpg",
      telephone: "+91-98765-43210",
      email: "dr.surabhi@drsurabhinikam.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      medicalSpecialty: [
        "https://schema.org/Otolaryngology",
        "Allergy & Immunotherapy",
        "Skull Base Surgery",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MBBS",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MS (ENT) — Master of Surgery in Ear, Nose & Throat",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Certified Allergy Specialist",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "fellowship",
          name: "Fellowship in Skull Base Surgery",
        },
      ],
      worksFor: {
        "@id": "https://drsurabhinikam.com/#clinic",
      },
      sameAs: [
        "https://instagram.com/drsurabhinikam",
        "https://facebook.com/drsurabhinikam",
      ],
    },
  ],
};
