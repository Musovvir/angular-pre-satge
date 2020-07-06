import { Component, OnInit } from '@angular/core';
import {NewStoreService} from '../new-store.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  prefix: any;
  pathToAssets = 'http://cdn.ramman.net/flexy-view/viskhan/sbank/1.01/assets/';

  constructor(private service: NewStoreService) { }

  forSectionFirst() {
    return this.service.forSectionFirst;
  }

  forSectionSecond() {
    return this.service.forSectionSecond;
  }

  forSectionThird() {
    return this.service.forSectionThird;
  }

  forCollaboration() {
    return this.service.forCollaboration;
  }

  forReview() {
    return this.service.forReview;
  }

  forStaffing() {
    return this.service.forStaffing;
  }

  forTimeline() {
    return this.service.forTimeline;
  }

  forSummary() {
    return this.service.forSummary;
  }

  forSectionFourth() {
    return this.service.forSectionFourth;
  }

  clicker = (item) => {
    console.log(item);
  }

  ngOnInit(): void {
  }

}

