# eth_bsc_api

Integrate Etherscan api and Bscscan api

## Usage

```ts
enum Network {}
```

```ts
import { Configuration, Network, PLATFORM, AccountModule } from 'eth_bsc_api'

// init config
const configuration = new Configuration(
  Network.ETH_MAINNET,
  'Your api key',
  PLATFORM.ETH
)
// Initialize the module object
const account = new AccountModule(configuration)

// Get wallet balance

const balance = account.getBalance('0x....')
console.log(balance)

// Other modules refer to account
// ...
```
