import SnippetCard from "../components/SnippetCard";
import Layout from "../components/Layout";

function FavoritesPage({ snippets, favoriteIds, onToggleFavorite, onDelete }) {
  const favoriteSnippets = snippets.filter((s) => favoriteIds.includes(s._id));

  return (
    <Layout>
      <h1 className="mb-3">My Favorite Snippets</h1>

      <div className="filter-box">
        {favoriteSnippets.length === 0 && (
          <p className="text-muted mb-0">No favorites yet</p>
        )}

        {favoriteSnippets.length > 0 && (
          <div className="snippet-grid">
            {favoriteSnippets.map((snip) => (
              <SnippetCard
                key={snip._id}
                snippet={snip}
                isFavorite={true}
                onToggleFavorite={() => onToggleFavorite(snip._id)}
                onDelete={() => onDelete(snip._id)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default FavoritesPage;
