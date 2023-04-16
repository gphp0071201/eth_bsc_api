import { BaseModule } from './base'
import { Configuration } from './configuration'
import { ACTION, MODULE, SORT } from './enum'

interface DaliyQuery {
  startdate: string
  enddate: string
  sort: SORT
}

export class TrackerModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.GAS_TRACKER)
  }
  public async getEstimationOfConfirmationTime(gasprice: number | string) {
    const { result } = await this.get(ACTION.GAS_ESTIMATE, { gasprice })
    return result
  }

  public async getGasOracle() {
    const { result } = await this.get(ACTION.GAS_ORACLE)
    return result
  }

  public async getDailyTotalGasUsed({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: DaliyQuery) {
    const { result } = await this.get(ACTION.DAILY_GAS_USED, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyAvgGasLimit({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: DaliyQuery) {
    const { result } = await this.get(ACTION.DAILY_AVG_GAS_LIMIT, {
      startdate,
      enddate,
      sort,
    })
    return result
  }

  public async getDailyAvgGasPrice({
    startdate,
    enddate,
    sort = SORT.ASC,
  }: DaliyQuery) {
    const { result } = await this.get(ACTION.DAILY_AVG_GAS_PRICE, {
      startdate,
      enddate,
      sort,
    })
    return result
  }
}
