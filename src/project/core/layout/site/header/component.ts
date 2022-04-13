import { environment } from '../../../../../environments/environment';
import { Component } from '@angular/core';
// [[Providers]]
// ]
// [[Interfaces do Componente]]
// ]
@Component({
  selector: 'app-site-header',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class SitelHeaderComponent {

  // ---------------------------------------------------------------------------
  is_collapsed: any = true;
  // ---------------------------------------------------------------------------

  constructor() {

  }

}
