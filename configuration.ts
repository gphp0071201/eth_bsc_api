import { Network, RPC_MAP, MODULE, ACTION, PLATFORM } from './enum'
import { KV } from './interface'
import axios from 'axios'

export class Configuration {
  baseURL: string
  apikey: string
  netInfo: Network
  platform: PLATFORM
  constructor(netInfo: Network, apikey: string, platform: PLATFORM) {
    this.apikey = apikey
    this.netInfo = netInfo
    this.baseURL = RPC_MAP[netInfo]
    this.platform = platform
  }

  // get request
  public async get(module: MODULE, action: ACTION, params: KV): Promise<any> {
    const { data } = await axios.get(this.baseURL, {
      params: {
        module,
        action,
        apikey: this.apikey,
        ...params,
      },
    })
    return data
  }

  // post request
  public async post(module: MODULE, action: ACTION, data: KV): Promise<any> {
    const { data: resultData } = await axios.post(this.baseURL, {
      module,
      action,
      apikey: this.apikey,
      ...data,
    })
    return resultData
  }
}
