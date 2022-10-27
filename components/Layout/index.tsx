import { useRouter } from 'next/router'
import { Stitches, Box } from '@nsfw-app/ui'
import Nexthead from 'next/head'
import {
  DEFAULT_META_IMG,
  SITE_DOMAIN,
  DEFAULT_META_DESC,
  DEFAULT_META_TITLE,
  sizes,
} from 'config'
import { Navigation } from 'components/Navigation'
import { Footer } from 'components/Footer'

export interface SeoProps {
  metaTitle?: string
  metaDesc?: string
  metaImg?: string
  // All pages (including the canonical page) should contain a canonical tag to prevent any
  // possible duplication. https://www.deepcrawl.com/blog/best-practice/canonical-tags-easy-dos-donts
  // This is marked as optional as PaginationControls cmp sets the canonical on paginated pages.
  canonicalUrl?: string
  // Still expose the the full OG API as an object incase that's more intuitive for the implementor
  og?: {
    url?: string
    title?: string
    desc?: string
    image?: string
  }
}

export interface LayoutProps
  extends Stitches.ComponentProps<typeof Box>,
    SeoProps {}

export const Layout: React.FC<LayoutProps> = ({
  metaTitle = DEFAULT_META_TITLE,
  metaDesc = DEFAULT_META_DESC,
  metaImg = DEFAULT_META_IMG,
  canonicalUrl,
  og,
  children,
  css,
  ...props
}) => {
  const { asPath } = useRouter() || {}
  return (
    <Box>
      <Nexthead>
        <title>{metaTitle}</title>
        <meta charSet='utf-8' />
        {/* <meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0'
        ></meta>
        {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
        {metaDesc && <meta name='description' content={metaDesc} />}
        <meta
          property='og:url'
          content={og?.url || canonicalUrl || `${SITE_DOMAIN}${asPath}`}
        />
        <meta property='og:title' content={og?.title || metaTitle} />
        <meta property='twitter:title' content={og?.title || metaTitle} />
        <meta property='og:description' content={og?.desc || metaDesc} />
        <meta property='twitter:description' content={og?.desc || metaDesc} />
        <meta property='og:image' content={og?.image || metaImg} />
        <meta property='twitter:image' content={og?.image || metaImg} />
        <meta content='summary_large_image' name='twitter:card' />
      </Nexthead>
      <Navigation />
      <Box
        css={{ ...css, minHeight: `calc(100vh - ${sizes.footerHeight})` }}
        {...props}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
