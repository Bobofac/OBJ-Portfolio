
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-violet-600">BoBoFace</a>
          
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#about">À Propos</NavLink>
            <NavLink href="#skills">Compétences</NavLink>
            <NavLink href="#projects">Projets</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full glass lg:hidden">
              <div className="flex flex-col items-center space-y-4 py-4">
                <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>À Propos</NavLink>
                <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>Compétences</NavLink>
                <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projets</NavLink>
                <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-foreground/80 hover:text-violet-600 transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
