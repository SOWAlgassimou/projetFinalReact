import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarreNavigation from "./components/BarreNavigation";
import PiedDePage from "./components/PiedDePage";
import Accueil from "./pages/Accueil";
import Taches from "./pages/Taches";
import Apropos from "./pages/Apropos";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Barre de navigation */}
        <BarreNavigation />

        {/* Contenu central */}
        <main className="flex-grow p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/taches" element={<Taches />} />
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
        </main>

        {/* Pied de page */}
        <PiedDePage />
      </div>
    </Router>
  );
}
