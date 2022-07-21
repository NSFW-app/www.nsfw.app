// App
export const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN

// GraphCMS
export const GRAPHCMS_CONTENT_API_URL =
  process.env.NEXT_GRAPHCMS_CONTENT_API_URL ?? ''

export * from './seo'
export * from './layout'
export * from './links'
export * from './routes'