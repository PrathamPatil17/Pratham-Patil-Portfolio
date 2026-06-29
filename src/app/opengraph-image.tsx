import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pratham Patil – Generative AI Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#090912',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Emerald glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            left: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(34,199,122,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Subtle glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-60px',
            width: '360px',
            height: '360px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(34,199,122,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Dot grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(34,199,122,0.10) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0px' }}>

          {/* Available badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(34,199,122,0.1)',
              border: '1px solid rgba(34,199,122,0.25)',
              borderRadius: '9999px',
              padding: '6px 16px',
              width: 'fit-content',
              marginBottom: '32px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '9999px', background: '#22C77A' }} />
            <span style={{ color: '#22C77A', fontSize: '14px', fontWeight: 600, letterSpacing: '0.05em' }}>
              Available for opportunities
            </span>
          </div>

          {/* Hi I'm */}
          <span style={{ color: 'rgba(240,240,246,0.5)', fontSize: '22px', fontWeight: 400, marginBottom: '8px', letterSpacing: '0.05em' }}>
            Hi, I&apos;m
          </span>

          {/* Name */}
          <span
            style={{
              fontSize: '88px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #22C77A 0%, #1fcfbc 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Pratham Patil
          </span>

          {/* Role chips */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <div
              style={{
                background: 'rgba(34,199,122,0.1)',
                border: '1px solid rgba(34,199,122,0.25)',
                borderRadius: '9999px',
                padding: '8px 20px',
                color: '#22C77A',
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              AI / ML Engineer
            </div>
            <div
              style={{
                background: 'rgba(240,240,246,0.05)',
                border: '1px solid rgba(240,240,246,0.12)',
                borderRadius: '9999px',
                padding: '8px 20px',
                color: 'rgba(240,240,246,0.6)',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              Software Developer
            </div>
          </div>

          {/* URL */}
          <span style={{ color: 'rgba(240,240,246,0.35)', fontSize: '18px', letterSpacing: '0.02em' }}>
            prathampatil.me
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
