import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss']
})

// Container for all sections
export class SectionContainerComponent implements OnInit {
  @Input()
  sectionTitle: string;

  @Input()
  sectionClass: string;

  constructor() {}

  ngOnInit() {}
}
