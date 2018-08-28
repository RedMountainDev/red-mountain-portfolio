import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainContentComponent} from './components/main-components/main-content/main-content.component';
import {AboutComponent} from './components/main-components/about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ExperienceComponent} from './components/main-components/experience/experience.component';
import {ProjectsComponent} from './components/main-components/projects/projects.component';
import {ContactComponent} from './components/main-components/contact/contact.component';
import { SectionContainerComponent } from './components/section-components/section-container/section-container.component';
import { SectionAboutComponent } from './components/section-components/section-about/section-about.component';
import { SectionExperienceComponent } from './components/section-components/section-experience/section-experience.component';
import { SectionProjectsComponent } from './components/section-components/section-projects/section-projects.component';
import { SectionContactComponent } from './components/section-components/section-contact/section-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContentComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SectionContainerComponent,
    SectionAboutComponent,
    SectionExperienceComponent,
    SectionProjectsComponent,
    SectionContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
