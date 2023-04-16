import type { Configuration } from './configuration'
import { PLATFORM, TAG, SORT, MODULE, ACTION } from './enum'
import { BlockPageQuery, BlockLogsQuery, KV } from './interface'
import axios from 'axios'
export class BaseModule {
  protected configuration: Configuration
  protected baseURL: string
  // protected get: Function
  // protected post: Function
  module: MODULE
  protected platform: PLATFORM
  protected apikey: string
  constructor(configuration: Configuration, module: MODULE) {
    this.configuration = configuration
    this.platform = configuration.platform
    this.baseURL = configuration.baseURL
    this.apikey = configuration.apikey
    this.module = module
    // this.get = this.configuration.get
    // this.post = this.configuration.post
  }

  // get request
  protected async get(action: ACTION, params: KV = {}): Promise<any> {
    const { data } = await axios.get(this.baseURL, {
      params: {
        module: this.module,
        action,
        apikey: this.apikey,
        ...params,
      },
    })
    return data
  }

  // post request
  protected async post(action: ACTION, data: KV = {}): Promise<any> {
    const { data: resultData } = await axios.post(this.baseURL, {
      module: this.module,
      action,
      apikey: this.apikey,
      ...data,
    })
    return resultData
  }
  protected getBlockPageQueryParams(info: BlockPageQuery): BlockPageQuery {
    const {
      startblock = 0,
      endblock = TAG.LATEST,
      page = 1,
      offset = 100,
      sort = SORT.ASC,
    } = info
    return { startblock, endblock, page, offset, sort }
  }
  protected getBlockLogsQuery({
    fromBlock = 0,
    toBlock = TAG.LATEST,
    page = 1,
    offset = 100,
  }: BlockLogsQuery): BlockLogsQuery {
    return { fromBlock, toBlock, page, offset }
  }

  public num2Hex(num: number) {
    return `0x${num.toString(16)}`
  }
}
