import React, { useEffect } from 'react';

// We load MathJax when needed
const Math = ({ content }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
  }, [content]);  // Trigger re-typesetting if content changes

  return (
    <div>
      {/* Using dangerouslySetInnerHTML to inject the LaTeX content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Math;
