import { Link } from "react-router-dom";
import { useState } from "react";

export default function BarreNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 px-4 py-4 text-white flex items-center justify-between relative">
      <h1 className="font-bold text-lg sm:text-xl">Gestionnaire de Tâches</h1>
      {/* Desktop links */}
      <div className="hidden md:flex items-center space-x-1 pr-1">
        <Link to="/" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">Accueil</Link>
        <Link to="/taches" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">Tâches</Link>
        <Link to="/apropos" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">À propos</Link>
      </div>
      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded hover:bg-blue-700/30 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Ouvrir le menu"
      >
        {/* Icône hamburger */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="32" height="3" rx="1.5" fill="#fff" />
          <rect y="15" width="32" height="3" rx="1.5" fill="#fff" />
          <rect y="23" width="32" height="3" rx="1.5" fill="#fff" />
        </svg>
      </button>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 w-40 bg-white text-blue-700 rounded shadow-lg flex flex-col z-50 animate-fade-in">
          <Link
            to="/"
            className="px-4 py-2 hover:bg-blue-100 rounded-t"
            onClick={() => setMenuOpen(false)}
          >Accueil</Link>
          <Link
            to="/taches"
            className="px-4 py-2 hover:bg-blue-100"
            onClick={() => setMenuOpen(false)}
          >Tâches</Link>
          <Link
            to="/apropos"
            className="px-4 py-2 hover:bg-blue-100 rounded-b"
            onClick={() => setMenuOpen(false)}
          >À propos</Link>
        </div>
      )}
    </nav>
  );
}
