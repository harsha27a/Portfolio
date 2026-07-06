export const navLinks = ["Skills", "Projects", "Experience", "Education", "Certifications"];

export const socialLinks = {
  github: "https://github.com/harsha27a",
  linkedin: "https://www.linkedin.com/in/harsha-kumari-506a40398/",
  email: "mailto:kumariharsha578@gmail.com",
  phone: "tel:+923362618323",
  whatsapp: "https://wa.me/923362618323",
};

export const hero = {
  tagline: "Computer Science Student · Institute of Business Management, Karachi",
  description:
    "Undergraduate student in the fifth semester of a BS Computer Science program, with hands-on experience in Java, JavaScript, and full-stack web development. I have built academic and team-based projects ranging from desktop applications to a task management system with authentication, APIs, and real-time updates. I am motivated, detail-oriented, and currently seeking internship or entry-level opportunities in software development.",
};

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Programming",
    items: [
      "Java", "JavaScript", "C", "HTML", "CSS",
      "REST APIs", "OOP", "Data Structures", "Git", "GitHub", "VS Code",
    ],
  },
  {
    label: "Tools",
    items: ["Canva", "CapCut", "Microsoft Office", "Google Workspace", "Trello"],
  },
  {
    label: "Soft skills",
    items: ["Problem Solving", "Teamwork", "Communication", "Time Management"],
  },
];

export const featuredProject = {
  name: "Task Management System",
  desc: "A full-stack team project for creating and tracking tasks. Built with Node.js, Express, MySQL, React, and Socket.IO for real-time updates.",
  stack: ["Node.js", "Express", "MySQL", "React", "Socket.IO", "JWT"],
  github: "https://github.com/tftayyab/Task-Managment-System-DBMS-",
  demo: "https://task-management-system-dbms.netlify.app/",
};

export const otherProjects: {
  name: string;
  tech: string[];
  desc: string;
  github?: string;
}[] = [
  {
    name: "Medicine Stock Management",
    tech: ["Java"],
    desc: "Desktop app to record medicine details and track stock.",
  },
  {
    name: "Merge Sort Visualizer",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Web tool that shows merge sort step by step.",
  },
  {
    name: "Players Information App",
    tech: ["Java", "GUI"],
    desc: "Desktop app to manage football player records.",
  },
  {
    name: "4-Bit Binary Calculator",
    tech: ["Logic Gates"],
    desc: "Binary adder built with 74LS83 ICs and logic gates.",
  },
  {
    name: "Console Calculator",
    tech: ["C"],
    desc: "Command-line calculator with basic arithmetic.",
  },
  {
    name: "Digital Clock",
    tech: ["Assembly"],
    desc: "Real-time clock written in Assembly language.",
  },
];

export const experience = [
  {
    title: "Freelance Digital Content Creator",
    period: "2024 — present",
    org: "Self-employed",
    desc: "Made social media graphics in Canva and short videos in CapCut for small projects.",
  },
  {
    title: "Member",
    period: "2024 — present",
    org: "Tech Visionary Society (TVS), IOBM",
    desc: "Helped with peer workshops and digital literacy activities on campus.",
  },
  {
    title: "Member",
    period: "2024 — present",
    org: "Social Welfare and Trust Society (SWAT), IOBM",
    desc: "Took part in community outreach and student welfare events.",
  },
  {
    title: "Volunteer",
    period: "2023 — present",
    org: "Maheshwari Community",
    desc: "Helped organize community events and MUN activities.",
  },
];

export const education: {
  period?: string;
  degree: string;
  school: string;
  grade?: string;
  cgpa?: string;
  coursework?: string[];
}[] = [
  {
    period: "2024 — present",
    degree: "BS Computer Science",
    school: "Institute of Business Management (IOBM), Karachi — 5th semester",
    cgpa: "3.32",
    coursework: [
      "Programming", "Data Structures", "Algorithms", "OOP",
      "Computer Organization", "Assembly Language", "Operating Systems",
    ],
  },
  {
    degree: "Pre-Medical Studies",
    school: "Sindh Public School and College, Umerkot",
    grade: "A++",
  },
];

export const certificates = [
  {
    name: "Young Leaders Conference (YLC)",
    org: "Participant",
    desc: "Workshops on leadership and teamwork.",
  },
  {
    name: "Office Automation",
    org: "Aptech",
    desc: "Training in office tools and productivity software.",
  },
];
