import {Component, OnInit} from '@angular/core';
import {IExperienceCategory} from '../../../../../interfaces/IExperienceCategory';
import {ExperienceService} from '../../../../services/experience.service';

@Component({
  selector: 'app-section-experience',
  templateUrl: './section-experience.component.html',
  styleUrls: ['./section-experience.component.scss']
})
export class SectionExperienceComponent implements OnInit {
  experience: IExperienceCategory[];

  constructor(private xp: ExperienceService) {
    this.experience = xp.getExperience();
  }

  ngOnInit() {
  }

  Navigate(url: string) {
    if (!url) {
      return;
    }
    window.open(url, '_blank');
  }
}
