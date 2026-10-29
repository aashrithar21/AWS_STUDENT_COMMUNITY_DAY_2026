import React, { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  GraduationCap,
  Handshake,
  MapPin,
  Menu,
  Network,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import logo from "./assets/sru-sbg-logo.png";

const LINKS = {
  studentIndividual: "#",
  studentTeam: "#",
  otherIndividual: "#",
  otherTeam: "#",
  sponsorForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSdvfwd5ooaLQn_k5dQ8tLo4r_N-wi0QuALWocXGqzhmsU5zVQ/viewform?usp=dialog",
  communityEvents: "#",
};

function Button({
  children,
  href,
  onClick,
  variant = "primary",
  target,
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={href || "#"}
      onClick={onClick}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
      <ArrowUpRight size={16} />
    </a>
  );
}

function Header({ navigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    navigate("home");

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  return (
    <header className="header">
      <a
        className="brand"
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          navigate("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src={logo}
          alt="AWS Student Builder Group, SR University logo"
        />
      </a>

      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("sponsors")}>Sponsors</button>
        <button onClick={() => go("speakers")}>Speakers</button>
        <button onClick={() => go("schedule")}>Schedule</button>
        <button onClick={() => go("venue")}>Venue</button>

        <Button href="#/register-sru" variant="small">
          Get your pass
        </Button>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home({ navigate }) {
  const [faq, setFaq] = useState(0);

  const faqs = [
    [
      "What is AWS Student Community Day?",
      "It is a one-day, student-led technical conference with multiple topics, sessions, and speakers. It brings learners together to explore cloud, AI, developer tools, and real-world technology.",
    ],
    [
      "Who can attend?",
      "Students from SR University and other colleges are welcome. Registration links will be added here once the organising team shares the forms.",
    ],
    [
      "Do I need prior AWS experience?",
      "No. The event is intended for learners at different stages. Choose sessions that match your interests and use the day to ask questions, meet builders, and discover new paths.",
    ],
    [
      "Where is the event happening?",
      "SR University, Warangal, Telangana. Detailed venue and arrival instructions will be shared closer to the event.",
    ],
    [
      "When will registration open?",
      "Registration form links are coming soon. Please check this page for updates.",
    ],
    [
      "Can my company sponsor the event?",
      "Yes. Use the Become Sponsor page to express interest. The team will share sponsorship details and next steps through the sponsorship form.",
    ],
  ];

  const timeline = [
    [
      "09:30 – 10:00",
      "Check-in & community welcome",
      "Collect your badge, meet fellow builders, and settle in.",
    ],
    [
      "10:00 – 10:20",
      "Opening ceremony",
      "Welcome address and introduction to the day.",
    ],
    [
      "10:20 – 11:10",
      "Keynote session",
      "A big-picture look at cloud technology and what's next.",
    ],
    [
      "11:10 – 11:25",
      "Networking break",
      "Connect with speakers, students, and community members.",
    ],
    [
      "11:25 – 12:30",
      "Technical sessions",
      "Learn through practical talks and real-world examples.",
    ],
    [
      "12:30 – 13:30",
      "Lunch & networking",
      "Recharge and continue the conversations.",
    ],
    [
      "13:30 – 14:30",
      "Cloud / AI session",
      "Explore modern tools, architectures, and use cases.",
    ],
    [
      "14:30 – 14:45",
      "Refreshment break",
      "Take a break and visit sponsor displays.",
    ],
    [
      "14:45 – 15:45",
      "Hands-on / community session",
      "Build, discuss, and learn together.",
    ],
    [
      "15:45 – 16:20",
      "Panel & audience Q&A",
      "Ask questions and hear different perspectives.",
    ],
    [
      "16:20 – 17:00",
      "Closing & community photo",
      "Key takeaways, thanks, and final connections.",
    ],
  ];

  return (
    <>
      <Header navigate={navigate} />

      <main>
        <section className="hero section-wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="presenter">
                <span className="live-dot"></span>
                AWS SR UNIVERSITY PRESENTS
              </div>

              <p className="micro-label">
                AWS SBG · SRU · WARANGAL
              </p>

              <h1>
                AWS Student
                <br />
                <span>Community Day</span>
                <em>2026</em>
              </h1>

              <p className="hero-lede">
                One day. Many ideas. A community of builders.
                <br />
                Explore cloud, AI, and the future of technology — together.
              </p>

              <div className="hero-actions">
                <Button href="#/register-sru">
                  Explore passes
                </Button>

                <a className="text-link" href="#about">
                  Discover the event <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="hero-facts">
                <div>
                  <CalendarDays />
                  <span>
                    <b>2026</b>
                    <small>Date to be announced</small>
                  </span>
                </div>

                <div>
                  <MapPin />
                  <span>
                    <b>SR University</b>
                    <small>Warangal, Telangana</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="hero-art">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="hero-logo-card">
                <img
                  src={logo}
                  alt="AWS Student Builder Group SR University"
                />
              </div>

              <div className="float-card float-top">
                <Cloud size={18} />
                <span>Cloud-ready minds</span>
              </div>

              <div className="float-card float-bottom">
                <Sparkles size={18} />
                <span>Build what's next</span>
              </div>

              <div className="hero-index">
                SCD<span> / 2026</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>LEARN WITH THE COMMUNITY</span>
            <span>
              BUILD YOUR NEXT CHAPTER <ArrowRight size={15} />
            </span>
          </div>
        </section>

        <section className="section-wrap section" id="about">
          <SectionHeading
            eyebrow="01 / THE GATHERING"
            title={
              <>
                More than an event.
                <br />
                <span>A builder community.</span>
              </>
            }
            text="AWS Student Community Day at SR University is a student-led gathering designed to make cloud and emerging technology feel closer, more practical, and more accessible."
          />

          <div className="about-grid">
            <div className="about-story">
              <p>
                Step beyond the classroom and into a room full of curious
                minds. Learn from practitioners, discover new tools, exchange
                ideas with students from different colleges, and see how
                technology becomes real-world solutions.
              </p>

              <p>
                Whether you're just starting your cloud journey or already
                building projects, SCD is a place to ask better questions,
                find collaborators, and leave with ideas worth building.
              </p>

              <Button href="#/discover" variant="outline">
                Discover experience
              </Button>
            </div>

            <div className="benefit-grid">
              <article className="benefit-card">
                <div className="icon-box">
                  <GraduationCap />
                </div>
                <h3>Learn from builders</h3>
                <p>
                  Hear practical lessons and experiences from people working
                  with technology.
                </p>
              </article>

              <article className="benefit-card">
                <div className="icon-box">
                  <Code2 />
                </div>
                <h3>Explore what's next</h3>
                <p>
                  Discover cloud, AI, DevOps, architecture, and emerging
                  technical ideas.
                </p>
              </article>

              <article className="benefit-card">
                <div className="icon-box">
                  <Network />
                </div>
                <h3>Find your people</h3>
                <p>
                  Meet peers, mentors, speakers, and future project
                  collaborators.
                </p>
              </article>

              <article className="benefit-card">
                <div className="icon-box">
                  <Zap />
                </div>
                <h3>Turn curiosity into action</h3>
                <p>
                  Take ideas back to your projects, portfolio, and learning
                  journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrap section" id="sponsors">
          <SectionHeading
            eyebrow="02 / POWERED TOGETHER"
            title={
              <>
                Big ideas need
                <br />
                <span>a community behind them.</span>
              </>
            }
            text="We’re building a platform for students, technologists, and organisations to meet around learning and innovation. Our sponsors help make this community experience possible."
          />

          <div className="sponsor-actions">
            <article className="sponsor-action">
              <div className="action-number">A / 01</div>
              <Handshake size={30} />
              <h3>Brand awareness</h3>
              <p>
                Put your organisation in front of emerging builders through
                event visibility, digital promotions, on-site presence, and
                meaningful conversations with students.
              </p>
              <Button href="#/brand-awareness" variant="outline">
                Explore brand awareness
              </Button>
            </article>

            <article className="sponsor-action sponsor-action-featured">
              <div className="action-number">A / 02</div>
              <Sparkles size={30} />
              <h3>Become a sponsor</h3>
              <p>
                Support student learning, share your expertise, and help
                create a memorable day for the next generation of cloud and
                technology talent.
              </p>
              <Button href="#/become-sponsor">
                Partner with us
              </Button>
            </article>
          </div>

          <div className="sponsor-list-head">
            <div>
              <span className="eyebrow">COMMUNITY PARTNERS</span>
              <h3>Our sponsors</h3>
            </div>
            <span className="muted">
              Sponsor logos and profiles will be added soon.
            </span>
          </div>

          <div className="sponsor-people">
            {[1, 2, 3].map((n) => (
              <article className="sponsor-person" key={n}>
                <div className="photo-placeholder">
                  <Handshake size={28} />
                  <span>SPONSOR LOGO / PHOTO</span>
                </div>
                <h4>Sponsor name {String(n).padStart(2, "0")}</h4>
                <p>Designation / Organisation</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section" id="speakers">
          <SectionHeading
            eyebrow="03 / VOICES & IDEAS"
            title={
              <>
                Learn from people
                <br />
                <span>who build the future.</span>
              </>
            }
            text="Meet the speakers bringing practical experience, fresh perspectives, and real-world stories to the stage."
          />

          <div className="speaker-grid">
            {[1, 2, 3].map((n) => (
              <article className="speaker-card" key={n}>
                <div className="speaker-photo">
                  <div className="photo-placeholder">
                    <Users size={30} />
                    <span>SPEAKER PHOTO</span>
                  </div>
                  <span className="speaker-count">0{n}</span>
                </div>

                <div className="speaker-info">
                  <span className="eyebrow">
                    SPEAKER TO BE ANNOUNCED
                  </span>
                  <h3>Speaker name</h3>
                  <p>Expertise / Designation</p>

                  <div className="speaker-tags">
                    <span>Cloud</span>
                    <span>Technology</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="schedule-section" id="schedule">
          <div className="section-wrap section">
            <SectionHeading
              eyebrow="04 / YOUR DAY, MAPPED OUT"
              title={
                <>
                  From first hello
                  <br />
                  <span>to final takeaway.</span>
                </>
              }
              text="A proposed 9:30 AM – 5:00 PM flow. Session titles and exact timings may change as speakers are confirmed."
            />

            <div className="timeline">
              {timeline.map((item, i) => (
                <article className="timeline-row" key={item[0]}>
                  <div className="timeline-time">{item[0]}</div>
                  <div className="timeline-dot"></div>

                  <div className="timeline-copy">
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>

                  <span className="timeline-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section" id="tickets">
          <SectionHeading
            eyebrow="05 / SAVE YOUR PLACE"
            title={
              <>
                Your next chapter
                <br />
                <span>starts with showing up.</span>
              </>
            }
            text="Choose the registration route that fits you. Form links will be connected as soon as they are shared by the organising team."
          />

          <div className="ticket-grid">
            <article className="ticket-card">
              <div className="ticket-symbol">
                <GraduationCap />
              </div>
              <span className="eyebrow">
                FOR SR UNIVERSITY STUDENTS
              </span>
              <h3>SRU student pass</h3>
              <p>
                Studying at SR University? Start here to access the student
                registration options.
              </p>
              <Button href="#/register-sru">
                Register as SRU student
              </Button>
            </article>

            <article className="ticket-card ticket-highlight">
              <div className="ticket-symbol">
                <Users />
              </div>
              <span className="eyebrow">
                FOR EVERY OTHER COLLEGE
              </span>
              <h3>Community pass</h3>
              <p>
                Join us from another college and meet builders from across
                the student community.
              </p>
              <Button href="#/register-other">
                Register from another college
              </Button>
            </article>
          </div>
        </section>

        <section className="section-wrap section venue-section" id="venue">
          <div className="venue-copy">
            <span className="eyebrow">06 / MEET US HERE</span>
            <h2>
              Find your way
              <br />
              <span>to the community.</span>
            </h2>
            <p>
              We look forward to welcoming you to SR University, Warangal,
              Telangana. Detailed directions and venue instructions will be
              shared closer to the event.
            </p>

            <div className="venue-address">
              <MapPin />
              <span>
                <b>SR University</b>
                <small>Warangal, Telangana, India</small>
              </span>
            </div>

            <Button
              href="https://www.google.com/maps/search/?api=1&query=SR+University+Warangal"
              target="_blank"
              variant="outline"
            >
              Get directions
            </Button>
          </div>

          <div className="venue-map">
            <div className="map-grid"></div>
            <div className="map-pin">
              <MapPin size={30} />
              <span>SR UNIVERSITY</span>
              <small>WARANGAL · TELANGANA</small>
            </div>
            <div className="map-caption">
              17° 59' N · 79° 32' E
              <span>LOCATION PREVIEW</span>
            </div>
          </div>
        </section>

        <section className="section-wrap section" id="faq">
          <SectionHeading
            eyebrow="07 / GOOD TO KNOW"
            title={
              <>
                Questions? We’ve got <span>you.</span>
              </>
            }
          />

          <div className="faq-list">
            {faqs.map((f, i) => (
              <article
                className={`faq-item ${faq === i ? "faq-open" : ""}`}
                key={f[0]}
              >
                <button onClick={() => setFaq(faq === i ? -1 : i)}>
                  <span>
                    <i>{String(i + 1).padStart(2, "0")}</i>
                    {f[0]}
                  </span>
                  <ChevronDown size={19} />
                </button>

                {faq === i && <p>{f[1]}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="community-cta">
          <div className="section-wrap cta-inner">
            <div>
              <span className="eyebrow">BUILT BY THE COMMUNITY</span>
              <h2>
                We learn together.
                <br />
                <span>We build together.</span>
              </h2>
              <p>
                Explore the AWS Student Builder Group at SR University and
                the community events that keep curiosity moving.
              </p>
            </div>

            <Button href={LINKS.communityEvents} variant="light">
              Explore our community events
            </Button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <img src={logo} alt="AWS SBG SRU" />
          <p>Student-led. Community-powered. Built for what's next.</p>
          <span>© 2026 AWS Student Builder Group · SR University</span>
        </div>
      </footer>
    </>
  );
}

function Subpage({ title, eyebrow, intro, children, back }) {
  return (
    <>
      <div className="subpage-top">
        <a href="#/" className="back-link">
          <ArrowLeft size={16} /> Back to event
        </a>
      </div>

      <main className="subpage section-wrap">
        <div className="subpage-hero">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>

        {children}

        <div className="subpage-end">
          <Button href="#/">Return to event home</Button>
        </div>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <img src={logo} alt="AWS SBG SRU" />
          <span>© 2026 AWS Student Builder Group · SR University</span>
        </div>
      </footer>
    </>
  );
}

function Discover({ navigate }) {
  return (
    <Subpage
      eyebrow="THE STUDENT COMMUNITY DAY EXPERIENCE"
      title={
        <>
          What is SCD?
          <br />
          <span>Why should you attend?</span>
        </>
      }
      intro="A one-day, student-led conference designed to bring learners, builders, and technology communities together."
    >
      <div className="subpage-grid">
        <article className="info-panel">
          <span className="eyebrow">01 / WHAT IS SCD?</span>
          <h2>A community-led day of learning.</h2>
          <p>
            AWS Student Community Day (SCD) is a one-day conference planned
            and delivered by student community leaders. Unlike a single-topic
            meetup, it can bring together several technical themes, speakers,
            sessions, and learning formats for students across institutions.
          </p>
          <p>
            Think of it as a bridge between classroom learning and the wider
            technology community: practical stories, new perspectives,
            conversations, and ideas to take back to your own projects.
          </p>
        </article>

        <article className="info-panel accent-panel">
          <span className="eyebrow">02 / WHY ATTEND?</span>
          <h2>Make your curiosity useful.</h2>

          <ul className="check-list">
            <li>
              <CheckCircle2 /> Learn from community practitioners and
              technical speakers.
            </li>
            <li>
              <CheckCircle2 /> Explore AWS, cloud, AI, DevOps, and emerging
              technologies.
            </li>
            <li>
              <CheckCircle2 /> Meet students from other colleges and find
              collaborators.
            </li>
            <li>
              <CheckCircle2 /> Discover project ideas, career paths, and new
              skills to develop.
            </li>
            <li>
              <CheckCircle2 /> Ask questions in a welcoming, peer-learning
              environment.
            </li>
          </ul>
        </article>
      </div>

      <div className="reference-note">
        <span className="eyebrow">INSPIRED BY THE COMMUNITY</span>
        <p>
          Student Community Days around the world are organised around peer
          learning, technical talks, hands-on activities, networking, and
          sharing knowledge across campuses. The exact programme varies by
          location and organiser.
        </p>

        <div className="reference-links">
          <a
            href="https://builder.aws.com/content/30YAgni22A4kIDUitLghmIPOlLJ/aws-student-community-days"
            target="_blank"
            rel="noreferrer"
          >
            AWS Student Community Days overview <ArrowUpRight size={15} />
          </a>

          <a
            href="https://aws.amazon.com/events/community-day/"
            target="_blank"
            rel="noreferrer"
          >
            AWS Community Day global overview <ArrowUpRight size={15} />
          </a>

          <a
            href="https://www.awsmecs.in/"
            target="_blank"
            rel="noreferrer"
          >
            Example: AWS SCD Hyderabad 2026 <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </Subpage>
  );
}

function BrandAwareness() {
  return (
    <Subpage
      eyebrow="PARTNER WITH THE COMMUNITY"
      title={
        <>
          Put your brand where
          <br />
          <span>future builders meet.</span>
        </>
      }
      intro="A partnership with AWS Student Community Day can help your organisation show up meaningfully for a motivated student audience."
    >
      <div className="brand-awareness-grid">
        {[
          [
            "01",
            "Digital visibility",
            "Feature your organisation on the event website and, where agreed, in event announcements and social media promotions.",
          ],
          [
            "02",
            "On-site presence",
            "Explore sponsor logo placement on approved event materials, signage, presentation slides, or a display area depending on the sponsorship plan.",
          ],
          [
            "03",
            "Meaningful conversations",
            "Connect with students interested in cloud, software, AI, and technology careers through appropriate event interactions.",
          ],
          [
            "04",
            "Community impact",
            "Support accessible technical learning, student-led initiatives, and opportunities for learners to grow their skills.",
          ],
        ].map((x) => (
          <article className="awareness-card" key={x[0]}>
            <span>{x[0]}</span>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </article>
        ))}
      </div>

      <div className="notice-box">
        <Sparkles />
        <div>
          <h3>Flexible partnership opportunities</h3>
          <p>
            Specific benefits, deliverables, audience numbers, costs, and
            branding placements will be confirmed by the organising team. No
            reach or attendance figures are promised on this page.
          </p>
        </div>
      </div>

      <div className="inline-cta">
        <div>
          <span className="eyebrow">LET'S BUILD SOMETHING VALUABLE</span>
          <h2>Interested in partnering?</h2>
          <p>
            Tell us a little about your organisation and our team can follow
            up with details.
          </p>
        </div>

        <Button href="#/become-sponsor">Become a sponsor</Button>
      </div>

      <div className="reference-note">
        <span className="eyebrow">REFERENCE & INSPIRATION</span>
        <p>
          These examples describe sponsor and community engagement approaches
          used by other AWS community events. The SR University sponsorship
          package will be confirmed separately.
        </p>

        <div className="reference-links">
          <a
            href="https://www.awsmecs.in/"
            target="_blank"
            rel="noreferrer"
          >
            AWS SCD Hyderabad 2026 — sponsor information{" "}
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://aws.amazon.com/events/community-day/"
            target="_blank"
            rel="noreferrer"
          >
            AWS Community Day overview <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </Subpage>
  );
}

function BecomeSponsor() {
  return (
    <Subpage
      eyebrow="SPONSORSHIP ENQUIRIES"
      title={
        <>
          Help students build
          <br />
          <span>what comes next.</span>
        </>
      }
      intro="Partner with AWS Student Community Day at SR University and help create an energising space for learning, discovery, and connection."
    >
      <div className="sponsor-form-card">
        <div className="form-mark">
          <Handshake size={28} />
        </div>

        <span className="eyebrow">BECOME A COMMUNITY PARTNER</span>

        <h2>Let’s make this day possible.</h2>

        <p>
          Fill out the sponsorship interest form to express interest in
          supporting the event. The organising team will share the available
          sponsorship options, proposed benefits, and next steps.
        </p>

        <div className="sponsor-points">
          <span>
            <CheckCircle2 /> Support student-led learning
          </span>
          <span>
            <CheckCircle2 /> Connect with emerging talent
          </span>
          <span>
            <CheckCircle2 /> Be part of a growing tech community
          </span>
        </div>

        {/* Become a sponsor button linked to your Google Form */}
        <Button href={LINKS.sponsorForm} target="_blank">
          Open sponsor interest form
        </Button>

        <small className="form-note">
          You’ll be redirected to our Google Form to submit your sponsorship
          interest.
        </small>
      </div>
    </Subpage>
  );
}

function Registration({ type }) {
  const sru = type === "register-sru";

  return (
    <Subpage
      eyebrow="TICKETS & REGISTRATION"
      title={
        sru ? (
          <>
            Are you an SRU student?
            <br />
            <span>Your pass starts here.</span>
          </>
        ) : (
          <>
            Joining from another college?
            <br />
            <span>You're welcome here.</span>
          </>
        )
      }
      intro={
        sru
          ? "If you are a student of SR University and want to attend AWS Student Community Day, choose a registration option below."
          : "If you want to attend AWS Student Community Day from another college, choose a registration option below."
      }
    >
      <div className="registration-options">
        <article className="registration-card">
          <div className="ticket-symbol">
            <Users />
          </div>

          <span className="eyebrow">ONE ATTENDEE</span>
          <h2>Register as individual</h2>
          <p>
            Reserve your place as an individual attendee and join the wider
            student builder community.
          </p>

          <Button
            href={
              sru
                ? LINKS.studentIndividual
                : LINKS.otherIndividual
            }
          >
            Individual registration
          </Button>
        </article>

        <article className="registration-card">
          <div className="ticket-symbol">
            <Network />
          </div>

          <span className="eyebrow">BRING YOUR TEAM</span>
          <h2>Register as a team</h2>
          <p>
            Attending with classmates? Choose the team option and follow the
            form instructions.
          </p>

          <Button
            href={
              sru
                ? LINKS.studentTeam
                : LINKS.otherTeam
            }
          >
            Team registration
          </Button>
        </article>
      </div>

      <div className="notice-box">
        <CalendarDays />
        <div>
          <h3>Registration links coming soon</h3>
          <p>
            The individual and team buttons are placeholders until the
            organising team provides the official Google Form links. Please
            check back for updates.
          </p>
        </div>
      </div>
    </Subpage>
  );
}

export default function App() {
  const [route, setRoute] = useState(
    window.location.hash.replace("#/", "") || "home"
  );

  useEffect(() => {
    const update = () => {
      setRoute(window.location.hash.replace("#/", "") || "home");
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", update);

    return () => window.removeEventListener("hashchange", update);
  }, []);

  const navigate = (page) => {
    window.location.hash =
      page === "home" ? "/" : `/${page}`;
  };

  if (route === "discover") {
    return <Discover navigate={navigate} />;
  }

  if (route === "brand-awareness") {
    return <BrandAwareness />;
  }

  if (route === "become-sponsor") {
    return <BecomeSponsor />;
  }

  if (route === "register-sru" || route === "register-other") {
    return <Registration type={route} />;
  }

  return <Home navigate={navigate} />;
}