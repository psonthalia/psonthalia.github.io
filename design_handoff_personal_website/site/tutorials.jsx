// Tutorials & writeups page.
// Same scrapbook aesthetic as the home page; reuses theme.jsx components.

(function() {
const C = window.SiteC;
const { Sticker, Tape, Polaroid, SectionHeader, DoodleArrow, WavyLink, Hi, FadeUp } = window;

// Tutorial archive — content from the original tutorials.html, lightly re-described.
const TUTORIALS = [
  {
    id: 'react',
    title: 'Building your game with ReactJS',
    blurb: "A space-shooter game, built end-to-end with React. The tutorial was meant to introduce middle- and high-schoolers to component thinking through something that moves and beeps. JSX, state, a tiny game loop.",
    img: 'assets/reactjs.png',
    file: 'dist/tutorials/react_js_tutorial.zip',
    size: '~ 8 MB',
    audience: 'middle / high school',
    tags: ['React', 'JavaScript', 'Game'],
    year: '2018',
    accent: C.coral,
  },
  {
    id: 'ios-swift',
    title: 'Your first iOS game in Swift',
    blurb: "Build a small iOS game in Swift you can sideload onto your own phone and show your friends. SpriteKit, gestures, simple physics. Written when Swift felt new.",
    img: 'assets/xcode.png',
    file: 'dist/tutorials/ios_swift_tutorial.zip',
    size: '~ 14 MB',
    audience: 'high school',
    tags: ['Swift', 'iOS', 'Game'],
    year: '2017',
    accent: C.navy,
  },
  {
    id: 'ios-objc',
    title: 'Your first iOS game in Objective-C',
    blurb: "Same game, the Objective-C version. Bracket syntax, manual memory thinking, a slower path to the same iPhone home screen. Kept because some people still ask.",
    img: 'assets/xcode.png',
    file: 'dist/tutorials/ios_obj_c_tutorial.zip',
    size: '~ 13 MB',
    audience: 'high school',
    tags: ['Objective-C', 'iOS', 'Game'],
    year: '2016',
    accent: C.inkSoft,
  },
  {
    id: 'unity',
    title: 'Building your first game with Unity',
    blurb: "A full Unity intro: moving players, enemies, shooting, level transitions, and a tour of the editor. Targets iOS, Android, web, and a quick taste of VR. C# for absolute beginners.",
    img: 'assets/unity.png',
    file: 'https://github.com/psonthalia/JavaOne4Kids2017/archive/master.zip',
    external: true,
    size: '~ on GitHub',
    audience: 'high school',
    tags: ['Unity', 'C#', 'Game'],
    year: '2017',
    accent: C.teal,
  },
  {
    id: 'javascript',
    title: 'Programming for fun with JavaScript',
    blurb: "A first programming class. Variables, loops, functions, drawing shapes, animating colors. The goal was to make people feel that programming is closer to play than to math.",
    img: 'assets/javascript.png',
    file: 'dist/tutorials/javascript_tutorial.zip',
    size: '~ 4 MB',
    audience: 'beginners',
    tags: ['JavaScript', 'Intro'],
    year: '2018',
    accent: C.ochre,
  },
  {
    id: 'java',
    title: 'Introduction to Java',
    blurb: "An onboarding into Java for students who want to see what 'real' programming languages look like. Strong typing, classes, the public-static-void-main ceremony, then quickly into making things happen.",
    img: 'assets/java.png',
    file: 'dist/tutorials/java_tutorial.zip',
    size: '~ 5 MB',
    audience: 'beginners',
    tags: ['Java', 'Intro'],
    year: '2017',
    accent: C.forest,
  },
];

// ─── NAV (slimmer than home nav) ──────────────────────────────
function TutorialsNav() {
  return (
    <nav style={{
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
        <span style={{
          color: C.navy, fontWeight: 600,
          position: 'relative', padding: '4px 0',
        }}>
          tutorials
          <span style={{
            position: 'absolute', bottom: -2, left: 0, right: 0, height: 2,
            background: C.coral, borderRadius: 2,
          }} />
        </span>
        <a href="Personal Website.html#contact" style={{ color: C.inkSoft, textDecoration: 'none' }}>contact</a>
      </div>

      <a href="Personal Website.html" style={{
        padding: '7px 16px', background: 'transparent', color: C.ink,
        border: `1.5px dashed ${C.rule}`,
        borderRadius: 20, fontFamily: "'Caveat', cursive", fontSize: 18,
        transform: 'rotate(-2deg)', textDecoration: 'none',
        display: 'inline-block',
        transition: 'transform .25s, background .25s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-2deg) translateY(-2px)'; e.currentTarget.style.background = C.paperTape + '55'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-2deg)'; e.currentTarget.style.background = 'transparent'; }}
      >← back home</a>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────
function TutorialsHero() {
  return (
    <section style={{ padding: '72px 56px 32px', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'flex-start' }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: "'Caveat', cursive", fontSize: 30,
            color: C.coral, transform: 'rotate(-2deg)',
            marginBottom: 12, display: 'inline-block',
          }}>
            📚 from the archives —
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 152, lineHeight: 0.9, letterSpacing: '-0.025em',
            margin: 0, color: C.ink,
          }}>
            Tutorials<br/>
            <span style={{ fontStyle: 'italic', color: C.navy }}>&amp; writeups</span>
            <span style={{ color: C.coral }}>.</span>
          </h1>

          <p style={{
            marginTop: 36, fontSize: 19, lineHeight: 1.6, maxWidth: 620, color: C.ink,
          }}>
            Between 2016 and 2018 I taught a lot of high-schoolers how to program — at <Hi>JavaOne4Kids</Hi>, through the <Hi color={C.coral + '55'}>MangoApps summer program</Hi>, and as a tutor in my own neighborhood. These are the writeups that came out of those classes.
          </p>
          <p style={{ marginTop: 14, fontSize: 17, lineHeight: 1.6, maxWidth: 620, color: C.inkSoft, fontStyle: 'italic' }}>
            They're frozen in time — Swift was new, Objective-C was still around, React felt like a fad — but the fundamentals haven't moved much. Download what you like; everything is free.
          </p>

          <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <Sticker bg={C.navy} rot={-2}>6 tutorials</Sticker>
            <Sticker bg={C.coral} rot={2}>2016 — 2018</Sticker>
            <Sticker bg={C.teal} rot={-1.5}>middle &amp; high school</Sticker>
            <Sticker bg={C.ochre} fg={C.ink} rot={3}>free to download</Sticker>
          </div>
        </div>

        {/* Right column — a little context note pinned up */}
        <div style={{ position: 'relative', paddingTop: 24 }}>
          <div style={{
            background: C.paper, padding: 22,
            border: `1px solid ${C.ruleSoft}`,
            transform: 'rotate(1.4deg)',
            boxShadow: '0 14px 28px rgba(13,33,42,.1)',
            position: 'relative',
          }}>
            <Tape rot={-5} top={-12} left="34%" color={C.paperTape}>note to reader</Tape>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: C.navy, transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: 6 }}>
              quick context
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: C.ink, margin: 0 }}>
              These tutorials were written for kids ages 10–18 over a few summers — most around <Hi>2017</Hi>. The screenshots will look old. The Xcode and Unity versions referenced in them <em>are</em> old.
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, color: C.ink, marginTop: 10, marginBottom: 0 }}>
              I keep them online because students still occasionally ask, and because some of my own first lessons in <em>how to explain a thing</em> came from writing them.
            </p>
            <div style={{ marginTop: 14, fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral, textAlign: 'right' }}>
              — paran
            </div>
          </div>

          {/* small floating polaroid of the JavaOne4Kids tutoring */}
          <div style={{ position: 'absolute', bottom: -90, right: -10, transform: 'rotate(-6deg)', width: 180, zIndex: 2 }}>
            <Polaroid src="assets/codeone.png" caption="javaone4kids, '17" rot={0} w={180} padBottom={30} />
          </div>
        </div>
      </div>

      {/* doodle arrow & scribble */}
      <div style={{ marginTop: 120, position: 'relative' }}>
        <svg viewBox="0 0 200 80" style={{ width: 160, height: 64, transform: 'rotate(2deg)' }}>
          <path d="M5 40 C 60 5, 120 75, 180 30" stroke={C.ink} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 6" style={{ animation: 'pn-dash 1.5s linear infinite' }} />
          <path d="M172 22 L 182 30 L 170 38 Z" fill={C.ink} />
        </svg>
        <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral, position: 'absolute', top: -6, left: 180, transform: 'rotate(-4deg)' }}>
          take what's useful
        </span>
      </div>
    </section>
  );
}

