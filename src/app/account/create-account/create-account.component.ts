import { AccountService } from './../shared/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

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

  users : AccountService;

  error$ = new Subject<boolean>();

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.accountService.getAll().subscribe(account => { 
      this.account = this.account;
      console.log(account);
      console.log('',this.account);
    });
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      try{
        const cadastred = await this.http.get<any>(`${environment.api}/users/`, result).toPromise();
        if (cadastred) {
          console.log(result.email);
          console.log(result.password);
          window.localStorage.setItem('email', result.email);
          window.localStorage.setItem('password', result.password);
          console.log('Cadastrado');

          //console.log(account);
          console.log(this.account);
          this.router.navigate(['page/clientArea']);
        } else {
          console.log('Erro de cadastro');
        }
        return cadastred;
        //if(cadastred)
        {
         
        }
        this.router.navigate(['']);
      }
      catch{

      }
      console.log();
    } catch (error) {
      this.error$.next(true);
      console.error(error);
    }
    
  }
}
