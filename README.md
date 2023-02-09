# nft_smart_contract

The smart contract has been deployed for NFT trading. Following are the highlights:
# ERC 721
This is a standard protocol for the ownership of the Non-fungible tokens that are unique and distinguised. We can set restrictions on minting tokens by the access control 
provided by ERC 721. Also, ERC 721 does not have decimals, the reson being, the uniqueness of the tokens making the undifferentiable. A collection is maintained for the
ERC tokens.

# mint()
This function mints the tokens and adds them to the collection.
# buy()
This function helps in the trade of the NFTs

To deploy a subgraph, we firstly deploy the smart contract and get the address where the smart contract is deployed. Then, the following commands are executed:

 `npm install -g @graphprotocol/graph-cli`
 
For creating a new project from an example subgraph, the command is:
 `graph init --studio <SUBGRAPH_SLUG>`

The subgraph manifest subgraph.yaml defines the smart contracts your subgraph indexes, which events from these contracts to pay attention to.

In the 721, transfer and approve emit events. In the smart contract, tranfer has been called in buy() function.
The schema for your subgraph is in the file schema.graphql.
Since I was working on NFT tracking system. The above smart contract gives a collection ID to the non-fungible tokens. While creating a schema for the GraphQL, following entities have been defined:

type funnft @entity(immutable: true){


Token ID : bytes


Owner: bytes

}

