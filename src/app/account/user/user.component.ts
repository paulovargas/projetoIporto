import { AccountService } from './../shared/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {
  account = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };
  
  users: Users[];

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient
  ) { }


  getByEmail(email: string) {
    return this.http.get<User>(`${environment.api}/users/${email}`);
  }

  async ngOnInit() {
    this.users = this.accountService.getAll.prototype;
    const cadastred = await this.http.get<any>(`${environment.api}/users/`).toPromise();
      if (cadastred) {
        this.users = cadastred;
        } 
        else {
        console.log('Erro de cadastro');
    }
  }
}
