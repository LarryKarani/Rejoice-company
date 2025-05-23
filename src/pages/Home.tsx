import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../components/home/HeroImage";
import StatCard from "../components/ui/StatCard";
import TestimonialCard from "../components/home/TestimonialCard";
import ServiceCard from "../components/home/ServiceCard";
import { testimonials } from "../data/testimonials";
import { services } from "../data/services";
import { stats } from "../data/stats";

const Home = () => {
  // Animation logic for scroll-triggered animations
  const [visibleSections, setVisibleSections] = useState<
    Record<string, boolean>
  >({
    stats: false,
    services: false,
    process: false,
    leadership: false, // Added leadership section to visible sections
    testimonials: false,
    cta: false,
  });

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
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <HeroImage />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="mb-6">Find the Right Talent for Your Business</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                We connect exceptional candidates with leading companies
                worldwide. Our expert recruitment consultants help you build
                high-performing teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="btn border-2 border-white text-white hover:bg-white/10"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-slide-in-right">
              {/* This is intentionally left empty as the background has the hero image */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#trusted-by" aria-label="Scroll down">
            <ChevronDown size={32} className="text-white" />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className={`section bg-gray-50 animate-on-scroll ${
          visibleSections.stats ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                delay={index * 150}
                isVisible={visibleSections.stats}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`section bg-white animate-on-scroll ${
          visibleSections.services ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Recruitment Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of recruitment services tailored to
              meet your specific needs, from executive search to contract
              staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                delay={index * 150}
                isVisible={visibleSections.services}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className={`section bg-gray-50 animate-on-scroll ${
          visibleSections.process ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Recruitment Process</h2>
            <p className="text-gray-600">
              We follow a proven methodology to identify and secure the best
              talent for your organization.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-light transform -translate-x-1/2"></div>

            <div className="space-y-16 md:space-y-0 relative">
              {[
                {
                  number: 1,
                  title: "Understand Requirements",
                  description:
                    "We take time to deeply understand your business, culture, and the specific requirements for each role.",
                  delay: 0,
                },
                {
                  number: 2,
                  title: "Source Candidates",
                  description:
                    "Using our extensive network and specialized tools, we identify and engage with top-quality candidates.",
                  delay: 200,
                },
                {
                  number: 3,
                  title: "Screen & Assess",
                  description:
                    "We rigorously evaluate candidates against your criteria, conducting thorough interviews and assessments.",
                  delay: 400,
                },
                {
                  number: 4,
                  title: "Present & Place",
                  description:
                    "We present you with a shortlist of qualified candidates and support you through the hiring and onboarding process.",
                  delay: 600,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } mb-16 md:mb-24`}
                  style={{
                    opacity: visibleSections.process ? 1 : 0,
                    transform: visibleSections.process
                      ? "translateY(0)"
                      : "translateY(30px)",
                    transition: `opacity 0.6s ease-out ${step.delay}ms, transform 0.6s ease-out ${step.delay}ms`,
                  }}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 ml-11">{step.description}</p>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - New section for CEO */}
      <section
        id="leadership"
        className={`section bg-white animate-on-scroll ${
          visibleSections.leadership ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Leadership</h2>
            <p className="text-gray-600">
              Meet the visionary leader behind our successful recruitment
              agency.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl p-8 shadow-md"
              style={{
                opacity: visibleSections.leadership ? 1 : 0,
                transform: visibleSections.leadership
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary">
                  <img
                    src="/ceo.jpeg"
                    alt="Company CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-2">Ibrahim Gikonyo</h3>
                <p className="text-primary font-semibold mb-4">
                  Chief Executive Officer
                </p>
                <p className="text-gray-600 mb-4">
                  With over 15 years of experience in the recruitment industry,
                  Ibrahim Gikonyo has led our company to become one of the most
                  trusted recruitment agencies in the market. His visionary
                  leadership and deep understanding of talent acquisition have
                  helped countless businesses find their perfect match.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ibrahim-gikonyo-106584249/"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className={`section bg-primary text-white animate-on-scroll ${
          visibleSections.testimonials ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-gray-100">
              Don't just take our word for it. Here's what our clients have to
              say about our recruitment services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 150}
                isVisible={visibleSections.testimonials}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className={`section bg-white animate-on-scroll ${
          visibleSections.cta ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 lg:p-16 shadow-lg text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a business looking to hire exceptional talent or a
              professional seeking new opportunities, we're here to help you
              succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/jobs" className="btn btn-outlined">
                Explore Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
