import { Link } from "react-router-dom";

export default function BarreNavigation() {
  return (
    <nav className="bg-blue-600 px-8 py-4 text-white flex items-center justify-between">
      <h1 className="font-bold">Gestionnaire de Tâches</h1>
      <div className="flex items-center space-x-1 pr-1">
        <Link to="/" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">Accueil</Link>
        <Link to="/taches" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">Tâches</Link>
        <Link to="/apropos" className="px-3 py-1 rounded hover:bg-blue-700/30 transition-colors">À propos</Link>
      </div>
    </nav>
  );
}
