import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  textAreaMax: number;
  textAreaCharRemain: number;

  submitting = false;
  headers: any;

  emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  form = new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.minLength(2)]),
    'email': new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.emailRegex)
    ]),
    'cell': new FormControl('', [
      Validators.minLength(10)
    ]),
    'message': new FormControl('', [
      Validators.required,
      Validators.maxLength(this.textAreaMax)
    ])
  });

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get cell() {
    return this.form.get('cell');
  }

  get message() {
    return this.form.get('message');
  }

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.textAreaMax = 500;
    this.textAreaCharRemain = this.textAreaMax;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  ngOnInit() {
  }

  onSubmit() {


    (<any>Object).values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });

    if (this.form.valid) {
      this.submitting = true;
      this.form.disable();
      this.textAreaCharRemain = this.textAreaMax;
      this.http.post('http://inspire-me-api.redmountaindev.co.za/v1/mailer', this.form.value, this.headers)
        .pipe(finalize(() => {
          this.submitting = false;
          this.form.enable();
        }))
        .subscribe(next => {
          this.toastr.success('I\'ll get back to you as soon as I can.', 'E-Mail sent');
          this.form.reset();

        }, error => {
          this.toastr.error('There was an error sending the e-mail, please try again.', 'Error');
        });
    }
  }

  checkLength(e) {
    this.textAreaCharRemain = this.textAreaMax - e.target.textLength;
  }

}
