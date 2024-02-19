import { defineChain } from "viem";
import { baseContract } from "~config";

export const noteContract = {
  address: baseContract,
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_app",
          type: "string",
        },
        {
          internalType: "string",
          name: "_comment",
          type: "string",
        },
      ],
      name: "addAppComment",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      name: "appMappings",
      outputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "idx",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_app",
          type: "string",
        },
      ],
      name: "appNoteAddress",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "appNoteMappings",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_app",
          type: "string",
        },
      ],
      name: "createApp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
      ],
      name: "note",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_key",
          type: "string",
        },
        {
          internalType: "string",
          name: "_note",
          type: "string",
        },
      ],
      name: "setNote",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
} as const;

export const Galileo = defineChain({
  id: 3334,
  name: "Galileo",
  nativeCurrency: {
    decimals: 18,
    name: "Web3Q",
    symbol: "W3Q",
  },
  rpcUrls: {
    default: {
      http: ["https://galileo.web3q.io:8545"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.galileo.web3q.io" },
  },
});
