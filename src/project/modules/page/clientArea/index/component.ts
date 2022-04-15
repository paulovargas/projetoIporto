/*import { environment } from '../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
// [[Providers]]

// ]
// [[Interfaces do Componente]]

// ]
@Component({
  selector: 'app',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ClientAreaIndexComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {

  }

  ngOnInit() {
    // -------------------------------------------------------------------------
    this.titleService.setTitle("iPORTO / Empresa | A solução de E-mails mais completa para seu negócio");
    this.metaService.addTags([
       {name: 'description', content: 'iPORTO. Empresa que oferece serviços de E-mail Marketing e SMTP transacional. Delivery de E-mail. Aplicativo de E-mail Marketing e Transacional para pequenas, médias e grandes empresas. Apodere-se das possibilidades do Marketing Digital.'},
       {name: 'keywords', content: 'e-mail marketing, smtp, smtp marketing, smtp server, validador de e-mail, mail validation, email server smtp, plataforma de envio de email, serviços de smtp, professional smtp, smtp profissional, send email service, api smtp'}
    ]);
    // -------------------------------------------------------------------------
  }

}

*/

// -------------------------------------------------------------------------------------------


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from './RequestLogin';
import { Title, Meta } from '@angular/platform-browser';
import { AlertService } from './alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class ClientAreaIndexComponent implements OnInit {
  public requestLogin: RequestLogin;

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {

    // -------------------------------------------------------------------------
    this.requestLogin = new RequestLogin();
    this.titleService.setTitle("iPORTO / Empresa | A solução de E-mails mais completa para seu negócio");
    this.metaService.addTags([
       {name: 'description', content: 'iPORTO. Empresa que oferece serviços de E-mail Marketing e SMTP transacional. Delivery de E-mail. Aplicativo de E-mail Marketing e Transacional para pequenas, médias e grandes empresas. Apodere-se das possibilidades do Marketing Digital.'},
       {name: 'keywords', content: 'e-mail marketing, smtp, smtp marketing, smtp server, validador de e-mail, mail validation, email server smtp, plataforma de envio de email, serviços de smtp, professional smtp, smtp profissional, send email service, api smtp'}
    ]);
    // -------------------------------------------------------------------------
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
      },
      (httpError) => {
        this.alertService.error(httpError.error.message);
      }
    );
  }
}