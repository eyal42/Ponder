import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Pool: p.createTable({
    id: p.string(), // Pool address
    token0: p.string(), // Address of token0
    token1: p.string(), // Address of token1
    fee: p.int(), // Fee tier
    createdAtTimestamp: p.int(), // Creation timestamp
    createdAtBlock: p.bigint(), // Creation block
  }),
  LiquidityEvent: p.createTable({
    id: p.string(), // Event ID (txHash-logIndex)
    poolId: p.string(), // Pool address
    type: p.string(), // "Mint" or "Burn"
    amount0: p.bigint(), // Amount of token0
    amount1: p.bigint(), // Amount of token1
    liquidity: p.bigint(), // Liquidity amount
    timestamp: p.int(), // Event timestamp
    blockNumber: p.bigint(), // Event block
    txHash: p.string(), // Transaction hash
    pool: p.many("Pool.id"), // Relation to Pool
  }),
}));