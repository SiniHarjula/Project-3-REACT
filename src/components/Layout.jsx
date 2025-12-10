import { Link } from "react-router-dom";
import "../styles/main.css";

function Layout({ children }) {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Snippet Library</Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">All Snippets</Link>
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </div>
        </div>
      </nav>

     
      <main className="page-container">
        {children}
      </main>
    </>
  );
}

export default Layout;
