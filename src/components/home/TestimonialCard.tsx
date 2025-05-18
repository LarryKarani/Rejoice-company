import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  delay: number;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  delay,
  isVisible
}) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
      }}
    >
      <Quote className="text-white/60 mb-4" size={32} />
      <p className="mb-6 text-white/90">{quote}</p>
      <div>
        <h4 className="font-semibold">{author}</h4>
        <p className="text-white/70 text-sm">{position}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard