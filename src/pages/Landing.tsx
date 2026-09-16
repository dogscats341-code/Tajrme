export default function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
        color: "white",
        fontFamily: "system-ui",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "70px" }}>🚀</div>
      <h1 style={{ fontSize: "48px", fontWeight: 900 }}>Tajr.me</h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        منصة التجربة والتعلم
      </p>
      <div
        style={{
          marginTop: "40px",
          background: "white",
          color: "#333",
          padding: "24px 32px",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h3>✅ الموقع يعمل بنجاح!</h3>
        <p style={{ color: "#666", fontSize: "14px" }}>
          Vercel Deploy Ready
        </p>
      </div>
    </div>
  );
}
