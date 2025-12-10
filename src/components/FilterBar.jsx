function FilterBar({
  languageFilter,
  onLanguageChange,
  searchTerm,
  onSearchChange,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

    return (
    <div className="filter-inner mb-4">
      <form
        className="d-flex flex-wrap gap-3"
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="d-flex flex-column me-3">
          <label htmlFor="languageFilter" className="form-label mb-1">
            Filter by language
          </label>
          <select
            id="languageFilter"
            className="form-select"
            value={languageFilter}
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="csharp">C#</option>
            <option value="java">Java</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex-grow-1 d-flex flex-column">
          <label htmlFor="searchInput" className="form-label mb-1">
            Search with title, language or tags
          </label>
          <input
            id="searchInput"
            className="form-control"
            type="search"
            placeholder="Type to search..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}


export default FilterBar;
