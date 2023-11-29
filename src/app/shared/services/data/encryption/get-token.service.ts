import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';


@Injectable({
  providedIn: 'root'
})
export class GetTokenService {
  token = '';
  constructor(
    public cs: CommonService
  ) { }
  // getToken
  /**
     * getToken function
     * @param from The starting position of the desired substring. The index of the first character in the string is zero.
     */
  g(): string {
    const token = this.cs.g('token');
    const username = this.cs.g('userName');
    const len = (username.length > 12 && username.length < 7) ? username.length : 12;
    // console.log(token.substr(-Math.abs(len)));
    return token.substr(-Math.abs(len));
  }
}
