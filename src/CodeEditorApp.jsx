import React, { useState, useRef, useEffect } from "react";
import FileTabs from "./components/FileTabs";
import EditorArea from "./components/EditorArea";
import PreviewPane from "./components/PreviewPane";

export default function CodeEditorApp() {
  const iframeRef = useRef(null);

  const [files, setFiles] = useState([
    { id: 1, name: "index.html", type: "html", content: "<h1>Hello</h1>" },
    { id: 2, name: "style.css", type: "css", content: "h1 { color:red; }" },
    { id: 3, name: "script.js", type: "js", content: "console.log('JS Loaded')" }
  ]);

  const [activeId, setActiveId] = useState(1);

  const activeFile = files.find(f => f.id === activeId);

  const updateFile = (id, newContent) => {
    setFiles(files.map(f => f.id === id ? { ...f, content: newContent } : f));
  };

  const renameFile = (id, newName) => {
    setFiles(files.map(f => f.id === id ? { ...f, name: newName } : f));
  };

  const addFile = (type) => {
    const id = Date.now();
    const ext = type === "html" ? ".html" : type === "css" ? ".css" : ".js";

    setFiles([...files, {
      id,
      type,
      name: "new" + ext,
      content: ""
    }]);
    setActiveId(id);
  };

  const removeFile = (id) => {
    setFiles(files.filter(f => f.id !== id));
  };

  useEffect(() => {
    const html = files.find(f => f.type === "html")?.content || "";
    const css = files.find(f => f.type === "css")?.content || "";
    const js = files.find(f => f.type === "js")?.content || "";

    const result = `
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `;

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.srcdoc = result;
    }
  }, [files]);

  return (
    <>
      <FileTabs
        files={files}
        activeId={activeId}
        setActiveId={setActiveId}
        addFile={addFile}
        removeFile={removeFile}
      />

      <EditorArea
        activeFile={activeFile}
        renameFile={renameFile}
        updateFile={updateFile}
      />

      <div className="mt-4">
        <PreviewPane iframeRef={iframeRef} />
      </div>
    </>
  );
}
