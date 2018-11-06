// ROUTES

import {Route, Routes} from '@angular/router';
import {AboutComponent} from './components/main-components/about/about.component';
import {MainContentComponent} from './components/main-components/main-content/main-content.component';
import {ExperienceComponent} from './components/main-components/experience/experience.component';
import {ContactComponent} from './components/main-components/contact/contact.component';
import {ProjectsComponent} from './components/main-components/projects/projects.component';

const aboutRoute: Route = {component: AboutComponent, path: ''};
const experienceRoute: Route = {component: ExperienceComponent, path: 'experience'};
const projectsRoute: Route = {component: ProjectsComponent, path: 'projects'};
const contactRoute: Route = {component: ContactComponent, path: 'contact'};


const mainRoutes: Routes = [aboutRoute, experienceRoute, projectsRoute, contactRoute, {path: '**', redirectTo: '/', pathMatch: 'full'}];

export const routes: Routes = [
  {component: MainContentComponent, children: mainRoutes, path: ''}
];
