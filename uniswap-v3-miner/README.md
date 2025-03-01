# Uniswap V3 Liquidity Pool Miner

This project uses Ponder to index and extract Uniswap V3 liquidity pool creation (`PoolCreated`) and closure-related events (`Mint` and `Burn`) on Ethereum mainnet. It tracks pool addresses, currency pairs (token0 and token1), fee tiers, and timestamps of these events.

## Prerequisites

- **Node.js**: Version 18+ recommended.
- **Ponder**: A framework for indexing blockchain events.
- **Ethereum RPC Provider**: An Alchemy or Infura URL with an API key.

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd uniswap-v3-miner