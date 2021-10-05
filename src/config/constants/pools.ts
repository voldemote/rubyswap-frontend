import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.ruby,
    earningToken: tokens.ruby,
    contractAddress: {
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E', // MasterChef Address
      1987: '0x24032900bBa1Ef1CB822Df299548Efb222E05614'
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