// ─── TUTORIAL CARD ────────────────────────────────────────────
function TutorialCard({ t, i }) {
  const rots = [-2.5, 1.8, -1.2, 2.0, -1.8, 1.4];
  const tapeColors = [C.paperTape, C.coral + 'cc', C.teal + 'aa', C.ochre + 'cc', C.navy + '88', C.forest + 'aa'];
  const rot = rots[i % rots.length];
  return (
    <FadeUp delay={(i % 3) * 80}>
      <div style={{
        background: C.paper, padding: 18, paddingBottom: 22,
        transform: `rotate(${rot}deg)`,
        boxShadow: '0 14px 26px rgba(13,33,42,.12), 0 2px 4px rgba(13,33,42,.06)',
        position: 'relative',
        transition: 'transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s',
        height: '100%',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 44px rgba(13,33,42,.18)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rot}deg)`; e.currentTarget.style.boxShadow = '0 14px 26px rgba(13,33,42,.12), 0 2px 4px rgba(13,33,42,.06)'; }}
      >
        <Tape rot={-4} top={-10} left="32%" color={tapeColors[i % tapeColors.length]}>{t.year}</Tape>

        {/* language logo + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{
            width: 64, height: 64, background: C.bg, padding: 10,
            display: 'grid', placeItems: 'center', flexShrink: 0,
            border: `1px solid ${C.ruleSoft}`,
          }}>
            <img src={t.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: t.accent, lineHeight: 1, marginBottom: 4 }}>
              for {t.audience}
            </div>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {t.tags.map((tag, j) => (
                <span key={j} style={{
                  fontFamily: "'DM Mono', monospace", fontSize: 10,
                  padding: '2px 7px', border: `1px solid ${C.rule}`, borderRadius: 4,
                  color: C.inkSoft,
                }}>#{tag.toLowerCase()}</span>
              ))}
            </div>
          </div>
        </div>

        <h3 style={{
          fontFamily: "'Instrument Serif', serif", fontSize: 28, fontWeight: 400,
          lineHeight: 1.05, letterSpacing: '-0.015em', margin: 0, color: C.ink,
        }}>
          {t.title}
        </h3>

        <p style={{ fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: '10px 0 16px', flex: 1 }}>
          {t.blurb}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px dashed ${C.rule}`, paddingTop: 12 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.inkDim }}>
            {t.size}
          </div>
          <a href={t.file} target={t.external ? '_blank' : undefined} rel="noopener noreferrer" download={!t.external} style={{
            background: t.accent, color: C.paper,
            padding: '7px 16px', borderRadius: 999,
            fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 500,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6,
            transition: 'transform .2s, box-shadow .2s',
            boxShadow: '0 4px 8px rgba(13,33,42,.12)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 14px rgba(13,33,42,.18)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(13,33,42,.12)'; }}
          >
            {t.external ? 'on github' : 'download zip'} ↓
          </a>
        </div>
      </div>
    </FadeUp>
  );
}

