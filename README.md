# Eternal Journalism

A dapp that enable journalists to protect their articles "forever" (thanks to the blockchain and/or IPFS technology - unless Ethereum really implement "The Purge" the way I think), so information can't be censored.

This is also a protest to Ethereum's possible plans for "The Purge".

You have two modes when saving an article: Partial or Full.

In the Partial mode, you use an IPFS CID to store the article; in Full mode, the plain text is saved on the blockchain.

<img src="Screenshot from 2023-06-12 12-51-02.png"/>

<img src="Screenshot from 2023-06-12 13-38-45.png"/>

## Deployments

On Polygon, the gas cost is ~$3 per Full article depending on its size. For Partial it should be less than ~$1.

Not deployed to Ethereum, yet.

The smart-contract has not been audited yet, although there's no need for that as the dapp is focused on storing permanent data rather than moving money.

### Polygon

You can interact with the contract on [Polygonscan](https://polygonscan.com/address/0xCef69Cd562EC0C35aD87c89519eB8c78bD214c38#writeContract).

Eternal Journalism's smart-contract is verified at [Sourcify](https://repo.sourcify.dev/contracts/partial_match/137/0xCef69Cd562EC0C35aD87c89519eB8c78bD214c38) and [Polygonscan](https://polygonscan.com/address/0xCef69Cd562EC0C35aD87c89519eB8c78bD214c38#contracts).

### Base

You can interact with the contract on [Basescan](https://basescan.org/address/0x7923d61a242927e3e0170ad0a1c32a860f15be6e#writeContract).

Eternal Journalism's smart-contract is verified at [Sourcify](https://repo.sourcify.dev/contracts/full_match/8453/0x7923D61A242927e3E0170AD0A1C32a860F15bE6e) and [Basescan](https://basescan.org/address/0x7923d61a242927e3e0170ad0a1c32a860f15be6e#contracts).

### Ethereum

We are thrilled to, someday, be able to deploy on Ethereum.

To make that possible, you can donate any non-shitcoin token or ETH to [0xddfc2e10702d8a781727a34d83b3bb3ca94a3e91](eth://0xddfc2e10702d8a781727a34d83b3bb3ca94a3e91) in the Ethereum or any L2 network of your choice; to ensure your donation will be directed to Eternal Journalism and not confused with other donations, please add an UTF-8/HEX message to your transaction (or to a follow-up transaction if a token doesn't support that) mentioning "Eternal Journalism". Any L2 that uses ETH as gastoken should support sending messages when sending ETH, so as happen on Ethereum L1.

### Others

Turning multichain, coming to Base, Arbitrum and zkSync soon (Eternal Journalism v3, maybe renamed to just "Ethernal").

## Plans for v3 (currently latest is v2)

v3 should canonically merge data of v1 and v2, go multichain (paving the way for data oracles), and make fully onchain data cheaper (by using two separate transactions, one for a UTF-8 HEX transfer, other for referencing to that tx ID).

Read more at this monorepo's [Tasks.txt](Tasks.txt) file.
