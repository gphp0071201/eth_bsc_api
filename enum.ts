export enum RPC_URL {
  ETH_MAINNET = 'https://api.etherscan.io/api',
  ETH_GOERLI = 'https://api-goerli.etherscan.io/api',
  ETH_SEPOLIA = 'https://api-sepolia.etherscan.io/api',
  BSC_MAINNET = 'https://api.bscscan.com/api',
  BSC_TESTNET = 'https://api-testnet.bscscan.com/api',
}

export enum Network {
  ETH_MAINNET = 'ETH_MAIN',
  ETH_GOERLI = 'ETH_GOERLI',
  ETH_SEPOLIA = 'ETH_SEPOLIA',
  BSC_MAINNET = 'BSC_MAINNET',
  BSC_TESTNET = 'BSC_TESTNET',
}

export enum CHAIN {
  GOERLI = 'goerli',
}

export enum PLATFORM {
  ETH = 'ETH',
  BSC = 'BSC',
}

export enum CLOSEST {
  BEFORE = 'before',
  AFTER = 'after',
}

export enum TAG {
  EARLIEST = 'earliest',
  PENDING = 'pending',
  LATEST = 'latest',
}

export enum BLOCKTYPE {
  BLOCKS = 'blocks',
}

export enum VERIFY_CODE_FORMAT {
  SINGLE_FILE = 'solidity-single-file',
  STANDARD_JSON_INPUT = 'solidity-standard-json-input',
}

export enum OPTIMIZATION_USED {
  DISABLE = 0,
  ENABLE = 1,
}

// https://bscscan.com/contract-license-types

// https:etherscan.io/contract-license-types

export enum LICENSE {
  None = 1,
  Unlicense,
  MIT,
  GNU_GPLv2,
  GNU_GPLv3,
  GNU_LGPLv2_1,
  GNU_LGPLv3,
  BSD_2_Clause,
  BSD_3_Clause,
  MPL_2_0,
  OSL_3_0,
  Apache_2_0,
  GNU_AGPLv3,
  BSL_1_1,
}

export enum EVM_VERSION {
  DEFAULT = '',
  HOMESTEAD = 'homestead',
  TANGERINE_WHISTLE = 'tangerineWhistle',
  SPURIOUS_DRAGON = 'spuriousDragon',
  BYZANTIUM = 'byzantium',
  CONSTANTINOPLE = 'constantinople',
  PETERSBURG = 'petersburg',
  ISTANBUL = 'istanbul',
}

export enum MODULE {
  ACCOUNT = 'account',
  CONTRACT = 'contract',
  TRANSACTION = 'transaction',
  BLOCK = 'block',
  STATS = 'stats',
  LOGS = 'logs',
  PROXY = 'proxy',
  TOKEN = 'token',
  GAS_TRACKER = 'gastracker',
}

export enum OPERATOR {
  AND = 'and',
  OR = 'or',
}

export enum CLIENT_TYPE {
  GETH = 'geth',
  PARITY = 'parity',
}

export enum SYNC_MODE {
  DEFAULT = 'default',
  ARCHIVE = 'archive',
}

export enum ACTION {
  // account module
  BALANCE = 'balance',
  BALANCEMULTI = 'balancemulti',
  TXLIST = 'txlist',
  TXLISTINTERNAL = 'txlistinternal',
  TOKENTX = 'tokentx',
  TOKENNFTTX = 'tokennfttx',
  TOKEN1155TX = 'token1155tx',
  GETMINEDBLOCKS = 'getminedblocks',
  TOKENBALANCE = 'tokenbalance',
  ADDRESS_TOKEN_BALANCE = 'addresstokenbalance',
  ADDRESS_TOKEN_NFT_BALANCE = 'addresstokennftbalance',
  ADDRESS_TOKEN_NFT_INVENTORY = 'addresstokennftinventory',
  BALANCE_HISTORY = 'balancehistory',
  TOKEN_BALANCE_HISTORY = 'tokenbalancehistory',

  // contract module
  GET_ABI = 'getabi',
  GET_SOURCE_CODE = 'getsourcecode',
  GET_CONTRACT_CREATION = 'getcontractcreation',
  VERIFY_PROXY_CONTRACT = 'verifyproxycontract',
  CHECK_VERIFY_STATUS = 'checkverifystatus',
  VERIFY_SOURCE_CODE = 'verifysourcecode',
  CHECK_PROXY_VERIFICATION = 'checkproxyverification',

  // transaction module
  GET_STATUS = 'getstatus',
  GET_TX_RECEIPT_STATUS = 'gettxreceiptstatus',

