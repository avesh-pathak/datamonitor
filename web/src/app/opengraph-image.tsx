import { readFileSync } from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";

const markSrc = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public", "og-mark.png")
).toString("base64")}`;

export const alt =
  "Data Monitor — live network speed and per-app data usage in the Windows 11 taskbar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#2888ed",
          color: "#ffffff",
          padding: "58px 64px 54px",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-150px",
            top: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.11)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-120px",
            bottom: "-240px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(0,49,112,0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              display: "flex",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={markSrc}
              width={52}
              height={52}
              alt=""
              style={{ borderRadius: "13px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "23px", fontWeight: 600 }}>
              Data Monitor
            </span>
            <span
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.62)" }}
            >
              for Windows 11
            </span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: "9px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "999px",
              padding: "9px 17px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#7fd6a4",
                display: "flex",
              }}
            />
            local-only · no telemetry
          </div>
        </div>

        <div
          style={{
            marginTop: "62px",
            display: "flex",
            flexDirection: "column",
            letterSpacing: "-2.6px",
          }}
        >
          <span
            style={{
              fontSize: "70px",
              lineHeight: 1.02,
              fontWeight: 600,
            }}
          >
            See where your data goes.
          </span>
          <span
            style={{
              fontSize: "70px",
              lineHeight: 1.02,
              fontWeight: 300,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Right in the taskbar.
          </span>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "7px",
              borderRadius: "13px",
              background: "#1b1b1f",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "16px 22px",
              fontSize: "21px",
            }}
          >
            <span style={{ color: "#7cc4ff" }}>↓</span>
            <span style={{ fontWeight: 600 }}>28.8</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>
              Kbps
            </span>
            <span style={{ color: "#7fd6a4", marginLeft: "10px" }}>↑</span>
            <span style={{ fontWeight: 600 }}>8.4</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>
              Kbps
            </span>
          </div>
          <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.58)" }}>
            Per-app usage · hourly patterns · monthly forecast
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
