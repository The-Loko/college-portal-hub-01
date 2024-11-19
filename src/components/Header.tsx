import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Departments", href: "/departments" },
    { label: "Facilities", href: "/facilities" },
    { label: "Photo Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://placehold.co/50x50/8B5CF6/ffffff?text=CU"
              alt="College Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-bold text-college-primary">
              University Name
            </span>
          </Link>
          
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-college-primary hover:text-college-accent transition-colors group ${
                  location.pathname === item.href ? "text-college-accent" : ""
                }`}
              >
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-college-accent after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors hover:scale-105 transform duration-200"
            >
              Apply Now
            </Link>
          </nav>
        </div>

        <div 
          className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="container h-full px-4 py-6 overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`p-4 text-lg font-medium rounded-xl transition-all hover:bg-college-light group ${
                    location.pathname === item.href 
                      ? "bg-college-light text-college-accent" 
                      : "text-college-primary hover:text-college-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-college-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </Link>
              ))}
              <Link
                to="/apply"
                className="mt-4 bg-college-accent text-white p-4 rounded-xl text-lg font-medium text-center hover:bg-opacity-90 transition-all hover:scale-105 transform duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;