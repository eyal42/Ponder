import { ponder } from "@ponder/core";

export default ponder.router({
  UniswapV3Factory: {
    PoolCreated: async ({ event, context }) => {
      const { Pool } = context.tables;

      await Pool.create({
        id: event.args.pool,
        data: {
          token0: event.args.token0,
          token1: event.args.token1,
          fee: event.args.fee,
          createdAtTimestamp: event.block.timestamp,
          createdAtBlock: event.block.number,
        },
      });

      console.log(`Pool created: ${event.args.pool}, Pair: ${event.args.token0}-${event.args.token1}`);
    },
  },
});