import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {e} from '../../../../../../node_modules/@angular/core/src/render3';

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

  styleSetter(el) {
    return el.invalid && (el.dirty || el.touched) ? 'contact-form__input--invalid' : (!el.dirty || !el.touched) ? '' : 'contact-form__input--valid';
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

  checkLength(e) {
    this.textAreaCharRemain = this.textAreaMax - e.target.textLength;
  }

}
