import { useState } from "react";
import { Menu, X, User, LayoutGrid, Building2, GraduationCap, Image, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: User, label: "About Us", href: "/about-us" },
    { icon: LayoutGrid, label: "Departments", href: "/departments" },
    { icon: Building2, label: "Facilities", href: "/facilities" },
    { icon: GraduationCap, label: "Admission", href: "/admission" },
    { icon: Image, label: "Photo Gallery", href: "/gallery" },
    { icon: Mail, label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-college-primary">
            University Name
          </Link>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-college-primary hover:text-college-accent transition-colors flex items-center gap-2 group ${
                  location.pathname === item.href ? "text-college-accent" : ""
                }`}
              >
                <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-college-accent after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link
              to="/admission"
              className="bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors hover:scale-105 transform duration-200"
            >
              Apply Now
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed top-20 left-0 w-full h-screen bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="container mx-auto px-4 py-8">
            <div className="grid gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-4 p-4 text-lg font-medium text-college-primary hover:text-college-accent hover:bg-college-light rounded-xl transition-all group ${
                    location.pathname === item.href ? "bg-college-light text-college-accent" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                to="/admission"
                className="bg-college-accent text-white p-4 rounded-xl text-lg font-medium text-center hover:bg-opacity-90 transition-all hover:scale-105 transform duration-200"
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