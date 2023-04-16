import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION } from './enum'

export class TransactionModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.TRANSACTION)
  }

  // Check Contract Execution Status
  public async checkContractExecutionStatus(txhash: string): Promise<any> {
    const { result } = await this.get(ACTION.GET_STATUS, {
      txhash,
    })
    return result
  }

  // Check Contract Execution Status
  public async checkTransactionReceiptStatus(txhash: string): Promise<any> {
    const { result } = await this.get(ACTION.GET_TX_RECEIPT_STATUS, {
      txhash,
    })
    return result
  }
}
