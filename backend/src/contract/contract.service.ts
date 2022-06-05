import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { WalletService } from 'src/wallet/wallet.service';
import { RealMonkeyCollection } from '../../../typechain/RealMonkeyCollection';
import * as RMCjson from '../../assets/RealMonkeyCollection.json';

@Injectable()
export class ContractService {
  contractSignedInstance: RealMonkeyCollection;

  constructor(private walletService: WalletService) {
    this.setupContractInstance();
  }

  setupContractInstance() {
    const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
    if (!contractAddress || contractAddress.length === 0) {
      throw new Error('TOKEN_CONTRACT_ADDRESS not found');
    }

    this.contractSignedInstance = new ethers.Contract(
      contractAddress,
      RMCjson.abi,
      this.walletService.signer,
    ) as RealMonkeyCollection;
  }

  async mintNft() {
    console.log('MINT NFT', this.contractSignedInstance.address);

    return await 1;
  }
}
