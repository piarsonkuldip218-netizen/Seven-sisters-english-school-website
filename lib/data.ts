/**
 * Centralized school data — update yahan, sab jagah propagate hota hai.
 *
 * TODO (client se aana hai):
 * - Real address with pincode
 * - Real WhatsApp/phone numbers
 * - Real principal photo + message
 * - Real faculty photos + bios
 * - Real campus photos
 * - Real news/announcements
 */

export const school = {
  name: "Seven Sister's English School",
  shortName: "SSES",
  tagline: "Nurturing Minds, Building Futures",
  established: 1988,
  registration: "2738",
  affiliation: "SEBA (Board of Secondary Education, Assam)",
  classesOffered: "Nursery to Class X",
  email: "sses1988@gmail.com",
  phone: "+91 88761 24126",
  whatsapp: "+91 88761 24126",
  whatsappRaw: "918876124126", // for wa.me link, no + or spaces
  address: {
    line1: "Ward No. 3, Dhulapadung T.E.",
    line2: "Sonitpur",
    state: "Assam",
    pincode: "784505",
    country: "India",
  },
  mapEmbed: "https://www.google.com/maps?q=Seven+Sister%27s+English+School+Dhulapadung+Sonitpur+Assam&output=embed",
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Faculty", href: "#faculty" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export const aboutContent = {
  heading: "A Legacy of Excellence Since 1988",
  intro:
    "Seven Sister's English School, established in 1988, has been a beacon of quality education in the Sonitpur district of Assam. Named after the seven sister states of Northeast India, our institution celebrates the rich cultural heritage of the region while preparing students for a globally competitive future.",
  paragraphs: [
    "For over three decades, we have nurtured generations of students, instilling in them a love for learning, strong moral values, and the confidence to lead. Our holistic approach blends academic rigour with cultural awareness, sports, and creative expression.",
    "Affiliated with SEBA, our curriculum follows a structured framework while being enriched with co-curricular activities that develop well-rounded personalities. We believe every child carries a unique spark — our role is to ignite it.",
  ],
  highlights: [
    { label: "Years of Excellence", value: "35+" },
    { label: "Students Mentored", value: "5,000+" },
    { label: "Qualified Faculty", value: "30+" },
    { label: "Pass Percentage", value: "98%" },
  ],
};

export const visionMission = {
  vision:
    "To be a centre of excellence in education, empowering students with knowledge, character, and the courage to shape a brighter tomorrow for themselves and society.",
  mission:
    "We are committed to providing holistic, value-based education that nurtures intellectual curiosity, cultural pride, and ethical leadership in every learner — preparing them for academic success and meaningful lives.",
  values: [
    { title: "Discipline", description: "Self-control and respect form the foundation of every learner's journey." },
    { title: "Excellence", description: "We pursue the highest standards in academics, character, and conduct." },
    { title: "Compassion", description: "Empathy and kindness guide our interactions within and beyond classrooms." },
    { title: "Innovation", description: "We embrace modern teaching methods alongside timeless wisdom." },
  ],
};

export const principalMessage = {
  name: "Biswajit Dhar",
  qualification: "M.A., B.Ed.",
  photo: "/principal.png",
  message:
    "At Seven Sister's English School, we believe education is not merely the transfer of knowledge — it is the cultivation of character, curiosity, and courage. Since 1988, we have walked alongside thousands of young learners, watching them blossom into confident, capable adults. Our committed faculty, modern infrastructure, and student-first philosophy create an environment where every child feels seen, supported, and inspired. I warmly invite you to be part of our growing family.",
};

export const vicePrincipal = {
  name: "Sita Rai",
  qualification: "M.A., B.Ed.",
  subject: "Senior Faculty",
  photo: "/principal-placeholder.svg",
  message:
    "At Seven Sister's English School, leadership is about lifting every learner. Working alongside our dedicated faculty, my focus is on ensuring each student feels supported — academically, emotionally, and socially. We celebrate small wins, encourage bold questions, and build the discipline that turns potential into achievement. Welcome to our family.",
};

