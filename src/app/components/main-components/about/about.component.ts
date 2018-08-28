import {Component, OnInit} from '@angular/core';
import {ESectionContentType} from '../../../../enums/ESectionContentType';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sectionType: ESectionContentType;

  constructor() {
  }

  ngOnInit() {
  }

}
