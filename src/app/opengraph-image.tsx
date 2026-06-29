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
            width: '500px',
            height: '500px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(34,199,122,0.20) 0%, transparent 70%)',
          }}
        />
        {/* Glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-60px',
            width: '380px',
            height: '380px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(34,199,122,0.10) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>

          {/* Available badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(34,199,122,0.10)',
              border: '1px solid rgba(34,199,122,0.25)',
              borderRadius: '9999px',
              padding: '6px 18px',
              width: 'fit-content',
              marginBottom: '36px',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '9999px', background: '#22C77A' }} />
            <span style={{ color: '#22C77A', fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em' }}>
              Available for opportunities
            </span>
          </div>

          {/* Hi I'm */}
          <span style={{ color: 'rgba(240,240,246,0.45)', fontSize: '24px', fontWeight: 400, marginBottom: '10px', letterSpacing: '0.04em' }}>
            Hi, I&apos;m
          </span>

          {/* Name — solid emerald, no gradient (gradient not supported in next/og) */}
          <span
            style={{
              fontSize: '90px',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '28px',
              color: '#22C77A',
            }}
          >
            Pratham Patil
          </span>

          {/* Role chips */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            <div
              style={{
                background: 'rgba(34,199,122,0.10)',
                border: '1px solid rgba(34,199,122,0.25)',
                borderRadius: '9999px',
                padding: '8px 22px',
                color: '#22C77A',
                fontSize: '20px',
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
                padding: '8px 22px',
                color: 'rgba(240,240,246,0.55)',
                fontSize: '20px',
                fontWeight: 500,
              }}
            >
              Software Developer
            </div>
          </div>

          {/* URL */}
          <span style={{ color: 'rgba(240,240,246,0.30)', fontSize: '18px', letterSpacing: '0.02em' }}>
            prathampatil.me
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
