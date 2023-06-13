// ConnectPage.js

import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector, networkOptions, getRpcUrl } from '../web3';

function ConnectPage() {
  const { activate, active, chainId } = useWeb3React();

  const handleConnect = (network) => {
    const rpcUrl = getRpcUrl(network);
    activate(injectedConnector, undefined, true);
  };

  return (
    <div>
      <h1>Connect to a Network</h1>
      {networkOptions.map((option) => (
        <button key={option.value} onClick={() => handleConnect(option.value)} disabled={active}>
          {option.label}
        </button>
      ))}
      {active && <p>Connected to network with chain ID: {chainId}</p>}
    </div>
  );
}

export default ConnectPage;

