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
  emoji?: string
}

const EmojIcon = Stitches.styled(Flex, {
  padding: '10px',
  justifyContent: 'center',
  backgroundColor: '$gray100',
  borderRadius: '100%',
  border: '1px solid $gray500',
  width: '40px',
  height: '40px',
  alignItems: 'center',
})

export const FeatureCard: React.FC<Stitches.CSSProp & FeatureCardProps> = ({
  icon = 'Asterisk',
  heading,
  body,
  primaryLink,
  secondaryLink,
  emoji,
  css,
}) => {
  return (
    <Grid
      css={{
        backgroundColor: '$gray400',
        borderRadius: '8px',
        padding: '36px 28px 36px 36px',
        gridGap: '26px',
        gridTemplateColumns: '30px auto',
        alignItems: 'start',
        ...css,
      }}
    >
      {/* <Icon icon={icon} css={{ width: '30px', height: '30px' }} /> */}
      <EmojIcon>{emoji}</EmojIcon>

      <div>
        <Heading
          as='h5'
          css={{
            marginBottom: '20px',
            marginTop: '4px',
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
