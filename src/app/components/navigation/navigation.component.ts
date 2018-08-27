import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  routerOptions = {exact: true};

  constructor() {
  }

  ngOnInit() {
  }

}
