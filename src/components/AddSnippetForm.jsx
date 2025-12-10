import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function AddSnippetForm({ onSubmit }) {
  const [codePreview, setCodePreview] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = {
      title: form.get("title"),
      language: form.get("language"),
      code: form.get("code"),
      description: form.get("description"),
      tags: form.get("tags"),
    };

    if (onSubmit) {
      onSubmit(data);
    }

    e.target.reset();
    setCodePreview("");
  }

  //Form for adding new snippet
  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="snippetTitle"
            name="title"
            placeholder="Title of your snippet"
            required
          />
          <label htmlFor="snippetTitle">Title</label>
        </div>

      
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Language"
            id="snippetLanguage"
            name="language"
            required
          />
          <label htmlFor="snippetLanguage">Language</label>
        </div>

  
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Code"
            id="snippetCode"
            name="code"
            style={{ height: "100px" }}
            value={codePreview}
            onChange={(e) => setCodePreview(e.target.value)}
          />
          <label htmlFor="snippetCode">Code</label>
        </div>

        
        {codePreview && (
          <div className="mb-3">
            <p className="text-muted mb-1">Preview:</p>
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={{
                fontSize: "0.9rem",
                borderRadius: "4px",
              }}
              wrapLongLines={true}
            >
              {codePreview}
            </SyntaxHighlighter>
          </div>
        )}

        
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            id="snippetDescription"
            name="description"
            style={{ height: "80px" }}
          />
          <label htmlFor="snippetDescription">Description</label>
        </div>

        
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Tags"
            id="snippetTags"
            name="tags"
          />
          <label htmlFor="snippetTags">Tags</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Snippet
        </button>
      </form>
    </div>
  );
}

export default AddSnippetForm;

