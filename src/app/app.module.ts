import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainContentComponent} from './components/main-components/main-content/main-content.component';
import {AboutComponent} from './components/main-components/about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {ExperienceComponent} from './components/main-components/experience/experience.component';
import {ProjectsComponent} from './components/main-components/projects/projects.component';
import {ContactComponent} from './components/main-components/contact/contact.component';
import {SectionContainerComponent} from './components/main-components/section-container/section-container.component';
import {SectionAboutComponent} from './components/main-components/about/section-about/section-about.component';
import {SectionExperienceComponent} from './components/main-components/experience/section-experience/section-experience.component';
import {SectionProjectsComponent} from './components/main-components/projects/section-projects/section-projects.component';
import {SectionContactComponent} from './components/main-components/contact/section-contact/section-contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';


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
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    MatTooltipModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
