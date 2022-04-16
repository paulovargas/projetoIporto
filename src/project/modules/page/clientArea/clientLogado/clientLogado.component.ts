import { Component, OnInit } from '@angular/core';
import { ClientAreaIndexComponent } from '../index/component';

@Component({
  selector: 'page-clientLogado',
  templateUrl: './clientLogado.component.html',
  styleUrls: ['./clientLogado.component.css']
})
export class ClientLogado implements OnInit {
  account = {
    name: '',
    phone: '',
    email: '',
    password: ''
  };

  constructor(
    private accountService: ClientAreaIndexComponent
  ) { }

  ngOnInit() {
  }
}
