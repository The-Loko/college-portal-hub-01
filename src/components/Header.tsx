import { useState } from "react";
import { Menu, X, User, LayoutGrid, Building2, GraduationCap, Image, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="/" className="text-2xl font-bold text-college-primary">
            University Name
          </a>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-college-primary hover:text-college-accent transition-colors flex items-center gap-2 group"
              >
                <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-college-accent after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  {item.label}
                </span>
              </a>
            ))}
            <a
              href="#apply"
              className="bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors hover:scale-105 transform duration-200"
            >
              Apply Now
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`fixed top-20 right-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-6 py-4 text-college-primary hover:text-college-accent hover:bg-college-light transition-all group"
              >
                <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="#apply"
              className="block mx-6 mt-6 bg-college-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-center hover:scale-105 transform duration-200"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;