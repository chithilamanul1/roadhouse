import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Road House Seeduwa',
    short_name: 'Road House',
    description: 'Premium Grill & Cafe in Seeduwa. Opening Dec 2025.',
    start_url: '/',
    display: 'standalone', // Removes browser UI
    background_color: '#050505',
    theme_color: '#ff5722',
    icons: [
      {
        src: '/logo-full.png', // Ensure this matches your logo path
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-full.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
