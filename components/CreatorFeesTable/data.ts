import { APP_ROUTES } from 'config'

export const DATA = {
  headers: [
    {
      title: 'NSFW.app',
      cost: '0%',
      costLabel: 'Commission',
      action: {
        label: 'sign up',
        link: APP_ROUTES.CREATOR_SIGNUP,
      },
      selected: true,
      subText: 'Some subtext..',
    },
    {
      title: 'OnlyFans',
      cost: '35%',
      costLabel: 'Commission',
      // action: 'sign up',
      // subText: 'Billed annually',
    },
    {
      title: 'WetSpace',
      cost: '15%',
      costLabel: 'Commission',
      // action: 'sign up',
      // subText: 'Billed annually',
    },
  ],
  groups: [
    {
      label: 'Usage',
      rows: [
        [
          { label: 'Users' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'File upload size' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'File upload volume' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'Issues' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
      ],
    },
    {
      label: 'Features',
      rows: [
        [
          { label: 'Users' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'File upload size' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'File upload volume' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
        [
          { label: 'Issues' },
          { label: 'unlimited', icon: 'Tick' },
          { label: 'unlimited', icon: 'Tick' },
        ],
      ],
    },
  ],
}
