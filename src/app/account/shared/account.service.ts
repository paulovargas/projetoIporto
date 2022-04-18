import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Account } from './account';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private accountService: AccountService

    ) { }

  getAll() {
    return this.http.get<Account[]>(`${environment.api}/users`);
  }
  getByEmail(email: string) {
    return this.http.get<Account>(`${environment.api}/users/${email}`);
  }

  async login(user: any) {
    const consultApi = await this.http.get<any>(`${environment.api}/users/`).toPromise();
    
    function returnUser(value){
      if(value.email == user.email && value.password == user.password)
      {
        return value;
      }
     
    }
    const consultUser = consultApi.filter(returnUser);
    consultUser.forEach(e => { e
    });
   if(consultUser == ''){
     
   }else{
    window.localStorage.setItem('token', 'meu-token');
    return true;
   }       
    return false;
  }

  logof() {
    localStorage.clear();
    this.router.navigate(['page/clientArea']);
    location.reload();
}

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
}
