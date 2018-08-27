// ROUTES

import {Route, Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {MainContentComponent} from './components/main-content/main-content.component';

const mainRoute: Route = {component: AboutComponent, path: ''};

export const routes: Routes = [
  {component: MainContentComponent, children: [mainRoute], path: ''}
];
