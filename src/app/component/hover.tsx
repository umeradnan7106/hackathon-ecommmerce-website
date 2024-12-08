import { useState } from "react";

export default function HoverEffect() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", display: "inline-block", margin: "50px" }}
    >
      Add To Cart
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            border: "1px solid #ccc",
            zIndex: 10,
          }}
        >
          Hello! I appear when you hover.
        </div>
      )}
    </div>
  );
}
