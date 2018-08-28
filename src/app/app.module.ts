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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainContentComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
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
