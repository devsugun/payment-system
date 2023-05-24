import { Injectable, Module } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class MongooseCoreModuleProvider {
  constructor(private moduleRef: ModuleRef) {
    // You can use the moduleRef here
  }
}
