/** @type {import('@docusaurus/preset-classic').ThemeConfig['navbar']} */
module.exports = {
  title: '',
  logo: {
    alt: 'TON',
    src: 'img/ton_logo_light_background.svg',
    srcDark: 'img/ton_logo_dark_background.svg',
  },
  items: [
    {
      type: 'dropdown',
      to: '/learn/introduction',
      position: 'left',
      label: 'Concepts',
      items: [
        {
          to: '/learn/introduction',
          label: 'Introduction to TON',
        },
        {
          to: '/v3/concepts/dive-into-ton/ton-blockchain/blockchain-of-blockchains',
          label: 'Blockchain of Blockchains',
        },
        {
          to: '/v3/concepts/dive-into-ton/ton-blockchain/smart-contract-addresses',
          label: 'Smart Contract Addresses',
        },
        {
          to: '/v3/concepts/dive-into-ton/ton-blockchain/cells-as-data-storage',
          label: 'Cells as a Data Structure',
        },
        {
          to: '/v3/concepts/dive-into-ton/ton-blockchain/ton-networking',
          label: 'TON Networking',
        },
      ],
    },
    // TODO: extract tutorials page!!!
    // {
    //   type: 'dropdown',
    //   to: '/develop/overview',
    //   position: 'left',
    //   label: 'Get Started',
    //   items: [
    //     {
    //       to: '/develop/overview',
    //       label: 'Start with Onboarding Tutorials',
    //     },
    //   ],
    // },
    {
      type: 'dropdown',
      to: 'develop/dapps',
      position: 'left',
      label: 'DApps',
      items: [
        {
          to: '/develop/dapps/telegram-apps/',
          label: 'Telegram Mini Apps (TMAs)',
        },
        {
          to: 'develop/dapps/apis/sdk',
          label: 'APIs and SDKs',
        },
        {
          to: '/v3/guidelines/dapps/asset-processing/payments-processing',
          label: 'Payment Processing',
        },
        {
          to: 'develop/dapps/asset-processing/jettons',
          label: 'Jetton Processing',
        },
        {
          to: '/v3/guidelines/dapps/tutorials/mint-your-first-token',
          label: 'Mint your Tokens',
        },
        {
          to: '/v3/guidelines/dapps/tutorials/nft-minting-guide',
          label: 'Mint your NFTs',
        },
        {
          to: '/develop/dapps/cookbook',
          label: 'Cookbook',
        },
      ],
    },
    {
      type: 'dropdown',
      to: 'develop/smart-contracts/',
      position: 'left',
      label: 'Smart Contracts',
      items: [
        {
          to: '/participate/wallets/contracts',
          label: 'Wallets',
        },
        {
          to: '/develop/smart-contracts/messages',
          label: 'Sending Messages',
        },
        {
          to: 'develop/smart-contracts/fees',
          label: 'Transaction Fees',
        },
        {
          to: 'develop/func/overview',
          label: 'FunC Development Language',
        },
        {
          to: 'develop/func/cookbook',
          label: 'FunC Cookbook',
        },
        {
          to: '/develop/data-formats/cell-boc',
          label: 'Data formats',
        },
        {
          to: 'learn/tvm-instructions/tvm-overview',
          label: 'TON Virtual Machine (TVM)',
        },
        {
          to: 'develop/smart-contracts/guidelines',
          label: 'Best Practices for Contracts',
        },
      ],
    },
    {
      type: 'dropdown',
      to: 'participate/nodes/node-types',
      position: 'left',
      label: 'Nodes',
      items: [
        {
          to: '/participate/run-nodes/mytonctrl',
          label: 'Manage Blockchain Nodes',
        },
        {
          to: '/v3/guidelines/nodes/nodes-troubleshooting',
          label: 'Troubleshooting the Node',
        },
        {
          to: '/participate/network-maintenance/single-nominator',
          label: 'Single Nominator Pool',
        },
        {
          to: '/participate/network-maintenance/nominator-pool',
          label: 'Nominator Pool',
        },
        {
          to: '/v3/guidelines/nodes/running-nodes/archive-node', // TODO: add article
          label: 'Running Nodes',
        },
        {
          to: '/v3/guidelines/nodes/faq',
          label: 'FAQ',
        },
      ],
    },
    {
      type: 'dropdown',
      to: 'v3/guidelines/overview',
      label: 'Guidelines',
      position: 'left',
      items: [
        {
          to: '/develop/smart-contracts/guidelines',
          label: 'Smart Contracts',
        },
        {
          to: '/develop/dapps/',
          label: 'DApps',
        },
        {
          to: 'v3/guidelines/nodes/overview',
          label: 'Nodes'
        },
        {
          to: 'develop/dapps/ton-connect/overview',
          label: 'Integrate with TON'
        },
        {
          to: 'v3/guidelines/web3/overview',
          label: 'Web3',
        },
      ]
    },
    {
      type: 'dropdown',
      to: '/develop/overview',
      label: 'Documentation',
      position: 'left',
      items: [
        {
          to: 'develop/smart-contracts/',
          label: 'Smart Contracts',
        },
        {
          to: 'learn/tvm-instructions/tvm-overview',
          label: 'TON Virtual Machine (TVM)',
        },
        {
          to: 'participate/nodes/node-types',
          label: 'Nodes'
        },
        {
          to: 'develop/dapps/defi/coins', // TODO: add page
          label: 'DApps',
        },
        {
          to: '/develop/data-formats/cell-boc',
          label: 'Data Formats',
        },
        {
          to: 'learn/networking/low-level-adnl',
          label: 'Networking'
        },
        {
          to: 'learn/docs',
          label: 'Whitepapers',
        },
      ]
    },
    {
      type: 'dropdown',
      label: 'Resources',
      position: 'left',
      items: [
        {
          to: 'https://tonresear.ch/',
          label: 'TON Research',
        },
        {
          to: 'https://t.me/addlist/1r5Vcb8eljk5Yzcy',
          label: 'TON Developers Kit',
        },
        {
          to: 'https://github.com/ton-blockchain/TEPs',
          label: 'Standards Discussion (TEPs)',
        },
      ],
    },
    {
      to: 'contribute',
      position: 'right',
      className: 'header-contribute-link',
      'aria-label': 'Contribute',
    },
    {
      href: 'https://github.com/ton-community/ton-docs',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsAfter: [
        {
          type: 'html',
          value: '<hr style="margin: 0.3rem 0;">',
        },
        {
          href: "/contribute/localization-program/overview",
          label: 'Help Us Translate',
        },
      ],
    },
  ],
};
