// composants/ListeTaches.jsx
import React, { useState, useCallback } from "react";
import TacheItem from "./TacheItem";

export default function ListeTaches({ taches, onAjouter, onToggle, onDelete }) {
  const [nouvelleTache, setNouvelleTache] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nouvelleTache.trim()) return;
    onAjouter(nouvelleTache);
    setNouvelleTache("");
  };

  // ✅ useCallback évite que la fonction change à chaque rendu
  const handleToggle = useCallback((id) => {
    onToggle(id);
  }, [onToggle]);

  const handleDelete = useCallback((id) => {
    onDelete(id);
  }, [onDelete]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Ajouter une tâche..."
          className="flex-grow border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ajouter
        </button>
      </form>

      {/* Liste */}
      <ul>
        {taches.map((tache) => (
          <TacheItem
            key={tache.id}
            tache={tache}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
