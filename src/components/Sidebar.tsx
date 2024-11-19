import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LayoutGrid, Building2, GraduationCap, Image, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarItems = [
    { icon: User, label: "About Us", href: "/about-us" },
    { icon: LayoutGrid, label: "Departments", href: "/departments" },
    { icon: Building2, label: "Facilities", href: "/facilities" },
    { icon: GraduationCap, label: "Admission", href: "/admission" },
    { icon: Image, label: "Photo Gallery", href: "/gallery" },
    { icon: Mail, label: "Contact Us", href: "/contact" },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-20 h-screen bg-white shadow-lg transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-6 bg-college-accent text-white rounded-full p-1 hover:bg-opacity-90"
      >
        {isOpen ? "←" : "→"}
      </button>
      <nav className="p-4">
        <ul className="space-y-4">
          {sidebarItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="flex items-center gap-4 text-college-primary hover:text-college-accent transition-colors p-2 rounded-lg hover:bg-college-light"
              >
                <item.icon size={20} />
                {isOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;