// ─── GRID ─────────────────────────────────────────────────────
function TutorialsGrid() {
  return (
    <section style={{ padding: '72px 56px 32px' }}>
      <FadeUp>
        <SectionHeader
          kicker="📦 six packages, hand-rolled"
          kickerColor={C.coral}
          title="The"
          em="archive."
          subtitle="Pick a language and download the zip. Each one is self-contained — a step-by-step PDF or markdown writeup, plus example code for the student to start from."
          right={<>{TUTORIALS.length} total<br/>~ 50 MB combined</>}
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
        {TUTORIALS.map((t, i) => <TutorialCard t={t} i={i} key={t.id} />)}
      </div>
    </section>
  );
}

// ─── HOW TO USE strip ─────────────────────────────────────────
function HowToUse() {
  return (
    <section style={{ padding: '72px 56px 56px' }}>
      <div style={{
        background: C.paper, padding: '28px 36px',
        border: `1px solid ${C.ruleSoft}`,
        position: 'relative',
        transform: 'rotate(-0.4deg)',
        boxShadow: '0 12px 24px rgba(13,33,42,.08)',
      }}>
        <Tape rot={-3} top={-12} left="3%" color={C.paperTape}>how to use these</Tape>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {[
            { n: '01', label: 'download', text: "Click any of the cards above. Each is a small zip with the writeup, slides, and starter code." },
            { n: '02', label: 'unzip & read', text: "Start with the README or the PDF inside. Most run between 60 and 90 minutes if you go straight through." },
            { n: '03', label: 'tinker', text: "The fun part. Change colors, break things, add your own ideas. That's what these were always for." },
          ].map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontSize: 56, fontWeight: 400,
                color: [C.navy, C.coral, C.teal][i], lineHeight: 1, fontStyle: 'italic',
              }}>{s.n}.</div>
              <div style={{
                fontFamily: "'Caveat', cursive", fontSize: 22, color: C.ink,
                marginTop: 2, marginBottom: 6,
              }}>{s.label}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: 0 }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BACK CTA + FOOTER ────────────────────────────────────────
