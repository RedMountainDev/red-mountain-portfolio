import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
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

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.textAreaMax = 500;
    this.textAreaCharRemain = this.textAreaMax;

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    this.submitting = true;
    (<any>Object).values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });

    if (ngForm.valid) {
      ngForm.form.disable();
      this.textAreaCharRemain = this.textAreaMax;
      this.http.post('http://inspire-me-api.redmountaindev.co.za/v1/mailer', this.formData, this.headers)
        .pipe(finalize(() => {
          this.submitting = false;
          ngForm.form.enable();
        }))
        .subscribe(next => {
          this.toastr.success('I\'ll get back to you as soon as I can.', 'E-Mail sent');
          ngForm.resetForm();

        }, error => {
          this.toastr.error('There was an error sending the e-mail, please try again.', 'Error');
        });
    }
  }

  checkLength(e) {
    this.textAreaCharRemain = this.textAreaMax - e.target.textLength;
  }

}
