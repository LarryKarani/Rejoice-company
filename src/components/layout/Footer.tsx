import { Link } from 'react-router-dom';
import { Users, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Users size={32} className="text-primary" />
              <span className="font-semibold text-xl">Rejoice Recruitment</span>
            </div>
            <p className="text-gray-400 mb-6">
              A trusted Kenyan recruitment firm specializing in connecting
              employers with skilled and semi-skilled talent from Kenya and
              across Africa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/19NxQvCB3B/"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/rejoice-recruitment-agency/"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Jobs", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Local & International Recruitment",
                "Skilled & Semi-Skilled Placements",
                "Candidate Screening",
                "Relocation Support",
                "Employer Services",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  Fortis Tower woodvale groove, Westlands, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">+254 751374780</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-400">
                  info@rejoicerecruitment.co.ke
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Rejoice Recruitment. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;