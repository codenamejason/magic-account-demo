import { arbitrum, base, optimism, polygon } from "viem/chains";
import type { Address } from "viem";

export type MultichainTokenMapping = { chainId: number, address: Address }[]

export type TokenInfo = {
    chainId: number;
    address: Address;
  };

export const mcUSDC = buildTokenMapping([
  deployment(arbitrum.id, '0xaf88d065e77c8cC2239327C5EDb3A432268e5831'),
  deployment(base.id, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'),
  deployment(optimism.id, '0x0b2c639c533813f4aa9d7837caf62653d097ff85'),
  deployment(polygon.id, '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359'),
])

export function buildTokenMapping(tokens: TokenInfo[]): MultichainTokenMapping {
    return tokens.map(token => {
      return {
        address: token.address,
        chainId: token.chainId
      }
    })
  }
  
  export function deployment(chainId: number, address: Address): TokenInfo {
    return {
      chainId: chainId,
      address: address
    }
  }