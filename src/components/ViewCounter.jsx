import React, { useEffect, useState } from "react";

const ViewCounter = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch("/api/view-count", { method: "POST" })
      .then(res => res.json())
      .then(data => setViews(data.views))
      .catch(() => setViews(null));
  }, []);

  return (
    <div style={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}>
      {views !== null ? `👀 ${views}` : ""}
    </div>
  );
};

export default ViewCounter;
