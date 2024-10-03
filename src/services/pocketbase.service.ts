import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketBaseService {
  private pb: PocketBase;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090/');
  }

  getPocketBase(): PocketBase {
    return this.pb;
  }
}
