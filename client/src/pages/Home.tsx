export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#ffffff",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "12px" }}>
        SoulSound Home Loaded
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        The real Home.tsx page is rendering.
      </p>
      <p style={{ fontSize: "16px", opacity: 0.8 }}>
        Termux build is alive.
      </p>
    </div>
  );
}
