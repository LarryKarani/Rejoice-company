import React, { useEffect, useState } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  delay: number;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label, delay, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isVisible) {
      // Start counting after the delay
      const timer = setTimeout(() => {
        let start = 0;
        interval = setInterval(() => {
          start += Math.ceil(number / 20);
          if (start >= number) {
            setCount(number);
            clearInterval(interval);
          } else {
            setCount(start);
          }
        }, 50);
      }, delay);
      
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md text-center transform transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="flex justify-center mb-3 text-primary">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2 text-primary-dark">{count}+</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;