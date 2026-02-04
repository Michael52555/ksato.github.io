import MarkdownMath from "./MarkdownMath";

const THEME = {
  accent: "#7C1D1D",          
  accentSoft: "rgba(207, 44, 44, 0.1)",
  ink: "rgba(195, 19, 19, 0.88)",
  muted: "rgba(0,0,0,0.62)",
  page: "#F2F4F8",
  panel: "#FFFFFF",
  border: "rgba(27, 9, 9, 0.1)",
};  

export default function Card({ title, subtitle, bullets = [], links = [] }) {
  return (
    <div
      style={{
        border: "10px solid rgba(0,0,0,0.10)",
        borderLeft: "4px solid ${THEME.accentSoft}$",
        borderRadius: 14,
        padding: 18,
        background: THEME.panel,
        marginBottom: 14,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <div>
          <div style={{ fontWeight: 750, fontSize: 16 }}>{title}</div>
          {subtitle && (
            <div style={{ marginTop: 6, color: "rgba(0,0,0,0.62)", fontSize: 14 }}>
              {subtitle}
            </div>
          )}
        </div>
        {links.length > 0 && (
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {bullets.length > 0 && (
        <ul style={{ margin: "12px 0 0", paddingLeft: 18, lineHeight: 1.6 }}>
          {bullets.map((b, i) => (
            <li key={`${title}-b-${i}`}>
                <MarkdownMath>{b}</MarkdownMath>
            </li>
        ))}
        </ul>
      )}
    </div>
  );
}
