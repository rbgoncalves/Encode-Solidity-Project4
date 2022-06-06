import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { CID } from 'ipfs-http-client';
import { WalletService } from 'src/wallet/wallet.service';
import { RealMonkeyCollection } from '../../../typechain/RealMonkeyCollection';
import * as RMCjson from '../../assets/RealMonkeyCollection.json';

@Injectable()
export class ContractService {
  contract: RealMonkeyCollection;

  constructor(private walletService: WalletService) {
    this.setupContractInstance();
  }

  setupContractInstance() {
    const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
    if (!contractAddress || contractAddress.length === 0) {
      throw new Error('TOKEN_CONTRACT_ADDRESS not found');
    }

    this.contract = new ethers.Contract(
      contractAddress,
      RMCjson.abi,
      this.walletService.signer,
    ) as RealMonkeyCollection;
  }

  async mintNft(tokenId: number) {
    console.log('Minting new NFT');

    const tx = await this.contract.mintNft(this.contract.address, tokenId);

    console.log('waiting...');
    await tx.wait();
    console.log('Tx: ', tx.hash);

    return {
      //txHash: tx.hash,
      tokenId,
    };
  }
}
