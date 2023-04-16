import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION } from './enum'
import { PageInfo } from './interface'

export class TokenModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.TOKEN)
  }

  // Get Token Holder List by Contract Address
  public async getTokenHolderListByContractAddress(
    contractaddress: string,
    { page = 1, offset = 100 }: PageInfo
  ) {
    const { result } = await this.get(ACTION.TOKEN_HOLDER_LIST, {
      contractaddress,
      page,
      offset,
    })
    return result
  }

  // Get Token Info by ContractAddress
  public async getTokenInfoByContractAddress(
    contractaddress: string
  ): Promise<any> {
    const { result } = await this.get(ACTION.TOKEN_INFO, {
      contractaddress,
    })
    return result
  }
}
