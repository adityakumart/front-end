import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  log(val: string): void {
    console.log(val);
  }
  logHead(key: string, val: string): void {
    console.log(key + ': ' + val);
  }
  // setLocal
  s(key: string, val: string): void {
    localStorage.setItem(key, val);
  }
  // getLocal
  g(key: string): string {
    return localStorage.getItem(key) || '';
  }
  copyMessage(val: string): void {
    if (!navigator.clipboard) {
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    } else {
      navigator.clipboard.writeText(val);
    }
  }
  dataToArray = (data: string) => {
    let numArr = [0];
    let len = ((data.length / 100) > 8) ? (data.length / 100) : 8;
    len = (len > 100) ? 100 : len;
    while (numArr.length < len) {
      const r = Math.floor(Math.random() * data.length) + 1;
      if (numArr.indexOf(r) === -1) {
        numArr.push(r);
      }
    }
    numArr = numArr.sort((a, b) => a - b);
    numArr.push(data.length);
    const tempArray = [];
    for (let as = 0; as < numArr.length - 1; as++) {
      tempArray.push(data.substring(numArr[as], numArr[as + 1]));
    }
    return tempArray;
  }
}
