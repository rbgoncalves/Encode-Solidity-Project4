import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractService } from './contract/contract.service';
import { WalletService } from './wallet/wallet.service';

@Module({
  imports: [
    MulterModule.register({
      dest: '../upload',
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, ContractService, WalletService],
})
export class AppModule {}
