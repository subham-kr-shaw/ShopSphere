import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Company = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    sectionsRef.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '5000+', label: 'Products Listed' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: '✦',
      title: 'Authentic Quality',
      desc: 'Every product on ShopSphere is carefully curated from trusted sellers and verified brands across India and beyond.'
    },
    {
      icon: '◈',
      title: 'Style for Everyone',
      desc: 'From traditional sarees and kurtas to contemporary activewear — we celebrate every style, every occasion.'
    },
    {
      icon: '⬡',
      title: 'Transparent Pricing',
      desc: 'Real discounts. No hidden fees. What you see is exactly what you pay — always.'
    },
    {
      icon: '◎',
      title: 'Fast Delivery',
      desc: 'We work with reliable logistics partners to ensure your fashion arrives fresh, fast, and perfectly packed.'
    },
  ];

  const team = [
    { name: 'Subham Shaw', role: 'Founder & CEO', initial: 'S', color: '#4f46e5' },
    { name: 'Kashish Shaw', role: 'Head of Design', initial: 'K', color: '#0891b2' },
    { name: 'Aryan Mehta', role: 'CTO', initial: 'A', color: '#059669' },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: '#fafaf8', color: '#1a1a1a' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .company-page * { box-sizing: border-box; }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up:nth-child(2) { transition-delay: 0.1s; }
        .fade-up:nth-child(3) { transition-delay: 0.2s; }
        .fade-up:nth-child(4) { transition-delay: 0.3s; }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .value-card:hover {
          transform: translateY(-6px);
          border-color: #4f46e5 !important;
        }
        .value-card:hover .val-icon {
          color: #4f46e5;
          transform: rotate(20deg) scale(1.2);
        }
        .team-card:hover .team-avatar {
          transform: scale(1.08);
        }
        .shop-btn:hover {
          background: #3730a3 !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(79,70,229,0.35);
        }
        .hero-img-wrap {
          position: relative;
        }
        .hero-img-wrap::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          z-index: 0;
        }
        .hero-img-wrap img {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="company-page">

        {/* ── HERO ── */}
        <section style={{
          minHeight: '92vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
          overflow: 'hidden',
        }}>
          {/* Left text */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 60px', background: '#fafaf8',
          }}>
            <div ref={addRef} className="fade-up" style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
                color: '#4f46e5', fontWeight: 500,
              }}>
                Est. 2024 · India
              </span>
            </div>
            <h1 ref={addRef} className="fade-up" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 72, fontWeight: 300, lineHeight: 1.05,
              margin: '0 0 24px', color: '#111',
            }}>
              Shop<br />
              <em style={{ fontStyle: 'italic', color: '#4f46e5' }}>Sphere</em>
            </h1>
            <p ref={addRef} className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, lineHeight: 1.8, color: '#6b7280',
              maxWidth: 380, marginBottom: 40, fontWeight: 300,
            }}>
              Where tradition meets contemporary style. ShopSphere was born from a simple belief — fashion should be accessible, authentic, and beautiful for everyone.
            </p>
            <div ref={addRef} className="fade-up" style={{ display: 'flex', gap: 16 }}>
              <button
                className="shop-btn"
                onClick={() => navigate('/')}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: '#4f46e5', color: '#fff',
                  border: 'none', padding: '14px 32px',
                  fontSize: 14, fontWeight: 500, letterSpacing: '0.05em',
                  cursor: 'pointer', borderRadius: 2,
                  transition: 'all 0.3s ease',
                }}
              >
                Shop Now
              </button>
              <a href="#story" style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#1a1a1a', textDecoration: 'none',
                padding: '14px 32px', border: '1px solid #d1d5db',
                fontSize: 14, letterSpacing: '0.05em', borderRadius: 2,
                display: 'flex', alignItems: 'center',
              }}>
                Our Story ↓
              </a>
            </div>
          </div>

          {/* Right image collage */}
          <div style={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridTemplateColumns: '1fr 1fr',
            gap: 4,
            background: '#111',
          }}>
            {[
              'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1594938298603-c8148c4b4d7e?w=400&h=400&fit=crop',
            ].map((src, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <img
                  src={src}
                  alt="fashion"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                    filter: 'brightness(0.9)',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{
          background: '#111', padding: '64px 80px',
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2,
        }}>
          {stats.map((s, i) => (
            <div
              key={i}
              ref={addRef}
              className="fade-up stat-card"
              style={{
                textAlign: 'center', padding: '32px 24px',
                borderRight: i < 3 ? '1px solid #2d2d2d' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 52, fontWeight: 300, color: '#fff',
                lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, color: '#9ca3af', marginTop: 8,
                letterSpacing: '0.15em', textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* ── STORY ── */}
        <section id="story" style={{ padding: '100px 80px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div ref={addRef} className="fade-up hero-img-wrap" style={{ borderRadius: 4, overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=700&fit=crop"
                  alt="Our story"
                  style={{ width: '100%', height: 500, objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
            <div>
              <p ref={addRef} className="fade-up" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, letterSpacing: '0.3em', color: '#4f46e5',
                textTransform: 'uppercase', marginBottom: 20,
              }}>Our Story</p>
              <h2 ref={addRef} className="fade-up" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 48, fontWeight: 300, lineHeight: 1.15,
                margin: '0 0 28px', color: '#111',
              }}>
                Built for the<br />
                <em>modern shopper</em>
              </h2>
              <p ref={addRef} className="fade-up" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15, lineHeight: 1.9, color: '#6b7280',
                fontWeight: 300, marginBottom: 20,
              }}>
                ShopSphere started in 2024 with a single mission: to create an online fashion destination that truly understands the Indian shopper. We saw a gap — beautiful traditional wear and quality modern fashion was scattered across hundreds of disconnected websites.
              </p>
              <p ref={addRef} className="fade-up" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15, lineHeight: 1.9, color: '#6b7280',
                fontWeight: 300, marginBottom: 32,
              }}>
                So we built ShopSphere — one platform where sarees meet sneakers, where kurtas share space with activewear, and where every Indian shopper can find their personal style without compromise.
              </p>
              <div ref={addRef} className="fade-up" style={{
                borderLeft: '2px solid #4f46e5', paddingLeft: 20,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20, fontStyle: 'italic', color: '#374151',
              }}>
                "Fashion is not just clothing — it's the story you choose to tell the world."
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ background: '#f9fafb', padding: '100px 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <p ref={addRef} className="fade-up" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, letterSpacing: '0.3em', color: '#4f46e5',
                textTransform: 'uppercase', marginBottom: 16,
              }}>What We Stand For</p>
              <h2 ref={addRef} className="fade-up" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 48, fontWeight: 300, color: '#111', margin: 0,
              }}>Our Core Values</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {values.map((v, i) => (
                <div
                  key={i}
                  ref={addRef}
                  className="fade-up value-card"
                  style={{
                    background: '#fff', padding: '36px 28px',
                    border: '1px solid #e5e7eb', borderRadius: 4,
                    transition: 'all 0.35s ease', cursor: 'default',
                  }}
                >
                  <div className="val-icon" style={{
                    fontSize: 28, color: '#9ca3af', marginBottom: 20,
                    display: 'inline-block', transition: 'all 0.3s ease',
                  }}>{v.icon}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22, fontWeight: 400, margin: '0 0 12px', color: '#111',
                  }}>{v.title}</h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14, lineHeight: 1.8, color: '#6b7280',
                    margin: 0, fontWeight: 300,
                  }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section style={{ padding: '100px 80px', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p ref={addRef} className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, letterSpacing: '0.3em', color: '#4f46e5',
              textTransform: 'uppercase', marginBottom: 16,
            }}>The People Behind It</p>
            <h2 ref={addRef} className="fade-up" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 48, fontWeight: 300, color: '#111', margin: 0,
            }}>Meet Our Team</h2>
          </div>
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center' }}>
            {team.map((t, i) => (
              <div
                key={i}
                ref={addRef}
                className="fade-up team-card"
                style={{ textAlign: 'center', cursor: 'default' }}
              >
                <div
                  className="team-avatar"
                  style={{
                    width: 120, height: 120, borderRadius: '50%',
                    background: t.color, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 44, color: '#fff', fontWeight: 300,
                    transition: 'transform 0.3s ease',
                    boxShadow: `0 12px 32px ${t.color}44`,
                  }}
                >
                  {t.initial}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22, fontWeight: 400, color: '#111', marginBottom: 6,
                }}>{t.name}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, color: '#9ca3af',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CATEGORIES STRIP ── */}
        <section style={{ background: '#111', padding: '48px 80px', overflow: 'hidden' }}>
          <div style={{
            display: 'flex', gap: 40, alignItems: 'center',
            animation: 'none',
          }}>
            {['Men\'s Fashion', 'Women\'s Fashion', 'Traditional Wear', 'Activewear', 'Accessories', 'New Arrivals', 'Sarees', 'Kurtas', 'Jackets', 'Watches'].map((cat, i) => (
              <span
                key={i}
                onClick={() => navigate('/')}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18, color: i % 3 === 0 ? '#818cf8' : '#9ca3af',
                  whiteSpace: 'nowrap', cursor: 'pointer',
                  transition: 'color 0.2s',
                  fontStyle: i % 2 === 0 ? 'italic' : 'normal',
                }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = i % 3 === 0 ? '#818cf8' : '#9ca3af'}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          padding: '100px 80px', textAlign: 'center',
          background: 'linear-gradient(135deg, #eef2ff 0%, #fafaf8 50%, #ecfdf5 100%)',
        }}>
          <p ref={addRef} className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, letterSpacing: '0.3em', color: '#4f46e5',
            textTransform: 'uppercase', marginBottom: 20,
          }}>Join The Community</p>
          <h2 ref={addRef} className="fade-up" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 56, fontWeight: 300, color: '#111',
            margin: '0 0 20px', lineHeight: 1.1,
          }}>
            Ready to discover<br />
            <em>your style?</em>
          </h2>
          <p ref={addRef} className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, color: '#6b7280', marginBottom: 40,
            fontWeight: 300, maxWidth: 400, margin: '0 auto 40px',
          }}>
            Thousands of styles. One destination. ShopSphere.
          </p>
          <button
            ref={addRef}
            className="fade-up shop-btn"
            onClick={() => navigate('/')}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: '#4f46e5', color: '#fff',
              border: 'none', padding: '16px 48px',
              fontSize: 15, fontWeight: 500, letterSpacing: '0.08em',
              cursor: 'pointer', borderRadius: 2,
              transition: 'all 0.3s ease',
            }}
          >
            Start Shopping →
          </button>
        </section>

        {/* ── FOOTER NOTE ── */}
        <div style={{
          background: '#111', padding: '24px 80px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18, color: '#fff', fontWeight: 300,
          }}>ShopSphere</span>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, color: '#6b7280', letterSpacing: '0.1em',
          }}>© 2024 ShopSphere. All rights reserved.</span>
        </div>

      </div>
    </div>
  );
};

export default Company;