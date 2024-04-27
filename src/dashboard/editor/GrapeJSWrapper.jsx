import React, { useRef, useEffect, useState } from "react";
import grapesjs from "grapesjs";

const GrapeJSWrapper = ({ initialContent, onSave }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      // Initialize GrapeJS
      const newEditor = grapesjs.init({
        container: editorRef.current,
        // Set initial content
        fromElement: true,
        storageManager: {
          // Set storage manager to avoid issues on saving
          type: null,
          autosave: false,
          autoload: false,
        },
        plugins: ["gjs-preset-webpage"],
        // Other GrapeJS options as needed
      });

      // Set initial content if provided
      if (initialContent) {
        // Parse the HTML content into a DOM element
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = initialContent;

        // Append external CSS stylesheets to the editor's head
        const links = tempDiv.querySelectorAll('link[rel="stylesheet"]');
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href) {
            newEditor.CssComposer.add(href);
          }
        });

        // Set content to editor
        newEditor.DomComponents.getWrapper().set("content", initialContent);
      }

      setEditor(newEditor);
    }

    return () => {
      // Destroy GrapeJS editor when component unmounts
      if (editor) {
        editor.destroy();
      }
    };
  }, [editor, initialContent]);

  const handleSave = () => {
    const editedContent = editor.getHtml();
    onSave(editedContent);
  };

  return (
    <div>
      <div ref={editorRef}></div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default GrapeJSWrapper;
