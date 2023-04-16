import { BaseModule } from './base'
import { Configuration } from './configuration'
import { ACTION, MODULE } from './enum'
import { BlockLogsQuery, KV } from './interface'

export class LogModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.LOGS)
  }
  public async getEventLogsByAddress(address: string, info: BlockLogsQuery) {
    const query = this.getBlockLogsQuery(info)
    const result = this.get(ACTION.GET_LOGS, {
      address,
      ...query,
    })
    return result
  }

  public async getEventLogsByTopic(info: BlockLogsQuery & KV) {
    const query = this.getBlockLogsQuery(info)
    const { result } = await this.get(ACTION.GET_LOGS, {
      ...info,
      ...query,
    })
    return result
  }
  public async getEventLogsByAddressTopic(
    address: string,
    info: BlockLogsQuery & KV
  ) {
    const query = this.getBlockLogsQuery(info)
    const { result } = await this.get(ACTION.GET_LOGS, {
      address,
      ...info,
      ...query,
    })
    return result
  }
}
