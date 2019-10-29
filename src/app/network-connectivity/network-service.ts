import { Injectable } from '@angular/core';

@Injectable()
export class NetworkService {
  isNetworkOnline: boolean;
  constructor() {
    console.log('NetworkService started');
  }

}
