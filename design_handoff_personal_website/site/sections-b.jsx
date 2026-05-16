// Section components for the personal site — part B.
// Xcelerate (w/ race log), Press, Volunteer, Tutorials, Contact, Footer.

(function() {
const _C = window.SiteC;
const _P = window.PARAN;
const { Sticker, Tape, Polaroid, SectionHeader, DoodleArrow, WavyLink, Hi, FadeUp, ExpandButton } = window;

// ─── XCELERATE (running channel) — race log lives here ─────────
function Xcelerate() {
  return (
    <section style={{
      padding: '40px 56px 80px',
      background: `linear-gradient(180deg, transparent, ${_C.navy}06 50%, transparent)`,
      position: 'relative',
    }}>
      <FadeUp>
        <SectionHeader
          anchor="xcelerate"
          kicker="🏃 running, biking, training for"
          kickerColor={_C.forest}
          title="Xcelerate"
          em="— the channel."
          subtitle={<>I keep a YouTube channel called <em>Xcelerate</em> where I document training for endurance events. It's long-form, mostly un-edited, and meant for people who like watching someone else suffer up a hill.</>}
          right={<>youtube.com/<br/>Xcelerate →</>}
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'flex-start' }}>
        {/* Left — YouTube card */}
        <FadeUp>
          <a href="https://www.youtube.com/Xcelerate" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{
              background: _C.paper, padding: 14, paddingBottom: 18,
              transform: 'rotate(-1.2deg)',
              boxShadow: '0 16px 32px rgba(13,33,42,.14), 0 2px 6px rgba(13,33,42,.06)',
              position: 'relative',
              transition: 'transform .35s, box-shadow .35s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'; e.currentTarget.style.boxShadow = '0 28px 48px rgba(13,33,42,.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-1.2deg)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(13,33,42,.14), 0 2px 6px rgba(13,33,42,.06)'; }}
            >
              <Tape rot={-3} top={-12} left="36%" color={_C.coral + 'cc'}>youtube</Tape>
              <div style={{
                aspectRatio: '16/9', background: _C.ink, overflow: 'hidden',
                marginBottom: 14, position: 'relative',
              }}>
                <img src="assets/xcelerate.png" alt="Xcelerate" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .9 }} />
                {/* play button */}
                <div style={{
                  position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
                }}>
                  <div style={{
                    width: 76, height: 76, borderRadius: '50%',
                    background: _C.coral, color: _C.paper,
                    display: 'grid', placeItems: 'center',
                    fontSize: 30, paddingLeft: 6,
                    boxShadow: '0 8px 16px rgba(0,0,0,.3)',
                  }}>▶</div>
                </div>
                {/* corner tag */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: '#ff0000', color: '#fff',
                  fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 700,
                  padding: '3px 8px', letterSpacing: '.1em',
                }}>● LIVE-ISH</div>
              </div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                Xcelerate
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: _C.coral, marginTop: 2 }}>
                training logs, race recaps, occasional thoughts
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: _C.inkSoft, margin: '10px 0 0' }}>
                Started in 2020 as a way to keep myself accountable. Still going. <span style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: _C.navy }}>subscribe →</span>
              </p>
            </div>
          </a>
        </FadeUp>

        {/* Right — distance ledger (fitness integration, tasteful) */}
        <FadeUp delay={120}>
          <div style={{
            background: _C.paper, padding: '22px 26px',
            border: `1px solid ${_C.ruleSoft}`,
            position: 'relative',
            transform: 'rotate(0.6deg)',
            boxShadow: '0 10px 22px rgba(13,33,42,.08)',
          }}>
            <Tape rot={-4} top={-10} left="auto" color={_C.paperTape}>distance log</Tape>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, color: _C.navy, transform: 'rotate(-1deg)', display: 'inline-block', marginBottom: 4 }}>
              races, finished.
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: _C.inkDim, letterSpacing: '.08em', marginBottom: 14, textTransform: 'uppercase' }}>
              kept here mostly for the math
            </div>

            <table style={{ width: '100%', fontSize: 15, borderCollapse: 'collapse' }}>
              <tbody>
                {_P.races.map((r, i) => (
                  <tr key={i} style={{ borderBottom: i < _P.races.length - 1 ? `1px dashed ${_C.rule}` : 'none' }}>
                    <td style={{
                      padding: '8px 0',
                      fontFamily: "'Instrument Serif', serif", fontSize: 19, lineHeight: 1.15,
                      color: _C.ink, whiteSpace: 'nowrap',
                    }}>
                      <span style={{ color: _C.coral, fontFamily: "'Caveat', cursive", fontSize: 22, marginRight: 8 }}>·</span>
                      {r.event}
                    </td>
                    <td style={{
                      padding: '8px 12px',
                      fontFamily: "'Caveat', cursive", fontSize: 18,
                      color: _C.inkSoft,
                    }}>
                      {r.where}
                    </td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontFamily: "'DM Mono', monospace", fontSize: 12, color: _C.navy, whiteSpace: 'nowrap', fontWeight: 600 }}>
                      {r.dist} mi
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.5, color: _C.inkSoft, fontStyle: 'italic' }}>
              Numbers, not medals. The channel is mostly about the part between sign-up and finish line.
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── PRESS ────────────────────────────────────────────────────
function Press() {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? _P.press : _P.press.slice(0, 6);
  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="press"
          kicker="📰 in case anyone's interested"
          kickerColor={_C.teal}
          title="Some kind"
          em="words."
          subtitle="Mostly about DeWaste, mostly from when we were college students figuring it out. Linked for the curious."
          right={<>{_P.press.length} mentions</>}
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {visible.map((pr, i) => (
          <FadeUp key={i} delay={(i % 3) * 60}>
            <a href={pr.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div style={{
                background: _C.paper, padding: '14px 18px',
                border: `1px solid ${_C.ruleSoft}`,
                display: 'flex', gap: 14, alignItems: 'center',
                height: '100%',
                transition: 'transform .25s, box-shadow .25s, background .25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 22px rgba(13,33,42,.1)'; e.currentTarget.style.background = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = _C.paper; }}
              >
                <div style={{ width: 56, height: 56, background: _C.bg, overflow: 'hidden', flexShrink: 0, display: 'grid', placeItems: 'center', padding: 6 }}>
                  <img src={pr.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: _C.coral, lineHeight: 1, marginBottom: 2 }}>
                    {pr.src}
                  </div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 16, lineHeight: 1.25, color: _C.ink }}>
                    {pr.title}
                  </div>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: _C.inkDim, flexShrink: 0 }}>↗</div>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <ExpandButton expanded={expanded} setExpanded={setExpanded}
          collapsedLabel={`show ${_P.press.length - 6} more mentions ↓`}
          expandedLabel={`show fewer ↑`}
        />
      </div>
    </section>
  );
}

