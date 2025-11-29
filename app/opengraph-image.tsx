import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Road House Seeduwa'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          textTransform: 'uppercase',
          border: '20px solid #ff5722', // Orange Border
        }}
      >
        {/* Main Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>ROAD</span>
            <span style={{ color: '#ff5722' }}>HOUSE</span>
        </div>

        {/* Subtitle */}
        <div 
            style={{ 
                fontSize: 32, 
                marginTop: 20, 
                background: '#ff5722', 
                color: 'black', 
                padding: '10px 40px',
                fontWeight: 900,
                letterSpacing: '0.2em'
            }}
        >
            SEEDUWA
        </div>

        {/* Status */}
        <div style={{ fontSize: 24, marginTop: 40, color: '#666', letterSpacing: '0.1em' }}>
            PREMIUM GRILL & CAFE
        </div>
      </div>
    ),
    {
  
    }
  )
}
