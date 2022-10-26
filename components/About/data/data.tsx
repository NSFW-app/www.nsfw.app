import { BlockCardProps } from '../components/Block/BlockCard'
import { StructureBlockProps } from '../components/Block/StructureBlockCard'
import { BlopPink } from '../../Icons/Blops/BlopPink'
import { BlopPurple } from '../../Icons/Blops/BlopPurple'
import { BlopYellow } from '../../Icons/Blops/BlopYellow'

export const serviceData: BlockCardProps[] = [
  {
    body:
      'We support the right of (legal) freedom of expression, without corporate and federal oversight.',
    gradient:
      'linear-gradient(248.77deg, rgba(59, 172, 236, 0.1) 1.24%, rgba(52, 152, 209, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    blopIcon: <BlopPurple css={{ height: '100%' }} />,
  },
  {
    body:
      'We support the right of (legal) freedom of expression, without corporate and federal oversight.',
    gradient:
      'linear-gradient(248.77deg, rgba(251, 194, 47, 0.1) 1.24%, rgba(251, 194, 47, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    blopIcon: <BlopYellow css={{ height: '100%' }} />,
  },
  {
    body:
      'We support the right of (legal) freedom of expression, without corporate and federal oversight.',
    gradient:
      'linear-gradient(248.77deg, rgba(233, 75, 75, 0.15) 1.24%, rgba(233, 75, 75, 0.132813) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    blopIcon: <BlopPink css={{ height: '100%' }} />,
  },
]

export const structureData: StructureBlockProps[] = [
  {
    heading: 'OKR',
    subheading:
      'Aliquam a velit tellus. Nunc interdum, tellus semper pulvinar mollis, mi nibh cursus dui, et accumsan ipsum nulla id massa. ',
    gradient:
      'linear-gradient(248.77deg, rgba(59, 172, 236, 0.1) 1.24%, rgba(52, 152, 209, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    bullets: [
      'Morbi id odio at mi finibus scelerisque eget et purus.',

      'Cras rutrum tortor eget lacus vestibulum, id euismod est aliquet.',

      'Nullam orci lorem, maximus in condimentum efficitur, condimentum sed tellus',
    ],
    href: '#',
    emoji: '🎯',
  },
  {
    heading: '#standups',
    subheading:
      'Aliquam a velit tellus. Nunc interdum, tellus semper pulvinar mollis, mi nibh cursus dui, et accumsan ipsum nulla id massa. ',
    gradient:
      'linear-gradient(248.77deg, rgba(233, 75, 75, 0.15) 1.24%, rgba(233, 75, 75, 0.132813) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    bullets: [
      'Morbi id odio at mi finibus scelerisque eget et purus.',

      'Cras rutrum tortor eget lacus vestibulum, id euismod est aliquet.',

      'Nullam orci lorem, maximus in condimentum efficitur, condimentum sed tellus',
    ],
    href: '#',
    emoji: '👾',
  },
  {
    heading: '#planning',
    subheading:
      'Aliquam a velit tellus. Nunc interdum, tellus semper pulvinar mollis, mi nibh cursus dui, et accumsan ipsum nulla id massa. ',
    gradient:
      'linear-gradient(248.77deg, rgba(251, 194, 47, 0.1) 1.24%, rgba(251, 194, 47, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    bullets: [
      'Morbi id odio at mi finibus scelerisque eget et purus.',

      'Cras rutrum tortor eget lacus vestibulum, id euismod est aliquet.',

      'Nullam orci lorem, maximus in condimentum efficitur, condimentum sed tellus',
    ],
    href: '#',
    emoji: '👾',
  },
  {
    heading: 'Townhalls',
    subheading:
      'Aliquam a velit tellus. Nunc interdum, tellus semper pulvinar mollis, mi nibh cursus dui, et accumsan ipsum nulla id massa. ',
    body:
      'These recordings are made avaliable to provide transparent project updates so users can catch up in their own time.',
    gradient:
      'linear-gradient(248.77deg, rgba(59, 172, 236, 0.1) 1.24%, rgba(52, 152, 209, 0.0885417) 44.85%, rgba(0, 0, 0, 0) 104.62%)',
    bullets: [
      'Morbi id odio at mi finibus scelerisque eget et purus.',

      'Cras rutrum tortor eget lacus vestibulum, id euismod est aliquet.',

      'Nullam orci lorem, maximus in condimentum efficitur, condimentum sed tellus',
    ],
    href: '#',
    emoji: '🏛',
  },
]