// ─── VOLUNTEER ────────────────────────────────────────────────
function Volunteer() {
  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="volunteer"
          kicker="🤝 paying it back"
          kickerColor={_C.coral}
          title="Volunteer"
          em="work."
          subtitle="Hackathons I helped run, students I helped teach. The kinds of things that don't go on a résumé but were important to me."
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
        {_P.volunteer.map((v, i) => {
          const rots = [-2, 1.5, -1, 2];
          const stripe = [_C.navy, _C.coral, _C.teal, _C.ochre];
          return (
            <FadeUp key={i} delay={i * 80}>
              <a href={v.url || '#'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div style={{
                  background: _C.paper, padding: 16, paddingBottom: 20,
                  transform: `rotate(${rots[i]}deg)`,
                  boxShadow: '0 12px 22px rgba(13,33,42,.1), 0 2px 4px rgba(13,33,42,.06)',
                  position: 'relative', borderTop: `4px solid ${stripe[i]}`,
                  transition: 'transform .35s, box-shadow .35s',
                  height: '100%',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'; e.currentTarget.style.boxShadow = '0 22px 36px rgba(13,33,42,.16)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rots[i]}deg)`; e.currentTarget.style.boxShadow = '0 12px 22px rgba(13,33,42,.1), 0 2px 4px rgba(13,33,42,.06)'; }}
                >
                  <div style={{ width: 64, height: 64, background: _C.bg, overflow: 'hidden', marginBottom: 12, padding: 8, display: 'grid', placeItems: 'center' }}>
                    <img src={v.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{v.co}</div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: stripe[i], marginTop: 2 }}>{v.role}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: _C.inkSoft, margin: '10px 0 0' }}>{v.note}</p>
                </div>
              </a>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

// ─── TUTORIALS / RESOURCES strip ──────────────────────────────
function Tutorials() {
  return (
    <section style={{ padding: '40px 56px 60px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <FadeUp>
          <a href="Tutorials.html" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{
              background: _C.ink, color: _C.paper, padding: '28px 32px',
              borderRadius: 6, transform: 'rotate(-0.8deg)',
              boxShadow: '0 12px 24px rgba(13,33,42,.18)',
              transition: 'transform .35s',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-0.8deg)'}
            >
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: _C.ochre }}>📚 things i've written</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, lineHeight: 1.05, marginTop: 4 }}>
                  Tutorials &amp; writeups
                </div>
                <div style={{ fontSize: 14, marginTop: 8, opacity: .8 }}>
                  Walkthroughs from when I was teaching CS at Berkeley and earlier.
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28 }}>↗</div>
            </div>
          </a>
        </FadeUp>

        <FadeUp delay={100}>
          <a href="Resume.html" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{
              background: _C.coral, color: _C.paper, padding: '28px 32px',
              borderRadius: 6, transform: 'rotate(1.2deg)',
              boxShadow: '0 12px 24px rgba(13,33,42,.18)',
              transition: 'transform .35s',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1.2deg)'}
            >
              <div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: _C.paperTape }}>📄 the formal version</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, lineHeight: 1.05, marginTop: 4 }}>
                  Résumé
                </div>
                <div style={{ fontSize: 14, marginTop: 8, opacity: .9 }}>
                  PDF + HTML. The recruiter-friendly summary of everything on this page.
                </div>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 28 }}>↗</div>
            </div>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────
function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) return;
    // hand off to default mail client
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
    const subject = encodeURIComponent(`Note from ${name} via paransonthalia.com`);
    window.location.href = `mailto:${_P.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section style={{ padding: '40px 56px 80px' }}>
      <FadeUp>
        <SectionHeader
          anchor="contact"
          kicker="📬 write to me"
          kickerColor={_C.coral}
          title="Get in"
          em="touch."
          subtitle="I read everything that lands in this inbox. Reply rate: pretty good. I like hearing about: interesting problems, running routes in the northeast, weird hardware ideas."
        />
      </FadeUp>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'flex-start' }}>
        <FadeUp>
          <form onSubmit={onSubmit} style={{
            background: _C.paper, padding: 24,
            border: `1px solid ${_C.ruleSoft}`,
            boxShadow: '0 10px 22px rgba(13,33,42,.08)',
            transform: 'rotate(-0.4deg)',
          }}>
            <Tape rot={-3} top={-12} left="36%" color={_C.paperTape}>say hi!</Tape>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
              <InputField label="your name" value={name} onChange={setName} />
              <InputField label="your email" value={email} onChange={setEmail} type="email" />
            </div>
            <div style={{ marginTop: 14 }}>
              <InputField label="what's on your mind?" value={msg} onChange={setMsg} multiline />
            </div>
            <button type="submit" disabled={sent} style={{
              marginTop: 18,
              background: sent ? _C.forest : _C.ink, color: _C.paper, border: 'none',
              padding: '12px 28px', borderRadius: 999,
              fontFamily: "'Caveat', cursive", fontSize: 22,
              cursor: sent ? 'default' : 'pointer',
              transform: 'rotate(-1.5deg)',
              boxShadow: '0 4px 8px rgba(13,33,42,.18)',
              transition: 'transform .25s, background .3s',
            }}
            onMouseEnter={(e) => !sent && (e.currentTarget.style.transform = 'rotate(-1.5deg) translateY(-2px)')}
            onMouseLeave={(e) => !sent && (e.currentTarget.style.transform = 'rotate(-1.5deg)')}
            >
              {sent ? '✓ off it goes!' : 'send it →'}
            </button>
          </form>
        </FadeUp>

        <FadeUp delay={120}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{
              background: _C.ink, color: _C.paper,
              padding: '20px 24px', borderRadius: 6,
              transform: 'rotate(0.8deg)',
              boxShadow: '0 10px 22px rgba(13,33,42,.18)',
            }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: _C.ochre }}>📬 direct line</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, marginTop: 6, wordBreak: 'break-all' }}>{_P.email}</div>
              <div style={{ fontSize: 13, marginTop: 8, opacity: .8 }}>I read everything that comes through here.</div>
            </div>

            <div style={{ background: _C.paper, padding: 18, border: `1px solid ${_C.ruleSoft}`, transform: 'rotate(-0.6deg)' }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: _C.navy, marginBottom: 6 }}>elsewhere on the internet</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontFamily: "'DM Mono', monospace", fontSize: 13 }}>
                {_P.socials.filter(s => s.name !== 'Email').map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: _C.ink, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: i < 3 ? `1px dashed ${_C.rule}` : 'none' }}>
                    <span style={{ color: _C.inkSoft }}>{s.name.toLowerCase()}</span>
                    <span style={{ color: _C.navy }}>{s.handle}  ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function InputField({ label, value, onChange, multiline, type = 'text' }) {
  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: _C.coral, marginBottom: 4 }}>{label}</div>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={5} style={{
          width: '100%', padding: '10px 12px',
          background: '#ffffff', border: `1.5px solid ${_C.rule}`, borderRadius: 4,
          fontFamily: "'Inter', sans-serif", fontSize: 14, color: _C.ink,
          resize: 'vertical', outline: 'none',
        }} onFocus={(e) => e.target.style.borderColor = _C.navy} onBlur={(e) => e.target.style.borderColor = _C.rule} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} style={{
          width: '100%', padding: '10px 12px',
          background: '#ffffff', border: `1.5px solid ${_C.rule}`, borderRadius: 4,
          fontFamily: "'Inter', sans-serif", fontSize: 14, color: _C.ink,
          outline: 'none',
        }} onFocus={(e) => e.target.style.borderColor = _C.navy} onBlur={(e) => e.target.style.borderColor = _C.rule} />
      )}
    </label>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: _C.navy, color: _C.paper,
      padding: '24px 56px',
      fontFamily: "'Caveat', cursive", fontSize: 22,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transform: 'rotate(-0.3deg)', marginBottom: -4, marginLeft: -4, marginRight: -4,
    }}>
      <span>thanks for stopping by ♡</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, opacity: .8, letterSpacing: '.08em' }}>
        © PARAN SONTHALIA · MANHATTAN, NY · 2026 · MADE BY HAND
      </span>
      <span>now, back to running →</span>
    </footer>
  );
}

Object.assign(window, { Xcelerate, Press, Volunteer, Tutorials, Contact, Footer });
})();
