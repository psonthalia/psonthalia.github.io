// Section components for the personal site — part A.
// Nav, Hero, About, Now, Projects, Work.

(function() {
const C = window.SiteC;
const P = window.PARAN;
const { Sticker, Tape, Polaroid, SectionHeader, DoodleArrow, WavyLink, Hi, FadeUp } = window;

// ─── NAV ────────────────────────────────────────────────────────
function Nav({ active, onNav }) {
  const items = [
    { id: 'about', label: 'about' },
    { id: 'now', label: 'now' },
    { id: 'projects', label: 'projects' },
    { id: 'work', label: 'work' },
    { id: 'xcelerate', label: 'xcelerate' },
    { id: 'press', label: 'press' },
    { id: 'volunteer', label: 'volunteer' },
    { id: 'contact', label: 'contact' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: C.bg + 'e6', backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${C.ruleSoft}`,
      padding: '14px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="#home" onClick={(e) => { e.preventDefault(); onNav('home'); }} style={{ textDecoration: 'none', color: C.ink, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: C.coral, color: C.paper,
          display: 'grid', placeItems: 'center',
          fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700,
          transform: 'rotate(-6deg)', boxShadow: '0 2px 4px rgba(13,33,42,.15)',
        }}>P</div>
        <div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, lineHeight: 1, letterSpacing: '-0.01em' }}>paran's corner</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: C.inkSoft, marginTop: 1 }}>of the internet</div>
        </div>
      </a>

      <div style={{ display: 'flex', gap: 22, alignItems: 'center', fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.inkSoft }}>
        {items.map((it, i) => (
          <a key={it.id} href={`#${it.id}`} onClick={(e) => { e.preventDefault(); onNav(it.id); }} style={{
            color: active === it.id ? C.navy : C.inkSoft,
            textDecoration: 'none',
            fontWeight: active === it.id ? 600 : 400,
            position: 'relative', padding: '4px 0',
            transition: 'color .25s',
          }}>
            {it.label}
            {active === it.id && (
              <span style={{
                position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
                background: C.coral, borderRadius: 2,
              }} />
            )}
          </a>
        ))}
      </div>

      <a href="Resume.html" style={{
        padding: '7px 16px', background: C.ink, color: C.paper,
        borderRadius: 20, fontFamily: "'Caveat', cursive", fontSize: 18,
        transform: 'rotate(-2deg)', textDecoration: 'none',
        boxShadow: '0 2px 4px rgba(13,33,42,.18)',
        display: 'inline-block',
        transition: 'transform .25s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(-2deg) translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
      >résumé ✿</a>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────
function Hero() {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScrollY(window.scrollY); raf = 0; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const py = (rate) => `translateY(${-scrollY * rate}px)`;

  return (
    <section id="home" style={{ padding: '64px 56px 80px', position: 'relative', scrollMarginTop: 80 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 30,
            color: C.coral, transform: 'rotate(-2deg)',
            marginBottom: 12, display: 'inline-block',
          }}>
            hello, hi, namaste — i'm
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 176, lineHeight: 0.88, letterSpacing: '-0.025em',
            margin: 0, color: C.ink,
          }}>
            Paran<br/>
            <span style={{ fontStyle: 'italic', color: C.navy }}>Sonthalia</span>
            <span style={{ color: C.coral }}>.</span>
          </h1>

          <p style={{
            marginTop: 40, fontSize: 21, lineHeight: 1.55, maxWidth: 600,
          }}>
            I'm a <Hi>quantitative developer at Citadel</Hi> in New York, on the index rebalance desk. I write code for a quant trading team — careful systems, correct systems — and otherwise spend my time running long, building things, and tinkering with side projects.
            <br/><br/>
            Before this, <Hi color={C.coral + '55'}>UC Berkeley</Hi> ('22, Computer Science and Data Science) and <Hi color={C.coral + '55'}>DeWaste</Hi>, a Y&nbsp;Combinator-grant-funded food-waste startup. This site is a place to keep track of the things I've made and the places I've been. Poke around. <span style={{ fontFamily: "'Caveat', cursive", fontSize: 28, color: C.teal }}>↘</span>
          </p>

          <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Sticker bg={C.navy} rot={-3}>📍 manhattan, ny</Sticker>
            <Sticker bg={C.coral} rot={2}>citadel · quant dev</Sticker>
            <Sticker bg={C.teal} rot={-1.5}>cal '22</Sticker>
            <Sticker bg={C.ochre} fg={C.ink} rot={3}>eagle scout</Sticker>
            <Sticker bg="transparent" fg={C.ink} rot={-1} >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0 2px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.forest, animation: 'pulse-dot 2s infinite' }} />
                open to chat
              </span>
            </Sticker>
          </div>
        </div>

        {/* photo collage */}
        <div style={{ position: 'relative', height: 580, marginTop: 24 }}>
          <div style={{ position: 'absolute', top: 20, left: 80, transform: py(0.04), zIndex: 3 }}>
            <Polaroid src="assets/cover_photo.png" caption="me, in tahoe :)" rot={4} w={300}
              tapeText="tahoe '23" tapeAt="40%" tapeColor={C.paperTape} />
          </div>
          <div style={{ position: 'absolute', top: 280, left: -30, transform: py(0.08), zIndex: 2 }}>
            <Polaroid src="assets/yc_interview.jpeg" caption="yc interview!" rot={-7} w={190} padBottom={32} />
          </div>
          <div style={{ position: 'absolute', top: 320, right: 0, transform: py(0.06), zIndex: 2 }}>
            <Polaroid src="assets/presentation.jpeg" caption="pitching dewaste" rot={5} w={210} padBottom={32} />
          </div>

          {/* doodle arrow */}
          <svg viewBox="0 0 200 120" style={{ position: 'absolute', top: 220, left: 240, width: 170, height: 95, zIndex: 4 }}>
            <path d="M10 10 C 60 10, 110 60, 158 92" stroke={C.ink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 6" style={{ animation: 'pn-dash 1.5s linear infinite' }} />
            <path d="M148 84 L 162 96 L 144 96 Z" fill={C.ink} />
          </svg>
          <div style={{ position: 'absolute', top: 200, left: 200, fontFamily: "'Caveat', cursive", fontSize: 24, color: C.coral, transform: 'rotate(-5deg)', zIndex: 4 }}>that's me!</div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────
function About() {
  return (
    <section style={{ padding: '64px 56px', background: 'transparent' }}>
      <FadeUp>
        <SectionHeader
          anchor="about"
          kicker="📓 the longer version"
          title="A bit"
          em="about me."
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'flex-start' }}>
        <FadeUp delay={100}>
          <div style={{ fontSize: 19, lineHeight: 1.7, color: C.ink }}>
            <p style={{ margin: '0 0 18px' }}>
              I'm a <WavyLink href="https://citadel.com" color={C.navy}>quantitative developer at Citadel</WavyLink> in New York, on the index rebalance desk. The work is the right kind of hard — careful, correct, durable — and I get to learn from people who have been thinking about markets for decades.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              Before Citadel I went to <WavyLink color={C.coral}>UC Berkeley</WavyLink> for Computer Science and Data Science (class of '22), where I taught CS, did a bit of research, and spent more nights than I should have on side projects. While there I co-founded <WavyLink href="http://de-waste.com" color={C.teal}>DeWaste</WavyLink>, a Y-Combinator-grant-funded startup working on food waste in dining institutions.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              Outside of work I'm an <Hi>Eagle Scout</Hi>, a big car person, and someone who enjoys building things with my hands. I keep a YouTube channel called <WavyLink href="https://youtube.com/c/Xcelerate" color={C.coral}>Xcelerate</WavyLink> where I document training for long-distance races.
            </p>
            <p style={{ margin: '0 0 18px' }}>
              If you want the short version: I write code that has to be correct, fast, and durable; the rest of the time, I run, build things, and write down what I notice.
            </p>
            <p style={{ margin: '24px 0 0', fontFamily: "'Caveat', cursive", fontSize: 30, color: C.navy, transform: 'rotate(-1deg)', display: 'inline-block' }}>
              — Paran
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <div style={{ position: 'relative' }}>
            <Polaroid src="assets/dewaste_fixing.jpeg" caption="fixing a dewaste sensor, '21" rot={-3} w={'100%'} padBottom={36}
              tapeText="dewaste lab" tapeColor={C.paperTape} tapeAt="38%" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── NOW ────────────────────────────────────────────────────────
function Now() {
  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="now"
          kicker="🌱 right now"
          kickerColor={C.teal}
          title="Now."
          em=""
          subtitle="A snapshot of what I'm working on, training for, and reading this month. Updated when something changes."
          right={<>updated may '26 →<br/>manhattan · 11:24 am</>}
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
        {P.now.map((n, i) => {
          const rots = [-1.2, 1.5, -0.8, 1.2, -1.5];
          const colors = [C.navy, C.coral, C.teal, C.forest, C.ochre];
          return (
            <FadeUp key={i} delay={i * 80}>
              <div style={{
                background: C.paper, padding: 20,
                border: `1px solid ${C.ruleSoft}`,
                transform: `rotate(${rots[i]}deg)`,
                boxShadow: '0 8px 18px rgba(13,33,42,.08)',
                transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s',
                cursor: 'default',
                minHeight: 180,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 28px rgba(13,33,42,.14)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rots[i]}deg)`; e.currentTarget.style.boxShadow = '0 8px 18px rgba(13,33,42,.08)'; }}
              >
                <div style={{
                  fontFamily: "'Caveat', cursive", fontSize: 24,
                  color: colors[i], lineHeight: 1, marginBottom: 8,
                }}>{n.label.toLowerCase()}</div>
                <div style={{ fontSize: 15, lineHeight: 1.45, color: C.ink }}>
                  {n.text}
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────
function Projects() {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? P.projects : P.projects.slice(0, 6);

  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="projects"
          kicker="📓 a little scrapbook of"
          kickerColor={C.coral}
          title="things I've"
          em="made."
          subtitle="A selection. Some shipped, some never did, some are still running. All taught me something."
          right={<><span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12 }}>{P.projects.length}</span> total →</>}
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {visible.map((proj, i) => {
          const rots = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.4, -2.2, 2.0, -1.3, 2.6, -2.0, 1.0, -1.6, 2.2];
          const tapeColors = [C.paperTape, C.coral + 'cc', C.navy + '88', C.teal + 'aa', C.ochre + 'cc', C.forest + 'aa'];
          const rot = rots[i % rots.length];
          return (
            <FadeUp key={i} delay={(i % 3) * 80}>
              <a href={proj.url || '#'} target={proj.url && proj.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  background: C.paper, padding: 14, paddingBottom: 18,
                  transform: `rotate(${rot}deg)`,
                  boxShadow: '0 14px 26px rgba(13,33,42,.12), 0 2px 4px rgba(13,33,42,.06)',
                  position: 'relative',
                  transition: 'transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 44px rgba(13,33,42,.18)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rot}deg)`; e.currentTarget.style.boxShadow = '0 14px 26px rgba(13,33,42,.12), 0 2px 4px rgba(13,33,42,.06)'; }}
                >
                  <Tape rot={-4} top={-10} left="30%" color={tapeColors[i % tapeColors.length]}>{proj.year}</Tape>
                  <div style={{ aspectRatio: '4/3', background: C.bg, overflow: 'hidden', marginBottom: 12 }}>
                    <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.01em', color: C.ink }}>
                    {proj.title}
                  </div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.coral, marginTop: 2 }}>
                    {proj.role}
                  </div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.5, color: C.inkSoft, margin: '10px 0 12px' }}>
                    {proj.text}
                  </p>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {proj.tags.map((t, j) => (
                      <span key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, padding: '2px 7px', border: `1px solid ${C.rule}`, borderRadius: 4, color: C.inkSoft }}>#{t.toLowerCase()}</span>
                    ))}
                  </div>
                </div>
              </a>
            </FadeUp>
          );
        })}
      </div>

      {/* Expand toggle */}
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <ExpandButton expanded={expanded} setExpanded={setExpanded}
          collapsedLabel={`show all ${P.projects.length} projects ↓`}
          expandedLabel={`show fewer ↑`}
        />
      </div>
    </section>
  );
}

