import React from "react";

export default function FileTabs({ files, activeId, setActiveId, addFile, removeFile }) {
  return (
    <div>
      <div className="flex gap-2 mb-3">
        <button onClick={() => addFile("html")}>+ HTML</button>
        <button onClick={() => addFile("css")}>+ CSS</button>
        <button onClick={() => addFile("js")}>+ JS</button>
      </div>

      <div className="flex gap-2 bg-gray-800 p-2 rounded">
        {files.map(f => (
          <div
            key={f.id}
            className={`px-3 py-1 rounded cursor-pointer ${f.id === activeId ? "bg-gray-700" : "bg-gray-900"}`}
            onClick={() => setActiveId(f.id)}
          >
            {f.name}
            <button onClick={(e) => { e.stopPropagation(); removeFile(f.id); }}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
