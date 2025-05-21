import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Globe, Users, FileSearch, Plane, Briefcase } from 'lucide-react';

// Services data based on Rejoice Recruitment Agency profile
const services = [
  {
    id: 'local-international',
    title: 'Local & International Recruitment',
    description: 'Sourcing and placing qualified candidates for various industries both within Kenya and internationally.',
    detailedDescription: 'Our international recruitment services connect skilled Kenyan talent with employers around the world. We handle the entire process from candidate sourcing to successful placement, ensuring both employers and candidates have a smooth experience.',
    icon: <Globe size={36} className="text-primary" />,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Job market analysis and strategic sourcing',
      'Custom recruitment plans for your specific needs',
      'Access to our extensive database of qualified candidates',
      'Management of the entire recruitment lifecycle',
      'Regular communication and progress updates'
    ]
  },
  {
    id: 'skilled-semiskilled',
    title: 'Skilled & Semi-Skilled Placements',
    description: 'Providing workers in sectors such as construction, hospitality, healthcare, manufacturing, logistics and IT.',
    detailedDescription: "We specialize in connecting skilled and semi-skilled workers with international opportunities. Our focus industries include healthcare, construction, hospitality, IT, manufacturing, and logistics, where we've successfully placed hundreds of candidates.",
    icon: <Users size={36} className="text-primary" />,
    image: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Industry-specific talent acquisition',
      'Skill assessment and verification',
      'Trade testing and certification validation',
      'Job-specific training coordination',
      'Matching candidates to suitable positions based on skills and experience'
    ]
  },
  {
    id: 'screening-verification',
    title: 'Candidate Screening & Verification',
    description: 'Conducting thorough background checks, credential verification, and interviews to ensure the right fit.',
    detailedDescription: 'Our rigorous screening process ensures employers receive candidates who not only have the right skills but also align with their organizational values. We conduct thorough background checks, verify credentials, and assess candidates through structured interviews.',
    icon: <FileSearch size={36} className="text-primary" />,
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Identity and right-to-work verification',
      'Education and credential authentication',
      'Professional reference checks',
      'Work history validation',
      'Skills assessment and testing'
    ]
  },
  {
    id: 'relocation-onboarding',
    title: 'Relocation & Onboarding Support',
    description: 'Assisting with visa processing, travel arrangements, and cultural orientation for international placements.',
    detailedDescription: 'Moving to a new country can be overwhelming. We support candidates throughout the relocation process, helping with visa applications, travel arrangements, and providing cultural orientation to ensure a smooth transition into their new work environment.',
    icon: <Plane size={36} className="text-primary" />,
    image: 'https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Visa and immigration support',
      'Pre-departure orientation',
      'Travel and logistics coordination',
      'Cultural integration guidance',
      'Post-arrival support and check-ins'
    ]
  },
  {
    id: 'employer-services',
    title: 'Employer Services',
    description: 'Offering tailored recruitment solutions to meet specific business needs, ensuring timely and efficient hiring processes.',
    detailedDescription: 'We work closely with employers to understand their unique requirements and develop customized recruitment strategies. Our goal is to streamline your hiring process and connect you with the talent you need to grow your business.',
    icon: <Briefcase size={36} className="text-primary" />,
    image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Customized recruitment strategies',
      'Market analysis and salary benchmarking',
      'Employer branding consultancy',
      'Workforce planning assistance',
      'Ongoing recruitment support'
    ]
  }
];

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
              helping connect skilled workers with life-changing job opportunities.
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
                name: "Healthcare",
                description: "We connect healthcare organizations with qualified nurses, caregivers, and other medical professionals.",
                image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0
              },
              {
                name: "Information Technology",
                description: "From software developers to cybersecurity specialists, we help tech companies build innovative teams.",
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 150
              },
              {
                name: "Construction",
                description: "We source skilled construction workers and tradespeople for projects around the world.",
                image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 300
              },
              {
                name: "Finance & Banking",
                description: "We help financial institutions find specialized talent for various roles and positions.",
                image: "https://images.pexels.com/photos/7821679/pexels-photo-7821679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 450
              },
              {
                name: "Manufacturing",
                description: "We connect manufacturing companies with skilled workers for production and operations.",
                image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 600
              },
              {
                name: "Transport & Logistics",
                description: "We source forklift operators, warehouse staff, and other logistics professionals for the supply chain industry.",
                image: "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
                question: "How do I apply for international jobs through Rejoice Recruitment?",
                answer: "Begin by submitting your resume through our website or visiting our office. Our team will review your qualifications and contact you for an initial assessment if your profile matches our current openings. We'll guide you through the entire process from application to placement.",
                delay: 0
              },
              {
                question: "What documents do I need for international job applications?",
                answer: "Typically, you'll need a valid passport, education certificates, professional qualifications, proof of work experience, and in some cases language proficiency certificates. The specific requirements vary by country and profession. We'll provide you with a detailed checklist during the application process.",
                delay: 150
              },
              {
                question: "How long does the international recruitment process take?",
                answer: "The timeline varies depending on the destination country, type of job, and visa processing times. On average, the process takes 3-6 months from initial application to relocation. We keep you informed at each stage and work to make the process as efficient as possible.",
                delay: 300
              },
              {
                question: "What costs are involved in the recruitment process?",
                answer: "Our fee structures vary based on the position and destination country. We are transparent about all costs upfront, and in many cases, the employer covers a significant portion of the recruitment fees. We'll provide you with a detailed breakdown of any costs before you commit to the process.",
                delay: 450
              },
              {
                question: "What kind of support do you provide after placement?",
                answer: "We offer post-placement support including regular check-ins, assistance with any workplace integration issues, and help with extending contracts or finding new opportunities when your initial contract ends. Our goal is to ensure your international work experience is successful and rewarding.",
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

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-gray-600">
              Hear from our clients and candidates who have experienced the Rejoice difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.335.11-.693.11-1.076zM13.98 15.758c0-.88-.23-1.618-.69-2.217-.326-.413-.768-.684-1.327-.814-.55-.128-1.07-.136-1.54-.027-.16-.95.1-1.685.41-2.205.314-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.338.11-.695.11-1.078zM10.58 19.074c-.5.033-.13.05-.25.05-.12 0-.23-.018-.33-.05l-.36-.1c-.122-.033-.23-.073-.33-.12-.1-.05-.2-.113-.31-.188-.11-.076-.2-.167-.29-.27-.08-.102-.15-.214-.22-.333-.06-.12-.12-.257-.16-.413-.04-.155-.06-.322-.07-.5-.01-.177-.01-.364 0-.56l.03-.45.03-.55c.01-.12.02-.27.03-.444v-.412c0-.11.01-.24.01-.384.01-.146.01-.306.02-.48.01-.18.01-.37.02-.57.01-.02.01-.05.01-.09-.07.042-.11.097-.15.163-.04.066-.08.142-.13.23-.05.086-.1.176-.15.266-.05.09-.1.17-.14.24-.58.996-1.05 1.86-1.42 2.59-.36.73-.68 1.35-.94 1.87-.26.518-.48.945-.68 1.282-.21.336-.38.6-.53.792-.15.193-.27.33-.37.413-.1.084-.18.143-.25.18-.11.052-.21.09-.29.11-.08.023-.17.035-.25.035s-.16-.01-.23-.033c-.08-.02-.14-.05-.19-.09-.05-.04-.1-.08-.13-.14-.04-.057-.06-.118-.06-.18 0-.073.03-.18.08-.32.05-.14.13-.313.23-.515.1-.203.21-.44.34-.71.13-.27.27-.563.41-.88.15-.315.3-.647.45-.995.15-.35.3-.71.45-1.087s.29-.768.42-1.173c.13-.406.25-.825.37-1.258.11.293.26.412.44.357.18-.055.34-.227.49-.515.15-.288.27-.642.38-1.06.11-.42.21-.833.31-1.24.1-.408.21-.758.32-1.05.1-.292.22-.435.36-.43.5.005.14.037.25.095.11.058.2.132.29.22.09.09.16.188.21.29.05.104.08.203.08.3 0 .126-.01.282-.04.47-.3.177-.7.377-.13.6s-.12.46-.2.71c-.36 1.198-.69 2.29-.99 3.273-.3.984-.53 1.798-.7 2.442-.15.498-.27.906-.35 1.228-.08.32-.12.573-.12.756z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"Rejoice Recruitment made our international hiring process smooth and stress-free. The candidates were well-prepared and integrated seamlessly into our team."</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Peter M.</p>
                  <p className="text-sm text-gray-500">HR Manager, Hospitality Sector – Serbia</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.335.11-.693.11-1.076zM13.98 15.758c0-.88-.23-1.618-.69-2.217-.326-.413-.768-.684-1.327-.814-.55-.128-1.07-.136-1.54-.027-.16-.95.1-1.685.41-2.205.314-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.338.11-.695.11-1.078zM10.58 19.074c-.5.033-.13.05-.25.05-.12 0-.23-.018-.33-.05l-.36-.1c-.122-.033-.23-.073-.33-.12-.1-.05-.2-.113-.31-.188-.11-.076-.2-.167-.29-.27-.08-.102-.15-.214-.22-.333-.06-.12-.12-.257-.16-.413-.04-.155-.06-.322-.07-.5-.01-.177-.01-.364 0-.56l.03-.45.03-.55c.01-.12.02-.27.03-.444v-.412c0-.11.01-.24.01-.384.01-.146.01-.306.02-.48.01-.18.01-.37.02-.57.01-.02.01-.05.01-.09-.07.042-.11.097-.15.163-.04.066-.08.142-.13.23-.05.086-.1.176-.15.266-.05.09-.1.17-.14.24-.58.996-1.05 1.86-1.42 2.59-.36.73-.68 1.35-.94 1.87-.26.518-.48.945-.68 1.282-.21.336-.38.6-.53.792-.15.193-.27.33-.37.413-.1.084-.18.143-.25.18-.11.052-.21.09-.29.11-.08.023-.17.035-.25.035s-.16-.01-.23-.033c-.08-.02-.14-.05-.19-.09-.05-.04-.1-.08-.13-.14-.04-.057-.06-.118-.06-.18 0-.073.03-.18.08-.32.05-.14.13-.313.23-.515.1-.203.21-.44.34-.71.13-.27.27-.563.41-.88.15-.315.3-.647.45-.995.15-.35.3-.71.45-1.087s.29-.768.42-1.173c.13-.406.25-.825.37-1.258.11.293.26.412.44.357.18-.055.34-.227.49-.515.15-.288.27-.642.38-1.06.11-.42.21-.833.31-1.24.1-.408.21-.758.32-1.05.1-.292.22-.435.36-.43.5.005.14.037.25.095.11.058.2.132.29.22.09.09.16.188.21.29.05.104.08.203.08.3 0 .126-.01.282-.04.47-.3.177-.7.377-.13.6s-.12.46-.2.71c-.36 1.198-.69 2.29-.99 3.273-.3.984-.53 1.798-.7 2.442-.15.498-.27.906-.35 1.228-.08.32-.12.573-.12.756z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"I was working as a panel beater in Somalia when a friend referred me to Ibrahim, the CEO of Rejoice Recruitment. That connection changed my life. Today, I'm working in Jersey Island, UK."</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Elliot M.</p>
                  <p className="text-sm text-gray-500">Auto Body Technician – Jersey Island, UK</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.335.11-.693.11-1.076zM13.98 15.758c0-.88-.23-1.618-.69-2.217-.326-.413-.768-.684-1.327-.814-.55-.128-1.07-.136-1.54-.027-.16-.95.1-1.685.41-2.205.314-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.338.11-.695.11-1.078zM10.58 19.074c-.5.033-.13.05-.25.05-.12 0-.23-.018-.33-.05l-.36-.1c-.122-.033-.23-.073-.33-.12-.1-.05-.2-.113-.31-.188-.11-.076-.2-.167-.29-.27-.08-.102-.15-.214-.22-.333-.06-.12-.12-.257-.16-.413-.04-.155-.06-.322-.07-.5-.01-.177-.01-.364 0-.56l.03-.45.03-.55c.01-.12.02-.27.03-.444v-.412c0-.11.01-.24.01-.384.01-.146.01-.306.02-.48.01-.18.01-.37.02-.57.01-.02.01-.05.01-.09-.07.042-.11.097-.15.163-.04.066-.08.142-.13.23-.05.086-.1.176-.15.266-.05.09-.1.17-.14.24-.58.996-1.05 1.86-1.42 2.59-.36.73-.68 1.35-.94 1.87-.26.518-.48.945-.68 1.282-.21.336-.38.6-.53.792-.15.193-.27.33-.37.413-.1.084-.18.143-.25.18-.11.052-.21.09-.29.11-.08.023-.17.035-.25.035s-.16-.01-.23-.033c-.08-.02-.14-.05-.19-.09-.05-.04-.1-.08-.13-.14-.04-.057-.06-.118-.06-.18 0-.073.03-.18.08-.32.05-.14.13-.313.23-.515.1-.203.21-.44.34-.71.13-.27.27-.563.41-.88.15-.315.3-.647.45-.995.15-.35.3-.71.45-1.087s.29-.768.42-1.173c.13-.406.25-.825.37-1.258.11.293.26.412.44.357.18-.055.34-.227.49-.515.15-.288.27-.642.38-1.06.11-.42.21-.833.31-1.24.1-.408.21-.758.32-1.05.1-.292.22-.435.36-.43.5.005.14.037.25.095.11.058.2.132.29.22.09.09.16.188.21.29.05.104.08.203.08.3 0 .126-.01.282-.04.47-.3.177-.7.377-.13.6s-.12.46-.2.71c-.36 1.198-.69 2.29-.99 3.273-.3.984-.53 1.798-.7 2.442-.15.498-.27.906-.35 1.228-.08.32-.12.573-.12.756z"></path>
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"The support I received from Rejoice Recruitment was exceptional. They didn't just find me a job—they helped me start a new life."</p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Elizabeth Muthoni</p>
                  <p className="text-sm text-gray-500">Pastry Chef – Serbia</p>
                </div>
              </div>
            </div>
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
            <h2 className="mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking for international job opportunities or seeking talent for your business, 
              we're here to help you achieve your goals.
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