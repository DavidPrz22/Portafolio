import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "David Pérez - Full-Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 182, 72, 0.1) 0%, transparent 50%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                background: "#a3e635",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                color: "#a3e635",
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Available for Work
            </span>
          </div>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            David Pérez
          </h1>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#a3e635",
              textAlign: "center",
              margin: "16px 0 0 0",
              letterSpacing: "0.05em",
            }}
          >
            Full-Stack Developer
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "700px",
              margin: "32px 0 0 0",
              lineHeight: 1.5,
            }}
          >
            TypeScript • Python • React • NestJS • Django
          </p>

          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                color: "#64748b",
                fontFamily: "monospace",
              }}
            >
              davidperezdev.com
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            display: "flex",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#a3e635",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#a3e635",
              borderRadius: "2px",
              opacity: 0.6,
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#a3e635",
              borderRadius: "2px",
              opacity: 0.3,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
