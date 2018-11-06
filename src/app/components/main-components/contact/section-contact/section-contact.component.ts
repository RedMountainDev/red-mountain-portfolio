import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {


  textAreaMax: number;
  textAreaCharRemain: number;

  submitted = false;

  list: any;
  headers: any;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {
    this.textAreaMax = 500;
    this.textAreaCharRemain = this.textAreaMax;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    (<any>Object).values(ngForm.controls).forEach(control => {
      control.markAsTouched();
    });

    if (ngForm.valid) {
      this.textAreaCharRemain = this.textAreaMax;
      this.http.post('http://localhost/mailer.php', this.formData, this.headers).subscribe(next => {
        console.log(next);
      });
      ngForm.resetForm();
    }

  }

  checkLength(e) {
    this.textAreaCharRemain = this.textAreaMax - e.target.textLength;
  }

}
