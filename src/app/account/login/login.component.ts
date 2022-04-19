import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Users } from '../shared/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password:''
  };

  users: Users[];

  userCadastred = false;
  
  erroLogin = false;

  constructor(
    private accoutService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    if(window.localStorage.getItem('userCadastred'))
      this.userCadastred = true;
  }

  async onSubmit(){
    try{
      const result = await this.accoutService.login(this.login);
      this.erroLogin = !result;
      this.router.navigate(['page/clientArea']);
    }catch(error){
      console.log(error);
    }
  }
}
