// Shared theme + components for the Paran Sonthalia personal site.
// Aesthetic: scrapbook / handmade-corner-of-the-internet, Ocean + Coral palette.

(function() {
const C = {
  bg: '#ebf0f2',          // cool paper
  paper: '#f4f8f9',       // lighter card paper
  paperWarm: '#f9f5ec',   // accent warm paper (rare)
  ink: '#13212a',         // deep ink
  inkSoft: '#476068',
  inkDim: '#86969e',
  rule: '#c4d0d5',
  ruleSoft: '#dde6e9',

  // Accents
  navy: '#1a558f',        // primary (was "red")
  coral: '#d36b6e',       // secondary (was "pink")
  teal: '#0c8a8a',        // tertiary
  forest: '#3b8c4b',      // success / training
  ochre: '#d9a23a',       // tape / highlight
  paperTape: '#f0d77e',   // washi tape
};

window.SiteC = C;

// ─── Small reusable components ─────────────────────────────────────

function Sticker({ children, bg, fg, rot = 0, size = 'md' }) {
  const sizes = {
    sm: { pad: '4px 10px', fs: 11 },
    md: { pad: '6px 14px', fs: 12 },
    lg: { pad: '8px 18px', fs: 14 },
  };
  const s = sizes[size];
  return (
    <span style={{
      background: bg || C.navy, color: fg || C.paper,
      padding: s.pad, borderRadius: 999,
      fontFamily: "'DM Mono', monospace", fontSize: s.fs,
      fontWeight: 500, transform: `rotate(${rot}deg)`,
      boxShadow: '0 2px 4px rgba(13,33,42,.12)',
      display: 'inline-block', whiteSpace: 'nowrap',
      transition: 'transform .3s cubic-bezier(.2,.7,.2,1)',
    }}>{children}</span>
  );
}

function Tape({ children, color = C.paperTape, rot = -3, top = -10, left = '30%' }) {
  return (
    <span style={{
      position: 'absolute',
      top, left,
      background: color, opacity: 0.95,
      padding: '4px 14px',
      fontFamily: "'Caveat', cursive", fontSize: 15,
      color: C.ink,
      transform: `rotate(${rot}deg)`,
      boxShadow: '0 1px 3px rgba(0,0,0,.1)',
      zIndex: 2,
      pointerEvents: 'none',
    }}>{children}</span>
  );
}

function Polaroid({ src, caption, rot = 0, w = 'auto', tapeAt, tapeColor, tapeText, padBottom = 38, children, style = {} }) {
  return (
    <div style={{
      transform: `rotate(${rot}deg)`,
      background: C.paper,
      padding: 14, paddingBottom: padBottom,
      boxShadow: '0 18px 32px rgba(13,33,42,.18), 0 2px 4px rgba(13,33,42,.08)',
      width: w,
      position: 'relative',
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
      ...style,
    }}>
      {tapeText && (
        <Tape rot={-4} top={-12} left={tapeAt || '32%'} color={tapeColor}>{tapeText}</Tape>
      )}
      {src ? (
        <div style={{ width: '100%', aspectRatio: '1', background: C.bg, overflow: 'hidden' }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : children}
      {caption && (
        <div style={{
          fontFamily: "'Caveat', cursive", fontSize: 18,
          textAlign: 'center', marginTop: 8, color: C.ink, lineHeight: 1.2,
        }}>{caption}</div>
      )}
    </div>
  );
}

function SectionHeader({ kicker, kickerColor, title, em, subtitle, right, anchor }) {
  return (
    <div id={anchor} style={{ marginBottom: 36, scrollMarginTop: 100 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
        <div>
          {kicker && (
            <div style={{
              fontFamily: "'Caveat', cursive", fontSize: 26,
              color: kickerColor || C.coral, transform: 'rotate(-1deg)',
              display: 'inline-block', marginBottom: 4,
            }}>{kicker}</div>
          )}
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 64, lineHeight: 0.95, letterSpacing: '-0.02em',
            margin: 0, color: C.ink,
          }}>
            {title}{em && <> <em style={{ color: C.coral, fontStyle: 'italic' }}>{em}</em></>}
          </h2>
          {subtitle && (
            <div style={{
              marginTop: 8, fontSize: 16, lineHeight: 1.4, color: C.inkSoft, maxWidth: 540,
            }}>{subtitle}</div>
          )}
        </div>
        {right && (
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.inkSoft, textAlign: 'right' }}>
            {right}
          </div>
        )}
      </div>
    </div>
  );
}

// Animated dashed arrow (SVG)
function DoodleArrow({ width = 160, height = 100, path = "M10 10 C 60 10, 110 60, 150 90", color, style }) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width, height, ...style }}>
      <path d={path}
        stroke={color || C.ink} strokeWidth="2.5" fill="none" strokeLinecap="round"
        strokeDasharray="4 6" style={{ animation: 'pn-dash 1.5s linear infinite' }}
      />
      <path d={`M${(path.match(/[\d.]+/g) || []).slice(-2)[0]} ${(path.match(/[\d.]+/g) || []).slice(-1)[0]} l-10 -4 l4 14 z`} fill={color || C.ink} transform="translate(0,-2)" />
    </svg>
  );
}

// Underline-on-hover link
function WavyLink({ href, color, children, target }) {
  return (
    <a href={href} target={target || (href && href.startsWith('http') ? '_blank' : undefined)} rel="noopener noreferrer" style={{
      color: color || C.navy,
      textDecoration: 'underline wavy',
      textDecorationThickness: 1.5,
      textUnderlineOffset: 4,
      textDecorationColor: (color || C.navy) + '88',
      transition: 'text-decoration-color .25s',
    }}
    onMouseEnter={(e) => e.currentTarget.style.textDecorationColor = (color || C.navy)}
    onMouseLeave={(e) => e.currentTarget.style.textDecorationColor = (color || C.navy) + '88'}
    >{children}</a>
  );
}

// Highlight (yellow marker effect)
function Hi({ children, color }) {
  return (
    <span style={{
      backgroundImage: `linear-gradient(transparent 75%, ${color || C.paperTape} 75%)`,
      padding: '0 2px',
    }}>{children}</span>
  );
}

// IntersectionObserver-based fade-in wrapper
function FadeUp({ children, delay = 0, y = 24 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([ent]) => {
      if (ent.isIntersecting) {
        setShown(true);
        obs.disconnect();
      }
    }, { rootMargin: '-50px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity .8s ease ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    }}>{children}</div>
  );
}

Object.assign(window, { Sticker, Tape, Polaroid, SectionHeader, DoodleArrow, WavyLink, Hi, FadeUp });
})();
