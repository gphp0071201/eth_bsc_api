import type { Configuration } from './configuration'
import { BaseModule } from './base'
import { MODULE, ACTION, OPTIMIZATION_USED, EVM_VERSION } from './enum'
import { KV, SourceCodeVerify } from './interface'

export class ContractModule extends BaseModule {
  constructor(configuration: Configuration) {
    super(configuration, MODULE.CONTRACT)
  }

  // get contract abi
  public async getABI(address: string): Promise<any> {
    const { result } = await this.get(ACTION.GET_ABI, {
      address,
    })
    return result
  }
  // get scource code
  public async getSourceCodes(address: string): Promise<any[]> {
    const { result } = await this.get(ACTION.GET_SOURCE_CODE, {
      address,
    })
    return result
  }

  // get scource code
  public async getContractCreatorAndCreationTxHash(
    contractaddresses: string[]
  ): Promise<any[]> {
    const { result } = await this.get(ACTION.GET_CONTRACT_CREATION, {
      contractaddresses: contractaddresses.join(','),
    })
    return result
  }

  public async verifySourceCode({
    contractaddress,
    sourceCode,
    codeformat,
    contractname,
    compilerversion,
    runs = 200,
    optimizationUsed = OPTIMIZATION_USED.DISABLE,
    licenseType,
    evmversion = EVM_VERSION.DEFAULT,
    constructorArguements,
    libiaryList = [],
  }: SourceCodeVerify) {
    const obj: KV = {}
    ;(libiaryList || []).forEach((item, i) => {
      obj[`libraryname${i + 1}`] = item.libraryname
      obj[`libraryaddress${i + 1}`] = item.libraryaddress
    })
    const postData: KV = {
      contractaddress,
      sourceCode,
      codeformat,
      contractname,
      compilerversion,
      runs,
      optimizationUsed,
      licenseType,
      evmversion,
      ...obj,
    }
    if (constructorArguements) {
      postData.constructorArguements = constructorArguements
    }

    const { result } = await this.post(ACTION.VERIFY_SOURCE_CODE, postData)
    return result
  }

  public async checkSourceCodeVerifySubmitStatus(guid: string) {
    const { result } = await this.get(ACTION.CHECK_VERIFY_STATUS, {
      guid,
    })
    return result
  }

  public async verifyProxyContract(
    address: string,
    expectedimplementation: string
  ) {
    const queryParam: KV = { address }
    if (expectedimplementation) {
      queryParam.expectedimplementation = expectedimplementation
    }
    const { result } = await this.get(ACTION.VERIFY_PROXY_CONTRACT, queryParam)
    return result
  }

  public async checkProxyContractVerifySubmitStatus(guid: string) {
    const { result } = await this.get(ACTION.CHECK_PROXY_VERIFICATION, { guid })
    return result
  }
}
