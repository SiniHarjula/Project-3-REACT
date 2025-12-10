import Layout from "../components/Layout";
import AddSnippetForm from "../components/AddSnippetForm";
import FilterBar from "../components/FilterBar";
import SnippetCard from "../components/SnippetCard";

function MainPage({
  snippets,
  loading,
  error,
  onAddSnippet,
  favoriteIds,
  onToggleFavorite,
  onDelete,
  languageFilter,
  searchTerm,
  setLanguageFilter,
  setSearchTerm,
}) {
  return (
    <Layout>
      <h1 className="mb-3">Code Snippet Library</h1>
      <p className="text-muted mb-4">
        Add a new snippet and browse existing ones.
      </p>

    
      <div className="form-box">
        <AddSnippetForm onSubmit={onAddSnippet} />
      </div>

      <div className="filter-box">
        <FilterBar
          languageFilter={languageFilter}
          onLanguageChange={setLanguageFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

      {loading && <p>Loading snippets...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

    
      <div className="snippet-grid">
        {snippets.map((snip) => (
          <SnippetCard
            key={snip._id}
            snippet={snip}
            isFavorite={favoriteIds.includes(snip._id)}
            onToggleFavorite={() => onToggleFavorite(snip._id)}
            onDelete={() => onDelete(snip._id)}
          />
        ))}
      </div>
      </div>
    </Layout>
  );
}

export default MainPage;
