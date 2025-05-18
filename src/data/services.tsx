import React from 'react';
import { Users, Search, Clock, Building as Buildings, Briefcase, BarChart } from 'lucide-react';

export const services = [
  {
    title: "Local & International Recruitment",
    description: "Sourcing and placing qualified candidates for various industries both within Kenya and internationally.",
    detailedDescription: "We specialize in connecting employers with skilled and semi-skilled talent from Kenya and across Africa. Our comprehensive recruitment solutions cater to both local and international placements, ensuring the right fit for every position.",
    icon: <Search size={36} />,
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Local and international talent sourcing",
      "Industry-specific expertise",
      "Comprehensive candidate screening",
      "Cultural fit assessment",
      "Placement follow-up support"
    ]
  },
  {
    title: "Skilled & Semi-Skilled Placements",
    description: "Providing workers in sectors such as construction, hospitality, healthcare, manufacturing & Logistics and IT.",
    detailedDescription: "Our expertise spans across multiple industries, allowing us to provide qualified workers for various sectors. We ensure each candidate meets the specific requirements and standards of their respective industries.",
    icon: <Users size={36} />,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Industry-specific skill assessment",
      "Technical competency verification",
      "Experience validation",
      "Safety certification checks",
      "Professional development tracking"
    ]
  },
  {
    title: "Candidate Screening & Verification",
    description: "Conducting thorough background checks, credential verification, and interviews to ensure the right fit.",
    detailedDescription: "Our rigorous screening process ensures that all candidates meet the highest standards of professionalism and competency. We verify credentials, conduct background checks, and assess both technical skills and cultural fit.",
    icon: <Clock size={36} />,
    image: "https://images.pexels.com/photos/7688541/pexels-photo-7688541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Background verification",
      "Reference checks",
      "Skills assessment",
      "Document validation",
      "Interview coordination"
    ]
  },
  {
    title: "Relocation & Onboarding Support",
    description: "Assisting with visa processing, travel arrangements, and cultural orientation for international placements.",
    detailedDescription: "We provide comprehensive support for international placements, handling everything from visa applications to travel arrangements and cultural orientation, ensuring a smooth transition for both employers and employees.",
    icon: <Buildings size={36} />,
    image: "https://images.pexels.com/photos/6774448/pexels-photo-6774448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Visa application assistance",
      "Travel coordination",
      "Cultural orientation",
      "Accommodation support",
      "Integration assistance"
    ]
  },
  {
    title: "Employer Services",
    description: "Offering tailored recruitment solutions to meet specific business needs, ensuring timely and efficient hiring processes.",
    detailedDescription: "We work closely with employers to understand their unique requirements and provide customized recruitment solutions that align with their business objectives and organizational culture.",
    icon: <BarChart size={36} />,
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Custom recruitment strategies",
      "Workforce planning",
      "Compliance guidance",
      "Market insights",
      "Retention support"
    ]
  }
];