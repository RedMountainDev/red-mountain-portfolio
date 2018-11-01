import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  textAreaMax: number;
  textAreaCharRemain: number;


  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {
    this.textAreaMax = 500;
    this.textAreaCharRemain = this.textAreaMax;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

  checkLength(e) {
    this.textAreaCharRemain = this.textAreaMax - e.target.textLength;
  }

}
