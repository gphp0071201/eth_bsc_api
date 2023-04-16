import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION, SORT, TAG, PLATFORM, BLOCKTYPE } from './enum'
import { Balance, KV, PageInfo, BlockPageQuery } from './interface'

interface QueryInfo extends PageInfo {
  startblock: number
  endblock: number
  sort: SORT
}

interface QueryToken {
  contractaddress?: string
  address: string
}

export class AccountModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.ACCOUNT)
  }

  /**
   * get balance by address
   * @param {string} address
   * @returns
   */
  public async getBalance(address: string): Promise<string> {
    const query: KV = { address }
    if (this.platform === PLATFORM.ETH) {
      query.tag = TAG.LATEST
    }
    const { result } = await this.get(ACTION.BALANCE, query)
    return result
  }

  /**
   * get multiple address balances
   * @param {string[]} address
   * @returns
   */
  public async getBalances(address: string[]): Promise<Balance[]> {
    const query: KV = { address: address.join(','), tag: TAG.LATEST }
    const { result } = await this.get(ACTION.BALANCEMULTI, query)
    return result
  }

  // Returns the historicalbalance of an address at a certain block height.
  public async getHistoryBalanceByBlockNo(
    address: string,
    blockno: number | TAG = TAG.LATEST
  ) {
    const { result } = await this.get(ACTION.BALANCE_HISTORY, {
      address,
      blockno,
    })
    return result
  }

  // Get a list of 'Normal' Transactions By Address
  // Returns the list of transactions performed by an address, with optional pagination
  public async getNormalTranscationList(address: string, info: BlockPageQuery) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TXLIST, {
      address,
      ...query,
    })
    return result
  }

  public async getInternalTranscationListByAddress(
    address: string,
    info: BlockPageQuery
  ) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TXLISTINTERNAL, {
      address,
      ...query,
    })
    return result
  }

  public async getInternalTranscationListByTransactionHash(txhash: string) {
    const { result } = await this.get(ACTION.TXLISTINTERNAL, {
      txhash,
    })
    return result
  }

  public async getInternalTranscationListByBlockRange(info: BlockPageQuery) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TXLISTINTERNAL, { ...query })
    return result
  }

  public async getERC20TransferEventsByAddress(
    param: QueryToken,
    info: BlockPageQuery
  ) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TOKENTX, {
      ...param,
      ...query,
    })
    return result
  }

  public async getERC721TransferEventsByAddress(
    param: QueryToken,
    info: BlockPageQuery
  ) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TOKENNFTTX, {
      ...param,
      ...query,
    })
    return result
  }
  public async getERC1155TransferEventsByAddress(
    param: QueryToken,
    info: BlockPageQuery
  ) {
    const query = this.getBlockPageQueryParams(info)
    const { result } = await this.get(ACTION.TOKEN1155TX, {
      ...param,
      ...query,
    })
    return result
  }

  public async getBlockMintedListByAddress(
    address: string,
    { page = 1, offset = 100 }: PageInfo
  ) {
    const { result } = await this.get(ACTION.GETMINEDBLOCKS, {
      address,
      blocktype: BLOCKTYPE.BLOCKS,
      page,
      offset,
    })
    return result
  }

  public async getERC20TokenAccountBalance(
    address: string,
    contractaddress: string
  ) {
    const { result } = await this.get(ACTION.TOKENBALANCE, {
      address,
      contractaddress,
      tag: TAG.LATEST,
    })
    return result
  }

  public async getERC20TokenHoldingByAddress(
    address: string,
    { page = 1, offset = 100 }: PageInfo
  ) {
    const { result } = await this.get(ACTION.ADDRESS_TOKEN_BALANCE, {
      address,
      page,
      offset,
    })
    return result
  }

  public async getERC721TokenHoldingByAddress(
    address: string,
    { page = 1, offset = 100 }: PageInfo
  ) {
    const { result } = await this.get(ACTION.ADDRESS_TOKEN_NFT_BALANCE, {
      address,
      page,
      offset,
    })
    return result
  }

  public async getAddressERC721TokenInventoryByContractAddress(
    contractaddress: string,
    address: string,
    { page = 1, offset = 100 }: PageInfo
  ) {
    const { result } = await this.get(ACTION.ADDRESS_TOKEN_NFT_INVENTORY, {
      contractaddress,
      address,
      page,
      offset,
    })
    return result
  }

  public async getERC20HistoryBlanceForContractAddressByBlockNo(
    contractaddress: string,
    address: string,
    blockno: number
  ) {
    const { result } = await this.get(ACTION.TOKEN_BALANCE_HISTORY, {
      contractaddress,
      address,
      blockno,
    })
    return result
  }
}
