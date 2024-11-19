import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <NavLinks />
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 animate-fade-up">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLinks = () => (
  <>
    <a href="#programs" className="text-college-primary hover:text-college-accent transition-colors">
      Programs
    </a>
    <a href="#campus-life" className="text-college-primary hover:text-college-accent transition-colors">
      Campus Life
    </a>
    <a href="#news" className="text-college-primary hover:text-college-accent transition-colors">
      News & Events
    </a>
    <a href="#contact" className="text-college-primary hover:text-college-accent transition-colors">
      Contact
    </a>
    <a
      href="#apply"
      className="bg-college-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
    >
      Apply Now
    </a>
  </>
);

export default Header;