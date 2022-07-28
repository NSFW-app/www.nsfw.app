import { KnownIcon } from '@nsfw-app/ui/dist/components/Icon'
import { APP_ROUTES } from 'config'

interface Header {
  title?: string
  cost?: string
  costLabel?: string
  action?: {
    label: string
    link: string
  }
  selected?: true
  subText?: string
}

interface Row {
  label?: string
  labelColor?: string
  icon?: KnownIcon
  iconColor?: string
}

interface Group {
  label?: string
  rows: Row[][]
}

interface Data {
  headers: Header[]
  groups: Group[]
}

export const DATA: Data = {
  headers: [
    {}, // empty first header column
    {
      title: 'NSFW.app',
      cost: '0%',
      costLabel: 'Commissions',
      action: {
        label: 'sign up',
        link: APP_ROUTES.CREATOR_SIGNUP,
      },
      selected: true,
    },
    {
      title: 'Other platforms',
      cost: '15-35%',
      costLabel: 'Commission',
    },
  ],
  groups: [
    {
      label: 'Fees',
      rows: [
        [
          { label: 'Minimum withdrawal' },
          { label: '$30' },
          { label: '$20 - $100' },
        ],
        [
          { label: 'Settlement Period' },
          { label: 'Minutes' },
          { label: 'Days' },
        ],
        [{ label: 'Chargebacks' }, { label: 'No' }, { label: 'Yes' }],
      ],
    },
    {
      label: 'Features',
      rows: [
        [
          { label: 'Unlock Exclusive Posts' },
          { icon: 'Tick' },
          { icon: 'Tick' },
        ],
        [{ label: 'Tip Profiles' }, { icon: 'Tick' }, { icon: 'Tick' }],
        [{ label: 'Subscribe To Content' }, { icon: 'Tick' }, { icon: 'Tick' }],
        [
          { label: 'Direct Messaging' },
          { label: 'Soon', labelColor: '$gold100' },
          { icon: 'Tick' },
        ],
        [
          { label: 'Secret 1' },
          { label: 'Soon', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
        [
          { label: 'Secret 2' },
          { label: 'Soon', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
        [
          { label: 'Secret 3' },
          { label: 'Soon', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
      ],
    },
  ],
}
