import React from 'react'
import Users from './components/Users'

const Card = () => {
  const usersData = [
  {
    id: 1,
    name: "Aisha Kapoor",
    designation: "UI/UX Designer",
    type: "Freelancer",
    keySkills: ["UI", "UX", "Figma", "Prototyping"],
    shortIntro: "Product-focused designer who turns user research into pixel-perfect interfaces.",
    availability: "available",
    pay: "$55/h",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Rohan Mehra",
    designation: "Frontend Developer",
    type: "Full-time",
    keySkills: ["JavaScript", "React", "CSS", "Accessibility"],
    shortIntro: "Builds fast, accessible web apps with a strong emphasis on clean code.",
    availability: "offline",
    pay: "$40/h",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Neha Singh",
    designation: "Product Designer",
    type: "Freelancer",
    keySkills: ["UX Research", "Wireframing", "Sketch", "User Testing"],
    shortIntro: "Empathetic researcher and designer who crafts intuitive user journeys.",
    availability: "available",
    pay: "$65/h",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Vikram Patel",
    designation: "Visual Designer",
    type: "Contract",
    keySkills: ["Photoshop", "Illustrator", "Branding", "Motion"],
    shortIntro: "Creates distinctive visual systems and brand assets that scale.",
    availability: "offline",
    pay: "$50/h",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    name: "Sakshi Rao",
    designation: "UX Researcher",
    type: "Full-time",
    keySkills: ["Interviews", "Surveys", "Usability Testing", "Persona Creation"],
    shortIntro: "Data-driven researcher who uncovers the why behind user behavior.",
    availability: "available",
    pay: "$48/h",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    name: "Aditya Verma",
    designation: "UI/UX Designer",
    type: "Freelancer",
    keySkills: ["Figma", "Interaction Design", "Prototyping", "CSS"],
    shortIntro: "Focuses on delightful interactions and pragmatic design systems.",
    availability: "available",
    pay: "$60/h",
    image: "https://i.pravatar.cc/150?img=6"
  },
  {
    id: 7,
    name: "Priya Nair",
    designation: "Product Designer",
    type: "Part-time",
    keySkills: ["UI", "UX", "Product Strategy", "Research"],
    shortIntro: "Bridges product strategy and design to drive measurable outcomes.",
    availability: "offline",
    pay: "$45/h",
    image: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 8,
    name: "Karan Joshi",
    designation: "Interaction Designer",
    type: "Freelancer",
    keySkills: ["Micro-interactions", "Animation", "Principle", "After Effects"],
    shortIntro: "Designs micro-interactions that make products feel alive.",
    availability: "available",
    pay: "$52/h",
    image: "https://i.pravatar.cc/150?img=8"
  },
  {
    id: 9,
    name: "Maya Desai",
    designation: "UX Writer",
    type: "Contract",
    keySkills: ["Content Design", "Microcopy", "Tone & Voice", "Localization"],
    shortIntro: "Crafts clear, helpful product copy that guides users to their goals.",
    availability: "available",
    pay: "$38/h",
    image: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 10,
    name: "Rahul Gupta",
    designation: "UI Designer",
    type: "Freelancer",
    keySkills: ["Sketch", "Figma", "Design Systems", "HTML/CSS"],
    shortIntro: "Visual designer who builds reusable UI components and style guides.",
    availability: "offline",
    pay: "$42/h",
    image: "https://i.pravatar.cc/150?img=10"
  },
  {
    id: 11,
    name: "Isha Malhotra",
    designation: "Accessibility Specialist",
    type: "Full-time",
    keySkills: ["a11y", "WCAG", "Screen Readers", "Audit"],
    shortIntro: "Ensures products are usable by everyone through accessibility best practices.",
    availability: "available",
    pay: "$70/h",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 12,
    name: "Ankit Sharma",
    designation: "UX Researcher",
    type: "Freelancer",
    keySkills: ["Analytics", "A/B Testing", "User Interviews"],
    shortIntro: "Combines qualitative & quantitative methods to validate product decisions.",
    availability: "offline",
    pay: "$44/h",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 13,
    name: "Tanya Bhatt",
    designation: "Product Designer",
    type: "Full-time",
    keySkills: ["Figma", "Prototyping", "User Flows", "Collaboration"],
    shortIntro: "Cross-functional designer who ships features end-to-end with PMs and engineers.",
    availability: "available",
    pay: "$58/h",
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 14,
    name: "Sameer Khan",
    designation: "Motion UI Designer",
    type: "Contract",
    keySkills: ["Lottie", "After Effects", "Principle", "Prototyping"],
    shortIntro: "Creates motion-rich UI prototypes that improve user comprehension.",
    availability: "available",
    pay: "$62/h",
    image: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 15,
    name: "Bhavya Reddy",
    designation: "UX/Product Designer",
    type: "Freelancer",
    keySkills: ["Research", "UI", "Design Systems", "Figma"],
    shortIntro: "Human-centered designer focused on measurable product improvements.",
    availability: "offline",
    pay: "$47/h",
    image: "https://i.pravatar.cc/150?img=15"
  }
];

  return (
    <div>
      {usersData.map(user => (
        <Users key={user.id} {...user} />
      ))}
    </div>
  )
}

export default Card