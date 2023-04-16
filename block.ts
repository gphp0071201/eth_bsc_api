import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION, CLOSEST } from './enum'

export class BlockModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.BLOCK)
  }

  // Get Block And Uncle Rewards by BlockNo
  public async getBlockAndUncleRewardsbyBlockNo(blockno: number): Promise<any> {
    const { result } = await this.get(ACTION.GET_BLOCK_REWARD, {
      blockno,
    })
    return result
  }

  // Get Estimated Block Countdown Time by BlockNo
  public async getEstimatedBlockCountdownTimeByBlockNo(
    blockno: number
  ): Promise<any> {
    const { result } = await this.get(ACTION.GET_BLOCK_COUNTDOWN, {
      blockno,
    })
    return result
  }

  /**
   * Returns the block number that was mined at a certain timestamp
   * @param {number} timestamp the integer representing the Unix timestamp in seconds.
   * @param {CLOSEST} closest the closest available block to the provided timestamp
   * @returns Returns the block number that was mined at a certain timestamp
   */
  public async getBlockNoByTimestamp(
    timestamp: number,
    closest: CLOSEST = CLOSEST.BEFORE
  ) {
    const { result } = await this.get(ACTION.GET_BLOCKNO_BY_TIME, {
      timestamp,
      closest,
    })
    return result
  }
}
