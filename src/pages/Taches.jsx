// pages/Taches.jsx
import React, { useState, useEffect, useCallback, useMemo } from "react";
import ListeTaches from "../components/ListeTaches";
import { chargerTaches, sauvegarderTaches } from "../utils/stockage";

export default function Taches() {
  const [taches, setTaches] = useState(chargerTaches);

  useEffect(() => {
    sauvegarderTaches(taches);
  }, [taches]);

  // ✅ useCallback → même référence tant que setTaches ne change pas
  const ajouterTache = useCallback((texte) => {
    const nouvelle = {
      id: Date.now(),
      texte,
      complete: false,
    };
    setTaches((prev) => [...prev, nouvelle]);
  }, []);

  const toggleTache = useCallback((id) => {
    setTaches((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, complete: !t.complete } : t
      )
    );
  }, []);

  const supprimerTache = useCallback((id) => {
    setTaches((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // ✅ useMemo → calcule uniquement quand `taches` change
  const nbTachesComplete = useMemo(
    () => taches.filter((t) => t.complete).length,
    [taches]
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📋 Mes Tâches</h2>
      <p className="mb-4 text-gray-700">
        ✅ {nbTachesComplete} / {taches.length} tâches terminées
      </p>
      <ListeTaches
        taches={taches}
        onAjouter={ajouterTache}
        onToggle={toggleTache}
        onDelete={supprimerTache}
      />
    </div>
  );
}
