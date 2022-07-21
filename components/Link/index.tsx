import { forwardRef } from 'react'
import NextJsLink, { LinkProps as NextJsLinkProps } from 'next/link'
import { ComponentProps } from '@stitches/react'
import { Anchor } from '@nsfw-app/ui'

export type LinkProps = NextJsLinkProps &
  ComponentProps<typeof Anchor> & { disabled?: boolean }

// Next.js Link wrapper implementing Anchor primitive.
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      // Props for Next Link
      href,
      passHref = true,
      prefetch = false,
      replace,
      scroll,
      shallow,
      // Props for Link SC
      css,
      theme,
      button,
      round,
      pill,
      icon,
      active,
      onClick,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <NextJsLink
        href={href}
        passHref={passHref}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <Anchor
          css={{
            lineHeight: '24px',
            fontSize: '14px',
            ...css,
          }}
          theme={theme}
          button={button}
          round={round}
          icon={icon}
          pill={pill}
          active={active}
          ref={ref}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {children}
        </Anchor>
      </NextJsLink>
    )
  }
)

Link.displayName = 'Link'
