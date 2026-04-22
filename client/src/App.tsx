function App() {
  const tracks = [
    { title: "CRY OF THE STORM", duration: "3:45" },
    { title: "HEARTIST TRUTH", duration: "4:12" },
    { title: "TO THE LIMIT", duration: "3:58" },
    { title: "Over The Globe", duration: "4:05" },
    { title: "I Know", duration: "3:32" },
    { title: "Soul Ship", duration: "4:28" },
  ];

  const stories = [
    {
      label: "Story 1",
      title: "IP Man",
      description:
        "A legendary martial artist's journey through honor, discipline, and transformation. Experience the untold stories behind the master.",
    },
    {
      label: "Story 2",
      title: "Joker for the Queen",
      description:
        "A thrilling tale of wit, deception, and unexpected alliances. Where every card played changes everything.",
    },
    {
      label: "Story 3",
      title: "Tomorrow's Yesterday",
      description:
        "A mind-bending narrative exploring time, destiny, and the choices that define us. What if you could rewrite your past?",
    },
  ];

  const artifacts = [
    "Signal Echo #1",
    "Signal Echo #2",
    "Signal Echo #3",
    "Signal Echo #4",
    "Signal Echo #5",
    "Signal Echo #6",
  ];

  const spotifyArtistUrl =
    "https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl";

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 20% 0%, rgba(152,67,255,0.16), transparent 30%), radial-gradient(circle at 80% 10%, rgba(255,140,66,0.14), transparent 24%), linear-gradient(180deg, #05050a 0%, #070714 35%, #04040a 100%)",
        color: "#f7f2ff",
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "22px 24px",
          backdropFilter: "blur(16px)",
          background: "rgba(4, 4, 10, 0.84)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            background:
              "linear-gradient(90deg, #b56cff 0%, #ff74cf 55%, #ffc24d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          SSW
        </div>
        <div style={{ fontSize: "1.8rem" }}>☰</div>
      </header>

      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 20px 32px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(3.6rem, 10vw, 5.2rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
              background:
                "linear-gradient(90deg, #ae74ff 0%, #ff71d4 55%, #ffc64b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SoulSoundWorld
          </h1>
          <p
            style={{
              margin: "26px auto 0",
              maxWidth: 620,
              fontSize: "1.18rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            Where Sound, Story, and Signal Become One
          </p>

          <div
            style={{
              display: "grid",
              gap: 16,
              marginTop: 34,
              maxWidth: 320,
              marginInline: "auto",
            }}
          >
            <button
              style={{
                border: "none",
                borderRadius: 18,
                padding: "18px 22px",
                fontSize: "1.26rem",
                fontWeight: 800,
                color: "#fff",
                background:
                  "linear-gradient(90deg, #8f2fff 0%, #ff4ea7 52%, #ffbb21 100%)",
              }}
            >
              Enter the World
            </button>
            <button
              style={{
                borderRadius: 18,
                padding: "18px 22px",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#fff",
                background: "rgba(10,10,18,0.24)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              Explore Music
            </button>
          </div>

          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem",
            }}
          >
            Scroll to explore
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 20px 16px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto 28px", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(2rem, 6.5vw, 3.1rem)",
            }}
          >
            <span style={{ color: "#ffbf30", marginRight: 12 }}>♫</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #b065ff 0%, #ff74ce 56%, #ffca57 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Music
            </span>
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 760,
              color: "rgba(255,255,255,0.74)",
              fontSize: "1.08rem",
              lineHeight: 1.65,
            }}
          >
            Discover the sonic universe of Samzin Kreave. Featured tracks from
            SK88 Studios.
          </p>
        </div>

        <div style={{ display: "grid", gap: 20, maxWidth: 760, margin: "0 auto" }}>
          {tracks.map((track) => (
            <div
              key={track.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 120,
                borderRadius: 24,
                padding: "26px 24px",
                background: "rgba(6, 8, 18, 0.92)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <div style={{ fontSize: "1.18rem", fontWeight: 800 }}>
                  {track.title}
                </div>
                <div style={{ marginTop: 10, color: "rgba(255,255,255,0.6)" }}>
                  {track.duration}
                </div>
              </div>
              <div style={{ fontSize: "1.8rem", color: "#ff42ba" }}>♫</div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 760, margin: "34px auto 0", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.72)", marginBottom: 18 }}>
            Explore the full catalog on Spotify
          </p>
          <a
            href={spotifyArtistUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              minWidth: 220,
              padding: "18px 24px",
              borderRadius: 16,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "#fff",
              background: "#12b449",
            }}
          >
            Listen on Spotify
          </a>
        </div>
      </section>

      <section style={{ padding: "56px 20px 16px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto 28px", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(2rem, 6.5vw, 3.1rem)",
            }}
          >
            <span style={{ color: "#ffbf30", marginRight: 12 }}>📖</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #b065ff 0%, #ff74ce 56%, #ffca57 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stories
            </span>
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 760,
              color: "rgba(255,255,255,0.74)",
              fontSize: "1.08rem",
              lineHeight: 1.65,
            }}
          >
            Immersive narratives from Pocket FM. Stories that captivate,
            inspire, and transport you to new worlds.
          </p>
        </div>

        <div style={{ display: "grid", gap: 20, maxWidth: 760, margin: "0 auto" }}>
          {stories.map((story) => (
            <div
              key={story.title}
              style={{
                borderRadius: 24,
                padding: "28px 24px 24px",
                background: "rgba(6, 8, 18, 0.92)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ color: "#ffb21f", fontWeight: 700, marginBottom: 22 }}>
                {story.label}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "2.2rem",
                  lineHeight: 1.05,
                }}
              >
                {story.title}
              </h3>
              <p
                style={{
                  margin: "22px 0 0",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "1.08rem",
                  lineHeight: 1.7,
                }}
              >
                {story.description}
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  minHeight: 58,
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.015)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                }}
              >
                Discover Story ↗
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 20px 16px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto 26px", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(2rem, 6.5vw, 3.1rem)",
            }}
          >
            <span style={{ color: "#ffbf30", marginRight: 12 }}>✦</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, #b065ff 0%, #ff74ce 56%, #ffca57 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Signal Artifacts
            </span>
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              maxWidth: 760,
              color: "rgba(255,255,255,0.74)",
              fontSize: "1.08rem",
              lineHeight: 1.65,
            }}
          >
            Digital artifacts minted on Base chain via Zora. Exclusive drops
            coming soon.
          </p>
          <p style={{ marginTop: 18, color: "#a66dff" }}>
            Powered by Zora Protocol on Base
          </p>
        </div>

        <div style={{ display: "grid", gap: 22, maxWidth: 760, margin: "0 auto" }}>
          {artifacts.map((artifact) => (
            <div
              key={artifact}
              style={{
                minHeight: 300,
                borderRadius: 26,
                padding: 1,
                background:
                  "linear-gradient(180deg, rgba(170,73,255,0.55), rgba(102,0,255,0.14))",
              }}
            >
              <div
                style={{
                  minHeight: 298,
                  borderRadius: 25,
                  background:
                    "radial-gradient(circle at 50% 20%, rgba(164, 65, 255, 0.15), transparent 35%), linear-gradient(180deg, rgba(28,10,43,0.92), rgba(19,8,34,0.94))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "30px 20px",
                }}
              >
                <div style={{ fontSize: "2.1rem", color: "#a15cff", marginBottom: 18 }}>
                  ✦
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 800 }}>{artifact}</div>
                <div style={{ marginTop: 10, color: "rgba(255,255,255,0.55)" }}>
                  Coming Soon
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
