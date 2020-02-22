import { environment } from '../../../../../environments/environment';
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
export class CompanyIndexComponent implements OnInit {

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
