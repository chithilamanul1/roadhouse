import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '2px solid #ff5722',
        }}
      >
        <div style={{ color: '#ff5722', fontFamily: 'sans-serif', fontWeight: 900, fontSize: '20px', marginTop: '-2px' }}>
          R
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}