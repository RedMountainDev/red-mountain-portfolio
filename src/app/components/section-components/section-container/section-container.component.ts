import {Component, Input, OnInit} from '@angular/core';
import {ESectionContentType} from '../../../../enums/ESectionContentType';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})
export class SectionContainerComponent implements OnInit {

  @Input()
  sectionTitle: string;

  @Input()
  sectionClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
