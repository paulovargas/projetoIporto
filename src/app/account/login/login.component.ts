import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

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

  account = false;

  constructor(
    private accoutService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    if(window.localStorage.getItem('email') && window.localStorage.getItem('password'))
      this.account = true;
    console.log('this.account = ', this.account);
  }

  async onSubmit(){
    try{
      const result = await this.accoutService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['page/clientArea']);
    }catch(error){
      console.log(error);
    }
  }
  

}
