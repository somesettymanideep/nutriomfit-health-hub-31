import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: "/about", label: "About", isAnchor: false },
    { href: "/services", label: "Services", isAnchor: false },
    { href: "/programs", label: "Programs", isAnchor: false },
    { href: "/#testimonials", label: "Testimonials", isAnchor: true, anchor: "#testimonials" },
    { href: "/#faq", label: "FAQ", isAnchor: true, anchor: "#faq" },
    { href: "/contact", label: "Contact", isAnchor: false },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    
    if (link.isAnchor) {
      if (isHomePage && link.anchor) {
        // On home page, scroll to anchor
        const element = document.querySelector(link.anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash
        navigate(link.href);
      }
    } else {
      navigate(link.href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="NutriomFit" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-muted-foreground hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="default" asChild>
              <Link to="/#consultation">Book Consultation</Link>
            </Button>
            <Button variant="default" size="default" asChild>
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/#consultation" onClick={() => setIsOpen(false)}>Book Consultation</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link to="/programs" onClick={() => setIsOpen(false)}>View Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
