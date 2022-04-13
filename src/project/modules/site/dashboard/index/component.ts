import { environment } from '../../../../../environments/environment';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
// [[Providers]]

// ]
// [[Interfaces do Componente]]

// ]
@Component({
  selector: 'app',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class DashboardIndexComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {

  }

  ngOnInit() {
    // -------------------------------------------------------------------------
    this.titleService.setTitle("iPORTO | A solução de E-mails mais completa para seu negócio");
    this.metaService.addTags([
       {name: 'description', content: 'Aplicativo de E-mail Marketing e Transacional para pequenas, médias e grandes empresas. Apodere-se das possibilidades do Marketing Digital.'},
       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'robots', content: 'INDEX, FOLLOW'},
       {name: 'author', content: 'iPORTO'},
       {name: 'keywords', content: 'e-mail marketing, smtp, smtp marketing, smtp server, validador de e-mail, mail validation, email server smtp, plataforma de envio de email, serviços de smtp, professional smtp, smtp profissional, send email service, api smtp'},
       {httpEquiv: 'Content-Type', content: 'text/html'},
       {property: 'og:title', content: "iPORTO | A solução de E-mails mais completa para seu negócio"},
       {property: 'og:url', content: "https://iporto.com.br/"},
       {property: 'og:image', content: "https://iporto.com.br/assets/images/app/logo-orange.png"},
       {property: 'og:type', content: "company"},
       {property: 'og:description', content: "Aplicativo de E-mail Marketing e Transacional para pequenas, médias e grandes empresas. Apodere-se das possibilidades do Marketing Digital."},
       {charset: 'UTF-8'}
    ]);
    // -------------------------------------------------------------------------
  }

}
