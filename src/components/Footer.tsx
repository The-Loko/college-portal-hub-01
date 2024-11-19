const Footer = () => {
  return (
    <footer id="contact" className="bg-college-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 University Ave</p>
              <p>College Town, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@university.edu</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#programs" className="hover:text-college-accent transition-colors">Programs</a></li>
              <li><a href="#campus-life" className="hover:text-college-accent transition-colors">Campus Life</a></li>
              <li><a href="#news" className="hover:text-college-accent transition-colors">News & Events</a></li>
              <li><a href="#apply" className="hover:text-college-accent transition-colors">Apply Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-college-accent transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">Alumni</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-college-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-college-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 University Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;