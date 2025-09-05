// __tests__/Taches.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Taches from "../src/pages/Taches";
import React from "react";


// Simuler localStorage
beforeEach(() => {
  localStorage.clear();
});

test("ajoute une nouvelle tâche", () => {
  render(<Taches />);

  // On tape un texte
  const input = screen.getByPlaceholderText("Ajouter une tâche...");
  fireEvent.change(input, { target: { value: "Acheter du poisson" } });

  // On clique sur "Ajouter"
  fireEvent.click(screen.getByText("Ajouter"));

  // Vérifier que la tâche apparaît
  expect(screen.getByText("Acheter du poisson")).toBeInTheDocument();
});

test("supprime une tâche", () => {
  render(<Taches />);

  // Ajouter une tâche
  const input = screen.getByPlaceholderText("Ajouter une tâche...");
  fireEvent.change(input, { target: { value: "Aller au marché" } });
  fireEvent.click(screen.getByText("Ajouter"));

  // Supprimer la tâche
  fireEvent.click(screen.getByText("❌"));

  // Vérifier que la tâche a disparu
  expect(screen.queryByText("Aller au marché")).not.toBeInTheDocument();
});

test("toggle une tâche (cocher/décocher)", () => {
  render(<Taches />);

  // Ajouter une tâche
  const input = screen.getByPlaceholderText("Ajouter une tâche...");
  fireEvent.change(input, { target: { value: "Préparer le dîner" } });
  fireEvent.click(screen.getByText("Ajouter"));

  // Coche la tâche
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  // Vérifie qu'elle est barrée
  expect(screen.getByText("Préparer le dîner")).toHaveClass("line-through");

  // Décoche
  fireEvent.click(checkbox);

  // Vérifie qu'elle n’est plus barrée
  expect(screen.getByText("Préparer le dîner")).not.toHaveClass("line-through");
});
