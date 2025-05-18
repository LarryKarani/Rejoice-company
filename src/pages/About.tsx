import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { team } from '../data/team';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    story: false,
    values: false,
    team: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        
        if (isVisible && section.id) {
          setVisibleSections(prev => ({
            ...prev,
            [section.id]: true
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">About TalentForge</h1>
            <p className="text-xl text-gray-100 mb-8">
              We are a team of passionate recruitment professionals dedicated to connecting exceptional 
              talent with outstanding opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="story" 
        className={`section bg-white animate-on-scroll ${visibleSections.story ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2010, TalentForge began with a simple mission: to transform how businesses connect with talent. 
                Our founders, experienced HR professionals, saw the challenges both companies and job seekers faced in the 
                recruitment process and believed there was a better way.
              </p>
              <p className="mb-4 text-gray-600">
                Over the years, we've grown from a small team of dedicated recruiters to a comprehensive 
                talent solutions provider. We've expanded our services and geographic reach, but our core 
                values and commitment to excellence remain unchanged.
              </p>
              <p className="text-gray-600">
                Today, TalentForge is trusted by leading companies across industries, from startups to Fortune 500 
                corporations. Our specialized recruiters bring deep industry knowledge and a genuine passion for 
                connecting people with opportunities where they can thrive.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="TalentForge team meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section 
        id="values" 
        className={`section bg-gray-50 animate-on-scroll ${visibleSections.values ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide our approach to recruitment and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We hold ourselves to the highest standards in everything we do, from candidate screening to client service.",
                delay: 0
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical standards that build trust and long-term relationships.",
                delay: 150
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methodologies to continuously improve our recruitment processes.",
                delay: 300
              },
              {
                title: "Collaboration",
                description: "We work closely with clients and candidates to understand their needs and create optimal matches.",
                delay: 450
              },
              {
                title: "Diversity",
                description: "We champion inclusive hiring practices and diverse workforces that drive innovation and success.",
                delay: 600
              },
              {
                title: "Results",
                description: "We focus on delivering measurable outcomes and tangible value to both clients and candidates.",
                delay: 750
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                style={{
                  opacity: visibleSections.values ? 1 : 0,
                  transform: visibleSections.values ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${value.delay}ms, transform 0.6s ease-out ${value.delay}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white p-2 rounded-full mr-3">
                    <Check size={16} />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section 
        id="team" 
        className={`section bg-white animate-on-scroll ${visibleSections.team ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our talented professionals bring diverse expertise and a passion for connecting 
              people with opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center"
                style={{
                  opacity: visibleSections.team ? 1 : 0,
                  transform: visibleSections.team ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${index * 150}ms, transform 0.6s ease-out ${index * 150}ms`
                }}
              >
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url} 
                      className="text-gray-500 hover:text-primary transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        className={`section bg-primary text-white animate-on-scroll ${visibleSections.cta ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented recruiters who are passionate about helping 
              people build their careers. Join us in making meaningful connections.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;