function TutorialsFooterCTA() {
  return (
    <section style={{ padding: '0 56px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <a href="Personal Website.html#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            background: C.ink, color: C.paper, padding: '24px 28px',
            borderRadius: 6, transform: 'rotate(-0.8deg)',
            boxShadow: '0 12px 24px rgba(13,33,42,.18)',
            transition: 'transform .35s',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-0.8deg)'}
          >
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.ochre }}>🐛 found a typo?</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, lineHeight: 1.05, marginTop: 2 }}>
                Let me know.
              </div>
              <div style={{ fontSize: 13, marginTop: 6, opacity: .8 }}>
                I'll fix it. These deserve to age gracefully.
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 24 }}>→</div>
          </div>
        </a>

        <a href="Personal Website.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            background: C.coral, color: C.paper, padding: '24px 28px',
            borderRadius: 6, transform: 'rotate(1.2deg)',
            boxShadow: '0 12px 24px rgba(13,33,42,.18)',
            transition: 'transform .35s',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1.2deg)'}
          >
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.paperTape }}>↶ back to the rest</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, lineHeight: 1.05, marginTop: 2 }}>
                Return home
              </div>
              <div style={{ fontSize: 13, marginTop: 6, opacity: .9 }}>
                Projects, work, race log, the usual.
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 24 }}>↗</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function TutorialsFooter() {
  return (
    <footer style={{
      background: C.navy, color: C.paper,
      padding: '20px 56px',
      fontFamily: "'Caveat', cursive", fontSize: 22,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transform: 'rotate(-0.3deg)', marginBottom: -4, marginLeft: -4, marginRight: -4,
    }}>
      <span>happy hacking ♡</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, opacity: .8, letterSpacing: '.08em' }}>
        © PARAN SONTHALIA · MANHATTAN, NY · 2026
      </span>
      <span>now, back to the editor →</span>
    </footer>
  );
}

// ─── PAGE COMPOSER ────────────────────────────────────────────
function TutorialsPage() {
  return (
    <>
      <TutorialsHero />
      <TutorialsGrid />
      <HowToUse />
      <TutorialsFooterCTA />
      <TutorialsFooter />
    </>
  );
}

Object.assign(window, { TutorialsNav, TutorialsPage });
})();
