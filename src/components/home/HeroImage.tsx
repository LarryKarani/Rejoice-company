import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}
    />
  );
};

export default HeroImage;