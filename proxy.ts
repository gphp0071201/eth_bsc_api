import { BaseModule } from './base'
import { Configuration } from './configuration'
import { ACTION, MODULE, TAG } from './enum'

export class ProxyModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.PROXY)
  }

  public async getBlockNumber() {
    const { result } = await this.get(ACTION.ETH_BLOCK_NUMBER)
    return result
  }

  public async getBlockByNumber(tag: number, boolean: 'true' | 'false') {
    const { result } = await this.get(ACTION.ETH_GET_BLOCK_BY_NUMBER, {
      tag: this.num2Hex(tag),
      boolean,
    })
    return result
  }

  public async getUncleByBlockNumberAndIndex(tag: number, index: number) {
    const { result } = await this.get(
      ACTION.ETH_GET_UNCLE_BY_BLOCK_NUMBER_AND_INDEX,
      {
        tag: this.num2Hex(tag),
        index: this.num2Hex(index),
      }
    )
    return result
  }

  public async getBlockTransactionCountByNumber(tag: number) {
    const { result } = await this.get(
      ACTION.ETH_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER,
      {
        tag: this.num2Hex(tag),
      }
    )
    return result
  }

  public async getTransactionByHash(txhash: string) {
    const { result } = await this.get(ACTION.ETH_GET_TRANSACTION_BY_HASH, {
      txhash,
    })
    return result
  }

  public async getTransactionByBlockNumberAndIndex(tag: number, index: number) {
    const { result } = await this.get(
      ACTION.ETH_GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX,
      {
        tag: this.num2Hex(tag),
        index: this.num2Hex(index),
      }
    )
    return result
  }

  public async getTransactionCount(address: string, tag: TAG = TAG.LATEST) {
    const { result } = await this.get(ACTION.ETH_GET_TRANSACTION_COUNT, {
      address,
      tag,
    })
    return result
  }

  public async sendRawTransaction(address: string, tag: TAG = TAG.LATEST) {
    const { result } = await this.get(ACTION.ETH_SEND_RAW_TRANSACTION, {
      address,
      tag,
    })
    return result
  }

  public async getTransactionReceipt(txhash: string) {
    const { result } = await this.get(ACTION.ETH_GET_TRANSACTION_RECEIPT, {
      txhash,
    })
    return result
  }

  public async ethCall(to: string, data: string, tag: TAG = TAG.LATEST) {
    const { result } = await this.get(ACTION.ETH_CALL, {
      to,
      data,
      tag,
    })
    return result
  }

  public async getCode(address: string, tag: TAG = TAG.LATEST) {
    const { result } = await this.get(ACTION.ETH_GET_CODE, {
      address,
      tag,
    })
    return result
  }

  public async getStorageAt(
    address: string,
    position: number,
    tag: TAG = TAG.LATEST
  ) {
    const { result } = await this.get(ACTION.ETH_GET_STORAGE_AT, {
      address,
      tag,
      position: this.num2Hex(position),
    })
    return result
  }

  public async getGasPrice() {
    const { result } = await this.get(ACTION.ETH_GAS_PRICE)
    return result
  }

  public async getEstimateGas(
    data: string,
    to: string,
    value: number,
    gasPrice: number,
    gas: number
  ) {
    const { result } = await this.get(ACTION.ETH_ESTIMATE_GAS, {
      data,
      to,
      value: this.num2Hex(value),
      gasPrice,
      gas: this.num2Hex(gas),
    })
    return result
  }
}
