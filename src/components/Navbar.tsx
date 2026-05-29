import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Page } from '../App';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Resume', page: 'resume' },
  { label: 'Projects', page: 'projects' },
  { label: 'Blog', page: 'blog' },
];

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="text-sm font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          almajid.dev
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <li key={page}>
              <button
                onClick={() => navigate(page)}
                className={`text-xs tracking-widest uppercase transition-all pb-0.5 ${
                  activePage === page
                    ? 'border-b-2 border-black font-bold'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black bg-white">
          <ul className="flex flex-col">
            {links.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => navigate(page)}
                  className={`w-full text-left px-6 py-4 text-xs tracking-widest uppercase border-b border-gray-100 ${
                    activePage === page ? 'font-bold' : 'opacity-50'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
