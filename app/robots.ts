import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Example of hiding private folders
    },
    sitemap: 'https://roadhouse.lk/sitemap.xml',
  }
}
