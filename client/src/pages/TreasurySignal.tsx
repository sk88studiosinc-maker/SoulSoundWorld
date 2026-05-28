const treasuryData = {
  allocations: [
    { asset: "ETH", percent: 43.22, narrative: "Foundation / permanence layer" },
    { asset: "ATOM", percent: 40.28, narrative: "Interoperability / connected-world layer" },
    { asset: "SOL", percent: 16.14, narrative: "Velocity / consumer-scale layer" },
    { asset: "MON", percent: 0.36, narrative: "Emerging infrastructure / future signal layer" },
  ],
  categories: [
    { name: "Layer 1", percent: 59.72 },
    { name: "BNB Chain Ecosystem", percent: 40.28 },
  ],
};

export default function TreasurySignal() {
  return (
    <main style={{ minHeight: "100vh", background: "#030006", color: "white", fontFamily: "Inter, system-ui, sans-serif", padding: "64px 20px" }}>
      <section style={{ maxWidth: 980, margin: "0 auto", border: "1px solid rgba(168,85,247,.32)", borderRadius: 28, padding: 28, background: "linear-gradient(135deg, rgba(168,85,247,.14), rgba(0,0,0,.8))" }}>
        <a href="/" style={{ color: "#c084fc", textDecoration: "none", fontWeight: 800 }}>← Back to SoulSoundWorld</a>

        <p style={{ marginTop: 34, color: "#fb923c", letterSpacing: 3, fontSize: 12 }}>LIVE CREATOR INFRASTRUCTURE TRANSMISSION</p>
        <h1 style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)", lineHeight: .95, margin: "10px 0", fontWeight: 300 }}>
          Treasury Signal
        </h1>

        <p style={{ maxWidth: 680, color: "rgba(255,255,255,.72)", fontSize: 18, lineHeight: 1.7 }}>
          A public-facing creator treasury snapshot for narrative transparency, ecosystem tracking, and long-term worldbuilding.
        </p>

        <div style={{ marginTop: 24, color: "#f87171", borderLeft: "4px solid #ef4444", paddingLeft: 16 }}>
          Experimental creator treasury signal. Not financial advice. For narrative and transparency only.
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22, marginTop: 36 }}>
          <div>
            <h2 style={{ color: "#d8b4fe" }}>Asset Allocation</h2>
            {treasuryData.allocations.map((item) => (
              <article key={item.asset} style={{ padding: 18, borderRadius: 18, border: "1px solid rgba(168,85,247,.22)", background: "rgba(255,255,255,.035)", marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <strong style={{ color: "#fb923c" }}>{item.asset}</strong>
                  <strong>{item.percent}%</strong>
                </div>
                <p style={{ color: "rgba(255,255,255,.62)", marginBottom: 0 }}>{item.narrative}</p>
              </article>
            ))}
          </div>

          <div>
            <h2 style={{ color: "#d8b4fe" }}>Category Distribution</h2>
            {treasuryData.categories.map((cat) => (
              <div key={cat.name} style={{ marginBottom: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span>{cat.name}</span>
                  <span>{cat.percent}%</span>
                </div>
                <div style={{ height: 10, background: "rgba(255,255,255,.1)", borderRadius: 999 }}>
                  <div style={{ height: 10, width: `${cat.percent}%`, background: "linear-gradient(90deg,#a855f7,#fb923c)", borderRadius: 999 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
