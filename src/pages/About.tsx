import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Linkedin } from "lucide-react";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >({
    story: false,
    values: false,
    team: false,
    cta: false,
  });

  const team = [
    {
      name: "Ibrahim Gikonyo",
      position: "CEO & Founder",
      bio: "Leading our agency with vision and dedication to transform lives through international recruitment opportunities.",
      image: "/ceo.jpeg", // Replace with actual image path
      social: [
        {
          icon: <Linkedin size={20} />,
          url: "https://www.linkedin.com/in/ibrahim-gikonyo-106584249/",
        },
      ],
    },
    {
      name: "Anjali Lee",
      position: "Business Development Officer",
      bio: "Focused on expanding our outreach and creating meaningful partnerships with employers worldwide.",
      image: "/anjali.jpeg", // Replace with actual image path
      social: [
        {
          icon: <Linkedin size={20} />,
          url: "#",
        },
      ],
    },
    {
      name: "Esther Wambui",
      position: "General Manager",
      bio: "Overseeing day-to-day operations to ensure our clients and candidates receive exceptional service.",
      image: "/muthoni.jpeg", // Replace with actual image path
      social: [
        {
          icon: <Linkedin size={20} />,
          url: "#",
        },
      ],
    },
    {
      name: "Daniel",
      position: "Healthcare Recruitment Specialist",
      bio: "Dedicated to finding the best healthcare professionals for our clients, ensuring quality care and expertise.",
      image: "/daniel.jpeg", // Replace with actual image path
      social: [
        {
          icon: <Linkedin size={20} />,
          url: "#",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible && section.id) {
          setVisibleSections((prev) => ({
            ...prev,
            [section.id]: true,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">About Rejoice Recruitment</h1>
            <p className="text-xl text-gray-100 mb-8">
              We are a trusted Kenyan recruitment firm specializing in
              connecting employers with skilled and semi-skilled talent from
              Kenya and across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="story"
        className={`section bg-white animate-on-scroll ${
          visibleSections.story ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <p className="mb-4 text-gray-600">
                At Rejoice Recruitment Agency, we are a trusted Kenyan
                recruitment firm specializing in connecting employers with
                skilled and semi-skilled talent from Kenya and across Africa.
                With years of experience in the recruitment industry, we have
                developed a deep understanding of the unique challenges faced by
                both employers and job seekers.
              </p>
              <p className="mb-4 text-gray-600">
                Our mission is to bridge the gap between talent and opportunity
                by providing comprehensive recruitment solutions that cater to
                the specific needs of our clients. We pride ourselves on our
                rigorous screening processes, ensuring that candidates not only
                possess the required skills but also align with the cultural and
                organizational values of our clients.
              </p>
              <p className="text-gray-600">
                Whether you're seeking to hire locally or internationally,
                Rejoice Recruitment Agency is committed to delivering
                exceptional service, fostering long-term partnerships, and
                contributing to the growth and success of businesses and
                individuals alike.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Rejoice Recruitment team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be Africa's leading recruitment agency—trusted globally for
                connecting skilled and semi-skilled workers with life-changing
                job opportunities, and recognized for our integrity, innovation,
                and impact in the workforce industry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To bridge the gap between global employers and Kenyan talent by
                providing ethical, reliable, and customized recruitment
                solutions that empower individuals and support business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        id="values"
        className={`section bg-white animate-on-scroll ${
          visibleSections.values ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              At Rejoice Recruitment, our work is guided by values that define
              who we are and how we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We build trust through honesty and transparency.",
                delay: 0,
              },
              {
                title: "Excellence",
                description:
                  "We strive for quality in every placement we make.",
                delay: 150,
              },
              {
                title: "Reliability",
                description: "You can count on us to deliver, every time.",
                delay: 300,
              },
              {
                title: "Empowerment",
                description: "We create opportunities that change lives.",
                delay: 450,
              },
              {
                title: "Cultural Sensitivity",
                description:
                  "We respect diversity and promote seamless integration.",
                delay: 600,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                style={{
                  opacity: visibleSections.values ? 1 : 0,
                  transform: visibleSections.values
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 0.6s ease-out ${value.delay}ms, transform 0.6s ease-out ${value.delay}ms`,
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

      {/* Industries Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              Our specialized recruiters bring deep industry knowledge to help
              you find talent with the right expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Healthcare",
              "Information Technology",
              "Construction",
              "Finance & Banking",
              "Manufacturing",
              "Transport & Logistics",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center"
              >
                <h3 className="text-xl font-semibold">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        id="team"
        className={`section bg-white animate-on-scroll ${
          visibleSections.team ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Our talented professionals bring diverse expertise and a passion
              for connecting people with opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  opacity: visibleSections.team ? 1 : 0,
                  transform: visibleSections.team
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `opacity 0.6s ease-out ${
                    index * 150
                  }ms, transform 0.6s ease-out ${index * 150}ms`,
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
                      target="_blank"
                      rel="noopener noreferrer"
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

      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What Our Clients & Candidates Say</h2>
            <p className="text-gray-600">
              Success stories from those who've experienced our services
              firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Rejoice Recruitment made our international hiring process smooth and stress-free. The candidates were well-prepared and integrated seamlessly into our team.",
                author: "Peter M.",
                position: "HR Manager, Hospitality Sector – SERBIA",
              },
              {
                quote:
                  "I was working as a panel beater in Somalia when a friend referred me to Ibrahim, the CEO of Rejoice Recruitment. That connection changed my life. Today, I'm working in Jersey Island, UK.",
                author: "Elliot M.",
                position: "Auto Body Technician – Jersey Island, UK",
              },
              {
                quote:
                  "Thanks to Rejoice, I secured a housekeeping job in GUERNSEY. They guided me through every step—from interviews to relocation. I'm now living my dream.",
                author: "Peter",
                position: "Job Seeker – Kenya",
              },
              {
                quote:
                  "We've worked with several agencies before, but Rejoice stands out for their professionalism, quick turnaround, and quality of candidates. Highly recommended.",
                author: "Albert",
                position: "Employer – Portugal",
              },
              {
                quote:
                  "The support I received from Rejoice Recruitment was exceptional. They didn't just find me a job—they helped me start a new life.",
                author: "Elizabeth Muthoni",
                position: "Pastry Chef – SERBIA",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.685.41-2.205.315-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.335.11-.693.11-1.076zM13.98 15.758c0-.88-.23-1.618-.69-2.217-.326-.413-.768-.684-1.327-.814-.55-.128-1.07-.136-1.54-.027-.16-.95.1-1.685.41-2.205.314-.53.766-.92 1.353-1.176.59-.257 1.198-.39 1.83-.39.5 0 .9.097 1.2.29.27.168.46.395.55.662.09.267.12.556.09.865.15.856.12 1.556-.09 2.097-.2.527-.52.962-.96 1.307-.44.345-.86.592-1.29.74-.43.152-.77.264-1.02.335-.25.073-.4.178-.51.313-.11.135-.17.304-.17.508 0 .07.01.133.02.196l.66.88c.04.052.09.1.15.147.21.147.49.22.82.22.23 0 .45-.043.66-.128.21-.085.39-.195.55-.33.16-.133.28-.285.37-.457.09-.17.13-.35.13-.53 0-.04-.01-.08-.02-.12l-.07-.125-.01-.03c.29-.077.56-.198.8-.365.24-.167.44-.383.6-.647.16-.263.28-.56.35-.896.08-.338.11-.695.11-1.078zM10.58 19.074c-.5.033-.13.05-.25.05-.12 0-.23-.018-.33-.05l-.36-.1c-.122-.033-.23-.073-.33-.12-.1-.05-.2-.113-.31-.188-.11-.076-.2-.167-.29-.27-.08-.102-.15-.214-.22-.333-.06-.12-.12-.257-.16-.413-.04-.155-.06-.322-.07-.5-.01-.177-.01-.364 0-.56l.03-.45.03-.55c.01-.12.02-.27.03-.444v-.412c0-.11.01-.24.01-.384.01-.146.01-.306.02-.48.01-.18.01-.37.02-.57.01-.02.01-.05.01-.09-.07.042-.11.097-.15.163-.04.066-.08.142-.13.23-.05.086-.1.176-.15.266-.05.09-.1.17-.14.24-.58.996-1.05 1.86-1.42 2.59-.36.73-.68 1.35-.94 1.87-.26.518-.48.945-.68 1.282-.21.336-.38.6-.53.792-.15.193-.27.33-.37.413-.1.084-.18.143-.25.18-.11.052-.21.09-.29.11-.08.023-.17.035-.25.035s-.16-.01-.23-.033c-.08-.02-.14-.05-.19-.09-.05-.04-.1-.08-.13-.14-.04-.057-.06-.118-.06-.18 0-.073.03-.18.08-.32.05-.14.13-.313.23-.515.1-.203.21-.44.34-.71.13-.27.27-.563.41-.88.15-.315.3-.647.45-.995.15-.35.3-.71.45-1.087s.29-.768.42-1.173c.13-.406.25-.825.37-1.258.11.293.26.412.44.357.18-.055.34-.227.49-.515.15-.288.27-.642.38-1.06.11-.42.21-.833.31-1.24.1-.408.21-.758.32-1.05.1-.292.22-.435.36-.43.5.005.14.037.25.095.11.058.2.132.29.22.09.09.16.188.21.29.05.104.08.203.08.3 0 .126-.01.282-.04.47-.3.177-.7.377-.13.6s-.12.46-.2.71c-.36 1.198-.69 2.29-.99 3.273-.3.984-.53 1.798-.7 2.442-.15.498-.27.906-.35 1.228-.08.32-.12.573-.12.756z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className={`section bg-primary text-white animate-on-scroll ${
          visibleSections.cta ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Why Choose Rejoice Recruitment?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              As the name suggests, Rejoice represents joy, fulfillment, and
              success—and we strive to live up to that name in every placement
              we make. We don't just connect employers to candidates—we bring
              satisfaction to businesses and hope to job seekers.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Get in Touch <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
