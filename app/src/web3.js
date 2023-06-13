// web3.js

import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';

const RPC_URLS = {
  ethereum: 'https://eth.llamarpc.com',
  polygon: 'https://rpc-mainnet.maticvigil.com',
};

export const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 137] });

export const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

export const networkOptions = [
  { label: 'Ethereum', value: 'ethereum' },
  { label: 'Polygon', value: 'polygon' },
];

export const getRpcUrl = (network) => RPC_URLS[network];

