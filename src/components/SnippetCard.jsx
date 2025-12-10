import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function SnippetCard({ snippet, isFavorite, onToggleFavorite, onDelete }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!snippet.code) return;

    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  return (
    <div className="card snippet-card mb-3" style={{ maxWidth: "32rem" }}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>{snippet.title || "Snippet"}</span>

        <button
          type="button"
          className="favorite-btn"
          onClick={onToggleFavorite}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-language mb-0">
            {snippet.language || "Unknown language"}
          </h5>

          {snippet.code && (
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy code"}
            </button>
          )}
        </div>

        {snippet.description && (
          <p className="card-text text-muted">{snippet.description}</p>
        )}

        {snippet.code && (
          <div className="mb-2">
            <SyntaxHighlighter
              language={snippet.language || "text"}
              style={atomDark}
              customStyle={{
                fontSize: "0.9rem",
                borderRadius: "4px",
              }}
              wrapLongLines={true}
            >
              {snippet.code}
            </SyntaxHighlighter>
          </div>
        )}

        {snippet.tags && snippet.tags.length > 0 && (
          <p className="small mb-0 text-muted">
            {Array.isArray(snippet.tags)
              ? snippet.tags.join(", ")
              : snippet.tags}
          </p>
        )}

        <div className="mt-3 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SnippetCard;
