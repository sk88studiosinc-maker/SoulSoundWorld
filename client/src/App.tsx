cat > client/src/App.tsx <<'EOF'
const tracks = [
  { title: "CRY OF THE STORM", duration: "3:45" },
  { title: "HEARTIST TRUTH", duration: "4:12" },
  { title: "TO THE LIMIT", duration: "3:58" },
  { title: "Over The Globe", duration: "4:05" },
];

const stats = [
  { label: "Songs Released", value: "47" },
  { label: "Story Chapters", value: "12" },
  { label: "Artifacts Minted", value: "28" },
  { label: "Modules Live", value: "7" },
];

function App() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 20% 0%, rgba(139,92,246,.22), transparent 34%), radial-gradient(circle at 80% 8%, rgba(34,211,238,.12), transparent 28%), linear-gradient(180deg,#050509 0%,#080711 45%,#020204 100%)",
      color: "#fff",
      fontFamily: "Inter, system-ui, sans-serif",
      overflowX: "hidden"
    }}>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "18px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,.1)",
        background: "rgba(0,0,0,.72)",
        backdropFilter: "blur(18px)"
      }}>
        <strong style={{ letterSpacing: "3px", fontSize: 14 }}>SOULSOUNDWORLD</strong>
        <nav style={{ display: "flex", gap: 16, fontSize: 13 }}>
          <a href="#music" style={{ color: "#ddd" }}>Music</a>
          <a href="#stories" style={{ color: "#ddd" }}>Stories</a>
          <a href="#support" style={{ color: "#c084fc" }}>Support</a>
        </nav>
      </header>

      <section style={{
        minHeight: "92vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "64px 20px"
      }}>
        <div style={{ maxWidth: 880 }}>
          <div style={{
            display: "inline-flex",
            gap: 8,
            alignItems: "center",
            border: "1px solid rgba(192,132,252,.35)",
            borderRadius: 999,
            padding: "8px 14px",
            color: "#d8b4fe",
            fontSize: 12,
            letterSpacing: 2,
            marginBottom: 24
          }}>
            ● SIGNAL LIVE
          </div>

          <h1 style={{
            margin: 0,
            fontSize: "clamp(3.7rem, 13vw, 7rem)",
            lineHeight: .9,
            letterSpacing: "-.08em",
            fontWeight: 300
          }}>
            SoulSound<span style={{ color: "#a855f7" }}>World</span>
          </h1>

          <p style={{
            margin: "26px auto 0",
            maxWidth: 690,
            fontSize: "clamp(1.25rem, 4vw, 2rem)",
            lineHeight: 1.35,
            color: "rgba(255,255,255,.82)"
          }}>
            A living transmedia ecosystem built from one Android phone.
            Music. Fiction. Artifacts. One signal.
          </p>

          <p style={{
            margin: "22px auto 0",
            maxWidth: 580,
            color: "rgba(255,255,255,.56)",
            lineHeight: 1.7
          }}>
            Born in Termux at 3 a.m. Now broadcasting across music, fiction,
            and digital worlds.
          </p>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
            marginTop: 34
          }}>
            <a href="#music" style={{
              padding: "16px 24px",
              borderRadius: 16,
              background: "#fff",
              color: "#000",
              fontWeight: 800,
              textDecoration: "none"
            }}>
              Listen to the Signal
            </a>
            <a href="#world" style={{
              padding: "16px 24px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,.22)",
              color: "#fff",
              fontWeight: 800,
              textDecoration: "none"
            }}>
              Enter the World
            </a>
          </div>
        </div>
      </section>

      <section id="world" style={{ padding: "90px 22px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 8vw, 4rem)", lineHeight: 1, margin: 0, fontWeight: 300 }}>
            One Frequency. Many Realities.
          </h2>
          <p style={{ marginTop: 22, color: "rgba(255,255,255,.68)", fontSize: 19, lineHeight: 1.7 }}>
            SoulSoundWorld is where songs, serialized fiction, lore artifacts,
            and creator-built systems merge into one living world.
          </p>
        </div>
      </section>

      <section style={{ padding: "76px 22px", background: "rgba(0,0,0,.32)", borderTop: "1px solid rgba(255,255,255,.1)", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#c084fc", letterSpacing: 3, fontSize: 12, margin: 0 }}>SIGNAL STATUS</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 7vw, 3.7rem)", margin: "12px 0 28px", fontWeight: 300 }}>
            The World Is Alive
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{
                padding: 24,
                borderRadius: 24,
                background: "rgba(12,12,18,.88)",
                border: "1px solid rgba(255,255,255,.1)"
              }}>
                <div style={{ fontSize: 42, color: "#c084fc", fontFamily: "monospace" }}>{stat.value}</div>
                <div style={{ color: "rgba(255,255,255,.64)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 26, color: "rgba(255,255,255,.62)" }}>
            Current Mission: tighten the public entry point, activate support flow, and prepare the next transmission.
          </p>
        </div>
      </section>

      <section id="music" style={{ padding: "90px 22px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gap: 28 }}>
          <h2 style={{ fontSize: "clamp(2.4rem, 8vw, 4rem)", margin: 0, fontWeight: 300 }}>
            Enter Through Sound
          </h2>
          <p style={{ maxWidth: 620, color: "rgba(255,255,255,.68)", fontSize: 18, lineHeight: 1.7 }}>
            The fastest way into the world is the music. Start with the signal,
            then follow it into the stories.
          </p>

          <div style={{ display: "grid", gap: 14 }}>
            {tracks.map((track) => (
              <div key={track.title} style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: 22,
                borderRadius: 22,
                background: "rgba(255,255,255,.045)",
                border: "1px solid rgba(255,255,255,.1)"
              }}>
                <strong>{track.title}</strong>
                <span style={{ color: "#c084fc" }}>{track.duration}</span>
              </div>
            ))}
          </div>

          <a href="https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl" style={{ color: "#c084fc", fontWeight: 800 }}>
            Open Spotify →
          </a>
        </div>
      </section>

      <section id="stories" style={{ padding: "90px 22px", borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          {["Joker for the Queen", "Tomorrow’s Yesterday", "IP Man: The Love of a Billionaire’s Soul"].map((title) => (
            <article key={title} style={{
              padding: 26,
              minHeight: 220,
              borderRadius: 26,
              background: "linear-gradient(135deg, rgba(168,85,247,.18), rgba(0,0,0,.5))",
              border: "1px solid rgba(255,255,255,.1)"
            }}>
              <p style={{ color: "#c084fc", letterSpacing: 2, fontSize: 12 }}>STORY SIGNAL</p>
              <h3 style={{ fontSize: 26, fontWeight: 400 }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,.62)", lineHeight: 1.6 }}>
                A doorway into the SoulSoundWorld narrative layer.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="support" style={{ padding: "96px 22px", textAlign: "center", background: "linear-gradient(180deg, rgba(0,0,0,.1), rgba(168,85,247,.12))" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p style={{ color: "#c084fc", letterSpacing: 4, fontSize: 12 }}>ENTRY POINT</p>
          <h2 style={{ fontSize: "clamp(2.4rem, 8vw, 4.6rem)", margin: "10px 0", fontWeight: 300 }}>
            Founder Signal Pack
          </h2>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 18 }}>
            Digital lore card. Early access. Supporter credit. A clean first step into the world.
          </p>

          <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16 }}>
            {[
              ["$10", "Listener"],
              ["$25", "Observer"],
              ["$50", "Signal Bearer"],
            ].map(([price, tier]) => (
              <div key={tier} style={{
                padding: 26,
                borderRadius: 26,
                background: "rgba(0,0,0,.45)",
                border: "1px solid rgba(255,255,255,.12)"
              }}>
                <div style={{ fontSize: 42, fontFamily: "monospace" }}>{price}</div>
                <h3>{tier}</h3>
                <a href="#" style={{ color: "#c084fc", fontWeight: 800 }}>Claim Tier →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "80px 22px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)", fontWeight: 300 }}>
          The frequency is calling.
        </h2>
        <p style={{ color: "rgba(255,255,255,.58)" }}>Follow the Signal.</p>
      </footer>
    </main>
  );
}

export default App;
EOF
