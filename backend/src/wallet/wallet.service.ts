import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class WalletService {
  signer: ethers.Wallet;
  provider: ethers.providers.BaseProvider;

  constructor() {
    this.setupSigner();
  }

  async setupSigner() {
    const wallet = new ethers.Wallet(
      process.env.PRIVATE_KEY as ethers.utils.BytesLike,
    );

    console.log('Using wallet: ', wallet.address);

    this.provider = ethers.providers.getDefaultProvider('rinkeby');

    try {
      this.signer = await wallet.connect(this.provider);
    } catch (e) {
      throw new Error(
        'Error while connecting wallet to provider, make sure PRIVATE_KEY is defined',
      );
    }
  }
}
