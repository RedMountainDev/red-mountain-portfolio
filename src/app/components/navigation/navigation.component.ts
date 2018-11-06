import {Component, OnInit} from '@angular/core';
import {faGithubSquare, faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  routerOptions = {exact: true};
  githubIcon = faGithubSquare;
  facebookIcon = faFacebookSquare;
  linkedInIcon = faLinkedin;

  constructor() {
  }

  ngOnInit() {
  }

  navigate(url) {
    window.location.href = url;
  }
}
