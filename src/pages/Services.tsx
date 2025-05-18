import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    services: false,
    industries: false,
    faq: false,
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
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-gray-100">
              We offer comprehensive recruitment solutions tailored to your specific needs,
              helping you build high-performing teams that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section 
        id="services" 
        className={`section bg-white animate-on-scroll ${visibleSections.services ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? 'mb-24' : ''
              }`}
              style={{
                opacity: visibleSections.services ? 1 : 0,
                transform: visibleSections.services ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s ease-out ${index * 200}ms, transform 0.6s ease-out ${index * 200}ms`
              }}
            >
              <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <div className="text-primary mb-3">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.detailedDescription || service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features && service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn btn-primary">
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section 
        id="industries" 
        className={`section bg-gray-50 animate-on-scroll ${visibleSections.industries ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              Our specialized recruiters bring deep industry knowledge to help you find talent with the right expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Technology",
                description: "From startups to enterprise IT, we help tech companies build innovative teams.",
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0
              },
              {
                name: "Healthcare",
                description: "We connect healthcare organizations with clinical and administrative talent.",
                image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 150
              },
              {
                name: "Finance",
                description: "From banking to fintech, we help financial institutions find specialized talent.",
                image: "https://images.pexels.com/photos/7821679/pexels-photo-7821679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 300
              },
              {
                name: "Manufacturing",
                description: "We source technical and leadership talent for modern manufacturing companies.",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 450
              },
              {
                name: "Retail",
                description: "We help retailers find talent to drive exceptional customer experiences.",
                image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 600
              },
              {
                name: "Professional Services",
                description: "We connect service firms with professionals who deliver value to clients.",
                image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 750
              }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{
                  opacity: visibleSections.industries ? 1 : 0,
                  transform: visibleSections.industries ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${industry.delay}ms, transform 0.6s ease-out ${industry.delay}ms`
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq" 
        className={`section bg-white animate-on-scroll ${visibleSections.faq ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our recruitment services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does the recruitment process typically take?",
                answer: "While every search is different, our goal is to present qualified candidates within 2-3 weeks of starting a search. The full process from kickoff to accepted offer typically takes 4-8 weeks, depending on the role complexity and interview process.",
                delay: 0
              },
              {
                question: "What makes TalentForge different from other recruitment agencies?",
                answer: "We combine deep industry expertise with a personalized approach, focusing on quality over quantity. Our consultants take time to understand your business and culture, ensuring we find candidates who are not just qualified, but who will thrive in your organization.",
                delay: 150
              },
              {
                question: "How do you source candidates?",
                answer: "We use a multi-channel approach that includes our proprietary database, advanced search tools, professional networks, referrals, and targeted outreach. For each role, we develop a customized sourcing strategy to find both active and passive candidates.",
                delay: 300
              },
              {
                question: "What is your fee structure?",
                answer: "Our fee structures vary based on the service model you choose. For permanent placements, we typically work on a contingency or retained basis with fees calculated as a percentage of the candidate's first-year compensation. We also offer flexible models for high-volume hiring. We're transparent about our pricing and will discuss options based on your specific needs.",
                delay: 450
              },
              {
                question: "Do you offer any guarantees?",
                answer: "Yes, we stand behind our placements with replacement guarantees that vary by service type. For permanent placements, we typically offer a 90-day guarantee period. If a placed candidate leaves within that timeframe, we'll find a replacement at no additional cost.",
                delay: 600
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="mb-8"
                style={{
                  opacity: visibleSections.faq ? 1 : 0,
                  transform: visibleSections.faq ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease-out ${faq.delay}ms, transform 0.6s ease-out ${faq.delay}ms`
                }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
            <h2 className="mb-6">Ready to Build Your Dream Team?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your hiring needs and how our specialized recruitment services can help you find the talent you need.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Contact Us Today <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;