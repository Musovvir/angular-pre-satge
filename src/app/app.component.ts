import { Component } from '@angular/core';
import {NewStoreService} from './new-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stage';

  prefix: any;
  pathToAssets = 'http://cdn.ramman.net/flexy-view/viskhan/sbank/1.01/assets/';

  constructor(private service: NewStoreService) { }
  forHeader() {
    return this.service.forHeader;
  }

  forFooter() {
    return this.service.forFooter;
  }

  clicker = (item) => {
    console.log(item);
  }

}
