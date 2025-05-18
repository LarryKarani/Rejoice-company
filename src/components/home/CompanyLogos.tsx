import React from 'react';

const CompanyLogos: React.FC = () => {
  // Array of company logos
  const logos = [
    {
      name: 'Company 1',
      url: 'https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Company 2',
      url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Company 3',
      url: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Company 4',
      url: 'https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Company 5',
      url: 'https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Company 6',
      url: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <img 
            src={logo.url} 
            alt={`${logo.name} logo`} 
            className="h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" 
          />
        </div>
      ))}
    </div>
  );
};

export default CompanyLogos;