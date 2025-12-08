import React from "react";

export default function PreviewPane({ iframeRef }) {
  return (
    <div className="border rounded overflow-hidden" style={{ height: 520 }}>
      <iframe ref={iframeRef} style={{ width: "100%", height: "100%", border: 0 }} />
    </div>
  );
}
