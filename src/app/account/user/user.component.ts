import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class User implements OnInit {

  login = {
    email: '',
    password:''
  };

  constructor(
    private accoutService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {

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
