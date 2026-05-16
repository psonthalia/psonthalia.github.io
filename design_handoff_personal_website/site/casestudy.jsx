// Case Study — shared template + 4 page configs.
// Loaded by mtnViewArt.html, auxiliumHealth.html, minuteTutor.html, teender.html.

(function() {
const C = window.SiteC;
const { Sticker, Tape, Polaroid, SectionHeader, DoodleArrow, WavyLink, Hi, FadeUp } = window;

// ─── Data ────────────────────────────────────────────────────
const CASES = {
  mtnViewArt: {
    title: "Mountain View Art",
    tagline: "The app to find public art in Mountain View.",
    year: "2018",
    role: "Built with the City",
    icon: "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/2f3e2d89-78a2-45f3-a460-b51695f7422f-mtnViewArt.png",
    accent: '#299ba8',
    screens: [
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/c7fb4b87-8361-42fb-bcba-211069d7c253-screenshot.png",
    ],
    fallbackThumb: "assets/mtnViewArt.png",
    blurb: "Mountain View Art is a non-profit app I built with the City of Mountain View. It displays nearby public artwork on a Google map; tap any pin to see the piece, the artist, and walking directions to it.",
    story: [
      "The Mayor's office wanted a way for residents and visitors to discover the dozens of public artworks scattered around the city. The existing solution was a static PDF map — useful, but easy to forget about.",
      "I built it as a Swift iOS app. The City supplied the artwork dataset (titles, artists, GPS coordinates, photos); I built the map, list view, and directions integration. The whole thing was free and ad-free by design.",
      "It was the first project where I had a non-technical stakeholder. I learned a lot about scoping, about what a 'data handoff' actually looks like, and about how to demo software to people who don't care about software.",
    ],
    facts: [
      ['Built', 'Spring 2018'],
      ['Stakeholder', 'City of Mountain View'],
      ['Stack', 'Swift · MapKit · UIKit'],
      ['Cost to user', 'free'],
      ['My role', 'design, code, data wrangling'],
    ],
    tags: ['Civic', 'Maps', 'iOS', 'Swift'],
    links: [
      { label: "via the home page", url: "Personal Website.html#projects" },
    ],
  },

  auxiliumHealth: {
    title: "Auxilium Health",
    tagline: "The quickest, easiest app for medication reminders.",
    year: "2017",
    role: "Hackathon",
    icon: "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/13c9ffa5-2687-4973-9ca7-5b57c970b3a1-auxiliumHealth.png",
    accent: '#d23a3a',
    screens: [
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/7f82fc07-d957-4814-9caf-ffa3a698a472-screenshot.png",
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/7f878d85-29ca-40ac-ac60-40d7836768bf-screenshot.png",
    ],
    fallbackThumb: "assets/auxiliumHealth.png",
    blurb: "'Auxilium' is Latin for aid. Auxilium helps you take your medications on time and not miss a dose. Snap a photo of the prescription label and the app parses the name, dosage, and schedule.",
    story: [
      "Built at a hackathon, with a partner. The idea came from watching family members try to manage four or five prescriptions at once — the failure mode wasn't that they didn't care; it was that the labels were tiny and the math was annoying.",
      "We used on-device OCR to read the label, parse out the drug name and dosing frequency, and turn that into a daily reminder schedule. The user assigned each medication a color and a refill date, and the app handled the rest.",
      "We didn't ship it past the hackathon. But the OCR pipeline is something I came back to in later projects, and the experience of designing for someone who isn't excited about your tech stack — they just want fewer alarms — stuck with me.",
    ],
    facts: [
      ['Built', 'One weekend, 2017'],
      ['Where', 'A high-school hackathon'],
      ['Stack', 'iOS · Swift · Vision (OCR) · UserNotifications'],
      ['Outcome', 'Demoed, not shipped'],
      ['My role', 'half the code, all the OCR'],
    ],
    tags: ['Hackathon', 'Health', 'OCR', 'iOS'],
    links: [],
  },

  minuteTutor: {
    title: "Minute Tutor",
    tagline: "Tutors on demand — video chat with a tutor when you need one.",
    year: "2017",
    role: "Built + shipped",
    icon: "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/ff62cc42-e0e0-4179-a2bf-5952f662c892-minuteTutor.png",
    accent: '#822121',
    screens: [
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/a8db32dc-50d5-4cd4-83ab-f2826c750ba0-screenshot.png",
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/93d26ad6-faf4-4b4d-98ec-da5432f43757-screenshot.png",
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/16840715-ce59-4a06-bb5a-12a1d1d8ee6c-screenshot.png",
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/31d96acb-2058-4507-874e-9728e0c76ac7-screenshot.png",
    ],
    fallbackThumb: "assets/minuteTutor.png",
    blurb: "Minute Tutor connects students with potential tutors over Skype video chat. Tutors charge by the minute; payments run through PayPal. The pitch was simple: when you need help on one problem, you don't need to book a full hour.",
    story: [
      "The thesis: traditional tutoring is high friction. You book in advance, you commit to an hour, you pay the hour rate even if you only had one question. Most homework help happens at 10pm the night before, on one problem, and lasts five minutes.",
      "Minute Tutor was a two-sided marketplace. Students browsed available tutors by subject; tutors set their per-minute rate. The app gated a Skype call between them and metered the duration. PayPal handled the payout.",
      "I learned that two-sided marketplaces are hard — supply needs to be there before demand, but supply won't show up without demand. I also learned that 'easy to build, hard to grow' is a real shape of startup, and not always one you want.",
    ],
    facts: [
      ['Built', '2017'],
      ['Stack', 'iOS · Swift · Skype SDK · PayPal'],
      ['Sides', 'Student app + Tutor app'],
      ['Why this', 'I was tutoring already; saw the friction'],
      ['What I kept', 'A respect for marketplace dynamics'],
    ],
    tags: ['Marketplace', 'iOS', 'EdTech'],
    links: [],
  },

  teender: {
    title: "Teender",
    tagline: "The social app for high schoolers to overcome social anxiety.",
    year: "2016",
    role: "iOS app",
    icon: "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/708d1734-6cc7-415e-af6b-4699dab66346-teender.png",
    accent: '#e8602d',
    screens: [
      "https://s3-us-west-2.amazonaws.com/skygear-cloud-asset/appsite/5d9d4cc1-b62a-4370-958a-dab836469013-screenshot.png",
    ],
    fallbackThumb: "assets/teender.png",
    blurb: "Teender is a portmanteau of 'teen' and 'Tinder.' A high-schooler logs in with Facebook, picks a crush from their Facebook contacts, and sends them an anonymous note. The crush sees the message but not the sender.",
    story: [
      "I was sixteen, building things every weekend. The problem statement was honest: a lot of social anxiety in high school is just the inability to send the first message. We thought: what if the first message was anonymous, and the person on the other end could only see who you were if you decided to reveal?",
      "It used Facebook Login for identity (this was 2016 — Facebook was still where high-schoolers lived), and Firebase for the message thread. I designed the screens, wrote the iOS app, and ran the backend.",
      "In hindsight, the product was a teenage version of a much-discussed adult one, and it had all the same problems — abuse vectors, no easy moderation, brittle anonymity. I wouldn't build it the same way today. But it was the first time I shipped something that other students at my school actually opened.",
    ],
    facts: [
      ['Built', '2016 (age 16)'],
      ['Stack', 'iOS · Swift · Facebook Login · Firebase'],
      ['Users', 'My high school, briefly'],
      ['Lifespan', 'A few months'],
      ['What I kept', "A healthy fear of moderation gaps"],
    ],
    tags: ['iOS', 'Social', 'High school'],
    links: [],
  },
};

// ─── NAV ─────────────────────────────────────────────────────
function CaseStudyNav({ title }) {
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

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.inkDim, letterSpacing: '.1em', textTransform: 'uppercase' }}>
        case study · {title.toLowerCase()}
      </div>

      <a href="Personal Website.html#projects" style={{
        padding: '7px 16px', background: 'transparent', color: C.ink,
        border: `1.5px dashed ${C.rule}`,
        borderRadius: 20, fontFamily: "'Caveat', cursive", fontSize: 18,
        transform: 'rotate(-2deg)', textDecoration: 'none',
        display: 'inline-block',
        transition: 'transform .25s, background .25s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(-2deg) translateY(-2px)'; e.currentTarget.style.background = C.paperTape + '55'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotate(-2deg)'; e.currentTarget.style.background = 'transparent'; }}
      >← all projects</a>
    </nav>
  );
}

// ─── PHONE FRAME ─────────────────────────────────────────────
function PhoneFrame({ src, rot = 0, accent }) {
  return (
    <div style={{
      width: 260, transform: `rotate(${rot}deg)`,
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1)',
      filter: 'drop-shadow(0 18px 32px rgba(13,33,42,.22))',
    }}>
      {/* phone bezel */}
      <div style={{
        background: '#1a1a1a',
        borderRadius: 38,
        padding: 12, paddingTop: 18, paddingBottom: 18,
        border: `3px solid #2a2a2a`,
        position: 'relative',
      }}>
        {/* notch */}
        <div style={{
          position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)',
          width: 90, height: 22, background: '#1a1a1a', borderRadius: 12, zIndex: 2,
        }} />
        <div style={{
          background: accent + '22',
          borderRadius: 28,
          overflow: 'hidden',
          aspectRatio: '9/19',
        }}>
          {src ? (
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { e.target.style.display = 'none'; }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: C.inkDim, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>screen</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────
function CaseHero({ d }) {
  return (
    <section style={{ padding: '64px 56px 32px', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <a href="Personal Website.html#projects" style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: d.accent, textDecoration: 'none', transform: 'rotate(-1deg)', display: 'inline-block' }}>
              ↶ projects
            </a>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: C.inkDim, letterSpacing: '.1em', textTransform: 'uppercase' }}>case no. · {d.year}</span>
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 124, lineHeight: 0.92, letterSpacing: '-0.025em',
            margin: 0, color: C.ink,
          }}>
            {d.title}
            <span style={{ color: d.accent }}>.</span>
          </h1>

          <div style={{ marginTop: 16, fontFamily: "'Caveat', cursive", fontSize: 30, color: d.accent, transform: 'rotate(-1deg)', display: 'inline-block', lineHeight: 1.2, maxWidth: 600 }}>
            {d.tagline}
          </div>

          <p style={{ marginTop: 28, fontSize: 19, lineHeight: 1.6, maxWidth: 580, color: C.ink }}>
            {d.blurb}
          </p>

          <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Sticker bg={d.accent} rot={-2}>{d.role}</Sticker>
            <Sticker bg={C.ink} rot={2}>{d.year}</Sticker>
            {d.tags.map((t, i) => (
              <Sticker key={i} bg="transparent" fg={C.ink} rot={i % 2 === 0 ? -1 : 1.5}>
                <span style={{ color: C.inkSoft }}># </span>{t.toLowerCase()}
              </Sticker>
            ))}
          </div>
        </div>

        {/* icon + screens */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          {/* app icon — taped, rotated */}
          <div style={{
            position: 'relative', width: 200, marginLeft: 'auto',
            transform: 'rotate(3deg)',
          }}>
            <Tape rot={-6} top={-10} left="32%" color={d.accent + '88'}>app icon</Tape>
            <div style={{
              background: C.paper, padding: 12, paddingBottom: 30,
              boxShadow: '0 16px 32px rgba(13,33,42,.18)',
            }}>
              <div style={{ aspectRatio: '1', overflow: 'hidden', background: d.accent + '22' }}>
                <img src={d.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = d.fallbackThumb; }} />
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, textAlign: 'center', marginTop: 6, color: C.ink }}>
                {d.title.toLowerCase()}
              </div>
            </div>
          </div>

          {/* phone preview, layered */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1 }}>
            <PhoneFrame src={d.screens[0]} rot={-4} accent={d.accent} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FACT SHEET ──────────────────────────────────────────────
