import { KnownIcon } from '@nsfw-app/ui/dist/components/Icon'
import { APP_ROUTES } from 'config'
import { NSFW_EVENT } from 'lib/analytics'

interface Header {
  title?: string
  cost?: string
  costLabel?: string
  action?: {
    label: string
    link: string
    track?: NSFW_EVENT
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
      costLabel: 'commission',
      action: {
        label: 'sign up',
        link: APP_ROUTES.CREATOR_SIGNUP,
        track: NSFW_EVENT.FEES_SIGNUP,
      },
      selected: true,
    },
    {
      title: 'Other platforms',
      cost: '15-35%',
      costLabel: 'commission',
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
          { label: 'Settlement period' },
          { label: 'Minutes' },
          { label: 'Days' },
        ],
        [{ label: 'Chargebacks' }, { label: 'No' }, { label: 'Yes' }],
        [
          { label: 'Pro features' },
          { label: 'Soon™', labelColor: '$gold100' },
          { label: 'No' },
        ],
      ],
    },
    {
      label: 'Features',
      rows: [
        [
          { label: 'Unlock exclusive posts' },
          { icon: 'Tick' },
          { icon: 'Tick' },
        ],
        [{ label: 'Receive tips' }, { icon: 'Tick' }, { icon: 'Tick' }],
        [{ label: 'Create subscriptions' }, { icon: 'Tick' }, { icon: 'Tick' }],
        [
          { label: 'Direct messaging' },
          { label: 'Soon™', labelColor: '$gold100' },
          { icon: 'Tick' },
        ],
        [
          { label: 'Secret 1' },
          { label: 'Soon™', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
        [
          { label: 'Secret 2' },
          { label: 'Soon™', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
        [
          { label: 'Secret 3' },
          { label: 'Soon™', labelColor: '$gold100' },
          { icon: 'Cross' },
        ],
      ],
    },
  ],
}
