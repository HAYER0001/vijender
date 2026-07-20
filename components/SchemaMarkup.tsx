type SchemaType = "Person" | "GovernmentOrganization" | "FAQPage"

interface SchemaProps {
  type: SchemaType
  data?: Record<string, unknown>
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vijender Pal Singh",
  givenName: "Vijender Pal",
  familyName: "Singh",
  jobTitle: "BJP Karyakarta",
  description:
    "BJP karyakarta serving Sri Karanpur since 1993. Working for social justice, infrastructure development, and community welfare in Rajasthan.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sri Karanpur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  url: "https://vijenderpalsingh.com",
  sameAs: ["https://wa.me/919414089131"],
  knowsAbout: ["Politics", "Social Justice", "Infrastructure Development", "Community Service"],
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Bharatiya Janata Party — Sri Karanpur",
  description: "BJP karyakarta office representing the people of Sri Karanpur constituency.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sri Karanpur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
}

function buildFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

const schemas: Record<SchemaType, (data?: Record<string, unknown>) => object> = {
  Person: () => personSchema,
  GovernmentOrganization: () => orgSchema,
  FAQPage: (data) => buildFAQSchema((data?.mainEntity ?? []) as { question: string; answer: string }[]),
}

export function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = schemas[type](data)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export { type SchemaType }
