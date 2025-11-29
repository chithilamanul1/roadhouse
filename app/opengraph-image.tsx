import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Road House Seeduwa'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          backgroundImage: 'radial-gradient(circle at 50% 100%, #1a0a0a, #000)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 1. BACKGROUND GRID (The Tech Texture) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 87, 34, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 87, 34, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3,
          }}
        />

        {/* 2. BORDER DECORATIONS (The Frame) */}
        <div style={{ position: 'absolute', top: 40, left: 40, width: 20, height: 20, borderTop: '4px solid #ff5722', borderLeft: '4px solid #ff5722' }} />
        <div style={{ position: 'absolute', top: 40, right: 40, width: 20, height: 20, borderTop: '4px solid #ff5722', borderRight: '4px solid #ff5722' }} />
        <div style={{ position: 'absolute', bottom: 40, left: 40, width: 20, height: 20, borderBottom: '4px solid #ff5722', borderLeft: '4px solid #ff5722' }} />
        <div style={{ position: 'absolute', bottom: 40, right: 40, width: 20, height: 20, borderBottom: '4px solid #ff5722', borderRight: '4px solid #ff5722' }} />

        {/* 3. TOP META DATA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '900px', fontSize: 24, color: '#666', marginBottom: 40, fontFamily: 'monospace' }}>
            <span>EST. 2025</span>
            <span style={{ color: '#ff5722' }}>● LIVE FEED</span>
            <span>SEEDUWA</span>
        </div>

        {/* 4. MAIN TYPOGRAPHY */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: 'scale(1.2)' }}>
            
            {/* "ROAD" - Outlined / Ghost Effect */}
            <div style={{ 
                fontSize: 160, 
                lineHeight: 0.8,
                fontWeight: 900, 
                color: 'transparent',
                textShadow: '0 0 2px white', // Simulates outline
                letterSpacing: '-0.05em',
                textTransform: 'uppercase'
            }}>
                ROAD
            </div>

            {/* "HOUSE" - Solid Orange Block */}
            <div style={{ 
                fontSize: 160, 
                lineHeight: 0.8,
                fontWeight: 900, 
                color: '#050505',
                backgroundColor: '#ff5722',
                padding: '0 20px',
                marginTop: -10,
                transform: 'skewX(-10deg)',
                letterSpacing: '-0.05em',
                textTransform: 'uppercase'
            }}>
                HOUSE
            </div>
        </div>

        {/* 5. BOTTOM INFO */}
        <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 28, color: 'white', letterSpacing: '0.3em', fontWeight: 700, textTransform: 'uppercase' }}>
                PREMIUM GRILL & CAFE
            </div>
            <div style={{ marginTop: 10, fontSize: 18, color: '#444', fontFamily: 'monospace' }}>
                24 KOTUGODA RD // SEEDUWA
            </div>
        </div>

      </div>
    ),
    {
      ...size,
    }
  )
}
