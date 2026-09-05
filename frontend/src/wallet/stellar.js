import {
  isConnected,
  requestAccess,
  getAddress,
  getNetworkDetails,
} from "@stellar/freighter-api";

import { Horizon } from "@stellar/stellar-sdk";

const HORIZON_URL = import.meta.env?.VITE_HORIZON_URL || "https://horizon-testnet.stellar.org";
const server = new Horizon.Server(HORIZON_URL);

export async function connectWallet() {
  const isConnRes = await isConnected();
  const connected = typeof isConnRes === "object" && isConnRes !== null 
    ? (isConnRes.isConnected ?? true) 
    : Boolean(isConnRes);

  if (!connected) {
    throw new Error(
      "Freighter wallet is not detected. Please install the Freighter extension in your browser."
    );
  }

  await requestAccess();

  const addressResult = await getAddress();
  const addr = typeof addressResult === "string" 
    ? addressResult 
    : (addressResult?.address || "");

  const networkResult = await getNetworkDetails();
  const net = typeof networkResult === "string" 
    ? networkResult 
    : (networkResult?.network || "TESTNET");
  const passphrase = typeof networkResult === "object" && networkResult !== null 
    ? (networkResult?.networkPassphrase || "") 
    : "";

  return {
    address: addr,
    network: net,
    networkPassphrase: passphrase,
  };
}

export async function getXlmBalance(address) {
  if (!address) return "0";
  try {
    const account = await server.loadAccount(address);
    const nativeBalance = account.balances?.find(
      (b) => b.asset_type === "native"
    );
    return nativeBalance ? nativeBalance.balance : "0";
  } catch (error) {
    console.warn("Could not fetch Stellar account balance (account may be unfunded on testnet):", error);
    return "0";
  }
}