function FactSheet({ d }) {
  return (
    <section style={{ padding: '40px 56px 24px' }}>
      <div style={{
        background: C.paper, padding: '20px 28px',
        border: `1px solid ${C.ruleSoft}`,
        transform: 'rotate(-0.4deg)',
        boxShadow: '0 10px 20px rgba(13,33,42,.08)',
        position: 'relative',
      }}>
        <Tape rot={-3} top={-12} left="3%" color={C.paperTape}>fact sheet</Tape>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${d.facts.length}, 1fr)`, gap: 24 }}>
          {d.facts.map(([k, v], i) => (
            <div key={i} style={{ borderLeft: i > 0 ? `1px dashed ${C.rule}` : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: d.accent, lineHeight: 1, marginBottom: 6 }}>{k.toLowerCase()}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.35, color: C.ink }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STORY ───────────────────────────────────────────────────
function Story({ d }) {
  return (
    <section style={{ padding: '40px 56px' }}>
      <FadeUp>
        <SectionHeader
          kicker="📓 a little more on"
          kickerColor={d.accent}
          title="the"
          em="story."
        />
      </FadeUp>
      <div style={{ maxWidth: 760 }}>
        {d.story.map((p, i) => (
          <FadeUp key={i} delay={i * 80}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: C.ink, margin: '0 0 22px' }}>
              {p}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── SCREENSHOTS GALLERY ─────────────────────────────────────
function Gallery({ d }) {
  if (!d.screens || d.screens.length < 2) return null;
  return (
    <section style={{ padding: '40px 56px 32px' }}>
      <FadeUp>
        <SectionHeader
          kicker="📱 a few screens"
          kickerColor={d.accent}
          title="the"
          em="thing itself."
        />
      </FadeUp>
      <div style={{
        display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'flex-start',
        flexWrap: 'wrap', padding: '20px 0',
      }}>
        {d.screens.map((src, i) => {
          const rots = [-3, 2, -1, 2.5, -2.4, 1.8];
          return (
            <FadeUp key={i} delay={i * 100}>
              <PhoneFrame src={src} rot={rots[i % rots.length]} accent={d.accent} />
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

// ─── NEXT / BACK strip ───────────────────────────────────────
function NextProject({ currentId }) {
  const order = ['mtnViewArt', 'auxiliumHealth', 'minuteTutor', 'teender'];
  const idx = order.indexOf(currentId);
  const next = CASES[order[(idx + 1) % order.length]];
  return (
    <section style={{ padding: '40px 56px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <a href="Personal Website.html#projects" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            background: C.paper, padding: '24px 28px',
            border: `1px solid ${C.ruleSoft}`,
            transform: 'rotate(-0.8deg)',
            boxShadow: '0 12px 24px rgba(13,33,42,.1)',
            transition: 'transform .35s',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-0.8deg)'}
          >
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: C.coral }}>↶ go back to</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, lineHeight: 1.05, marginTop: 2 }}>
                all projects
              </div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 24, color: C.inkDim }}>←</div>
          </div>
        </a>

        <a href={`${order[(idx + 1) % order.length]}.html`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            background: next.accent, color: '#fff', padding: '24px 28px',
            transform: 'rotate(1.2deg)',
            boxShadow: '0 12px 24px rgba(13,33,42,.18)',
            transition: 'transform .35s',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) translateY(-4px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(1.2deg)'}
          >
            <div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, color: '#fff', opacity: .9 }}>up next →</div>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 30, lineHeight: 1.05, marginTop: 2 }}>
                {next.title}
              </div>
              <div style={{ fontSize: 13, marginTop: 4, opacity: .9 }}>{next.tagline}</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 24 }}>↗</div>
          </div>
        </a>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
function CaseFooter() {
  return (
    <footer style={{
      background: C.navy, color: C.paper,
      padding: '20px 56px',
      fontFamily: "'Caveat', cursive", fontSize: 22,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transform: 'rotate(-0.3deg)', marginBottom: -4, marginLeft: -4, marginRight: -4,
    }}>
      <span>thanks for reading ♡</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, opacity: .8, letterSpacing: '.08em' }}>
        © PARAN SONTHALIA · MANHATTAN, NY · 2026
      </span>
      <span>onward →</span>
    </footer>
  );
}

// ─── PAGE COMPOSER ───────────────────────────────────────────
function CaseStudy({ id }) {
  const d = CASES[id];
  if (!d) return <div style={{ padding: 80 }}>Unknown case: {id}</div>;
  return (
    <>
      <CaseStudyNav title={d.title} />
      <main style={{ position: 'relative', zIndex: 1, maxWidth: 1400, margin: '0 auto' }}>
        <CaseHero d={d} />
        <FactSheet d={d} />
        <Story d={d} />
        <Gallery d={d} />
        <NextProject currentId={id} />
      </main>
      <CaseFooter />
    </>
  );
}

Object.assign(window, { CaseStudy, CaseStudyNav, CASES });
})();
