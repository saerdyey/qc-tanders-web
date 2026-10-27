import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

async function logoDataUri() {
  "use cache";
  const data = await readFile(join(process.cwd(), "public", site.logo));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

// Shared layout for generated social share cards (Facebook, Messenger, X, Viber...).
export async function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const logo = await logoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0b0b0b",
          color: "#f2f2f2",
          padding: "60px 70px",
          gap: 56,
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={420} height={420} alt="" style={{ borderRadius: 210 }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: "3px solid #f2f2f2",
              padding: "8px 18px",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.02, marginTop: 28, textTransform: "uppercase" }}>
            {title}
          </div>
          <div style={{ fontSize: 26, color: "#9b9b9b", marginTop: 28 }}>{footer}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}

export const defaultOg = {
  eyebrow: `Quezon City · Est. ${site.foundingYear}`,
  title: "Brotherhood of the open road",
  footer: site.tagline,
};
