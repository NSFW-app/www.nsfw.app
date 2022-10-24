import { BlopGreen } from 'components/About/Icons/Blops/BlopGreen'
import { BlopOrange } from 'components/About/Icons/Blops/BlopOrange'
import { BlopPink } from 'components/About/Icons/Blops/BlopPink'
import { BlopPurple } from 'components/About/Icons/Blops/BlopPurple'
import { BlopYellow } from 'components/About/Icons/Blops/BlopYellow'

interface CreatorFeedbackProps {
  name: string
  avatar: string
  lastSeen: string
  href: string
  bio: string
  backgroundImg: React.ReactNode
}

export const CreatorsData: CreatorFeedbackProps[] = [
  {
    name: 'GoddessGrey',
    avatar: '/svg/avatar.svg',
    lastSeen: '3 months',
    href: '#',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Montes nasceturridiculus mus mauris vitae ultricies.',
    backgroundImg: <BlopYellow css={{ height: '100%' }} />,
  },

  {
    name: 'GoddessGrey',
    avatar: '/svg/avatar.svg',
    lastSeen: '3 months',
    href: '#',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Montes nasceturridiculus mus mauris vitae ultricies.',
    backgroundImg: <BlopOrange css={{ height: '100%' }} />,
  },

  {
    name: 'GoddessGrey',
    avatar: '/svg/avatar.svg',
    lastSeen: '3 months',
    href: '#',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Montes nasceturridiculus mus mauris vitae ultricies.',
    backgroundImg: <BlopGreen css={{ height: '100%' }} />,
  },

  {
    name: 'GoddessGrey',
    avatar: '/svg/avatar.svg',
    lastSeen: '3 months',
    href: '#',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Montes nasceturridiculus mus mauris vitae ultricies.',
    backgroundImg: <BlopPurple css={{ height: '100%' }} />,
  },

  {
    name: 'GoddessGrey',
    avatar: '/svg/avatar.svg',
    lastSeen: '3 months',
    href: '#',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis molestie a iaculis at erat pellentesque adipiscing. Montes nasceturridiculus mus mauris vitae ultricies.',
    backgroundImg: <BlopPink css={{ height: '100%' }} />,
  },
]
