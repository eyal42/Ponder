import { ponder } from "@ponder/core";

export default ponder.router({
  UniswapV3Pool: {
    Mint: async ({ event, context }) => {
      const { LiquidityEvent, Pool } = context.tables;

      const pool = await Pool.findUnique({ id: event.address });
      if (!pool) return;

      const eventId = `${event.transaction.hash}-${event.log.logIndex}`;

      await LiquidityEvent.create({
        id: eventId,
        data: {
          poolId: event.address,
          type: "Mint",
          amount0: event.args.amount0,
          amount1: event.args.amount1,
          liquidity: event.args.amount,
          timestamp: event.block.timestamp,
          blockNumber: event.block.number,
          txHash: event.transaction.hash,
        },
      });

      console.log(`Mint event at pool ${event.address}: ${event.args.amount} liquidity`);
    },
    Burn: async ({ event, context }) => {
      const { LiquidityEvent, Pool } = context.tables;

      const pool = await Pool.findUnique({ id: event.address });
      if (!pool) return;

      const eventId = `${event.transaction.hash}-${event.log.logIndex}`;

      await LiquidityEvent.create({
        id: eventId,
        data: {
          poolId: event.address,
          type: "Burn",
          amount0: event.args.amount0,
          amount1: event.args.amount1,
          liquidity: event.args.amount,
          timestamp: event.block.timestamp,
          blockNumber: event.block.number,
          txHash: event.transaction.hash,
        },
      });

      console.log(`Burn event at pool ${event.address}: ${event.args.amount} liquidity`);
    },
  },
});