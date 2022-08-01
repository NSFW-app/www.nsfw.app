import {
  Stitches,
  Grid,
  Flex,
  Text,
  Heading,
  Icon,
  IconProps,
} from '@nsfw-app/ui'
import { Link } from 'components/Link'

export interface FeatureCardProps {
  icon?: IconProps['icon']
  heading: string
  body: string
  primaryLink?: string
  secondaryLink?: string
}

export const FeatureCard: React.FC<Stitches.CSSProp & FeatureCardProps> = ({
  icon = 'Asterisk',
  heading,
  body,
  primaryLink,
  secondaryLink,
  css,
}) => {
  return (
    <Grid
      css={{
        backgroundColor: '$gray400',
        borderRadius: '8px',
        padding: '36px 28px 36px 36px',
        gridGap: '16px',
        gridTemplateColumns: '30px auto',
        alignItems: 'start',
        ...css,
      }}
    >
      <Icon icon={icon} css={{ width: '30px', height: '30px' }} />
      <div>
        <Heading
          as='h5'
          css={{
            marginBottom: '20px',
          }}
        >
          {heading}
        </Heading>
        <Text
          type='body2'
          subText
          css={{ marginBottom: '20px', wordSpacing: 0 }}
        >
          {body}
        </Text>
        <Flex css={{ backgroundColor: '$gray400' }}>
          {primaryLink && (
            <Link href='#' css={{ marginRight: '33px' }}>
              {primaryLink}
            </Link>
          )}
          {secondaryLink && (
            <Link href='#' theme='secondary'>
              {secondaryLink}
            </Link>
          )}
        </Flex>
      </div>
    </Grid>
  )
}
