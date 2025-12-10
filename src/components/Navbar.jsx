import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Snippet Library</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">All Snippets</Link>
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;