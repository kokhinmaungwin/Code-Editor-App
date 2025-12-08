import React from "react";

export default function EditorArea({ activeFile, renameFile, updateFile }) {
  return (
    <div className="mt-4 bg-gray-800 p-3 rounded">
      <input
        value={activeFile.name}
        onChange={e => renameFile(activeFile.id, e.target.value)}
        className="w-full bg-transparent border-b mb-3"
      />

      <textarea
        value={activeFile.content}
        onChange={e => updateFile(activeFile.id, e.target.value)}
        className="w-full h-64 p-3 bg-gray-900 text-white"
      />
    </div>
  );
}
