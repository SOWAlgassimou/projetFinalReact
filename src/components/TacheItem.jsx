// composants/TacheItem.jsx
import React from "react";

function TacheItem({ tache, onToggle, onDelete }) {
  console.log("Rendu de la tâche :", tache.texte);

  return (
    <li className="flex justify-between items-center bg-white shadow p-3 rounded mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={tache.complete}
          onChange={() => onToggle(tache.id)}
        />
        <span className={tache.complete ? "line-through text-gray-500" : ""}>
          {tache.texte}
        </span>
      </div>
      <button
        onClick={() => onDelete(tache.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        ❌
      </button>
    </li>
  );
}

// ✅ Empêche le rerender si les props sont identiques
export default React.memo(TacheItem);