  // block module
  GET_BLOCK_REWARD = 'getblockreward',
  GET_BLOCK_COUNTDOWN = 'getblockcountdown',
  GET_BLOCKNO_BY_TIME = 'getblocknobytime',

  // stats module
  DAILY_AVG_BLOCK_SIZE = 'dailyavgblocksize',
  DAILY_BLK_COUNT = 'dailyblkcount',
  DAILY_BLOCK_REWARDS = 'dailyblockrewards',
  DAILY_AVG_BLOCK_TIME = 'dailyavgblocktime',
  DAILY_UNCLE_BLK_COUNT = 'dailyuncleblkcount',
  TOKEN_SUPPLY = 'tokensupply',
  TOKEN_SUPPLY_HISTORY = 'tokensupplyhistory',
  ETH_SUPPLY = 'ethsupply',
  BNB_SUPPLY = 'bnbsupply',
  ETH_DAILY_PRICE = 'ethdailyprice',
  BNB_DAILY_PRICE = 'bnbdailyprice',
  ETH_DAILY_MARKET_CAP = 'ethdailymarketcap',
  BNB_DAILY_MARKET_CAP = 'bnbdailymarketcap',
  ETH_PRICE = 'ethprice',
  BNB_PRICE = 'bnbprice',
  ETH_SUPPLY2 = 'ethsupply2',
  CHAIN_SIZE = 'chainsize',
  NODE_COUNT = 'nodecount',
  DAILY_TXN_FEE = 'dailytxnfee',
  DAILY_NEW_ADDRESS = 'dailynewaddress',
  DAILY_NET_UTILIZATION = 'dailynetutilization',
  DAILY_TX = 'dailytx',
  DAILY_AVG_HASH_RATE = 'dailyavghashrate',
  DAILY_AVG_NET_DIFFICULTY = 'dailyavgnetdifficulty',

  // log module
  GET_LOGS = 'getLogs',

  // token module
  TOKEN_HOLDER_LIST = 'tokenholderlist',
  TOKEN_INFO = 'tokeninfo',

  // proxy
  ETH_BLOCK_NUMBER = 'eth_blockNumber',
  ETH_GET_BLOCK_BY_NUMBER = 'eth_getBlockByNumber',
  ETH_GET_UNCLE_BY_BLOCK_NUMBER_AND_INDEX = 'eth_getUncleByBlockNumberAndIndex',
  ETH_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER = 'eth_getBlockTransactionCountByNumber',
  ETH_GET_TRANSACTION_BY_HASH = 'eth_getTransactionByHash',
  ETH_GET_TRANSACTION_BY_BLOCK_NUMBER_AND_INDEX = 'eth_getTransactionByBlockNumberAndIndex',
  ETH_GET_TRANSACTION_COUNT = 'eth_getTransactionCount',
  ETH_SEND_RAW_TRANSACTION = 'eth_sendRawTransaction',
  ETH_GET_TRANSACTION_RECEIPT = 'eth_getTransactionReceipt',
  ETH_CALL = 'eth_call',
  ETH_GET_CODE = 'eth_getCode',
  ETH_GET_STORAGE_AT = 'eth_getStorageAt',
  ETH_GAS_PRICE = 'eth_gasPrice',
  ETH_ESTIMATE_GAS = 'eth_estimateGas',

  // gas tracker
  GAS_ESTIMATE = 'gasestimate',
  GAS_ORACLE = 'gasoracle',
  DAILY_AVG_GAS_LIMIT = 'dailyavggaslimit',
  DAILY_GAS_USED = 'dailygasused',
  DAILY_AVG_GAS_PRICE = 'dailyavggasprice',

  TOKEN_CSUPPLY = 'tokenCsupply',
  VALIDATORS = 'validators',
}

export enum SORT {
  ASC = 'asc',
  DESC = 'desc',
}

export const RPC_MAP = {
  [Network.ETH_MAINNET]: RPC_URL.ETH_MAINNET,
  [Network.ETH_GOERLI]: RPC_URL.ETH_GOERLI,
  [Network.ETH_SEPOLIA]: RPC_URL.ETH_SEPOLIA,
  [Network.BSC_MAINNET]: RPC_URL.BSC_MAINNET,
  [Network.BSC_TESTNET]: RPC_URL.BSC_TESTNET,
}

export const PLATFORM_MAP = {
  PRICE: {
    [PLATFORM.ETH]: 'ethprice',
    [PLATFORM.BSC]: 'bnbprice',
  },
  SUPPLY: {
    [PLATFORM.ETH]: 'ethsupply',
    [PLATFORM.BSC]: 'bnbsupply',
  },
  DAILYPRICE: {
    [PLATFORM.ETH]: 'ethdailyprice',
    [PLATFORM.BSC]: 'bnbdailyprice',
  },
}
