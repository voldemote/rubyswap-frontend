import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'RUBY',
    lpAddresses: {
      1987: '0xB6094af67bf43779ab704455c5DF02AD9141871B',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.gem,
    quoteToken: tokens.wegem,
  },
  {
    pid: 2,
    lpSymbol: 'RUBY-EGEM LP',
    lpAddresses: {
      1987: '0x01fe4fB380fdECc9F555E5Be4E73aA89B65C8243',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.ruby,
    quoteToken: tokens.wegem,
  }
]

export default farms
