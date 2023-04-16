import {
  SORT,
  VERIFY_CODE_FORMAT,
  OPTIMIZATION_USED,
  LICENSE,
  OPERATOR,
  EVM_VERSION,
} from './enum'

export interface Balance {
  account?: string
  balance?: string
}

export interface KV {
  [key: string]: string | number
}

export interface PageInfo {
  page?: number
  offset?: number
}

export interface BlockPageQuery extends PageInfo {
  startblock?: number
  endblock?: number | string
  sort?: SORT
}

export interface BlockLogsQuery extends PageInfo {
  fromBlock?: number
  toBlock?: number | string
}

export interface Libiary {
  libraryname: string
  libraryaddress: string
}

export interface SourceCodeVerify {
  contractaddress: string
  sourceCode: string
  codeformat: VERIFY_CODE_FORMAT
  contractname: string
  compilerversion: string
  runs: number
  optimizationUsed: OPTIMIZATION_USED
  licenseType: LICENSE
  evmversion: EVM_VERSION
  constructorArguements?: string
  libiaryList?: Libiary[]
}