export const academics = {
  heading: "Academics",
  subheading: "A curriculum that balances rigour with curiosity",
  programs: [
    {
      title: "Pre-Primary",
      classes: "Nursery, KG-I, KG-II",
      description: "Play-based learning that builds foundational literacy, numeracy, and social skills in a nurturing environment.",
    },
    {
      title: "Primary",
      classes: "Class I — V",
      description: "Strong fundamentals across English, Mathematics, Science, Social Studies, and regional languages with hands-on activities.",
    },
    {
      title: "Upper Primary",
      classes: "Class VI — VIII",
      description: "Concept-driven learning with project work, lab exposure, and structured preparation for higher classes.",
    },
    {
      title: "Secondary",
      classes: "Class IX — X",
      description: "SEBA board curriculum with focused exam preparation, mentorship, and career guidance for class X transition.",
    },
  ],
};

export type FacultyMember = {
  name: string;
  subject: string;
  qualification: string;
  photo: string;
  designation?: string; // optional: "HOD", "Senior Teacher", "Coordinator", etc.
};

export const faculty: FacultyMember[] = [
  // TODO: Replace with real faculty data + photos
  { name: "[Teacher Name 1]", subject: "English", qualification: "M.A., B.Ed.", photo: "/faculty-placeholder.svg" },
  { name: "[Teacher Name 2]", subject: "Mathematics", qualification: "M.Sc., B.Ed.", photo: "/faculty-placeholder.svg" },
  { name: "[Teacher Name 3]", subject: "Science", qualification: "M.Sc., B.Ed.", photo: "/faculty-placeholder.svg" },
  { name: "[Teacher Name 4]", subject: "Social Studies", qualification: "M.A., B.Ed.", photo: "/faculty-placeholder.svg" },
  { name: "[Teacher Name 5]", subject: "Hindi", qualification: "M.A., B.Ed.", photo: "/faculty-placeholder.svg" },
  { name: "[Teacher Name 6]", subject: "Assamese", qualification: "M.A., B.Ed.", photo: "/faculty-placeholder.svg" },
];

export const gallery = [
  // TODO: Replace with real campus photos
  { src: "/gallery-placeholder.svg", alt: "School campus", caption: "Main Campus" },
  { src: "/gallery-placeholder.svg", alt: "Classroom", caption: "Smart Classroom" },
  { src: "/gallery-placeholder.svg", alt: "Library", caption: "Library" },
  { src: "/gallery-placeholder.svg", alt: "Science lab", caption: "Science Laboratory" },
  { src: "/gallery-placeholder.svg", alt: "Playground", caption: "Sports Ground" },
  { src: "/gallery-placeholder.svg", alt: "Annual day", caption: "Annual Day Celebration" },
  { src: "/gallery-placeholder.svg", alt: "Cultural event", caption: "Cultural Programme" },
  { src: "/gallery-placeholder.svg", alt: "Sports day", caption: "Sports Day" },
];

export const news = [
  // TODO: Replace with real announcements
  {
    date: "2026-05-20",
    title: "Admissions Open for 2026-27 Academic Year",
    excerpt: "Applications now open for Nursery to Class IX. Limited seats available — secure admission early.",
    tag: "Admissions",
  },
  {
    date: "2026-04-15",
    title: "Annual Day Celebrations a Grand Success",
    excerpt: "Students showcased exceptional talent across cultural performances, dances, and skits.",
    tag: "Event",
  },
  {
    date: "2026-03-30",
    title: "Class X Results: 98% Pass Percentage",
    excerpt: "Congratulations to all our students for their outstanding performance in SEBA board examinations.",
    tag: "Achievement",
  },
];

export const facilities = [
  { title: "Smart Classrooms", description: "Modern teaching aids and digital boards for interactive learning" },
  { title: "Science Laboratory", description: "Well-equipped labs for hands-on scientific exploration" },
  { title: "Computer Lab", description: "Modern computers preparing students for the digital era" },
  { title: "Library", description: "Wide collection of books, magazines, and reference materials" },
  { title: "Playground", description: "Spacious grounds for sports, games, and physical activity" },
  { title: "Transport", description: "Safe school bus service covering nearby areas" },
];

export const admissions = {
  heading: "Admissions Open",
  subheading: "Begin your child's journey with us",
  steps: [
    { step: "01", title: "Inquire", description: "Fill the inquiry form or visit the school for a campus tour." },
    { step: "02", title: "Application", description: "Collect and submit the admission form with required documents." },
    { step: "03", title: "Interaction", description: "Brief interaction with the child and parents to understand needs." },
    { step: "04", title: "Confirmation", description: "On selection, complete admission formalities and welcome aboard." },
  ],
  documents: [
    "Birth certificate (original + photocopy)",
    "Previous school report card / TC",
    "Aadhaar card of student and parents",
    "Recent passport-size photographs (4)",
    "Address proof",
  ],
};
