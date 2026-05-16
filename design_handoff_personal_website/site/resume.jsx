// Résumé page — proper HTML resume in the scrapbook aesthetic.
// Print-friendly: hides chrome, removes rotations, single-column tight layout.

(function() {
const C = window.SiteC;
const P = window.PARAN;
const { Sticker, Tape, SectionHeader, WavyLink, Hi, FadeUp } = window;

// Resume-specific bullets per work entry. Keeps data.jsx clean.
const WORK_BULLETS = {
  'Citadel|Quantitative Developer': [
    "Quant developer on the Index Rebalance desk — equities team executing systematic rebalances of major equity indices.",
    "Own production trading systems; write code that runs in critical hot paths during open and close.",
    "Built tooling for desk analytics, post-trade attribution, and pre-trade scenario modeling.",
  ],
  'Citadel|SWE Intern': [
    "Added persistent-disk functionality to Citadel's internal Kubernetes engine.",
    "Worked with infrastructure team on operator extensions and reliability tests.",
  ],
  'Amazon|SWE Intern': [
    "Automated analysis of device-connectivity data across the Echo fleet.",
    "Reduced redundant customer-service contacts by surfacing self-heal hints earlier in the flow.",
  ],
  'DeWaste|Co-founder, CEO': [
    "Co-founded a startup tackling post-consumer food waste in dining institutions.",
    "Designed and shipped IoT hardware (camera + load cells) plus the web dashboard customers used.",
    "Y Combinator Startup School grant recipient (2019). Pitched to and worked with dining services at multiple universities.",
    "Hired and managed a small team; ran sales, hardware, software, and fundraising.",
  ],
  'Pivotal|SWE Intern': [
    "On the Release Engineering team; automated portions of the shipping pipeline for a new release.",
    "Wrote tooling that's still in use for build-promotion gating.",
  ],
  'MangoApps|Founder, summer programs': [
    "Ran a summer internship program for high-school engineers; built a team of 4–6 students each year.",
    "We shipped a new app or tool every summer — game, tutoring marketplace, school directory, social.",
  ],
  'LeanData|SWE Intern': [
    "Designed and developed multiple new capabilities on LeanData's lead-routing product.",
    "First professional dev role; learned to read a large existing codebase.",
  ],
};

const SKILLS = [
  { group: "Languages", items: ["C++", "Python", "Go", "JavaScript / TypeScript", "Swift", "Java", "SQL"] },
  { group: "Systems",   items: ["Low-latency design", "Distributed systems", "Kubernetes", "Linux"] },
  { group: "Markets",   items: ["Equities index trading", "Rebalance mechanics", "Post-trade analytics"] },
  { group: "Frontend",  items: ["React", "Next.js", "HTML/CSS"] },
  { group: "Hardware",  items: ["Embedded prototyping", "CAD (Fusion 360)", "Soldering, harnessing"] },
];

// ─── NAV ─────────────────────────────────────────────────────
function ResumeNav() {
  return (
    <nav className="r-nav" style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: C.bg + 'e6', backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${C.ruleSoft}`,
      padding: '14px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="Personal Website.html" style={{ textDecoration: 'none', color: C.ink, display: 'flex', alignItems: 'center', gap: 12 }}>
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
        <a href="Personal Website.html" style={{ color: C.inkSoft, textDecoration: 'none' }}>home</a>
        <a href="Personal Website.html#projects" style={{ color: C.inkSoft, textDecoration: 'none' }}>projects</a>
        <a href="Personal Website.html#work" style={{ color: C.inkSoft, textDecoration: 'none' }}>work</a>
        <a href="Tutorials.html" style={{ color: C.inkSoft, textDecoration: 'none' }}>tutorials</a>
        <span style={{ color: C.navy, fontWeight: 600, position: 'relative', padding: '4px 0' }}>
          résumé
          <span style={{ position: 'absolute', bottom: -2, left: 0, right: 0, height: 2, background: C.coral, borderRadius: 2 }} />
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => window.print()} style={{
          padding: '7px 16px', background: 'transparent', color: C.ink,
          border: `1.5px dashed ${C.rule}`,
          borderRadius: 20, fontFamily: "'Caveat', cursive", fontSize: 18,
          cursor: 'pointer',
        }}>print / save as PDF</button>
        <a href="assets/Paran_Sonthalia_Resume.pdf" download style={{
          padding: '7px 16px', background: C.ink, color: C.paper,
          borderRadius: 20, fontFamily: "'Caveat', cursive", fontSize: 18,
          transform: 'rotate(-2deg)', textDecoration: 'none',
          boxShadow: '0 2px 4px rgba(13,33,42,.18)',
          display: 'inline-block',
        }}>download PDF ↓</a>
      </div>
    </nav>
  );
}

// ─── HEADER ──────────────────────────────────────────────────
function ResumeHeader() {
  return (
    <header style={{
      padding: '56px 56px 32px',
      borderBottom: `2px solid ${C.ink}`,
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: C.coral, transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: 6 }}>
            📄 the formal version —
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.025em',
            margin: 0, color: C.ink,
          }}>
            Paran <em style={{ color: C.navy }}>Sonthalia</em>
            <span style={{ color: C.coral }}>.</span>
          </h1>
          <div style={{ marginTop: 8, fontSize: 18, color: C.inkSoft, fontStyle: 'italic' }}>
            Quantitative developer · Citadel · Index Rebalance desk
          </div>
        </div>

        <div style={{ textAlign: 'right', fontFamily: "'DM Mono', monospace", fontSize: 13, color: C.inkSoft, lineHeight: 1.7 }}>
          <div><span style={{ color: C.navy }}>↗</span> <a href="https://paransonthalia.com" style={{ color: C.ink, textDecoration: 'none' }}>paransonthalia.com</a></div>
          <div><span style={{ color: C.navy }}>↗</span> <a href="https://github.com/psonthalia" style={{ color: C.ink, textDecoration: 'none' }}>github.com/psonthalia</a></div>
          <div><span style={{ color: C.navy }}>↗</span> <a href="https://www.linkedin.com/in/paran-sonthalia-9bba3285/" style={{ color: C.ink, textDecoration: 'none' }}>linkedin/paran-sonthalia</a></div>
          <div><span style={{ color: C.coral }}>✉</span> <a href={`mailto:${P.email}`} style={{ color: C.ink, textDecoration: 'none' }}>{P.email}</a></div>
          <div><span style={{ color: C.coral }}>📍</span> Manhattan, NY</div>
        </div>
      </div>

      <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, color: C.ink, maxWidth: 780 }}>
        Quantitative developer on Citadel's Index Rebalance desk. UC Berkeley '22, Computer Science and Data Science. Co-founder of <Hi>DeWaste</Hi>, a Y-Combinator-grant-funded food-waste startup. I build careful systems by day and run long distances by morning.
      </p>
    </header>
  );
}

// ─── SECTION TITLE (compact, resume-style) ───────────────────
function R({ kicker, title, children }) {
  return (
    <section style={{ padding: '32px 56px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18, borderBottom: `1px dashed ${C.rule}`, paddingBottom: 8 }}>
        {kicker && <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral, transform: 'rotate(-1deg)', display: 'inline-block' }}>{kicker}</span>}
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 38, lineHeight: 1, letterSpacing: '-0.015em', margin: 0 }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────
function Experience() {
  return (
    <R kicker="§ 01" title="Experience">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {P.work.map((w, i) => {
          const key = `${w.co}|${w.role}`;
          const bullets = WORK_BULLETS[key] || [w.note];
          return (
            <div key={i} className="r-job" style={{ pageBreakInside: 'avoid' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '44px 1fr 1fr 130px', gap: 18, alignItems: 'baseline' }}>
                <div style={{ width: 40, height: 40, background: C.paper, border: `1px solid ${C.ruleSoft}`, padding: 4, display: 'grid', placeItems: 'center' }}>
                  <img src={w.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
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
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral, lineHeight: 1 }}>{w.role}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.inkSoft, textAlign: 'right' }}>{w.years}</div>
              </div>

              <ul style={{ margin: '10px 0 0', paddingLeft: 62, listStyle: 'none' }}>
                {bullets.map((b, j) => (
                  <li key={j} style={{ position: 'relative', padding: '2px 0', fontSize: 14.5, lineHeight: 1.55, color: C.ink }}>
                    <span style={{ position: 'absolute', left: -16, top: 6, width: 6, height: 6, borderRadius: 1, background: C.coral }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </R>
  );
}

// ─── EDUCATION ───────────────────────────────────────────────
function Education() {
  return (
    <R kicker="§ 02" title="Education">
      <div className="r-job" style={{
        background: C.paper, padding: '18px 22px',
        border: `1px solid ${C.ruleSoft}`,
        display: 'grid', gridTemplateColumns: '44px 1fr 1fr 130px', gap: 18, alignItems: 'center',
      }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.navy, color: C.paper, display: 'grid', placeItems: 'center', fontFamily: "'Instrument Serif', serif", fontSize: 22, fontStyle: 'italic' }}>B</div>
        <div>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, lineHeight: 1.05 }}>UC Berkeley</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.inkDim, marginTop: 2 }}>Berkeley, CA</div>
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral }}>B.A. Computer Science &amp; Data Science</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: C.inkSoft, textAlign: 'right' }}>Class of '22</div>
      </div>
      <ul style={{ margin: '10px 0 0 62px', paddingLeft: 0, listStyle: 'none' }}>
        <li style={{ position: 'relative', padding: '2px 0', paddingLeft: 16, fontSize: 14.5, lineHeight: 1.55 }}>
          <span style={{ position: 'absolute', left: 0, top: 8, width: 6, height: 6, borderRadius: 1, background: C.coral }} />
          Taught Computer Science Mentors (CSM) sections; mentored students through intro CS courses.
        </li>
        <li style={{ position: 'relative', padding: '2px 0', paddingLeft: 16, fontSize: 14.5, lineHeight: 1.55 }}>
          <span style={{ position: 'absolute', left: 0, top: 8, width: 6, height: 6, borderRadius: 1, background: C.coral }} />
          Coursework: data structures &amp; algorithms, OS, computer architecture, machine learning, probability, optimization, statistical methods.
        </li>
      </ul>
    </R>
  );
}

// ─── SELECTED PROJECTS ───────────────────────────────────────
function SelectedProjects() {
  const featured = P.projects.slice(0, 4);
  return (
    <R kicker="§ 03" title="Selected projects">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {featured.map((proj, i) => (
          <div key={i} className="r-proj" style={{
            background: C.paper, padding: '12px 16px',
            border: `1px solid ${C.ruleSoft}`,
            display: 'flex', gap: 12, alignItems: 'flex-start',
            pageBreakInside: 'avoid',
          }}>
            <div style={{ width: 56, height: 56, background: C.bg, overflow: 'hidden', flexShrink: 0 }}>
              <img src={proj.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, lineHeight: 1.1 }}>{proj.title}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: C.inkDim }}>{proj.year}</div>
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: C.coral, lineHeight: 1, marginTop: 2 }}>{proj.role}</div>
              <p style={{ fontSize: 12.5, lineHeight: 1.45, color: C.inkSoft, margin: '6px 0 0' }}>{proj.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, fontSize: 13, color: C.inkSoft, fontStyle: 'italic' }}>
        See <WavyLink href="Personal Website.html#projects">paransonthalia.com/projects</WavyLink> for the full archive of 14+.
      </div>
    </R>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────
function Skills() {
  return (
    <R kicker="§ 04" title="Skills">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
        {SKILLS.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.navy, transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: 4 }}>
              {s.group.toLowerCase()}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {s.items.map((it, j) => (
                <li key={j} style={{ fontFamily: "'DM Mono', monospace", fontSize: 11.5, lineHeight: 1.7, color: C.ink }}>
                  <span style={{ color: C.inkDim, marginRight: 6 }}>·</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </R>
  );
}

// ─── HONORS / EXTRAS ─────────────────────────────────────────
function Extras() {
  return (
    <R kicker="§ 05" title="Honors &amp; extras">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.coral, marginBottom: 6 }}>recognition</div>
          <ul style={{ margin: 0, paddingLeft: 16, listStyle: 'none' }}>
            {[
              ['Y Combinator', 'Startup School 2019 grant recipient (DeWaste)'],
              ['Eagle Scout', 'Troop 103, Los Altos, CA'],
              ['Cal Hacks Fellowship', '5.0 cohort'],
              ['Press', '12+ writeups, mostly for DeWaste — see paransonthalia.com/press'],
            ].map(([k, v], i) => (
              <li key={i} style={{ position: 'relative', padding: '3px 0', fontSize: 14, lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: -16, top: 9, width: 6, height: 6, borderRadius: 1, background: C.coral }} />
                <strong style={{ fontWeight: 600 }}>{k}.</strong> {v}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.coral, marginBottom: 6 }}>endurance</div>
          <ul style={{ margin: 0, paddingLeft: 16, listStyle: 'none' }}>
            {P.races.map((r, i) => (
              <li key={i} style={{ position: 'relative', padding: '3px 0', fontSize: 14, lineHeight: 1.5 }}>
                <span style={{ position: 'absolute', left: -16, top: 9, width: 6, height: 6, borderRadius: 1, background: C.coral }} />
                <strong style={{ fontWeight: 600 }}>{r.event}.</strong> {r.where} — {r.dist} mi.
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 12, color: C.inkSoft, fontStyle: 'italic', marginTop: 10 }}>
            Training logs at <WavyLink href="https://youtube.com/c/Xcelerate">youtube.com/Xcelerate</WavyLink>.
          </div>
        </div>
      </div>
    </R>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
function ResumeFooter() {
  return (
    <footer className="r-footer" style={{
      background: C.navy, color: C.paper,
      padding: '20px 56px',
      fontFamily: "'Caveat', cursive", fontSize: 22,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transform: 'rotate(-0.3deg)', marginBottom: -4, marginLeft: -4, marginRight: -4,
    }}>
      <span>last updated · may '26</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, opacity: .8, letterSpacing: '.08em' }}>
        © PARAN SONTHALIA · MANHATTAN, NY · 2026 · ONE PAGE BUT IT'S A LONG PAGE
      </span>
      <span>references on request →</span>
    </footer>
  );
}

// ─── PAGE COMPOSER ───────────────────────────────────────────
function ResumePage() {
  return (
    <>
      <ResumeNav />
      <main style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }} className="r-main">
        <ResumeHeader />
        <Experience />
        <Education />
        <SelectedProjects />
        <Skills />
        <Extras />
      </main>
      <ResumeFooter />
    </>
  );
}

Object.assign(window, { ResumePage });
})();
