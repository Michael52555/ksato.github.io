import MarkdownMath from "./MarkdownMath";

export default function Card({ title, subtitle, bullets = [], links = [] }) {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: 14,
        padding: 18,
        background: "white",
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
