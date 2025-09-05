// utils/stockage.js

// Charger les tâches depuis localStorage
export function chargerTaches() {
  const data = localStorage.getItem("taches");
  return data ? JSON.parse(data) : [];
}

// Sauvegarder les tâches dans localStorage
export function sauvegarderTaches(taches) {
  localStorage.setItem("taches", JSON.stringify(taches));
}
