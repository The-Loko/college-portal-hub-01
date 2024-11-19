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
          
          {/* Mobile menu button */}
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
                className="text-college-primary hover:text-college-accent transition-colors flex items-center gap-2"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="#apply"
              className="bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Apply Now
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-3 text-college-primary hover:text-college-accent hover:bg-college-light transition-colors"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href="#apply"
              className="block mx-4 mt-4 bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors text-center"
            >
              Apply Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;