// ─── WORK ──────────────────────────────────────────────────────
function Work() {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? P.work : P.work.slice(0, 4);
  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="work"
          kicker="👔 places i've worked"
          kickerColor={C.navy}
          title="The"
          em="c.v."
          subtitle="In order, most recent first. The résumé page has more detail if you need it."
          right={<>{P.work.length} stops →</>}
        />
      </FadeUp>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {visible.map((w, i) => (
          <FadeUp key={i} delay={(i % 3) * 60}>
            <a href={w.url || '#'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{
                background: C.paper, padding: '16px 22px',
                border: `1px solid ${C.ruleSoft}`, borderRadius: 4,
                display: 'grid', gridTemplateColumns: '52px 1.5fr 1.3fr 2.4fr 130px',
                gap: 18, alignItems: 'center',
                transition: 'transform .3s, box-shadow .3s, background .3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 8px 18px rgba(13,33,42,.1)'; e.currentTarget.style.background = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = C.paper; }}
              >
                <div style={{ width: 48, height: 48, background: C.bg, overflow: 'hidden', borderRadius: 6, display: 'grid', placeItems: 'center', padding: 4 }}>
                  <img src={w.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                    {w.co}
                    {i === 0 && (
                      <span style={{
                        marginLeft: 10, padding: '2px 8px', borderRadius: 999,
                        background: C.forest + '22', color: C.forest,
                        fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 600,
                        verticalAlign: 'middle', letterSpacing: '.05em', textTransform: 'uppercase',
                      }}>● now</span>
                    )}
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.inkDim, marginTop: 2 }}>{w.loc}</div>
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral }}>{w.role}</div>
                <div style={{ fontSize: 14, lineHeight: 1.45, color: C.inkSoft }}>{w.note}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.inkSoft, textAlign: 'right' }}>{w.years}</div>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <ExpandButton expanded={expanded} setExpanded={setExpanded}
          collapsedLabel={`show earlier roles ↓`}
          expandedLabel={`show fewer ↑`}
        />
      </div>
    </section>
  );
}

// ─── Expand Button ─────────────────────────────────────────────
function ExpandButton({ expanded, setExpanded, collapsedLabel, expandedLabel }) {
  return (
    <button onClick={() => setExpanded(e => !e)} style={{
      background: 'transparent', border: `1.5px dashed ${C.rule}`,
      color: C.ink, fontFamily: "'Caveat', cursive", fontSize: 24,
      padding: '8px 24px', borderRadius: 999, cursor: 'pointer',
      transition: 'background .25s, border-color .25s, transform .25s',
      display: 'inline-flex', alignItems: 'center', gap: 8,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.background = C.paperTape + '55'; e.currentTarget.style.borderColor = C.coral; e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = C.rule; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {expanded ? expandedLabel : collapsedLabel}
    </button>
  );
}

Object.assign(window, { Nav, Hero, About, Now, Projects, Work, ExpandButton });
})();
