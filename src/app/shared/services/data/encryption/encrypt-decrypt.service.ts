import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';
import CryptoEs from 'crypto-es';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  // https://stackoverflow.com/questions/62703358/encrypt-in-cryptojs-angular-and-do-the-same-in-crypto-nodejs
  public ED = CryptoEs;
  // key = this.ED.enc.Utf8.parse('accuick_secret_key');
  // iv = this.ED.enc.Utf8.parse('45t678');
  // tokenFromUI = '9847122abcdf0';
  // encrypted: any;
  // decrypted: string;
  constructor() {
    // this.encryptUsingAES256('{"username":"adityat","password":"123"}');
  }
  // private key = this.ED.enc.Utf8.parse('4512631236589784');
  // private iv = this.ED.enc.Utf8.parse('4512631236589784');

  // Methods for the encrypt and decrypt Using AES
  // encrypt
  e(value: string, secretKey: string): string {
    const ivrs = this.ED.enc.Utf8.parse(Math.random().toString(36).substring(8));
    const encrypted = this.ED.AES.encrypt(
      this.ED.enc.Utf8.parse(JSON.stringify(value)),
      // JSON.stringify(value),
      secretKey,
      {
        // keySize: 128 / 8,
        iv: ivrs,
        mode: this.ED.mode.CBC,
        padding: this.ED.pad.Pkcs7
      }
    );
    // console.log('Encrypted : ' + encrypted.toString());
    // console.log('Decrypted : ' + this.ds(encrypted.toString(), secretKey));
    return encrypted.toString();
  }
  //  decrypt JSON
  dj(value: string, secretKey: string): string[] {
    const ivrs = this.ED.enc.Utf8.parse(Math.random().toString(36).substring(8));
    const decrypted = this.ED.AES.decrypt(
      value,
      secretKey,
      {
        // keySize: 128 / 8,
        iv: ivrs,
        mode: this.ED.mode.CBC,
        padding: this.ED.pad.Pkcs7
      }
    );
    // console.log('Decrypted : ' + decrypted.toString(this.ED.enc.Utf8));
    return JSON.parse(decrypted.toString(this.ED.enc.Utf8));
  }
  // decrypt string
  ds(value: string, secretKey: string): string {
    const ivrs = this.ED.enc.Utf8.parse(Math.random().toString(36).substring(8));
    const decrypted = this.ED.AES.decrypt(
      value,
      secretKey,
      {
        // keySize: 128 / 8,
        iv: ivrs,
        mode: this.ED.mode.CBC,
        padding: this.ED.pad.Pkcs7
      }
    );
    // console.log('Decrypted : ' + decrypted.toString(this.ED.enc.Utf8));
    return decrypted.toString(this.ED.enc.Utf8);
  }


  // encrypt(value: string, secretKey: string): string {
  //   return this.ED.AES.encrypt(JSON.stringify(value), secretKey.trim()).toString();
  // }
  // encryptString(value: string, secretKey: string): string {
  //   return this.ED.AES.encrypt(value, secretKey.trim()).toString();
  // }

  // decrypt(textToDecrypt: string, secretKey: string): any {
  //   const data = this.ED.AES.decrypt(textToDecrypt, secretKey.trim());
  //   return JSON.parse(data.toString(this.ED.enc.Utf8));
  // }
  // decryptString(textToDecrypt: string, secretKey: string): any {
  //   return this.ED.AES.decrypt(textToDecrypt, secretKey.trim());
  // }



}
