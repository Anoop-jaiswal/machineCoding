import { useState } from "react";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "1px solid grey",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Open"} Window
      </button>

      <div
        style={{
          position: "fixed",
          top: "0",
          width: "300px",
          height: "100vh",
          background: "#333",
          color: "white",
          padding: "20px",
          transition: "right 0.3s ease-in-out", // Smooth slide animation
          boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.3)",
          right: isOpen ? "0" : "-400px", // Slide in/out based on state
        }}
      >
        <h2>Sliding Window</h2>
        <p>This is a simple sliding panel.</p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Drawer;
