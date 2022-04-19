import { AccountService } from './../shared/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Users } from '../shared/users';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };

  usersApi : Users [];

  errorCreate = false;

  userCadastred = false;

  accountError = this.account;  

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.accountService.getAll().subscribe(account => { 
      this.account = this.account;
      this.usersApi = account;
    });
  }

  async onSubmit() {
    if(
         !this.account.name.length 
      || !this.account.phone.length
      || !this.account.email.length
      || !this.account.password.length
      ){
        this.errorCreate = true;
        return false;
    }

    const user = this.account;
      
    const consultApi = this.usersApi;
      
      function returnUser(value){
        if(user.email == value.email  && user.password == value.password )
        {
          return value;
        }
      }
      const consultUser = consultApi.filter(returnUser);
      consultUser.forEach(e => { e
      });     
    
    if(consultUser.length > 0)
    {
      this.userCadastred = true;
      return false;
    }
    
    try {
      const result = await this.accountService.createAccount(this.account);
      try{
        const cadastred = await this.http.get<any>(`${environment.api}/users/`, result).toPromise();
        if (cadastred) {
          this.userCadastred = true;
          window.localStorage.setItem('userCadastred', 'true');
          this.router.navigate(['page/clientArea']);
        } else {
          console.log('Erro de cadastro');
        }
        return cadastred;        
      }
      catch{}
    } catch (error) {
      console.error(error);
    }    
  }
}
