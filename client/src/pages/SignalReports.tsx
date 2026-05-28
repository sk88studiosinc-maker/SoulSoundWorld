import { useState } from "react";

const reports = [
  { id: 1, category: "Treasury", title: "Treasury Signal #001", date: "May 27, 2026", content: "Creator treasury currently concentrated in infrastructure assets ETH, ATOM, SOL, and MON." },
  { id: 2, category: "Build", title: "Build Signal", date: "May 27, 2026", content: "SoulSoundWorld is moving from built-but-unpushed systems into finalized public deployment." },
  { id: 3, category: "Music", title: "Music Signal", date: "May 26, 2026", content: "Neon Drive and the SoulSound catalog function as sonic gateways into the wider IP universe." },
  { id: 4, category: "Publishing", title: "Publishing Signal", date: "May 25, 2026", content: "Pocket FM packaging and the SoulSoundWorld value document are positioned as business-facing proof of IP value." },
];

const categories = ["All", "Treasury", "Build", "Music", "Publishing"];

export default function SignalReports() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredReports = activeFilter === "All" ? reports : reports.filter((report) => report.category === activeFilter);

  return (
    <main style={{ minHeight: "100vh", background: "#030006", color: "white", fontFamily: "Inter, system-ui, sans-serif", padding: "64px 20px" }}>
      <section style={{ maxWidth: 980, margin: "0 auto" }}>
        <a href="/" style={{ color: "#c084fc", textDecoration: "none", fontWeight: 800 }}>← Back to SoulSoundWorld</a>
        <p style={{ marginTop: 34, color: "#fb923c", letterSpacing: 3, fontSize: 12 }}>SIGNAL REPORTS • LIVE TRANSMISSIONS</p>
        <h1 style={{ fontSize: "clamp(2.8rem, 10vw, 5.5rem)", lineHeight: .95, margin: "10px 0", fontWeight: 300 }}>SoulSoundWorld Dispatch</h1>
        <p style={{ maxWidth: 680, color: "rgba(255,255,255,.72)", fontSize: 18, lineHeight: 1.7 }}>
          A public news-feed layer for tracking music, publishing, Web3 artifacts, build progress, and ecosystem signals.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} style={{ padding: "10px 14px", borderRadius: 999, border: activeFilter === cat ? "1px solid #fb923c" : "1px solid rgba(168,85,247,.32)", background: activeFilter === cat ? "rgba(251,146,60,.12)" : "rgba(255,255,255,.035)", color: activeFilter === cat ? "#fb923c" : "white", cursor: "pointer" }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gap: 18, marginTop: 34 }}>
          {filteredReports.map((report) => (
            <article key={report.id} style={{ padding: 24, borderRadius: 24, border: "1px solid rgba(168,85,247,.24)", background: "linear-gradient(135deg, rgba(168,85,247,.12), rgba(0,0,0,.62))" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                <span style={{ color: "#d8b4fe", fontSize: 12, letterSpacing: 2 }}>{report.category}</span>
                <span style={{ color: "rgba(255,255,255,.45)", fontSize: 12 }}>{report.date}</span>
              </div>
              <h2 style={{ color: "#fb923c", marginBottom: 8 }}>{report.title}</h2>
              <p style={{ color: "rgba(255,255,255,.72)", lineHeight: 1.7, marginBottom: 0 }}>{report.content}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
