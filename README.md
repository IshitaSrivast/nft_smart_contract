# nft_smart_contract

The smart contract has been deployed for NFT trading. Following are the highlights:
# ERC 721
This is a standard protocol for the ownership of the Non-fungible tokens that are unique and distinguised. We can set restrictions on minting tokens by the access control 
provided by ERC 721. Also, ERC 721 does not have decimals, the reson being, the uniqueness of the tokens making the undifferentiable. A collection is maintained for the
ERC tokens.

# mint()
This function mints the tokens and adds them to the collection.
#buy()
This function helps in the trade of the NFTs

To deploy a subgraph, we firstly deploy the smart contract and get the address where the smart contract is deployed. Then, the following commands are executed:

 # npm install -g @graphprotocol/graph-cli
 
 # graph init --studio <SUBGRAPH_SLUG>


I am currently working on NFT tracking system.
