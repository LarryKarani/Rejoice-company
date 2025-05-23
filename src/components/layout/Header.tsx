import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logoWhite.png"
            alt="Rejoice Recruitment"
            className="h-24 w-auto "
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {["Home", "About", "Services", "Jobs", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => `
                font-medium transition-colors duration-300 hover:text-primary
                ${isScrolled ? "text-gray-700" : "text-white"}
                ${isActive ? "text-primary" : ""}
              `}
            >
              {item}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`btn ${
              isScrolled
                ? "btn-primary"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            Get Started
          </Link>
        </nav>

        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X
              size={28}
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
            />
          ) : (
            <Menu
              size={28}
              className={`${isScrolled ? "text-gray-800" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {["Home", "About", "Services", "Jobs", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => `
                text-xl font-medium transition-colors duration-300 
                ${isActive ? "text-primary" : "text-gray-800"}
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;