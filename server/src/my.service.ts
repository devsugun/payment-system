import { Injectable, Inject } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class MyService {
  constructor(@Inject(ModuleRef) private moduleRef: ModuleRef) {
    // You can use the moduleRef here
  }
}
