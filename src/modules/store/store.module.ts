import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '../mailer/mailer.module';
import { StoreRepository } from 'src/repositories/store.repository';

@Module({
  providers: [StoreService],
  imports: [TypeOrmModule.forFeature([StoreRepository]), MailModule],
  controllers: [StoreController],
  exports: [StoreService],
})
export class StoreModule {}