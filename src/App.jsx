import { Routes, Route } from "react-router-dom";
import { useApi } from "./hooks/useApi";
import Navbar from "./components/Navbar";
import MainPage from "./pages/Mainpage";
import FavoritesPage from "./pages/FavoritesPage";
import { useState } from "react";

function App() {
  const { data, loading, error, create, remove } = useApi("/api/snippets");
  const snippets = Array.isArray(data) ? data : [];

  const [favoriteIds, setFavoriteIds] = useState([]);
  const [languageFilter, setLanguageFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Add new snippet
  async function handleAddSnippet(formData) {
    const payload = {
      title: formData.title,
      language: formData.language,
      code: formData.code,
      description: formData.description,
      tags: formData.tags
        ? formData.tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [],
    };

    const result = await create(payload);
    if (!result.success) {
      alert(result.error || "Creating snippet failed");
    }
  }

  // Delete snippet
  function handleDeleteSnippet(id) {
    remove(id);
  }

  // Toggle favorite
  function handleToggleFavorite(id) {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  }

  // Apply filtering
  const normalizedSearch = searchTerm.toLowerCase().trim();
  const filteredSnippets = snippets.filter((snip) => {
    if (languageFilter !== "all") {
      if (!snip.language || snip.language.toLowerCase() !== languageFilter) {
        return false;
      }
    }

    if (!normalizedSearch) return true;

    const titleText = (snip.title || "").toLowerCase();
    const languageText = (snip.language || "").toLowerCase();
    const tagsText = (snip.tags || "").toString().toLowerCase();

    return (
      titleText.includes(normalizedSearch) ||
      languageText.includes(normalizedSearch) ||
      tagsText.includes(normalizedSearch)
    );
  });

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              snippets={filteredSnippets}
              loading={loading}
              error={error}
              onAddSnippet={handleAddSnippet}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
              onDelete={handleDeleteSnippet}
              languageFilter={languageFilter}
              searchTerm={searchTerm}
              setLanguageFilter={setLanguageFilter}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <FavoritesPage
              snippets={snippets}
              favoriteIds={favoriteIds}
              onToggleFavorite={handleToggleFavorite}
              onDelete={handleDeleteSnippet}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
