import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION, CLIENT_TYPE, SYNC_MODE, SORT, PLATFORM } from './enum'

interface BaseQueryParams {
  startdate: string
  enddate: string
  sort: SORT
}

interface NodeQueryParams extends BaseQueryParams {
  clienttype: CLIENT_TYPE
  syncmode: SYNC_MODE
}

export class StatsModule extends BaseModule {
  private isBSC: boolean
  constructor(configuration: Configuration) {
    super(configuration, MODULE.STATS)
    this.isBSC = this.platform === PLATFORM.BSC
  }

  public async getTotalSupply() {
    const { result } = await this.get(
      this.isBSC ? ACTION.BNB_SUPPLY : ACTION.ETH_SUPPLY
    )
    return result
  }

  public async getEth2TotalSupply() {
    if (this.isBSC) return '0'
    const { result } = await this.get(ACTION.ETH_SUPPLY2)
    return result
  }

  public async getLastPrice() {
    const { result } = await this.get(
      this.isBSC ? ACTION.BNB_PRICE : ACTION.ETH_PRICE
    )
    return result
  }

  public async getNodesSize({
    startdate,
    enddate,
    clienttype = CLIENT_TYPE.GETH,
    syncmode = SYNC_MODE.DEFAULT,
    sort = SORT.ASC,
  }: NodeQueryParams) {
    const { result } = await this.get(ACTION.CHAIN_SIZE, {
      startdate,
      enddate,
      clienttype,
      syncmode,
      sort,
    })
    return result
  }

  public async getNodesCount() {
    const { result } = await this.get(ACTION.NODE_COUNT)
    return result
  }

  public async getDailyNetworkTransactionFee({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_TXN_FEE, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyTransactionCount({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_TX, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyNetworkUtilization({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_NET_UTILIZATION, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyNewAddressCount({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_NEW_ADDRESS, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyHistoryPrice({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(
      this.isBSC ? ACTION.BNB_DAILY_PRICE : ACTION.ETH_DAILY_PRICE,
      {
        startdate,
        enddate,
        sort,
      }
    )
    return result
  }

  public async getHistoryDailyMarketCup({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(
      this.isBSC ? ACTION.BNB_DAILY_MARKET_CAP : ACTION.ETH_DAILY_MARKET_CAP,
      {
        startdate,
        enddate,
        sort,
      }
    )
    return result
  }

  public async getDailyAvgNetworkHashRate({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_AVG_HASH_RATE, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyAvgNetworkDifficulty({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_AVG_NET_DIFFICULTY, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyAvgBlockSize({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_AVG_BLOCK_SIZE, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyBlockCountAndRewards({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_BLK_COUNT, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyBlockRewards({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_BLOCK_REWARDS, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyAvgTime({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_AVG_BLOCK_TIME, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyUncleBlockCountAndRewards({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: BaseQueryParams) {
    const { result } = await this.get(ACTION.DAILY_UNCLE_BLK_COUNT, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  // get erc20 total supply
  public async getERC20TokenTotalSupply(contractaddress: string) {
    const { result } = await this.get(ACTION.TOKEN_SUPPLY, {
      contractaddress,
    })
    return result
  }

  public async getHistoryERC20TotalSupplyByContractAddressAndBlockNo(
    contractaddress: string,
    blockno: number
  ) {
    const { result } = await this.get(ACTION.TOKEN_SUPPLY_HISTORY, {
      contractaddress,
      blockno,
    })
    return result
  }
}
