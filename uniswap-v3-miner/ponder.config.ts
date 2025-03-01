import { createConfig } from "@ponder/core";
import { http } from "viem";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_MAINNET),
    },
  },
  contracts: {
    UniswapV3Factory: {
      network: "mainnet",
      abi: "./abis/UniswapV3Factory.json",
      address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
      startBlock: 12369621, // Factory deployment block
    },
    UniswapV3Pool: {
      network: "mainnet",
      abi: "./abis/UniswapV3Pool.json",
      factory: {
        address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
        event: "PoolCreated",
        parameter: "pool",
      },
      startBlock: 12369621,
    },
  },
});