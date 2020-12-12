import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  scrollTo(selector: string): void {
    this.document.querySelector(selector).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
